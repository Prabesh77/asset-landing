import Link from "next/link"
import ChainBanner from "../common/ChainBanner"
import MainLayout from "../layout/MainLayout"

const Aboutpage = () => {
	const logos = [
		"tag-heuer.svg",
		"jacob.svg",
		"visa.png",
		"nasdaq.png",
		"citi.png",
		"capital-one.png",
		"fiserv.png",
		"state-street.png",
	]
	return (
		<MainLayout>
			<div className="py-16">
				<div className="flex flex-col-reverse md:flex-row container mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2 md:max-w-[500px] ">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px] ">
							About Chain
						</h1>
						<div className="bg-primary h-[5px] w-16 rounded-lg mt-4 mb-8"></div>

						<p className="text-[19px] mt-6">
							Chain is a blockchain-based technology company on a mission to
							enable a smarter and more connected economy. We build
							cryptographic ledgers and cloud infrastructure that underpin
							transformative financial products and Web3 services.
							<br />
							<br />
							Founded in 2014, Chain has raised over $40 million in funding from
							Khosla Ventures, Pantera Capital, Capital One, Citigroup, Fiserv,
							Nasdaq, Orange, and Visa.
							<br />
							<br />
							In 2018, Stellar acquired Chain to form Interstellar, a commercial
							arm of the Stellar Foundation. In 2020, Chain was re-acquired to
							continue its mission to build a more robust global financial
							system through blockchain technology.
						</p>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end w-full md:w-1/2">
						<img src="/images/contact-design.png" alt="" className="" />
					</div>
				</div>
			</div>
			<div className="py-16">
				<div className="flex flex-col md:flex-row container mx-auto items-center justify-between px-[24px] md:px-0 ">
					<div className="h-full flex items-center justify-start  w-full md:w-1/2">
						<img src="/images/about-second.png" alt="" className="" />
					</div>
					<div className="text-dark w-full md:w-1/2  ">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px]  md:max-w-[500px]">
							Building a Community for all
						</h1>

						<p className="text-[19px] mt-6 md:max-w-[500px]">
							Chain strives to create a truly connected economy that benefits
							our partners and clients. We hope to fulfill our mission by
							creating a smarter and more connected community by collaborating
							with leaders from various industries, and welcoming newcomers to
							the Web3 world. We recognize that each brand has its own set of
							objectives, and we work around the clock to ensure that our
							partners’ needs are met.
						</p>
					</div>
				</div>
			</div>
			{/* -------------------------------------------------------------------------------------------------------------------------- */}
			<div className="bg-dark py-16">
				<div className="container px-4 md:px-0">
					<h1 className="text-[20px] md:text-[25px] text-primary text-center">
						Technology Trusted By Market Leaders
					</h1>
					<div className="bg-white w-full mt-16 md:px-[35px] px-[1rem] py-16 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 rounded-xl">
						<div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8">
							{logos?.map((logo, i) => (
								<div key={i} className="h-[55px] max-w-[149px] border border-[#eaeaea] hover:border-primary flex items-center justify-center rounded-[7px]">
									<img src={`/logos/${logo}`} alt="" />
								</div>
							))}
						</div>
						<div className="w-full md:w-1/2">
							<img src="/logos/nftiff-logo.png" alt="" />
							<div className="flex flex-col-reverse md:flex-row items-center mt-4 md:space-x-8">
								<div>
									<p>
										Our latest high-profile client sold out their entire NFT
										collection in minutes, while providing the CryptoPunks
										community with real world utility. By utilizing Chain NFTs,
										we provided our client with end-to-end support from initial
										concept creation to final launch. Learn more about this
										strategic partnership that led to an instant sell-out valued
										at over $12 million.
									</p>
								</div>
								<div className="h-[187px] min-w-[153px] my-4 md:my-0">
									<img
										src="/images/face.png"
										alt=""
										className="h-full w-full"
									/>
								</div>
							</div>
							<div className="flex space-x-2 mt-12">
								<button className="primary-btn">Sign Up</button>
								<button className="secondary-btn">Documentation</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* ------------------------------------------------------------------------------------------ */}
			{/* <div className="py-16">
				<div className="flex flex-col-reverse md:flex-row max-w-[1300px] mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px]">
							Join Chain
						</h1>
						<p className="text-[16px] md:text-[16px] mt-4 max-w-[400px] leading-5">
							We are on a mission to enable a smarter and more connected
							economy.
							<br />
							<br />
							Are you interested in solving cryptography, distributed systems,
							databases, or finance problem?
						</p>
						<button className="primary-btn mt-[36px]">Open positions</button>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end bg-red-100 w-full md:w-1/2">
						<img src="/images/contact-design.png" alt="" className=" " />
					</div>
				</div>
			</div> */}
			<ChainBanner />
		</MainLayout>
	)
}

export default Aboutpage
