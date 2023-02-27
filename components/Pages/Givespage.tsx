import ChainBanner from "../common/ChainBanner"
import MainLayout from "../layout/MainLayout"

const Givespage = () => {
	const helpExample = [
		{
			title: "Supporting Ukraine",
			subtitle:
				"Chain supports displaced communities in Ukraine by sending crypto safely and rapidly to those impacted by political unrest.",
		},
		{
			title: "Working with REFORM",
			subtitle:
				"We support the REFORM Alliance, a non-profit organizationdedicated to probation, parole, and sentencing reform in theU.S.A.",
		},
		{
			title: "COVID Support",
			subtitle:
				"After the 2020 pandemic, millions of people around their worldlost family members and steady income. Chain will continue to support those dealing with the after effects of COVID-19.",
		},
	]
	const impacts = [
		{
			icon: "/icons/impactful.svg",
			title: "Impactful",
			subtitle:
				"We are on a mission to help countless people around the world through donations to charitable organizations.",
		},
		{
			icon: "/icons/difference-maker.svg",
			title: "Difference Makers",
			subtitle:
				"We believe we can make positive impacts on individuals and families worldwide through our contributions and organizations we support.",
		},
		{
			icon: "/icons/production-support.svg",
			title: "Production support services",
			subtitle:
				"With the power of crypto and blockchain we can rapidly send funds to those individuals and organizations.",
		},
	]
	return (
		<MainLayout>
			{/* ------------------------------------------------------------------------------------------------- */}
			<div className="py-16">
				<div className="flex flex-col-reverse md:flex-row max-w-[1300px] mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px]">
							Chain Gives
						</h1>
						<p className="text-[16px] md:text-[16px] mt-6 max-w-[400px] leading-5">
							Supporting individuals and charitable organizations worldwide
							through the power of crypto and blockchain.
						</p>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end bg-red-100 w-full md:w-1/2">
						<img src="/images/gives-cover.png" alt="" className=" " />
					</div>
				</div>
			</div>
			{/* ------------------------------------------------------------------------ */}
			<div className="py-10">
				<h1 className="text-[30px] font-bold text-center">Our Impact</h1>
				<div className="max-w-[600px] flex mx-auto space-x-4 md:space-x-8 mt-8">
					<div className="shadow-custom4 rounded-[7px] py-[20px] text-center w-1/2">
						<h1 className=" text-[33px] md:text-[40px] font-bold">$805,250</h1>
						<p className=" text-[13px] md:text-[16px] mt-2 text-primary">
							Amount Donated
						</p>
					</div>
					<div className="shadow-custom4 rounded-[7px] py-[20px] text-center w-1/2">
						<h1 className=" text-[33px] md:text-[40px] font-bold">8</h1>
						<p className=" text-[13px] md:text-[16px] mt-2 text-primary">
							Total Donations
						</p>
					</div>
				</div>
				<p className=" text-[16px] text-center max-w-[800px] mx-auto mt-10 text-dark">
					We help countless organizations and communities around the world that
					are in need of immediate assistance, that would otherwise take days to
					reach through the traditional financial system. Chain Gives uses
					blockchain technology to send funds swiftly and securely to those in
					need.
				</p>
				{/* -----------------------------------------Cards grid------------------------------- */}
				<div className="py-24 container grid grid-cols-1 place-items-center gap-8 md:grid-cols-3 px-4 md:px-0">
					{impacts?.map((impact, i) => (
						<div
							key={i}
							className="shadow-custom3 p-6 border border-[#eaeaea] flex-grow rounded-lg min-h-[360px]"
						>
							<div className="h-[85px] w-[85px] bg-secondary flex items-center justify-center rounded-xl">
								<img src={impact.icon} alt="" />
							</div>
							<div className=" mt-4 pb-16  w-[300px]">
								<h1 className="text-[30px]  leading-7 text-dark">
									{impact.title}
								</h1>
								<p className="text-[16px] mt-6">{impact.subtitle}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* ------------------------------------------------------------------------------------------------------------------------------- */}
			<div className="bg-dark pt-16 pb-24 px-4 md:px-0">
				<h1 className="text-[30px] text-primary font-bold text-center">
					Lead by example
				</h1>
				<p className="text-[16px] md:text-[16px] mt-6 max-w-[800px] text-center leading-5 text-secondary mx-auto">
					We want to inspire other Web3 companies to give back to the community
					by utilizing blockchain’s revolutionary technology. Crypto donations
					are proven to be more inclusive to individuals without access to
					traditional banks, as well as more transparent, timely, and efficient.
				</p>
				<div className="container mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
					{helpExample?.map((example, i) => (
						<div
							key={i}
							className="bg-[#363b43] px-[35px] py-[40px] rounded-[7px]"
						>
							<h1 className=" text-[22px] md:text-[30px] text-primary ">
								{example.title}
							</h1>
							<p className="text-[16px] text-secondary mt-[30px] h-32">
								{example.subtitle}
							</p>
						</div>
					))}
				</div>
			</div>
			{/* ------------------------------------------------------------------------------------------------- */}
			<ChainBanner />
		</MainLayout>
	)
}

export default Givespage
