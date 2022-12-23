import Link from "next/link"
import { AiOutlineMedium, AiFillGithub, AiOutlineTwitter, AiOutlineInstagram,  } from 'react-icons/ai'
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-dark pt-20 pb-10">
        <div className="container mx-auto flex flex-col space-y-16 md:space-y-0 md:flex-row md:space-x-[14%] px-[22px] md:px-0 items-start justify-between">
            <div className="w-full md:w-[10%]">
                <img src="/images/chain_white_logo.svg" alt=""/>
                <span className="text-muted">©2022 Chain</span>
            </div>
            <div className="flex space-x-[110px] md:justify-between items-start w-full md:w-[45%]">
                <ul className="flex flex-col space-y-1">
                    <li className="text-muted font-small mb-[10px]"><Link href="#">COMPANY</Link></li>
                    <li className="text-muted font-small"><Link href="#">About</Link></li>
                    <li className="text-muted font-small"><Link href="#">Careers</Link></li>
                    <li className="text-muted font-small"><Link href="#">Chain Gives</Link></li>
                    <li className="text-muted font-small"><Link href="#">Contact</Link></li>
                    <li className="text-muted font-small"><Link href="#">Legal</Link></li>
                    <li className="text-muted font-small"><Link href="#">Press</Link></li>
                </ul>
                <ul className="flex flex-col space-y-1">
                    <li className="text-muted font-small mb-[10px]"><Link href="#">PRODUCTS</Link></li>
                    <li className="text-muted font-small"><Link href="#">App</Link></li>
                    <li className="text-muted font-small"><Link href="#">Cloud</Link></li>
                    <li className="text-muted font-small"><Link href="#">Wallet</Link></li>
                    <li className="text-muted font-small"><Link href="#">Enterprise</Link></li>
                    <li className="text-muted font-small"><Link href="#">NFTs</Link></li>
                    <li className="text-muted font-small"><Link href="#">Sequence</Link></li>
                </ul>
            </div>
            <div className="flex space-x-[90px] md:justify-between items-start w-full md:w-[45%]">
                <ul className="flex flex-col space-y-1">
                    <li className="text-muted font-small mb-[10px]"><Link href="#">COMMUNITY</Link></li>
                    <Link href="#"><li className="text-muted font-small flex items-center space-x-[10px]"><AiOutlineMedium /> <span>Blog</span></li></Link>
                    <Link href="#"><li className="text-muted font-small flex items-center space-x-[10px]"><AiFillGithub /><span>Github</span></li></Link>
                    <Link href="#"><li className="text-muted font-small flex items-center space-x-[10px]"><AiOutlineTwitter /><span>Twitter</span></li></Link>
                    <Link href="#"><li className="text-muted font-small flex items-center space-x-[10px]"><AiOutlineInstagram /><span>Instagram</span></li></Link>
                    <Link href="#"><li className="text-muted font-small flex items-center space-x-[10px]"><FaTelegramPlane /><span>Telegram</span></li></Link>
                    <Link href="#"><li className="text-muted font-small flex items-center space-x-[10px]"><FaDiscord /><span>Discord</span></li></Link>
                </ul>
                <ul className="flex flex-col space-y-1">
                    <li className="text-muted font-small mb-[10px]"><Link href="#">DEVELOPERS</Link></li>
                    <li className="text-muted font-small"><Link href="#">Documentation</Link></li>
                    <li className="text-muted font-small"><Link href="#">5-Minute Guide</Link></li>
                    <li className="text-muted font-small"><Link href="#">Support</Link></li>
                    <li className="text-muted font-small"><Link href="#">SDK</Link></li>
                    <li className="text-muted font-small"><Link href="#">NFTs</Link></li>
                    <li className="text-muted font-small"><Link href="#">API</Link></li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Footer