import React from "react"
import MainLayout from "../layout/MainLayout"

const Cloudpage = () => {
	return (
		<MainLayout>
			<div className="md:h-[675px]">
				<div className="flex flex-col-reverse md:flex-row container mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2 md:max-w-[500px] ">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px] font-bold">
							Chain Cloud
						</h1>
						<div className="bg-primary h-[5px] w-16 rounded-lg mt-4 mb-8"></div>
						<h2 className="text-[30px] leading-8">
							RPC API endpoints and completely automated nodes
						</h2>
						<p className="text-[16px] mt-6">
							Chain Cloud is a blockchain infrastructure protocol designed for
							developers to access blockchain networks on-demand.
						</p>
						<div className="flex space-x-2 mt-10">
							<button className="primary-btn">Sign Up</button>
							<button className="secondary-btn">Documentation</button>
						</div>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end w-full md:w-1/2">
						<img src="/images/home-cover.png" alt="" className="" />
					</div>
				</div>
			</div>
			{/* -------------------------------------------------------------------------------------------------------------------------- */}
			<div className="mt-16 md:mt-4">
				<div className="max-w-[1300px] mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row  md:space-x-[35px] px-4 md:px-0">
					<div className="w-full md:w-1/3 bg-primary p-[30px] md:p-[45px] rounded-xl flex flex-col justify-center">
						<h2 className="text-[30px] md:text-[40px] text-secondary leading-10 font-bold">
							Build Your App 100,000 Free Requests
						</h2>
						<p className="text-small md:text-[20px] mt-8 mb-16 leading-6 font-light text-secondary">
							Chain offers developers a free RPC API endpoint url to over 18
							blockchain networks to start building your application.
						</p>
						<button className="secondary-btn self-start">Sign Up</button>
					</div>
					<div className="w-full md:w-1/2 grid grid-cols-2 gap-2 md:gap-8 ">
						<div className="bg-white shadow-custom1 border border-[#eaeaea] p-[1rem] md:p-[25px] rounded-xl">
							<p className="text-[13px] md:text-[20px]">
								Fast connection to 20+ blockchains on mainnet and testnet
							</p>
							<div className="flex items-center space-x-8 my-4">
								<img
									src="/icons/bitcoin.svg"
									alt=""
									className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
								/>
								<img
									src="/icons/eth.svg"
									alt=""
									className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
								/>
							</div>
							<button className="primary-btn">See pricing</button>
						</div>
						<div className="bg-white shadow-custom1 border border-[#eaeaea] p-[1rem] md:p-[25px] rounded-xl">
							<p className="text-[13px] md:text-[20px]">
								API-driven dashboard with analytics
							</p>
							<div className="grid grid-cols-2 gap-2 mt-8">
								<button className="bg-secondary py-2 rounded-lg text-dark text-[10px] md:text-small">
									Balance
								</button>
								<button className="bg-secondary py-2 rounded-lg text-dark text-[10px] md:text-small">
									Method Calls
								</button>
								<button className="bg-secondary py-2 rounded-lg text-dark text-[10px] md:text-small">
									Request Limits
								</button>
								<button className="bg-secondary py-2 rounded-lg text-dark text-[10px] md:text-small">
									Endpoint
								</button>
							</div>
						</div>
						<div className="bg-white shadow-custom1 border border-[#eaeaea] p-[1rem] md:p-[25px] rounded-xl">
							<p className="text-[13px] md:text-[20px]">Options</p>
							<div className="mt-8 flex flex-col space-y-8">
								<div className="flex items-center space-x-4">
									<div className="bg-secondary rounded-full h-[46px] w-[46px] flex items-center justify-center">
										<img src="/icons/api.svg" alt="" />
									</div>

									<p className="text-[13px] md:text-[20px] text-dark">
										API & Web Sockets
									</p>
								</div>
								<div className="flex items-center space-x-4">
									<div className="bg-secondary rounded-full h-[46px] w-[46px] flex items-center justify-center">
										<img src="/icons/socket.svg" alt="" />
									</div>
									<p className="text-[13px] md:text-[20px] text-dark">
										Dedicated Nodes
									</p>
								</div>
							</div>
						</div>
						<div className="bg-white shadow-custom1 border border-[#eaeaea] p-[1rem] md:p-[25px] rounded-xl">
							<p className="text-[13px] md:text-[20px]">Contact Us</p>
							<p className="text-[10px] md:text-[16px] my-4">
								Ready to build with on Chain? Let us guide you through which
								blockchain software service is best suited for optimizing your
								business.
							</p>
							<button className="primary-btn">Get in touch</button>
						</div>
					</div>
				</div>
			</div>
			{/* --------------------------------------------------------------------------------------------------------------------------------------- */}
			<div>
				<div className="max-w-[1300px] mx-auto py-20 px-4 md:px-0">
					<h1 className="text-[30px] font-bold text-center">Features</h1>
					<div className="mt-16">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-20">
							<FeatureCard
								image="/icons/team.png"
								title="Free Your Team"
								subTitle="Focus on shipping and scaling your product instead 
                                of building and maintaining blockchain infrastructure."
							/>
							<FeatureCard
								image="/icons/multi-chain.png"
								title="Multi-Chain Seamlessly"
								subTitle="Over 20 blockchain networks available to 
                                developers to build without limits."
							/>
							<FeatureCard
								image="/icons/innovation.png"
								title="Innovation Unleashed"
								subTitle="Build your application with ease with our 
                                blockchain RPC APIs and dedicated nodes."
							/>
							<FeatureCard
								image="/icons/premium.png"
								title="Premium Access"
								subTitle="Chain offers a premium package to access more 
                                RPC API features with no rate limits, web sockets, 
                                or  even dedicated nodes."
							/>
							<FeatureCard
								image="/icons/scale.png"
								title="Scale Effortlessly"
								subTitle="Designed for enterprises, Chain Cloud scales 
                                as your business does."
							/>
							<FeatureCard
								image="/icons/business.png"
								title="Know Your Business"
								subTitle="Get unmatched insights into your business with 
                                fine-grain tracking and powerful analytics with 
                                Archive Node capabilities."
							/>
						</div>
					</div>
				</div>
			</div>
			{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
			<div className="mt-8 py-16 border-t border-secondary">
				<div className="max-w-[1300px] mx-auto flex flex-col space-y-[80px] md:space-y-[160px] px-4 md:px-0">
					<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 items-center md:space-x-24">
						<div className="w-full md:w-1/2 ">
							<h1 className="text-[30px] font-bold">Marketplace</h1>
							<p className="text-[16px] md:max-w-[400px]">
								Launch your selected blockchain node in minutes and run your
								project from a public or enterprise network.
							</p>
						</div>
						<div className="w-full md:w-1/2">
							<img src="/images/marketplace.png" alt="" />
						</div>
					</div>

					<div className="flex flex-col-reverse md:flex-row space-y-8 md:space-y-0 items-center md:space-x-24">
						<div className="w-full md:w-1/2 mt-8 md:mt-0">
							<img src="/images/dashboard.png" alt="" />
						</div>
						<div className="w-full md:w-1/2 ">
							<h1 className="text-[30px] font-bold">Dashboard</h1>
							<p className="text-[16px] md:max-w-[400px]">
								Control your enterprise-level blockchain without technical
								knowledge. Become a validator, stake, earn rewards, and more
								directly from our Chain Cloud Dashboard.
							</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 items-center md:space-x-24">
						<div className="w-full md:w-1/2 ">
							<h1 className="text-[30px] font-bold">Mobile</h1>
							<p className="text-[16px] md:max-w-[400px]">
								Designed for convenience and the mobile Web3 economy. Control
								your nodes on the go with our mobile-friendly tools.
							</p>
						</div>
						<div className="w-full md:w-1/2  max-w-[250px]">
							<img src="/images/phone.png" alt="" className="h-full w-full" />
						</div>
					</div>
				</div>
			</div>
			{/* ------------------------------------------------------------------------------------------------------------------------- */}
			<div className="bg-dark py-[50px] md:py-[80px]">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-[30px]  md:text-[45px] text-white text-center">
						Blockchains Made Simple
					</h1>
					<h2 className="text-[16px]  md:text-[30px] text-secondary text-center">
						We support over 20 blockchain networks
					</h2>
					<div className="my-8 ">
						<img
							src="/images/blockchain-group.png"
							alt=""
							className="h-full w-full"
						/>
					</div>
					<button className="primary-btn">Sign in</button>
				</div>
			</div>
			{/* ---------------------------------------------------------------------------------------------------------------------------- */}
			<div className="py-16">
				<h1 className="text-[30px] md:text-[45px] text-center">Connect with Chain</h1>
				<div className="max-w-[1300px] mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16 mt-16 px-4 md:px-0">
					<div className="w-full md:w-1/2 border border-[#eaeaea] flex flex-col p-8   items-center justify-center space-y-8 text-center">
						<h1 className="text-[30px] md:text-[45px]">Contact Us</h1>
						<p className="text-[16px] md:text-[16px]">
							Ready to build with us? Let us guide you through which blockchain
							software service is best suited for optimizing your business.
						</p>
						<button className="primary-btn">Get in touch</button>
					</div>
					<div className="w-full md:w-1/2 border border-[#eaeaea] flex flex-col text-center p-8 items-center justify-center space-y-8">
						<h1 className="text-[30px] md:text-[45px]">Latest news & updates</h1>
						<p className="text-[16px] md:text-[16px]">
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
		</MainLayout>
	)
}

const FeatureCard = ({
	image,
	title,
	subTitle,
}: {
	image: string
	title: string
	subTitle: string
}) => {
	return (
		<div className="flex space-x-8 items-center">
			<div className="bg-secondary p-2 flex items-center justify-center rounded h-[65px] w-[65px] min-h-[65px] min-w-[65px] md:h-[85px] md:w-[85px] md:min-h-[85px] md:min-w-[85px]">
				<img src={image} alt="" className="" />
			</div>
			<div className="">
				<p className="text-[22px] md:text-[30px] text-dark font-bold">
					{title}
				</p>

				<span className="text-[14px] md:text-[16px] text-dark">{subTitle}</span>
			</div>
		</div>
	)
}

export default Cloudpage
