import { BiMenu } from "react-icons/bi"
import { HiX } from "react-icons/hi"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import OutsideClickHandler from "react-outside-click-handler"
import Link from "next/link"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isProductActive, setIsProductActive] = useState(false)
	const [isCompanyActive, setIsCompanyActive] = useState(false)
	const [isLanguageActive, setIsLanguageActive] = useState(false)
	const [isLanguageDropdownActive, setIsLanguageDropdownActive] =
		useState(false)
	return (
		<>
			<div className="bg-white border border-bottom-secondary w-full h-20 hidden md:block">
				<div className="container mx-auto flex items-center justify-between h-full">
					<div className="flex items-center space-x-20">
						<div>
							<Link href="/">
							<img src="/logo.svg" />
							</Link>
						</div>
						<ul className="flex items-center space-x-8">
							<li className="relative">
								<div
									className={`flex items-center space-x-3 py-[10px] px-[18px] rounded cursor-pointer hover:bg-secondary group ${
										isProductActive && "pointer-events-none bg-secondary"
									}`}
									onClick={() => setIsProductActive(true)}
								>
									<span
										className={`text-small ${
											isProductActive ? "text-primary" : "text-dark"
										}`}
									>
										Products
									</span>{" "}
									{isProductActive ? (
										<img
											src="/icons/chevron-up-blue.svg"
											alt=""
											className="h-[6px] w-[10.9px] mt-1 "
										/>
									) : (
										<img
											src="/icons/chevron-down.svg"
											alt=""
											className="h-[6px] w-[10.9px] mt-1 "
										/>
									)}
								</div>
								{isProductActive && (
									<OutsideClickHandler
										onOutsideClick={() => {
											setIsProductActive(false)
										}}
									>
										{/* This component is in this same page below */}
										<div className=" bg-white transition-all delay-200 z-50 absolute -left-2 top-[50px] shadow-custom border border-secondary rounded-[10px] px-8 pt-4 pb-12">
											<ProductHoverView />
										</div>
									</OutsideClickHandler>
								)}
							</li>
							<li className="relative ">
								<div
									className={`flex items-center space-x-3 py-[10px] px-[18px] rounded cursor-pointer hover:bg-secondary ${
										isCompanyActive && "pointer-events-none bg-secondary"
									}`}
									onClick={() => setIsCompanyActive(true)}
								>
									<span
										className={`text-small ${
											isCompanyActive ? "text-primary" : "text-dark"
										} `}
									>
										Company
									</span>{" "}
									{isCompanyActive ? (
										<img
											src="/icons/chevron-up-blue.svg"
											alt=""
											className="h-[6px] w-[10.9px] mt-1 "
										/>
									) : (
										<img
											src="/icons/chevron-down.svg"
											alt=""
											className="h-[6px] w-[10.9px] mt-1"
										/>
									)}
								</div>
								{isCompanyActive && (
									<OutsideClickHandler
										onOutsideClick={() => {
											setIsCompanyActive(false)
										}}
									>
										{/* This component is in this same page below */}
										<div className=" transition-all delay-200 bg-white  z-50 absolute -left-2 top-[50px] shadow-custom border border-secondary rounded-[10px] px-8 pt-4 pb-8">
											<CompanyHoverView />
										</div>
									</OutsideClickHandler>
								)}
							</li>
							<li className="flex items-center space-x-3 py-[10px] px-[18px] rounded cursor-pointer group hover:bg-secondary">
								<span className="text-small group-hover:text-primary  text-dark">
									Docs
								</span>{" "}
							</li>
						</ul>
					</div>
					<div className="flex items-center space-x-[13px]">
						<button className="secondary-btn">Contact</button>
						<button className="primary-btn">Sign In</button>
						<div className="relative ">
							<div
								className={`flex items-center space-x-3 cursor-pointer group ${
									isLanguageActive && "pointer-events-none"
								}`}
								onClick={() => setIsLanguageActive(true)}
							>
								<span className="text-small text-dark ">English</span>{" "}
								<img
									src="/icons/chevron-down.svg"
									alt=""
									className="h-[6px] w-[10.9px]  mt-1"
								/>
							</div>
							<OutsideClickHandler
								onOutsideClick={() => {
									setIsLanguageActive(false)
								}}
							>
								{isLanguageActive && (
									<div className=" transition-all delay-200 bg-white  z-50 absolute right-0 w-[266px] top-[40px] shadow-custom border border-secondary rounded-[10px] px-6 pb-6 pt-2">
										<p className="mb-4">Language</p>
										{/* This component is in this same page below */}
										<LanguageSelect
											onClick={() =>
												setIsLanguageDropdownActive(!isLanguageDropdownActive)
											}
										/>
										<OutsideClickHandler
											onOutsideClick={() => {
												setIsLanguageDropdownActive(false)
											}}
										>
											{isLanguageDropdownActive && (
												<div className="w-full overflow-y-scroll h-48 bg-red-500 no-scrollbar border-t border-[]#eaeaea]">
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
												</div>
											)}
										</OutsideClickHandler>
									</div>
								)}
							</OutsideClickHandler>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div className="bg-white w-full  md:hidden">
				<div className="container mx-auto h-full">
					<div className="z-50 border border-bottom-secondary px-4 flex items-center justify-between h-full h-16">
						<div className="w-24">
							<Link href="/"><img src="/logo.svg" /></Link>
						</div>
						<div>
							{isMenuOpen ? (
								<HiX
									className="text-2xl text-primary cursor-pointer"
									onClick={() => setIsMenuOpen(false)}
								/>
							) : (
								<BiMenu
									className="text-3xl text-primary cursor-pointer"
									onClick={() => setIsMenuOpen(true)}
								/>
							)}
						</div>
					</div>
					<AnimatePresence>
						{isMenuOpen && (
							<motion.div
								initial={{ y: -60, opacity: 0 }}
								animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
								exit={{ y: -50, opacity: 0, transition: { duration: 0.2 } }}
								className={`px-4 py-10 z-10 bg-white  `}
							>
								<div className="flex flex-col space-y-6">
									<button className="border-none max-h-[42px] bg-secondary py-[10px] px-[30px] text-small rounded text-dark cursor-pointer  w-full">
										Contact
									</button>
									<button className="border-none bg-primary py-[10px] px-[30px] text-small rounded text-secondary cursor-pointer  w-full">
										Sign In
									</button>
								</div>
								{/* Products */}
								<div className="mt-8">
									<div className="flex items-center space-x-4">
										{" "}
										<p>Products</p>{" "}
										<span className="bg-secondary w-full h-[2px]"></span>
									</div>
									<div className="flex flex-col space-y-[32px] mt-8">
										<NavMenu
											image="/icons/cloud.svg"
											title="Cloud"
											subTitle="Blockchain RPC API/WS & Dedicated Nodes"
											link="/cloud"
										/>
										<NavMenu
											image="/icons/nft.svg"
											title="NFT"
											subTitle="NFT-as-a-Service for Mints & Marketplaces"
											link="/nft"
										/>
										<NavMenu
											image="/icons/sequence.svg"
											title="Sequence"
											subTitle="Ledger Infrastructure for Developers"
											link="/sequence"
										/>
										<NavMenu
											image="/icons/wallet.svg"
											title="Wallet"
											subTitle="Self-custody Web3 Wallet"
											link="/wallet"
										/>
									</div>
								</div>

								{/* Company */}
								<div className="mt-8">
									<div className="flex items-center space-x-4">
										{" "}
										<p>Company</p>{" "}
										<span className="bg-secondary w-full h-[2px]"></span>
									</div>
									<div className="flex flex-col space-y-[25px] mt-8">
										<NavMenu
											image="/icons/about.svg"
											title="About Us"
											subTitle="Blockchain RPC API/WS & Dedicated Nodes"
											type="company"
											link="/about"
										/>
										<NavMenu
											image="/icons/nft.svg"
											title="Careers"
											subTitle="NFT-as-a-Service for Mints & Marketplaces"
											type="company"
											link="/join-us"
										/>
										<NavMenu
											image="/icons/chain_gives.svg"
											title="Chain Gives"
											subTitle="Ledger Infrastructure for Developers"
											type="company"
											link="/gives"
										/>
										<NavMenu
											image="/icons/press.svg"
											title="Press"
											subTitle="Self-custody Web3 Wallet"
											type="company"
											link="/press"
										/>
										<NavMenu
											image="/icons/contact.svg"
											title="Contact"
											subTitle="Self-custody Web3 Wallet"
											type="company"
											link="/contact"
										/>
										<NavMenu
											image="/icons/docs.svg"
											title="Docs"
											subTitle="Self-custody Web3 Wallet"
											type="company"
										/>
									</div>
								</div>

								{/* Language */}
								<div className="mt-8">
									<div className="flex items-center space-x-4">
										{" "}
										<p>Language</p>{" "}
										<span className="bg-secondary w-full h-[2px]"></span>
									</div>
									<div className="flex flex-col space-y-[32px] mt-8">
										{/* <div className="flex items-center justify-between bg-secondary pl-3 pr-6 py-2">
											<div className="flex items-center space-x-4">
												<img src="/icons/uk-flag.png" alt="" />
												<p>English</p>
											</div>
											<img
												src="/icons/chevron-down.svg"
												alt=""
												className="h-[6px] w-[10.9px]  mt-1"
											/>
										</div> */}
										<LanguageSelect
											onClick={() =>
												setIsLanguageDropdownActive(!isLanguageDropdownActive)
											}
										/>
										<OutsideClickHandler
											onOutsideClick={() => {
												setIsLanguageDropdownActive(false)
											}}
										>
											{isLanguageDropdownActive && (
												<div className="w-full overflow-y-scroll h-48 bg-red-500 no-scrollbar border-t border-[]#eaeaea]">
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
													<LanguageSelect />
												</div>
											)}
										</OutsideClickHandler>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	)
}

const NavMenu = ({
	image,
	title,
	subTitle,
	type,
	link
}: {
	image: string
	title: string
	subTitle: string
	type?: string
	link?: string
}) => {
	return (
		<Link href={link || '#'}>
		<div className="flex space-x-8">
			<div className="bg-secondary p-2 flex items-center justify-center rounded h-[60px] w-[60px]">
				<img src={image} alt="" />
			</div>
			<div className="">
				<p className="text-[18px] text-dark">{title}</p>
				{type === "company" ? (
					<span className="flex items-center mt-2 space-x-[22px] ">
						<span className="text-xs">Learn more</span>{" "}
						<img
							src="/icons/chevron-down.svg"
							alt=""
							className="h-[6px] w-[10.9px]  transform -rotate-[90deg]"
						/>
					</span>
				) : (
					<span className="text-xs text-dark">{subTitle}</span>
				)}
			</div>
		</div>
		</Link>
	)
}

const LanguageSelect = ({ ...props }) => {
	return (
		<div
			className="flex items-center justify-between bg-secondary pl-3 pr-6 py-2 cursor-pointer"
			{...props}
		>
			<div className="flex items-center space-x-4">
				<img src="/icons/uk-flag.png" alt="" />
				<p>English</p>
			</div>
			<img
				src="/icons/chevron-down.svg"
				alt=""
				className="h-[6px] w-[10.9px]  mt-1"
			/>
		</div>
	)
}

const ProductHoverView = () => {
	return (
		<div className="w-[650px] ">
			<div className="flex items-center space-x-[80px]">
				<div className="">
					<div className="flex items-center space-x-4">
						{" "}
						<p>Products</p>{" "}
						{/* <span className="bg-secondary w-full h-[2px]"></span> */}
					</div>
					<div className="flex flex-col space-y-[28px] mt-8">
						<NavMenu
							image="/icons/cloud.svg"
							title="Cloud"
							subTitle="Blockchain RPC API/WS & Dedicated Nodes"
							link="/cloud"
						/>
						<NavMenu
							image="/icons/nft.svg"
							title="NFT"
							subTitle="NFT-as-a-Service for Mints & Marketplaces"
							link="/nft"
						/>
						<NavMenu
							image="/icons/sequence.svg"
							title="Sequence"
							subTitle="Ledger Infrastructure for Developers"
							link="/sequence"
						/>
						<NavMenu
							image="/icons/wallet.svg"
							title="Wallet"
							subTitle="Self-custody Web3 Wallet"
							link="/wallet"
						/>
					</div>
				</div>
				<div className="h-[310px] w-[250px] relative">
					<img src="/images/menu-img.png" alt="" />
					<button className="primary-btn absolute left-1/2 -translate-x-1/2 bottom-0">
						Sign In
					</button>
				</div>
			</div>
			<div></div>
		</div>
	)
}

const CompanyHoverView = () => {
	return (
		<div className="w-[550px] ">
			<div className="flex items-center space-x-[80px]">
				<div className="">
					<div className="flex items-center space-x-4">
						{" "}
						<p>Company</p>{" "}
						{/* <span className="bg-secondary w-full h-[2px]"></span> */}
					</div>
					<div className="grid grid-cols-2 gap-x-40 gap-y-[30px] mt-8">
						<NavMenu
							image="/icons/about.svg"
							title="About Us"
							subTitle="Blockchain RPC API/WS & Dedicated Nodes"
							type="company"
							link="/about"
						/>
						<NavMenu
							image="/icons/nft.svg"
							title="Careers"
							subTitle="NFT-as-a-Service for Mints & Marketplaces"
							type="company"
							link="/join-us"
						/>
						<NavMenu
							image="/icons/chain_gives.svg"
							title="Chain Gives"
							subTitle="Ledger Infrastructure for Developers"
							type="company"
							link="/gives"
						/>
						<NavMenu
							image="/icons/press.svg"
							title="Press"
							subTitle="Self-custody Web3 Wallet"
							type="company"
							link="/press"
						/>
						<NavMenu
							image="/icons/contact.svg"
							title="Contact"
							subTitle="Self-custody Web3 Wallet"
							type="company"
							link="/contact"
						/>
						{/* <NavMenu
							image="/icons/docs.svg"
							title="Docs"
							subTitle="Self-custody Web3 Wallet"
							type="company"
						/> */}
					</div>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default Navbar
