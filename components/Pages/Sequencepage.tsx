import Link from "next/link"
import MainLayout from "../layout/MainLayout"
import { BsDot } from 'react-icons/bs'

const Sequencepage = () => {
	return (
		<MainLayout>
			<div className="py-16">
				<div className="flex flex-col-reverse md:flex-row container mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2 md:max-w-[500px] ">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px] ">
							Sequence
						</h1>
						<h2 className="text-[30px] leading-8 mt-4">
							Ledger Infrastructure for Modern Applications
						</h2>
						<p className="text-[16px] mt-6">
							Sequence is a system of record for managing balances. It lets
							software teams focus on shipping and scaling their product instead
							of building and maintaining ledger infrastructure
						</p>
						<div className="flex space-x-2 mt-10">
							<button className="primary-btn">Sign Up</button>
							<button className="secondary-btn">Documentation</button>
						</div>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end w-full md:w-1/2 ">
						<img src="/images/sequence-cover-3.png" alt="" className="" />
					</div>
				</div>
			</div>
			{/* -------------------------------------------------------------------------------------------------------------------------- */}
			<div className="py-16">
				<div className="container px-4 md:px-0">
					<h1 className="text-[30px] text-center font-bold">
						What can you build on Sequence?
					</h1>
					<p className="text-[16px] text-center max-w-[600px] mx-auto my-8">
						Sequence is a system of record for managing balances. It lets
						software teams focus on shipping and scaling their product instead
						of building and maintaining ledger infrastructure.
					</p>
					<div className="grid items-center place-items-center md:grid-cols-4 gap-4 mt-20 ">
						<FeatureCard
							icon="/icons/wallet.png"
							title="A Mobile Wallet"
							subtitle="Store and Transact user balances."
							link=""
						/>
						<FeatureCard
							icon="/icons/ride-share.png"
							title="A Ride-Sharing Service"
							subtitle="Manage consumer and driver balances."
							link=""
						/>
						<FeatureCard
							icon="/icons/lending.png"
							title="A Lending Platform"
							subtitle="Issue and service loans."
							link=""
						/>
						<FeatureCard
							icon="/icons/crypto.png"
							title="A Crypto Exchange"
							subtitle="Securely custody client funds."
							link=""
						/>
					</div>
				</div>
			</div>
			{/* ----------------------------------------------------------- */}
			<div className="py-16">
				<div className="container">
					<h1 className="text-[30px] font-bold text-center">
						TECHNOLOGY TRUSTED BY MARKET LEADERS
					</h1>
					<div className="grid items-center grid-cols-2 gap-y-16 md:grid-cols-4 place-items-center mt-20 max-w-[800px] mx-auto">
						<img src="/logos/visa.png" alt="" className="cursor-pointer" />
						<img src="/logos/nasdaq.png" alt="" className="cursor-pointer" />
						<img src="/logos/citi.png" alt="" className="cursor-pointer" />
						<img src="/logos/mufg.png" alt="" className="cursor-pointer" />
					</div>
					<p className="text-[16px] text-center mt-28 mb-24">
						CLICK THE RESPECTIVE LOGO ABOVE TO SEE OUR PRIOR CASE STUDIES.
					</p>
				</div>
			</div>
			{/* --------------------------------------------------------------- */}
			<div className="bg-dark py-16">
				<div className="container px-4 md:px-0">
					<h1 className="text-center text-primary text-[25px] md:text-[30px] font-bold">
						A better model for managing balances
					</h1>
					<p className="text-center text-[16px] text-secondary max-w-[582px] mx-auto my-8">
						Sequence is a system of record for managing balances. It lets
						software teams focus on shipping and scaling their product instead
						of building and maintaining ledger infrastructure.
					</p>
					<div className="flex flex-col md:flex-row  space-y-8 md:space-y-0 md:space-x-8">
						<div className="bg-[#363b43] p-[30px] md:p-[60px] w-full md:w-1/2 rounded-[7px]">
							<h1 className="text-primary text-[25px] md:text-[30px] mb-6">
								Assets in accounts…
							</h1>
							<p className="text-secondary text-[16px]">
								Balances in Sequence are represented by token-like objects
								called assets. Assets are created, transferred, and retired. To
								ensure atomicity, a single transaction can include multiple
								actions involving any number of assets and accounts.
							</p>
						</div>
						<div className="bg-[#363b43] p-[30px] md:p-[60px] w-full md:w-1/2 rounded-[7px]">
							<h1 className="text-primary text-[25px] md:text-[30px] mb-6">
								…Controlled by keys in enclaves
							</h1>
							<p className="text-secondary text-[16px]">
								Cryptographic keys, which create and control assets and
								accounts, are managed in secure enclaves. Key access can be
								distributed across users, services, and organizations so
								multiple entities can transact on the same ledger with “least
								authority.”
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* -------------------------------------------------------------------------------------------------------------------------------- */}

			<div className="py-24 bg-secondary">
				<div className="container px-4 md:px-0">
					<h1 className="text-dark text-[25px] md:text-[30px] mb-16 font-bold text-center">
						Built for developers
					</h1>
					<div className="shadow-custom1 w-full p-[1rem] md:p-[45px] rounded-lg bg-white">
						<div className="grid md:grid-cols-5 grid-cols-2 items-center place-items-center gap-8">
							<div className=" w-[140px] md:w-[175px] border-2 border-[#eaeaea] hover:border-2 hover:border-primary cursor-pointer text-center py-3 rounded-[7px]">
								<p>Create Keys</p>
							</div>
							<div className=" w-[140px] md:w-[175px] border-2 border-[#eaeaea] hover:border-2 hover:border-primary cursor-pointer text-center py-3 rounded-[7px]">
								<p>Create Accounts</p>
							</div>
							<div className=" w-[140px] md:w-[175px] border-2 border-[#eaeaea] hover:border-2 hover:border-primary cursor-pointer text-center py-3 rounded-[7px]">
								<p>Create Assets</p>
							</div>
							<div className=" w-[140px] md:w-[175px] border-2 border-[#eaeaea] hover:border-2 hover:border-primary cursor-pointer text-center py-3 rounded-[7px]">
								<p>Transact</p>
							</div>
							<div className=" w-[140px] md:w-[175px] border-2 border-[#eaeaea] hover:border-2 hover:border-primary cursor-pointer text-center py-3 rounded-[7px]">
								<p>Query</p>
							</div>
						</div>
						<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 mt-8 md:space-x-[20%] items-center">
							<div className=" w-full md:w-1/3">
								<h1 className="text-[22px]">What Are Keys?</h1>
								<p className="text-[16px] mt-4">
									Transactions in the ledger are authenticated by cryptographic
									keys. To create a key, provide an alias (a unique identifier).
								</p>
							</div>
							<div className="bg-[#363b43] w-full md:w-1/2 rounded-lg pl-4 pt-8 h-[323px]">
								<img src="/images/code_sc_2.png" alt="" />
							</div>
						</div>
                        <div className="flex items-center justify-center mt-8">
                            <p className="text-primary">Java</p>
                            <BsDot />
                            <p>Node</p>
                            <BsDot />
                            <p>Ruby</p>
                        </div>
					</div>
                    <div className="flex items-center justify-center mt-12">
                    <button className="primary-btn">View Documentation</button>
                    </div>
				</div>
			</div>
            {/* ---------------------------------------------------------------------------------------------------- */}
            <div className="py-24">
                <div className="container">
                    <h1 className="text-dark text-[25px] md:text-[30px] mb-16 font-bold text-center">A Powerful System of Record</h1>
                    <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-8">
                        <SystemCard icon="/icons/cryptographic-integrity.svg" title="Cryptographic Integrity" content="Atomic and signed transactions form immutable history."/>
                        <SystemCard icon="/icons/extensibility.svg" title="Extensibility" content="Easily add accounts, asset types, contracts, 
