import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const FnftsPage = () => {
  const utility_data = [
    {
      img_url: "./assets/images/fnfts/image1.png",
      title: "60% Reduced Fees in Fundstartup NFT Marketplace",
    },
    {
      img_url: "./assets/images/fnfts/image2.png",
      title: "Purchase the best NFT and Metaverse Assets",
    },
    {
      img_url: "./assets/images/fnfts/image3.png",
      title: "Stake and Farm for Passive Income",
    },
    {
      img_url: "./assets/images/fnfts/image4.png",
      title: "Increased FSP Rate for NFTs Airdrops",
    },
  ];

  const u_data = [
    {
      img_url: "./assets/images/fnfts/u1.png",
      title: "In-Nft real business",
      content:
        "At Fundstartup NFT Space we focus on, NFTs with in-NFT utilites, metaverse lands & assets and other utility based collectibles!",
    },
    {
      img_url: "./assets/images/fnfts/u2.png",
      title: "Lands",
      content:
        "For those looking to become a meta landlord & earn passively through their metaverse spaces",
    },
    {
      img_url: "./assets/images/fnfts/u3.png",
      title: "Metaverse Wearables",
      content:
        "In the real world swag is cool, but in the metaverse it is everything",
    },
    {
      img_url: "./assets/images/fnfts/u4.png",
      title: "Personalized Assets",
      content:
        "Those who are looking to upgrade and enhance their metaverse life will find all their unique needs here",
    },
  ];

  const nft_u_data = [
    {
      img_url: "./assets/images/fnfts/Ellipse1.png",
      title: "Allocation",
      content:
        "30% of all NFT sales on Fundstartup INO Launchpad are reserved for SNFTS holders",
    },
    {
      img_url: "./assets/images/fnfts/Ellipse3.png",
      title: "Lower Commission",
      content:
        "FNFTS holders will get a 60% discount on the Fundstartup NFT marketplace",
    },
    {
      img_url: "./assets/images/fnfts/Bitcoin-2.png",
      title: "Staking/Farming",
      content: "Stake or Farm your SNFTS for passive income",
    },
    {
      img_url: "./assets/images/fnfts/image4.png",
      title: "Random NFT Drops",
      content:
        "Receive FSP based NFT drops while buying and selling items at our Marketplace",
    },
  ];

  return (
    <div className="bg-[#23170b]">
      <Header />
      <div className="container mx-auto font-['play']">
        <div className="">
          <div className="container mx-auto ">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:mt-[55px] items-start px-[50px]">
              <div className="grid sm:justify-items-start justify-items-center">
                <p className="w-[84%] h-auto lg:text-[52px]  sm:text-[30px] text-[20px] text-white font-bold sm:leading-[63px] leading-[40px] non-italic text-start">
                  Your Token To
                  <span className="text-yellow-dark"> Fundstartup NFT</span>
                  <span className=""> Space</span>
                </p>
                <span className="w-[71.2%] h-auto text-white  sm:text-[18px] text-[12px] font-normal sm:leading-[22px] leading-[16px] non-italic sm:text-start md:pr-[48px] sm:pr-[110px] mt-[3.2%]">
                  Claim your FNFTS, and then stake or farm them to enjoy all
                  benefits of Fundstartup NFT Space. From the creators of
                  Fundstartup, #1 blockchain nft and metaverse launchpad.
                </span>
                <div className="flex gap-x-4 mt-[6.8%]">
                  <button className="p-[16px] bg-yellow-dark rounded-[5px] sm:text-[18px] text-[12px]  leading-[22px] font-bold w-[150px] h-[53px]">
                    Claim Now
                  </button>
                </div>
              </div>
              <div className="flex sm:hidden lg:block">
                <div className="relative">
                  <img
                    src="./assets/images/fnfts/Ellipse 25.png"
                    alt="StartUp"
                    className="absolute left-[-120px] bottom-[-200px] z-0"
                  />
                  <img
                    src="./assets/images/fnfts/Ellipse 26.png"
                    alt="StartUp"
                    className="absolute left-[220px] bottom-[-130px] z-0"
                  />
                  <img
                    src="./assets/images/fnfts/GoldBricks-2.png"
                    alt="StartUp"
                    className="w-[83%] h-auto ml-[50px] z-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* A full range of utility benifits */}

        <div className="">
          <div className="container mx-auto ">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:mt-[55px] items-start px-[50px] h-[9.02%]">
              <div className=" lg:block ">
                <div className="flex relative">
                  <img
                    src="./assets/images/fnfts/GearNFT.png"
                    alt="StartUp"
                    className="w-[73.4%] h-auto ml-[50px] z-10"
                  />
                  <img
                    src="./assets/images/fnfts/Ellipse 28.png"
                    alt="StartUp"
                    className="w-[100%] h-auto absolute bottom-[-90px] z-0"
                  />
                </div>
              </div>
              <div className="grid sm:justify-items-start justify-items-center mt-[25%] ml-[25%]">
                <p className=" lg:text-[52px]  sm:text-[30px] text-[20px] text-white font-bold sm:leading-[63px] leading-[40px] non-italic text-start">
                  A Full Range Of <br></br>
                  Utility Benefits
                </p>
                <span className="text-white  sm:text-[18px] text-[12px] font-normal sm:leading-[22px] leading-[16px] non-italic sm:text-start  sm:pr-[110px] mt-[10px]">
                  Owning FNFTS will give access to many perks <br></br>
                  in the Fundstartup NFT Space
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fisrt Card */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[20px] h-[7.75%] mt-[51px] px-[50px]">
          {utility_data.map((item) => {
            return (
              <div className="w-[100%] h-[372px] border-2 border-yellow-dark bg-[#191519] rounded-[5px] text-center  relative">
                <div className="flex justify-center">
                  <p className="text-white font-bold w-[281px] h-[44px] mt-[20px] text-[19px] leading-[22px]  ">
                    {item.title}
                  </p>
                </div>
                <div className="">
                  <img
                    alt=""
                    src="./assets/images/fnfts/Ellipse 20.png"
                    className="w-[100%] h-auto"
                  ></img>
                  <img
                    alt=""
                    src={item.img_url}
                    className=" absolute xl:bottom-[75px] xl:right-[60px] lg:bottom-[100px] lg:right-[45px] md:bottom-[60px] md:right-[60px] sm:bottom-[50px] sm:right-[150px] md:w-[60%] sm:w-[40%] h-auto"
                  ></img>
                </div>
              </div>
            );
          })}
        </div>

        {/* We are all about nfts with utilities */}

        <div className="h-[7.47%] px-[50px] mt-[68px]">
          <div className=" ">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:mt-[55px] items-start  h-[359px]">
              <div className="grid sm:justify-items-start justify-items-center mt-[6%]">
                <p className=" lg:text-[52px]  sm:text-[30px] text-[20px] text-white font-bold sm:leading-[63px] leading-[40px] non-italic text-start">
                  We Are All About NFTs With Utilities
                </p>
                <span className="text-white  sm:text-[18px] text-[12px] font-normal sm:leading-[22px] leading-[16px] non-italic sm:text-start lg:pr-[200px] sm:pr-[110px] mt-[10px]">
                  At Fundstartup NFT Space we focus on, NFTs with in-NFT
                  utilities, metaverse lands & assets and other utility based
                  collectibles!
                </span>
              </div>

              <div className="lg:block ">
                <div className="flex relative justify-center">
                  <img
                    src="./assets/images/fnfts/Ellipse 27.png"
                    alt="StartUp"
                    className="absolute w-[100%] h-auto bottom-[-100px] right-0 z-0"
                  />
                  <img
                    src="./assets/images/fnfts/MiningBitcoin-3.png"
                    alt="StartUp"
                    className="w-[60.8%] h-auto z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[15px] h-[7.75%] lg:mt-[51px] sm:mt-[200px] px-[50px]">
          {u_data.map((item) => {
            return (
              <div className="w-[100%] h-[372px] 2xl:h-[400px] border-2 border-yellow-dark bg-[#191519] rounded-[5px] text-center pb-[30px]">
                <div className="md:mt-[25%] sm:mt-[4%] flex justify-center relative">
                  <img
                    alt=""
                    src={item.img_url}
                    className="md:w-[43%] sm:w-[33%] h-auto z-10"
                  ></img>
                  <img
                    alt=""
                    src="./assets/images/fnfts/Ellipse 25.png"
                    className="absolute xl:bottom-[-100px] lg:bottom-[-60px] md:bottom-[-100px] sm:bottom-[-165px] left-0 w-[100%] h-auto z-0"
                  ></img>
                </div>
                <div className="">
                  <div className="flex justify-center">
                    <p className="text-white font-bold w-[201px] h-[22px] mt-[43px] text-[19px] leading-[22px]  ">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <p className="w-[279px] h-[67px] font-Mont text-[13px] leading-[16px] mt-[12px] text-white">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* A deep dive into nft utilities */}
        <div className="px-[50px] mt-[68px] text-center">
          <div className="grid  justify-items-center mt-[6%]">
            <p className=" text-[52px] text-white font-bold h-[135px] leading-[60px] non-italic ">
              A Deep Dive Into NFT <br></br>Utilities
            </p>
            <p className="text-white w-[542px] h-[48px] font-Mont text-[18px] leading-[22px] mt-[10px]">
              FNFTS holders will have unique benefits and extra ways of{" "}
              <br></br>
              earning and burning to keep a sustainable economy
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[15px] h-[372px] mt-[56px]">
            {nft_u_data.map((item) => {
              return (
                <div className="w-[100%] h-[372px] border-2 border-yellow-dark bg-[#191519] rounded-[5px] text-center ">
                  <div className="">
                    <div className="flex justify-center mt-[20px]">
                      <p className="text-white font-bold w-[281px]  text-[19px] leading-[22px]  ">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex justify-center mt-[12px]">
                      <p className="w-[279px] h-[px] font-Mont text-[13px] leading-[16px]  text-white">
                        {item.content}
                      </p>
                    </div>
                  </div>
                  <div className="mt-[20%] flex justify-center relative">
                    <img
                      alt=""
                      src="./assets/images/fnfts/Ellipse 25.png"
                      className="absolute xl:bottom-[-70px] lg:bottom-[-60px] md:bottom-[-80px] sm:bottom-[-100px] left-0 w-[100%] h-auto z-0"
                    ></img>
                    <img
                      alt=""
                      src={item.img_url}
                      className="w-[55%] h-auto z-10"
                    ></img>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-x-4 mt-[66px] justify-center">
            <button className="p-[16px] bg-yellow-dark rounded-[5px] sm:text-[18px] text-[12px]  leading-[22px] font-bold w-[150px] h-[53px]">
              Claim Now
            </button>
          </div>
        </div>

        {/* An Airdrop From The Creators Of Fundstartup */}
        <div className="h-[17%] px-[50px] mt-[68px] text-center">
          <div className=" ">
            <div className="h-[193px]">
              <div className="grid  justify-items-center mt-[6%]">
                <p className=" w-[859px] text-[52px] text-white font-bold h-[135px] leading-[60px] non-italic ">
                  An Airdrop From The Creators Of <br></br> Fundstartup
                </p>
                <p className="text-white w-[542px] h-[48px] font-Mont text-[18px] leading-[22px] mt-[10px]">
                  The #1 blockchain NFT and metaverse launchpad. Here <br></br>
                  are some of our biggest launches
                </p>
              </div>
            </div>

            <div className="h-[499px] grid grid-cols-2 mt-[50px]">
              <div>
                <img
                  alt=""
                  src="./assets/images/fnfts/baki.png"
                  className="w-[91%] h-auto"
                ></img>
              </div>

              <div className="flex justify-end items-end">
                <div className="w-[525px]">
                  <div className="flex justify-center">
                    <p className="w-[497px] h-[96px] text-white font-bold text-[40px] leading-[46px]">
                      Our First Airdrop, FSP, Reached:
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      alt=""
                      src="./assets/images/fnfts/airdrop4.png"
                      className="w-[51.8] h-auto"
                    ></img>
                  </div>
                  <div className="flex justify-center mt-[35px]">
                    <p className="w-[525px] h-[49px] text-white font-bold text-[40px] leading-[46px]">
                      Market Cap All-Time-High
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Take The Sky High */}
        <div className="h-[5.25%] border-2 border-yellow-dark rounded-[5px] bg-gradient-to-t from-[#f6b43233] to-[#16161a00] flex mt-[10%] mb-[15%]">
          <div className="flex items-center h-[252px] ml-[5%]">
            <div>
              <p className="w-[398px] h-[49px] text-white font-bold text-[40px] leading-[46px]">
                Take The Sky High
              </p>
              <p className="w-[475px] h-[48px] text-white font-normal text-[18px] leading-[22px] font-Mont">
                Check the documentation and details about all the<br></br>
                guidelines, conditions and rules for FNFTS
              </p>
            </div>
          </div>
          <div className="flex  items-center ml-[26%]">
            <button className=" w-[251px] h-[53px] bg-yellow-dark rounded-[5px]">
              <div className="flex container mx-auto px-[40px]">
                <p className="font-bold text-[18px] leading-[21px]">
                  Learn More
                </p>
                <div className="grid w-[43%]">
                  <div className="grid justify-items-end">
                    <img alt="" src="./assets/images/arrowright.png"></img>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FnftsPage;