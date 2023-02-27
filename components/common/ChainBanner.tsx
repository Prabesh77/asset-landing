
import React from 'react'

const ChainBanner = () => {
  return (
    <div className="py-16">
				<div className="flex flex-col-reverse md:flex-row max-w-[1300px] mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px]">
							Connect with Chain
						</h1>
						<p className="text-[16px] md:text-[16px] mt-4 max-w-[400px] leading-5">
							Ready to build with us? Let us guide you through which blockchain
							software service is best suited for optimizing your business.
						</p>
						<button className="primary-btn mt-[36px]">Get in touch</button>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end bg-red-100 w-full md:w-1/2">
						<img src="/images/contact-design.png" alt="" className=" " />
					</div>
				</div>
			</div>
  )
}

export default ChainBanner