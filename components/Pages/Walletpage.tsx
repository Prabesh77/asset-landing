import MainLayout from "../layout/MainLayout"

const Walletpage = () => {
    return(
        <MainLayout>
            <div className="md:h-[675px]">
				<div className="flex flex-col-reverse md:flex-row container mx-auto items-center  px-[24px] md:px-0 py-20">
					<div className="text-dark w-full md:w-1/2 md:max-w-[500px] mt-8 md:mt-0">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px] ">
                        Chain Wallet
						</h1>
						
						<p className="text-[19px] mt-6">
                        Your Gateway to Web3. Buy & Sell Crypto, Manage NFTs, 
View Market Prices and much more!
						</p>
						<div className="flex items-start space-x-[26px] mt-12 ">
							<button className="">
								<img src="/icons/app-store-dark.png" />''
							</button>
							<button className="">
								<img src="/icons/play-store-dark.png" />
							</button>
						</div>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end w-full md:w-1/2">
						<img src="/images/wallet-cover.png" alt="" className="w-[500px]" />
						{/* <img src="/images/yellow-shadow.svg" alt="" className="" />
						<img src="/images/blue-shadow.svg" alt="" className="" /> */}
					</div>
				</div>
			</div>
			{/* -------------------------------------------------------------------------------------------------------------------------- */}

            <div className="py-20">
                <div className="max-w-[1300px] mx-auto px-4 md:px-0">
                    <h1 className="text-[30px] font-bold">All-in-one Wallet App</h1>   
                    <p className="text-[16px] max-w-[500px] mt-2 leading-5">The Chain Wallet enables users to self-custody their cryptocurrencies and NFTs while 
access decentralized finance (DeFi) with ease.</p>

                    <div className="mt-16 flex flex-col-reverse space-y-8 md:space-y-0 md:flex-row items-center">
                        <div className="flex flex-col space-y-4 w-full md:w-1/2 mt-8 md:mt-0">
                                <div className="px-[22px] py-[12px] border border-[#eaeaea] rounded-[7px] max-w-[480px] hover:border-primary">
                                    <h2 className="text-[22px] font-bold">Buy Crypto</h2>
                                    <p className="text-[16px] leading-5">Use your debit or credit card to buy Bitcoin, Ethereum and other cryptocurrencies instantly.</p>
                                </div>
                                <div className="px-[22px] py-[12px] border border-[#eaeaea] rounded-[7px] max-w-[480px] hover:border-primary">
                                    <h2 className="text-[22px] font-bold">Manage NFT’s</h2>
                                    <p className="text-[16px] leading-5">View all your blockchain collectibles safely and securely on Assets 
with support for ERC-721 and ERC-1121 NFTs.</p>
                                </div>
                                <div className="px-[22px] py-[12px] border border-[#eaeaea] rounded-[7px] max-w-[480px] hover:border-primary">
                                    <h2 className="text-[22px] font-bold">Earn & Borrow</h2>
                                    <p className="text-[16px] leading-5">Earn yield on your crypto or utilize it to get access to a credit line 
with decentralized finance (DeFi).</p>
                                </div>
                                <div className="px-[22px] py-[12px] border border-[#eaeaea] rounded-[7px] max-w-[480px] hover:border-primary">
                                    <h2 className="text-[22px] font-bold">Instant Exchanges</h2>
                                    <p className="text-[16px] leading-5">Swap hundreds of cryptocurrencies instantly and directly on-chain. 
Skip the hassle.</p>
                                </div>
                                <div className="px-[22px] py-[12px] border border-[#eaeaea] rounded-[7px] max-w-[480px] hover:border-primary">
                                    <h2 className="text-[22px] font-bold">Web3 Ready</h2>
                                    <p className="text-[16px] leading-5">Get access to thousands of web3 applications utilizing the built in 
dApp browser without having to leave the app.</p>
                                </div>
                                <div className="px-[22px] py-[12px] border border-[#eaeaea] rounded-[7px] max-w-[480px] hover:border-primary">
                                    <h2 className="text-[22px] font-bold">Private & Secure</h2>
                                    <p className="text-[16px] leading-5">Access private and popular blockchain protocols with Assets. Only 
you have access to your funds secured by a default 24 word 
seed-phrase.</p>
                                </div>
                                <div className="flex flex-col space-y-4 pl-4">
                                    <p className="text-[16px]">Powered by</p>
                                    <img src="/images/moonpay-logo.png" alt="" className="flex self-start"/>
                                </div>
                        </div> 
                        <div className="w-full md:w-1/2 flex items-center justify-center ">
                            <img src="/images/app-feature-img.png" alt="" className="w-[80%]"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------- */}
            <div className="py-16">
                <h1 className="text-[25px] md:text-[30px] font-bold text-center">Blockchain networks supported</h1>
                <div className="max-w-[1000px] mx-auto mt-16 grid gap-4 items-start grid-cols-4 md:grid-cols-7 place-items-center">
                        <div className="text-center w-10 md:w-16 ">
                            <img src="/icons/monero.png" alt=""/>
                            <p className="mt-2">Monero</p>
                        </div>
                        <div className="text-center w-10 md:w-16 ">
                            <img src="/icons/bitcoin-lighting.png" alt=""/>
                            <p className="mt-2">Bitcoin Lightening</p>
                        </div>
                        <div className="text-center w-10 md:w-16 ">
                            <img src="/icons/eth-purple.png" alt=""/>
                            <p className="mt-2">Ethereum</p>
                        </div>
                        <div className="text-center w-10 md:w-16 ">
                            <img src="/icons/bitcoin-lg.png" alt=""/>
                            <p className="mt-2">Bitcoin</p>
                        </div>
                        <div className="text-center w-10 md:w-16 ">
                            <img src="/icons/zcash.png" alt=""/>
                            <p className="mt-2">Zcash</p>
                        </div>
                        <div className="text-center w-10 md:w-16 ">
                            <img src="/icons/xrp.png" alt=""/>
                            <p className="mt-2">XRP</p>
                        </div>
                        <div className="text-center w-10 md:w-16 ">
                            <img src="/icons/dash.png" alt=""/>
                            <p className="mt-2">DASH</p>
                        </div>
                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------- */}
            <div className="bg-secondary w-full flex justify-end ">
				<div className="flex flex-col md:flex-row w-full md:w-[75%] justify-self-end items-center justify-between   md:px-0  ">
					<div className="text-dark w-full md:w-1/2 md:max-w-[500px] mt-8 md:mt-0 px-[24px] md:px-0">
						<h1 className="text-[30px] md:text-[45px] leading-[38px] md:leading-[50px] ">
                        Download the 
Chain Wallet app now!
						</h1>
						
						<p className="text-[19px] mt-6">
                        Your gateway to crypto starts today!
						</p>
						<div className="flex items-start space-x-[26px] mt-12 ">
							<button className="">
								<img src="/icons/app-store-dark.png" />''
							</button>
							<button className="">
								<img src="/icons/play-store-dark.png" />
							</button>
						</div>
					</div>
					<div className="h-full flex items-center justify-center md:justify-end w-full md:w-1/2  pt-24">
						<img src="/images/phone-in-hand.png" alt="" className="w-[655px]" />
						{/* <img src="/images/yellow-shadow.svg" alt="" className="" />
						<img src="/images/blue-shadow.svg" alt="" className="" /> */}
					</div>
				</div>
			</div>
        </MainLayout>
        
    )
}

export default Walletpage