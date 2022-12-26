import MainLayout from "../layout/MainLayout"
import { AiOutlineInfoCircle } from "react-icons/ai"
import ChainBanner from "../common/ChainBanner"

const Pricingpage = () => {
	const features = [
		{
			title: "Top Blockchains",
			subtitle:
				"Instant access to full nodes of more than 40 commonly used cryptos in one space",
		},
		{
			title: "High Speed",
			subtitle:
				"Fast and reliable API with low response time and network bandwidth at 1 GB/sec",
		},
		{
			title: "Rate Limits",
			subtitle:
				"Maximum 30 requests/sec. Overall usage can affect the rate limits (autoscaling)",
		},
		{
			title: "Advanced Analytics",
			subtitle:
				"API-driven dashboard shows valuable insights on the number of requests, statistics on method calls and more",
		},
		{
			title: "Full Archive Data",
			subtitle:
				"Access to historical data and balances on several blockchains. Please, contact our customer support managers to get the actual info",
		},
		{
			title: "24 Hour Support",
			subtitle:
				"Helpful consulting and technical support is provided by our highly-skilled team of experts",
		},
	]

	const pricing = [
		{ title: "Free", price: 0, expiration: "no expiration", requests: "40k" },

		{
			title: "Newbie",
			price: 6,
			expiration: "no expiration date",
			requests: "500k",
		},

		{ title: "Lite", price: 10, expiration: "no expiration", requests: "1M" },

		{ title: "Base", price: 30, expiration: "no expiration", requests: "5M" },

		{
			title: "Popular",
			price: 50,
			expiration: "Per Day",
			requests: "10M",
			dark: true,
		},

		{
			title: "Unlimited",
			price: 200,
			expiration: "no expiration",
			requests: "50M ",
		},

		{
			title: "Unlimited",
			price: 500,
			expiration: "no expiration",
			requests: "Unlimited ",
		},
	]

	return (
		<MainLayout>
			{/* ------------------------------------------------------------------------------------------------- */}
			<div className="py-16">
				<div className="flex flex-col-reverse md:flex-row max-w-[1300px] mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2 mt-16 md:mt-0">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px] font-bold">
							Chain Pricing
						</h1>
						<p className="text-[16px] md:text-[30px] mt-4 md:mt-6 max-w-[400px] leading-8">
							Pricing that Works for Everyone
						</p>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end  w-full md:w-1/2 ">
						<img
							src="/images/pricing-banner.png"
							alt=""
							className=" transform md:scale-125"
						/>
					</div>
				</div>
			</div>
			{/* ------------------------------------------------------------------------ */}
			<div className="px-4 md:px-0 py-20">
				<p className="text-[16px]  mt-4 md:mt-6 max-w-[700px] mx-auto text-center">
					Chain services are a must for DEXs, wallets, NFT marketplaces, DeFis,
					bots and so on. Our pricing packages are scaled to fit a wide range of
					budgets and company sizes.
				</p>
				<div className="container grid md:grid-cols-4 gap-8 items-start place-items-center mt-16">
					{pricing?.map((price, i) => (
						<PricingCard
							title={price.title}
							price={price.price}
							expiration={price.expiration}
							requests={price.requests}
							dark={price?.dark || false}
						/>
					))}

					<div
						className={`shadow-custom4 border border-[#eaeaea] text-center p-[35px] rounded-[7px] relative bg-dark `}
					>
						<h2
							className={`text-[25px] text-secondary leading-7 font-roboto font-[500]`}
						>
							Need higher rate limits?
						</h2>
						<p className="text-[16px] mt-4 mb-8 text-secondary">
							Send more requests per second with Unlimited Package
						</p>
						<div className="flex items-center justify-center space-x-8">
							<div className="relative ">
								<img src="/images/30-rps.svg" alt="" />{" "}
								<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col -space-y-2">
									<p className="text-white text-[30px]">30</p>
									<span className="text-secondary text-[11px]">RPS</span>
								</div>
							</div>
							<div className="relative ">
								<img src="/images/30-rps.svg" alt="" />{" "}
								<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col -space-y-2">
									<p className="text-white text-[30px]">60</p>
									<span className="text-secondary text-[11px]">RPS</span>
								</div>
							</div>
						</div>
						<button className="primary-btn mt-8">Contact us</button>
						<AiOutlineInfoCircle className="absolute right-2 top-2 text-lg text-primary cursor-pointer" />
					</div>
				</div>
			</div>
			{/* -------------------------------------------------------------------------------------------------- */}
			<div className="py-16 px-4 md:px-0">
				<h1 className="text-[30px] font-bold text-center">
					Powered by a Full Set of Features
				</h1>
				<div className="container grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center mt-16">
					{features?.map((feature, i) => (
						<FeatureCard
							key={i}
							title={feature.title}
							subtitle={feature.subtitle}
						/>
					))}
				</div>
			</div>
			{/* ------------------------------------------------------------------------------------------------- */}
			<ChainBanner />
		</MainLayout>
	)
}

const PricingCard = ({
	title,
	price,
	expiration,
	requests,
	dark,
}: {
	title: string
	price: number
	expiration: string
	requests: string
	dark?: boolean
}) => {
	return (
		<div
			className={`shadow-custom4 border border-[#eaeaea] text-center p-[35px] rounded-[7px] relative w-full min-h-[370px] ${
				dark ? "bg-dark " : ""
			}`}
		>
			<h2 className={`text-[30px] ${dark ? "text-secondary" : ""}`}>{title}</h2>
			<h1
				className={`text-[55px]  m-0 p-0 -mt-2 font-roboto font-[500] ${
					dark ? "text-secondary" : ""
				}`}
			>
				{price > 0 && "$"}
				{price}
			</h1>
			<p className="text-[16px] -mt-3 mb-8 text-[#7e7e7e]">{expiration}</p>
			<div
				className={`${
					dark ? "bg-[#2f2f2f]" : "bg-secondary"
				} rounded-[15px] inline py-2 px-8 `}
			>
				<span className="text-primary">{requests} Requests</span>
			</div>
			<br />
			<button className="primary-btn mt-8">Get started</button>
			<AiOutlineInfoCircle className="absolute right-2 top-2 text-lg text-primary cursor-pointer" />
		</div>
	)
}

const FeatureCard = ({
	title,
	subtitle,
}: {
	title: string
	subtitle: string
}) => {
	return (
		<div className="shadow-custom4 rounded-[7px] px-[26px] py-[55px] border border-[#eaeaea]">
			<h1 className="border-b border-[#eaeaea] text-[25px] font-bold text-primary py-2 ">
				{title}
			</h1>
			<p className="text-[16px] mt-4">{subtitle}</p>
		</div>
	)
}

export default Pricingpage
