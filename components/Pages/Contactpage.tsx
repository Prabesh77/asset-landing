import MainLayout from "../layout/MainLayout"

const Contactpage = () => {
	return (
		<MainLayout>
            {/* ------------------------------------------------------------------------------------------------- */}
            <div className="py-16">
				<div className="flex flex-col-reverse md:flex-row max-w-[1300px] mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px]">
							Contact
						</h1>
						<p className="text-[16px] md:text-[16px] mt-6 max-w-[400px] leading-5">
                        Have a question? Get in touch and let us know how we can help.
						</p>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end bg-red-100 w-full md:w-1/2">
						<img src="/images/contact-design.png" alt="" className=" " />
					</div>
				</div>
			</div>
            {/* ------------------------------------------------------------------------ */}
            <div className="container flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-0">
                <div className="shadow-custom5 p-6 border border-[#eaeaea] flex-grow">
                    <div className="h-[85px] w-[85px] bg-secondary flex items-center justify-center">
                        <img src="/icons/sales.svg" alt=""/>
                    </div>
                    <div className="border-t-2 border-primary pt-4 mt-4 pb-16">
                        <h1 className="text-[30px]">Sales inquiries</h1>
                        <p className="text-[16px] mt-4">Contact sales to purchase a custom plan.</p>
                    </div>

                </div>
                <div className="shadow-custom5 p-6 border border-[#eaeaea] flex-grow">
                    <div className="h-[85px] w-[85px] bg-secondary flex items-center justify-center">
                        <img src="/icons/support.svg" alt=""/>
                    </div>
                    <div className="border-t-2 border-primary pt-4 mt-4 pb-16">
                        <h1 className="text-[30px]">Support & training</h1>
                        <p className="text-[16px] mt-4">Connect with support and training resources</p>
                    </div>

                </div>
                <div className="shadow-custom5 p-6 border border-[#eaeaea] flex-grow">
                    <div className="h-[85px] w-[85px] bg-secondary flex items-center justify-center">
                        <img src="/icons/press-enquiry.svg" alt=""/>
                    </div>
                    <div className="border-t-2 border-primary pt-4 mt-4 pb-16">
                        <h1 className="text-[30px]">Press inquiries</h1>
                        <p className="text-[16px] mt-4">For all press, analyst, and speaking opportunities</p>
                    </div>

                </div>
            </div>
            {/* ============================================================================================================= */}
            <div className="py-24 px-4 md:px-0">
                <h1 className="text-[30px] md:text-[45px] text-center">Contact Chain</h1>
                <p className="text-[16px] text-center mt-2">Fill out the form below and a representative will get back to you as soon as possible.</p>
                <form className="flex flex-col justify-center space-y-16">
                    <div className="container flex flex-col md:flex-row space-y-8 md:space-y-0 items-center  mt-16 md:space-x-16 ">
                        <div className="flex flex-col w-full md:w-1/2 space-y-8">
                            <select className="bg-secondary border border-[#eaeaea] outline-none py-[6px] px-2 text-gray-400">
                                <option>Choose Department</option>
                            </select>
                            <input placeholder="Company" className="bg-secondary border border-[#eaeaea] outline-none py-[6px] px-2"/>
                            <input placeholder="First Name" className="bg-secondary border border-[#eaeaea] outline-none py-[6px] px-2"/>
                            <input placeholder="Last Name" className="bg-secondary border border-[#eaeaea] outline-none py-[6px] px-2"/>
                            <input placeholder="Email" className="bg-secondary border border-[#eaeaea] outline-none py-[6px] px-2"/>
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 h-full">
                            <textarea className="bg-secondary border border-[#eaeaea] outline-none py-1 px-2 h-80 text-gray-400" placeholder="Comments"></textarea>
                        </div>
                    </div>
                    <button className="primary-btn mx-auto">Submit</button>
                </form>
            </div>
		</MainLayout>
	)
}



export default Contactpage
