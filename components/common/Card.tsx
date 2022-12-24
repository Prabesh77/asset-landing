import Link from "next/link"

interface CardProps {
    image: string
    tag: string
    title: string
    date: string
    link: string
}

const Card = ({image, tag, title, date, link}: CardProps) => {
  return (
    <div className=" max-w-[350px] rounded">
							<div className="h-[207px] ">
								<img src={image} alt="" className="h-full w-full" />
							</div>
							<div className="bg-[#fff] px-[30px] py-[40px] rounded">
								{tag && <div className="text-primary bg-secondary py-[10px] px-[30px] text-small rounded inline">{tag}</div>}
								<h2 className="mt-[18px] text-[22px] leading-6">
									{title}
								</h2>
								<p className="mt-[20px] mb-[60px]">{date}</p>
								<Link href={link}><button className="primary-btn">Read more</button></Link>
							</div>
						</div>
  )
}

export default Card