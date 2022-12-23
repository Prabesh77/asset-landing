import { BiMenu } from "react-icons/bi"
import { HiX } from "react-icons/hi"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<>
			<div className="bg-white border border-bottom-secondary w-full h-20 hidden md:block">
				<div className="container mx-auto flex items-center justify-between h-full">
					<div className="flex items-center space-x-20">
						<div>
							<img src="/logo.svg" />
						</div>
						<ul className="flex items-center space-x-8">
							<li className="relative flex items-center space-x-3 py-[10px] px-[18px] rounded cursor-pointer group hover:bg-secondary">
								<span className="text-small group-hover:text-primary  text-dark">
									Products
								</span>{" "}
								<img
									src="/icons/chevron-down.svg"
									alt=""
									className="h-[6px] w-[10.9px] mt-1 group-hover:hidden"
								/>
								<img
									src="/icons/chevron-up-blue.svg"
									alt=""
									className="h-[6px] w-[10.9px] mt-1 hidden group-hover:block"
								/>
								<div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto bg-white transition-all delay-200 z-50 absolute -left-2 top-[50px] shadow-custom border border-secondary rounded-[10px] px-8 pt-4 pb-12">
									<ProductHoverView />
								</div>
							</li>
							<li className="relative flex items-center space-x-3 py-[10px] px-[18px] rounded cursor-pointer group hover:bg-secondary">
								<span className="text-small group-hover:text-primary  text-dark">
									Company
								</span>{" "}
								<img
									src="/icons/chevron-down.svg"
									alt=""
									className="h-[6px] w-[10.9px] mt-1 group-hover:hidden"
								/>
								<img
									src="/icons/chevron-up-blue.svg"
									alt=""
									className="h-[6px] w-[10.9px] mt-1 hidden group-hover:block"
								/>
								<div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all delay-200 bg-white  z-50 absolute -left-2 top-[50px] shadow-custom border border-secondary rounded-[10px] px-8 pt-4 pb-8">
									<CompanyHoverView />
								</div>
							</li>
							<li className="flex items-center space-x-3 py-[10px] px-[18px] rounded cursor-pointer group hover:bg-secondary">
								<span className="text-small group-hover:text-primary  text-dark">
									Docs
								</span>{" "}
							</li>
						</ul>
					</div>
					<div className="flex items-center space-x-[13px]">
						<button className="secondary-btn">
							Contact
						</button>
						<button className="primary-btn">
							Sign In
						</button>
						<div className="relative flex items-center space-x-3 cursor-pointer group">
							<span className="text-small text-dark ">English</span>{" "}
							<img
								src="/icons/chevron-down.svg"
								alt=""
								className="h-[6px] w-[10.9px]  mt-1"
							/>
							<div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all delay-200 bg-white  z-50 absolute right-0 w-[266px] top-[40px] shadow-custom border border-secondary rounded-[10px] px-6 pb-6 pt-2">
								<p className="mb-4">Language</p>
								<LanguageSelect />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div className="bg-white w-full  md:hidden">
				<div className="container mx-auto h-full">
					<div className="z-50 border border-bottom-secondary px-4 flex items-center justify-between h-full h-16">
						<div className="w-24">
							<img src="/logo.svg" />
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
								className={`px-4 py-10 -z-10 `}
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
										/>
										<NavMenu
											image="/icons/nft.svg"
											title="NFT"
											subTitle="NFT-as-a-Service for Mints & Marketplaces"
										/>
										<NavMenu
											image="/icons/sequence.svg"
											title="Sequence"
											subTitle="Ledger Infrastructure for Developers"
										/>
										<NavMenu
											image="/icons/wallet.svg"
											title="Wallet"
											subTitle="Self-custody Web3 Wallet"
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
										/>
										<NavMenu
											image="/icons/nft.svg"
											title="Careers"
											subTitle="NFT-as-a-Service for Mints & Marketplaces"
											type="company"
										/>
										<NavMenu
											image="/icons/chain_gives.svg"
											title="Chain Gives"
											subTitle="Ledger Infrastructure for Developers"
											type="company"
										/>
										<NavMenu
											image="/icons/press.svg"
											title="Press"
											subTitle="Self-custody Web3 Wallet"
											type="company"
										/>
										<NavMenu
											image="/icons/contact.svg"
											title="Contact"
											subTitle="Self-custody Web3 Wallet"
											type="company"
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
										<LanguageSelect />
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
	type
}: {
	image: string
	title: string
	subTitle: string
	type?: string
}) => {
	return (
		<div className="flex space-x-8">
			<div className="bg-secondary p-2 flex items-center justify-center rounded h-[60px] w-[60px]">
				<img src={image} alt="" />
			</div>
			<div className="">
				<p className="text-[18px] text-dark">{title}</p>
				{type==='company'? <span className="flex items-center mt-2 space-x-[22px] "><span className="text-xs">Learn more</span> <img
									src="/icons/chevron-down.svg"
									alt=""
									className="h-[6px] w-[10.9px]  transform -rotate-[90deg]"
								/></span>: <span className="text-xs text-dark">{subTitle}</span>}
				
			</div>
		</div>
	)
}

const LanguageSelect = () => {
	return(
		<div className="flex items-center justify-between bg-secondary pl-3 pr-6 py-2">
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
						/>
						<NavMenu
							image="/icons/nft.svg"
							title="NFT"
							subTitle="NFT-as-a-Service for Mints & Marketplaces"
						/>
						<NavMenu
							image="/icons/sequence.svg"
							title="Sequence"
							subTitle="Ledger Infrastructure for Developers"
						/>
						<NavMenu
							image="/icons/wallet.svg"
							title="Wallet"
							subTitle="Self-custody Web3 Wallet"
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
						/>
						<NavMenu
							image="/icons/nft.svg"
							title="Careers"
							subTitle="NFT-as-a-Service for Mints & Marketplaces"
							type="company"
						/>
						<NavMenu
							image="/icons/chain_gives.svg"
							title="Chain Gives"
							subTitle="Ledger Infrastructure for Developers"
							type="company"
						/>
						<NavMenu
							image="/icons/press.svg"
							title="Press"
							subTitle="Self-custody Web3 Wallet"
							type="company"
						/>
						<NavMenu
							image="/icons/contact.svg"
							title="Contact"
							subTitle="Self-custody Web3 Wallet"
							type="company"
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