keys, and entities to your ledger."/>
                        <SystemCard icon="/icons/programable.svg" title="Programmable 
Transactions" content="Control assets with business logic 
executed by the Sequence VM."/>
                        <SystemCard icon="/icons/performant.svg" title="Performant" content="High throughput and low latency for 
enterprise-scale."/>
                        <SystemCard icon="/icons/analytics.svg" title="Analytics" content="Parquet integration, customized reports, 
and summary analytics."/>
                        <SystemCard icon="/icons/developer-experience.svg" title="Developer Experience" content="SDKs in several languages, detailed docs, 
and easy-to-use dashboards."/>

                    </div>
                </div>
            </div>
            {/* -------------------------------------------------------------------------------- */}
            <div className=" md:pt-20 pb-20">
                <div className="container">
                    <h1 className="text-dark text-[25px] md:text-[30px] mb-16 font-bold text-center">Get Started</h1>
                    <div className="flex space-x-2 mt-12 justify-center items-center">
							<button className="primary-btn">Sign Up for Sequence</button>
							<button className="secondary-btn">Documentation</button>
						</div>
                        <div className="mt-20 px-2 md:px-0">
                            <img src="/images/seq_showcase.png" alt=""/>
                        </div>
                </div>
            </div>
		</MainLayout>
	)
}

const FeatureCard = ({
	icon,
	title,
	subtitle,
	link,
}: {
	icon: string
	title: string
	subtitle: string
	link: string
}) => {
	return (
		<div className="w-[260px] h-[350px] shadow-custom3 p-[30px] flex flex-col space-y-6 rounded-[7px]">
			<div className="h-[85px] w-[85px] bg-secondary rounded-lg flex items-center justify-center">
				<img src={icon} alt="" />
			</div>
			<h1 className="text-[30px] leading-8">{title}</h1>
			<p className="text-[16px]">{subtitle}</p>
			<Link href={link}>
				<span className="text-[16px] text-primary">See Code Example</span>
			</Link>
		</div>
	)
}

const SystemCard = ({icon, title, content}: {icon: string, title: string, content: string}) => {
    return(
        <div className="h-[256px] w-[351px] bg-white shadow-custom4 rounded-[7px] overflow-hidden">
                            <div className="h-[111px] bg-dark flex items-center space-x-4  p-[35px]">
                                <div className="bg-[#2f2f2f] h-[42px] w-[61px] flex items-center justify-center rounded">
                                    <img src={icon} alt=""/>
                                </div>
                                <h1 className="text-[20px] font-bold text-secondary">{title}</h1>
                            </div>
                            <div className="px-[35px] py-[25px]">
                                <p>{content}</p>
                            </div>
                        </div>
    )
}

export default Sequencepage
