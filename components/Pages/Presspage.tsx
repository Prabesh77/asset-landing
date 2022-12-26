import { useState } from "react"
import MainLayout from "../layout/MainLayout"
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa"
import Link from "next/link"

const Presspage = () => {
	const [currentNews, setCurrentNews] = useState("Newer")
	return (
		<MainLayout>
			<div className="py-20">
				<div className="flex flex-col md:flex-row space-y-16 md:space-y-0 container mx-auto items-center justify-between px-[24px] md:px-0">
					<div className="text-dark w-full md:w-1/2 md:max-w-[500px] ">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px] font-bold">
							Press
						</h1>
						<h2 className="text-[25px] md:text-[30px] leading-8 mt-4">
							We are on a mission to enable a smarter and more connected
							economy.
						</h2>
						<p className="text-[16px] mt-6">
							Have a question? Get in touch and let us know how we can help.
							Interested in support, solution designs, or our enterprise
							software? Get in touch below, and we will contact you to continue
							the conversation.
						</p>
						<div className="flex space-x-24 mt-10">
							<div>
								<h2 className="text-[30px]">Contact</h2>
								<p className="mt-4">press@chain.com</p>
							</div>
							<div>
								<h2 className="text-[30px]">Follow</h2>
								<div className="flex items-center space-x-4 mt-4">
									<AiOutlineTwitter className="text-[18px]" />
									<AiOutlineInstagram className="text-[18px]" />
									<FaTelegramPlane className="text-[18px]" />
								</div>
							</div>
						</div>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end w-full md:w-1/2 md:p-8 md:px-16">
						<div className="shadow-custom rounded-[7px]">
							<div className="w-full py-20 px-8 md:px-16 bg-dark flex flex-col justify-center rounded-[7px] oveflow-hidden">
								<div className="flex items-center space-x-4">
									<span className="text-muted text-[16px]">Industry</span>
									<span className="text-muted text-[16px]">Oct 27 2022</span>
								</div>
								<h1 className="text-secondary text-[30px] font-bold leading-8 mt-2">
									Key Differences Between Centralized and Decentralized
									Exchanges
								</h1>
							</div>
							<div className="bg-[#fff] px-[30px] pb-[40px] flex flex-col items-start rounded-[7px]">
								<div className="text-primary bg-secondary py-[10px] px-[30px] text-small rounded  transform -translate-y-6">
									Industry
								</div>
								<h2 className=" text-[22px] leading-6 transform -translate-y-6 mt-4">
									Key Differences Between Centralized and Decentralized
									Exchanges
								</h2>
								<p className="mb-[1rem] text-[20px]">Oct 27 2022</p>
								<p>
									Buying crypto as a novice investor or trader can be an
									intimidating experience at first. After all, not every
									exchange is created equal. While some lack…
								</p>
								<Link href="">
									<button className="primary-btn mt-6">Read more</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* ===================================================================================== */}
			<div className="">
				<div className="">
					<h1 className="text-[25px] md:text-[30px] font-bold text-center">
						Latest Press Releases
					</h1>
					<div className="flex w-[216px] mx-auto mt-8">
						<div
							className={` ${
								currentNews === "Newer"
									? "bg-primary text-secondary"
									: "bg-secondary text-dark"
							} w-1/2 text-center py-[7px]  rounded-tl-md rounded-bl-md cursor-pointer`}
							onClick={() => setCurrentNews("Newer")}
						>
							Newer
						</div>
						<div
							className={`${
								currentNews === "Older"
									? "bg-primary text-secondary"
									: "bg-secondary text-dark"
							} w-1/2 text-center py-[7px] text-dark rounded-tr-md rounded-br-md cursor-pointer`}
							onClick={() => setCurrentNews("Older")}
						>
							Older
						</div>
					</div>
				</div>
				<div className="bg-dark mt-32">
					<div className="container transform -translate-y-16 px-4 md:px-0">
						<div className="shadow-custom rounded-[7px]">
							<div className="w-full py-20 md:py-40 px-10 md:px-24 bg-[#454C56] flex flex-col justify-center rounded-[7px] oveflow-hidden">
								<div className="flex items-center space-x-4">
									<span className="text-muted text-[16px] md:text-[20px]">
										Industry
									</span>
									<span className="text-muted text-[16px] md:text-[20px]">
										Oct 27 2022
									</span>
								</div>
								<h1 className="text-secondary text-[25px] md:text-[40px] font-bold leading-10 mt-4">
									Key Differences Between Centralized and Decentralized
									Exchanges
								</h1>
							</div>
							<div className="bg-[#fff] px-[30px] pt-[20px] pb-[40px] flex flex-col md:flex-row  items-start rounded-bl-[7px] rounded-br-[7px] md:space-x-10">
								<div className="text-primary bg-secondary py-[10px] px-[30px] text-small rounded  mb-4 md:mb-0">
									Industry
								</div>
								<div>
									<h2 className=" text-[22px] leading-6 transform ">
										Key Differences Between Centralized and Decentralized
										Exchanges
									</h2>
									<p className="my-[1rem] text-[20px]">Oct 27 2022</p>
									<p>
										Buying crypto as a novice investor or trader can be an
										intimidating experience at first. After all, not every
										exchange is created equal. While some lack…
									</p>
									<Link href="">
										<button className="primary-btn mt-6">Read more</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1  w-full place-items-center md:grid-cols-3 gap-[35px] mt-[62px]">
							<NewsCard
								image="/images/img-2.png"
								tag="Press"
								title="Chain Announces Multi-Year Partnership with Kraft Sports + Entertainment"
								date="Thu Sep 22 2022"
								link="#"
							/>
							<NewsCard
								image="/images/img-3.png"
								tag="Product"
								title="Coinbase Launches 'Learn-to-Earn' Campaign with Chain (XCN)"
								date="Thu Sep 22 2022"
								link="#"
							/>
							<NewsCard
								image="/images/img-4.png"
								tag="Research"
								title="Chain Research – The Significance of ENS Domain Names and Their Use Cases"
								date="Thu Sep 22 2022"
								link="#"
							/>
							<NewsCard
								image="/images/img-2.png"
								tag="Press"
								title="Chain Announces Multi-Year Partnership with Kraft Sports + Entertainment"
								date="Thu Sep 22 2022"
								link="#"
							/>
							<NewsCard
								image="/images/img-3.png"
								tag="Product"
								title="Coinbase Launches 'Learn-to-Earn' Campaign with Chain (XCN)"
								date="Thu Sep 22 2022"
								link="#"
							/>
							<NewsCard
								image="/images/img-4.png"
								tag="Research"
								title="Chain Research – The Significance of ENS Domain Names and Their Use Cases"
								date="Thu Sep 22 2022"
								link="#"
							/>
						</div>
						<div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-8 mt-8">
							<NewsCard
								image="/images/img-2.png"
								tag="Press"
								title="Chain Announces Multi-Year Partnership with Kraft Sports + Entertainment"
								date="Thu Sep 22 2022"
								content="Client Background For nearly two centuries, our partner has been the 
                                leading design house in…"
								link="#"
							/>
							<NewsCard
								image="/images/img-3.png"
								tag="Product"
								title="Coinbase Launches 'Learn-to-Earn' Campaign with Chain (XCN)"
								date="Thu Sep 22 2022"
								content="What is Happening With the Ethereum Blockchain? The day that has 
                                been highly anticipated in the crypto community is almost here, the 
                                launch of ETH 2.0, or as many know it…"
								link="#"
							/>
						</div>
					</div>
				</div>
			</div>
            {/* ======================================================================================================================= */}
            <div className="py-20 bg-secondary">
                <h1 className="text-[25px] md:text-[30px] font-bold text-center">Brand Assets</h1>
                <p className="text-center mt-4">Download official Chain logos</p>
                <div className="max-w-[1000px] mx-auto justify-center flex flex-col md:flex-row items-center space-y-16 md:space-y-0 md:space-x-8 mt-16 px-4 md:px-0">
                    <div>
                        <p className="text-[20px] font-bold text-dark text-center">Full logo for darker backgrounds</p>
                        <div className="bg-dark p-16 rounded-[7px] my-8">
                            <img src="/logos/chain-white-logo.svg" alt=""/>
                        </div>
                        <button className="primary-btn w-full">Download</button>
                    </div>
                    <div>
                        <p className="text-[20px] font-bold text-dark text-center">Full logo for darker backgrounds</p>
                        <div className="bg-white p-16 rounded-[7px] my-8">
                            <img src="/logos/chain-black-logo.svg" alt=""/>
                        </div>
                        <button className="primary-btn w-full">Download</button>
                    </div>
                </div>
            </div>
            {/* ============================================================================================================================ */}
            <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 px-4 md:px-0 items-center justify-center md:space-x-16 max-w-[1000px] mx-auto py-24">
                <div className="border border-[#eaeaea] p-8 md:p-16 w-full md:w-1/2">
                    <h1 className="text-[30px] font-bold">Chain in on a mission</h1>
                    <p className="text-[16px] mt-6 leading-5">The internet has transformed the way money moves around the world, 
