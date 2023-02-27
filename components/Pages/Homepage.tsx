import Link from "next/link"
import ChainBanner from "../common/ChainBanner"
import MainLayout from "../layout/MainLayout"

const Homepage = () => {
	const newFeatures = [{image: '/images/img-2.png', tag: 'Press', title: 'Chain Announces Multi-Year Partnership with Kraft Sports + Entertainment', date: 'Thu Sep 22 2022', link: '#'}, {image: '/images/img-3.png', tag: 'Product', title: "Coinbase Launches 'Learn-to-Earn' Campaign with Chain (XCN)", date: 'Thu Sep 22 2022', link: '#'}, {image: '/images/img-4.png', tag: 'Research', title: 'Chain Research – The Significance of ENS Domain Names and Their Use Cases', date: 'Thu Sep 22 2022', link: '#'}]
	return (
		<MainLayout>
			<div className="md:h-[625px]">
				<div className="flex flex-col-reverse md:flex-row container mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px]">
							The Bridge Between Your Business and Web3
						</h1>
						<p className="text-normal md:text-[19px] mt-4">
							Simplify Web3 by gaining access to our leading blockchain software
							solutions, and introduce your company to the next era of
							technology powered by Chain.
						</p>
						<div className="flex space-x-2 mt-12">
							<button className="primary-btn">Sign Up</button>
							<button className="secondary-btn">Documentation</button>
						</div>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end">
						<img
							src="/images/home-cover.png"
							alt=""
							className="h-[80%] w-[80%]"
						/>
					</div>
				</div>
			</div>
			{/* -------------------------------------------------------------------------------------------------------------------------- */}
			<div className="">
				<div className="max-w-[1300px] mx-auto px-[24px] md:px-0">
					<h1 className="text-[30px] md:text-[45px] text-center my-32">
						Build on Chain
					</h1>
					<div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center md:space-x-[100px]">
						<div className="h-full w-full md:w-1/2">
							<img src="/images/nodes-on-demand.png" alt="" className="" />
						</div>
						<div className="max-w-[400px]">
							<div className="flex items-center space-x-4 mb-2">
								<img
									src="/icons/chain-icon.svg"
									alt=""
									className="w-[32px] md:w-[45px]"
								/>
								<span className="text-[30px] md:text-[45px]">Cloud</span>
							</div>
							<h2 className="text-[25px] md:text-[30px]">Nodes on-demand</h2>
							<p className="mt-2 text-[13px] md:text-[16px]">
								Access over 18 blockchain networks on demand for free via our
								Node API and access scalable paid upgrades for dedicated nodes.
							</p>
							<button className="primary-btn mt-16">Learn more</button>
						</div>
					</div>
					<div className="flex flex-col space-y-4 md:space-y-0 md:flex-row  items-center md:space-x-[100px] mt-[100px] md:mt-[170px]">
						<div className="h-full w-full md:w-1/2">
							<img src="/images/nft-img.png" alt="" className="" />
						</div>
						<div className="max-w-[400px]">
							<div className="flex items-center space-x-4 mb-2">
								<img
									src="/icons/chain-icon.svg"
									alt=""
									className="w-[32px] md:w-[45px]"
								/>
								<span className="text-[30px] md:text-[45px]">NFTS</span>
							</div>
							<h2 className="text-[25px] md:text-[30px]">
								Physical & Digital Collectibles
							</h2>
							<p className="mt-2 text-[13px] md:text-[16px]">
								Our NFT-as-a-Service product that enables brands and companies
								to quickly launch their own custom digital and/or physical
								collectibles.
							</p>
							<button className="primary-btn mt-16">Learn more</button>
						</div>
					</div>
					<div className="flex flex-col space-y-4 md:space-y-0 md:flex-row  items-center md:space-x-[100px] mt-[100px] md:mt-[170px]">
						<div className="h-full w-full md:w-1/2">
							<img src="/images/sequence.png" alt="" className="" />
						</div>
						<div className="max-w-[400px]">
							<div className="flex items-center space-x-4 mb-2">
								<img
									src="/icons/chain-icon.svg"
									alt=""
									className="w-[32px] md:w-[45px]"
								/>
								<span className="text-[30px] md:text-[45px]">Sequence</span>
							</div>
							<h2 className="text-[25px] md:text-[30px]">
								Ledger Infrastructure
							</h2>
							<p className="mt-2 text-[13px] md:text-[16px]">
								A permissioned blockchain-based ledger that enables developers
								to build scalable applications in the cloud with speed and ease.
							</p>
							<button className="primary-btn mt-16">Learn more</button>
						</div>
					</div>
				</div>
			</div>
			{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
			<div className="bg-dark py-24 mt-40">
				<div className="flex flex-col space-y-16 md:space-y-0 md:flex-row max-w-[1300px] mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-secondary">
						<div className="flex items-center space-x-4 mb-2">
							<img
								src="/icons/white-chain-icon.svg"
								alt=""
								className="w-[32px] md:w-[45px]"
							/>
							<span className="text-[30px] md:text-[45px]">Wallet</span>
						</div>
						<h2 className="text-[25px] md:text-[30px] text-secondary">
							Mobile Wallet App
						</h2>
						<p className="mt-2 max-w-[470px] text-[13px] md:text-[16px] text-secondary">
							Access your digital assets and NFTs with our powerful self-custody
							wallet application built on top of popular blockchain
							integrations. Chain Wallet is your leading gateway to Web3 in the
							palm of your hand.{" "}
							<span className="text-primary text-sm">
								<Link href="">Learn more</Link>
							</span>
						</p>
						<div className="flex space-x-[26px] mt-12">
							<button className="">
								<img src="/icons/app-store.png" />
							</button>
							<button className="">
								<img src="/icons/play-store.png" />
							</button>
						</div>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end">
						<img
							src="/images/chain-wallet.png"
							alt=""
							className=" md:w-[60%]"
						/>
					</div>
				</div>
			</div>
			{/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
			<div className="bg-secondary py-[110px]">
				<div className="max-w-[1300px] mx-auto px-[22px] md:px-0">
					<h1 className="text-[30px] md:text-[45px] text-center ">
						What's new at Chain
					</h1>
					<div className="grid grid-cols-1  w-full place-items-center md:grid-cols-3 gap-[35px] mt-[62px]">
						{newFeatures?.map((feature, i) => <Card
							key={i	}
							image={feature.image}
							tag={feature.tag}
							title={feature.title}
							date={feature.date}
							link={feature.link}
						/>)}
						
					</div>
					<div className="mt-[100px] text-dark">
						<h1 className="text-[30px] md:text-[45px] text-center ">
							Latest news & updates
						</h1>
						<p className="text-center max-w-[400px] mx-auto mt-[20px]">
							Sign up for the Chain Newsletter - a weekly roundup of new
							platform features and the latest from the industry.
						</p>
						<div className="flex space-x-4 w-full justify-center mt-[30px] ">
							<input
								type="text"
								placeholder="Enter your email address here"
								className="border border-[#eaeaea] bg-white md:w-[348px] px-4 outline-none"
							/>
							<button className="primary-btn">Sign up</button>
						</div>
					</div>
				</div>
			</div>
			{/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
			<ChainBanner />
		</MainLayout>
	)
}

interface CardProps {
	image: string
	tag: string
	title: string
	date: string
	link: string
}

const Card = ({ image, tag, title, date, link }: CardProps) => {
	return (
		<div className=" max-w-[350px] rounded">
			<div className="h-[207px] ">
				<img src={image} alt="" className="h-full w-full" />
			</div>
			<div className="bg-[#fff] px-[30px] py-[40px] rounded">
				{tag && (
					<div className="text-primary bg-secondary py-[10px] px-[30px] text-small rounded inline">
						{tag}
					</div>
				)}
				<h2 className="mt-[18px] text-[22px] leading-6">{title}</h2>
				<p className="mt-[20px] mb-[60px]">{date}</p>
				<Link href={link}>
					<button className="primary-btn">Read more</button>
				</Link>
			</div>
		</div>
	)
}

export default Homepage
