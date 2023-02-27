import React from "react"
import ChainBanner from "../common/ChainBanner"
import MainLayout from "../layout/MainLayout"

const Nftpage = () => {
	const platformSupports = [
		{
			icon: "/icons/app-dev.png",
			title: "Application development",
			subtitle:
				"Partner with Chain’s expert NFT development team on everything from designs to production solutions.",
		},
		{
			icon: "/icons/integration.png",
			title: "Integration engineering",
			subtitle:
				"A team of specialists is available to help in all stages of the NFT launch, including compliance reviews, crypto to fiat conversions, and more.",
		},
		{
			icon: "/icons/SLAs.png",
			title: "SLAs and 24/7 On-Call",
			subtitle:
				"Contractual commitments for reliability with on-call teams standing by to troubleshoot and resolve any and all issues.",
		},
	]

	const steps = [
		{
			step: "01",
			title: "CONCEPT",
			content: [
				" Identify market opportunity",
				"Conduct research",
				"Define project milestones",
				"Develop strategy",
			],
		},

		{
			step: "02",
			title: "DESIGN",
			content: [
				" Create moodboard",
				"Present client with a selection of design studies",
				"Prototype",
				"Finalize design direction",
			],
		},

		{
			step: "03",
			title: "PRODUCTION",
			content: [
				"Creation of digital assets",
				"Build an NTF Gateway hosted on Chain managed blockchain/interoperable with other networks.",
				"UX/UI",
				"Present for client feedback",
				"Make final revisions",
				"Build supporting product knowledge materials & train client team members",
			],
		},

		{
			step: "04",
			title: "IMPLEMENTATION",
			content: [
				"Program launch",
				"Execute marketing campaigns",
				"Mint",
				"Data collection",
				"Security",
			],
		},

		{
			step: "05",
			title: "SUPPORT",
			content: [
				"Continued site maintenance",
				"Payment management and processing",
				"Dedicated Chain NFT support team member",
			],
		},

		{
			step: "06",
			title: "DELIVERY",
			content: [
				"Track Shipment",
				"Deliver physical item",
				"Pair to NFT",
				"Continued client support",
			],
		},
	]
	return (
		<MainLayout>
			<div className="py-20">
				<div className="flex flex-col-reverse md:flex-row container mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2 md:max-w-[500px] ">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px] ">
							Chain NFTs
						</h1>
						<div className="bg-primary h-[5px] w-16 rounded-lg mt-4 mb-8"></div>

						<p className="text-[16px] mt-6">
							NFT strategy, development and execution, made simple. Leverage our
							NFT-as-a-Service product to bring digital and physical
							collectibles to life, powered by blockchain technology.
						</p>
						<div className="flex space-x-2 mt-10">
							<button className="primary-btn">Get Started</button>
						</div>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end w-full md:w-1/2">
						<img src="/images/nft_cover.png" alt="" className="" />
					</div>
				</div>
			</div>
			{/* ----------------------------------------------------------- */}
			<div className="py-16">
				<div className="container">
					<h1 className="text-[30px] font-bold text-center">
						Trusted by leading brands
					</h1>
					<p className="text-center mt-4 max-w-[500px] mx-auto">
						Chain is partnered with industry leaders in retail, jewelry, fashion
						and design to bring custom-tailored NFT experiences to life.
					</p>
					<div className="grid items-center grid-cols-2 gap-y-16 md:grid-cols-4 place-items-center mt-16 max-w-[800px] mx-auto">
						<img src="/logos/tiffany.svg" alt="" className="cursor-pointer" />
						<img src="/logos/tag-heuer.svg" alt="" className="cursor-pointer" />
						<img src="/logos/jacob.svg" alt="" className="cursor-pointer" />
						<img src="/logos/gillette.png" alt="" className="cursor-pointer" />
					</div>

					<div className="flex flex-col md:flex-row space-y-16 md:space-y-0 items-center py-20 mt-10 px-4 md:px-0">
						<div className="w-full md:w-1/2">
							<div className="flex relative w-[300px] ">
								<h1 className="text-[30px] leading-[40px] font-bold ">
									Latest Partnership Project:{" "}
								</h1>
								<img
									src="/logos/nftiff-logo.png"
									alt=""
									className="absolute bottom-1 right-20"
								/>
							</div>

							<p className="text-[16px] my-8">
								Our latest high-profile client sold out their entire NFT
								collection in minutes, while providing the CryptoPunks’
								community with real world utility. By utilizing Chain NFTs, we
								provided our client with end-to-end support from initial concept
								creation to final launch. Learn more about this strategic
								partnership that led to an instant sell-out valued at over $12
								million.
							</p>
							<div>
								<button className="primary-btn">Read Whitepaper</button>
							</div>
						</div>
						<div className="w-full md:w-1/2">
							<img src="/images/nftiff_c.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			{/* --------------------------------------------------------------- */}
			<div className="bg-secondary py-24">
				<div className="container">
					<h1 className="text-[30px] leading-[40px] font-bold text-center">
						Your partner from design to deployment
					</h1>
					<p className="text-center mt-4 max-w-[500px] mx-auto text-dark">
						From initial design to launch and operation of a customized NFT, we
						invest in deep ongoing relationships with our partners at whatever
						stage they’re at in their process.
					</p>
					<div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-8 mt-16">
						{steps?.map((step, i) => (
							<StepCard
								step={step.step}
								title={step.title}
								content={step.content}
							/>
						))}
					</div>
				</div>
			</div>
			{/* ------------------------------------------------------------------------------------------------ */}
			<div className="bg-dark py-16">
				<div className="container px-4 md:px-0">
					<h1 className="text-[30px] leading-[40px] font-bold text-center text-white">
						Platform Support
					</h1>
					<p className="text-center mt-4 max-w-[500px] mx-auto text-secondary">
						For organizations utilizing Chain NFTs, we offer a full suite of
						deployment and operational support.
					</p>
					<div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-8 mt-16">
						{platformSupports?.map((support, i) => (
							<div className="bg-white p-[45px] h-[390px] max-w-[350px] rounded-[7px]">
								<img src={support.icon} alt="" />
								<h1 className="text-[20px] font-bold my-6">{support.title}</h1>
								<p className="text-[16px]">{support.subtitle}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* ------------------------------------------------------------------------------------------------- */}
			<ChainBanner />
		</MainLayout>
	)
}

const StepCard = ({
	step,
	title,
	content,
}: {
	step: string
	title: string
	content: any
}) => {
	return (
		<div className=" w-[351px] h-[512px] bg-white shadow-custom4 rounded-[7px] overflow-hidden">
			<div className="h-[111px] bg-dark flex items-center space-x-4  p-[35px]">
				<div className="bg-[#2f2f2f] h-[42px] w-[61px] flex items-center justify-center rounded">
					{/* <img src={icon} alt=""/> */}
					<h1 className="text-[30px] font-bold text-primary">{step}</h1>
				</div>
				<h1 className="text-[20px] font-bold text-secondary">{title}</h1>
			</div>
			<div className="px-[35px] py-[25px] flex flex-col space-y-3">
				{content?.map((c: string) => (
					<div className="flex items-start  space-x-6">
						<span className="h-[10px] w-[10px] min-h-[10px] min-w-[10px] rounded-full bg-primary mt-[8px]"></span>{" "}
						<p>{c}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Nftpage