but our underlying financial systems were built for an era long gone. 
Updating them with cryptographic integrity is a huge undertaking. 
Up for the challenge?</p>
                </div>
                <div className="border border-[#eaeaea] p-8 md:p-16 w-full md:w-1/2">
                    <h1 className="text-[30px] font-bold">Preferred links</h1>
                    <div className="flex-col space-y-4 mt-6">
                        <div className="flex items-center space-x-4"><img src="/icons/gray-chain-icon.svg" alt=""/><span><Link href="https://chain.com">https://chain.com</Link></span></div>
                        <div className="flex items-center space-x-4"><img src="/icons/gray-twitter-icon.svg" alt=""/><span><Link href="https://twitter.com/chain">https://twitter.com/chain</Link></span></div>
                        <div className="flex items-center space-x-4"><img src="/icons/gray-telegram-icon.svg" alt=""/><span><Link href="https://t.me/Chain">https://t.me/Chain</Link></span></div>
                    </div>
                </div>
            </div>
		</MainLayout>
	)
}

interface CardProps {
	image: string
	tag: string
	title: string
	date: string
	content?: string
	link: string
}

const NewsCard = ({ image, tag, title, date, content, link }: CardProps) => {
	return (
		<div className=" rounded">
			<div className="h-[207px] ">
				<img src={image} alt="" className="h-full w-full" />
			</div>
			<div className="bg-[#fff] px-[30px] py-[40px] rounded min-h-[350px] ">
				{tag && (
					<div className="text-primary bg-secondary py-[10px] px-[30px] text-small rounded inline">
						{tag}
					</div>
				)}
				<h2 className="mt-[18px] text-[22px] leading-6">{title}</h2>
				<p className="mt-[20px] mb-[25px]">{date}</p>
				<p>{content}</p>
				<Link href={link}>
					<button className="primary-btn mt-8">Learn more</button>
				</Link>
			</div>
		</div>
	)
}

export default Presspage
