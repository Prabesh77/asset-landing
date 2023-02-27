import MainLayout from "../layout/MainLayout"

const Joinpage = () => {
	const ourInfo = [
		{
			title: "Our Values",
			subtitle:
				"Be patient. Be kind. Have grit. Ask why. Do the right thing. We want to improve the culture of financial services and we will turn down opportunities and revenue if it requires compromising what we believe.",
		},
		{
			title: "Our Benefits",
			subtitle:
				"People do their best work when they’re happy and healthy, so we take care of our team members with full benefits, optional crypto payments, unlimited PTO, parental leave, and competitivecompensation packages.",
		},
		{
			title: "Our Location",
			subtitle:
				"We work remotely in the comfort of our own homes or offices with the benefit of a stroll in the park / on the beach sometimes too. Our remote-first policies give a true meaning to decentralization.",
		},
	]
	return (
		<MainLayout>
			<div className="py-16">
				<div className="flex flex-col-reverse md:flex-row max-w-[1300px] mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px]">
							Join us
						</h1>
						<p className="text-[16px] md:text-[30px] mt-6 max-w-[500px] leading-8">
							We are on a mission to enable a smarter and more connected
							economy.
						</p>
						<button className="primary-btn mt-[40px]">
							See open positions
						</button>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end bg-red-100 w-full md:w-1/2">
						<img src="/images/contact-design.png" alt="" className=" " />
					</div>
				</div>
			</div>
			{/* --------------------------------------------------------------------------------------------------------------- */}
			{/* ------------------------------------------------------------------------------------------------------------------------------- */}
			<div className="bg-dark pt-16 pb-24 px-4 md:px-0">
				<h1 className="text-[30px] text-white font-bold text-center">
					Tackle big problems
				</h1>
				<p className="text-[16px] md:text-[16px] mt-6 max-w-[800px] text-center leading-5 text-secondary mx-auto">
					The internet has transformed the way money moves around the world, but
					our underlying financial systems were built for an era long gone.
					Updating them with cryptographic integrity is a huge undertaking. Up
					for the challenge?
				</p>
				<div className="container mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
					{ourInfo?.map((info, i) => (
						<div
							key={i}
							className="bg-[#363b43] px-[35px] py-[40px] rounded-[7px]"
						>
							<h1 className=" text-[22px] md:text-[30px] text-primary ">
								Our Values
							</h1>
							<p className="text-[16px] text-secondary mt-[30px] h-32">
								Be patient. Be kind. Have grit. Ask why. Do the right thing. We
								want to improve the culture of financial services and we will
								turn down opportunities and revenue if it requires compromising
								what we believe.
							</p>
						</div>
					))}
				</div>
			</div>
		</MainLayout>
	)
}

export default Joinpage
