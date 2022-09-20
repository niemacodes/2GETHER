import Navbar from "./Navbar";
import communityInvestment from "../community-owned.webp"
import communityTreasury from "../community-treasury.jpeg"
import communityGovernance from "../governance.png"
import communityLandTrusts from "../community-land.jpeg"
import landing1 from "../landing1edit.png"
import landing2 from "../landing2edit.png"
import landing3 from "../landing3edit.png"

function Home() {
    return (
      <>
        <Navbar></Navbar>

        {/** 1st Section */}
        <section>
          <div className="bg-white text-black ">
            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
              <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                <h1 className="text-4xl md:text-5xl font-bold p-2 text-green-500">2-GETHER</h1>
                <h2 className="mt-5 text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Invest & Build.</h2>
                <p className="text-sm md:text-base text-black mb-4">
                In community owned clean energy projects.
                </p>
                <a href="#_"
                  className="mt-5 bg-transparent hover:font-bold hover:bg-green-500 font-bold text-green-500 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-green-500 hover:border-transparent">
                  Explore Now</a>
              </div>
              <div className="">
                <div className="flex content-center">
                    <div>
                      <img alt="photo1" className="" src={landing1}></img>
                      </div>
                      <div>
                      <img alt="photo2" className=""  src={landing2}></img>
                      </div>
                      <div>
                      <img alt="photo3" className="" src={landing3}></img>
                      </div>
                      </div>
                    </div>
                </div>
              </div>
        </section>

        {/** 2nd Section */}
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6  mx-auto">
          <div class="text-center">
              <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">The Solution</h1>

              <p class="max-w-lg text-lg mx-auto mt-4 font-semibold text-black">
                  What 2-GETHER solves for you & your community:
              </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-4">
            <div>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src={communityInvestment} alt=""></img>
                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#_" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        Community Investment 
                    </a>
                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        To fund large-scale income-producing energy assets. For community members to build equity by utilizing a staking smart contract.
                    </p>
                </div>
            </div>
            <div>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src={communityTreasury} alt=""></img>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#_" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        Community Treasury
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      A community funded treasury where pooled resources that can be grown, traded or borrowed against, and a proxy for share of control. 
                    </p>
                  </div>
                </div>
                <div>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src={communityLandTrusts} alt=""></img>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#_" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        Community Land Trusts
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      Removal of land from open markets to maintain affordability & enable the community to build wealth, revenue & equity.
                    </p>
                </div>
            </div>
            <div>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src={communityGovernance} alt=""></img>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#_" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                      Community Governance
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      Control over owned assets allows you to advocate to retain cornerstones that reflect their history & identity. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/** 3rd section */}
        <h1 class="mt-20 xl:text-5xl md:text-4xl text-1xl font-semibold leading-tight text-center text-gray-800 sm:mb-0">
            We help you build equity & invest in your community.<br class="md:block hidden" /> 
        </h1>
        <h1 class="mt-10 text-xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 ">
            Avoid a $2 Trillion loss a year.<br class="md:block hidden" /> 
        </h1>
        <div class="md:mt-14 mt-4 relative sm:flex items-center justify-center">
            <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map" class="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" ></img>
            <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile" class="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" ></img>

            <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                <p class="text-3xl font-semibold text-gray-800">$464 million</p>
                <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Invested in Renewables in the U.S..</p>
            </div>
            <div class="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                <p class="text-3xl font-semibold text-gray-800">$50 Billion</p>
                <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Annual loss to corporations in Africa.</p>
            </div>
            <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                <p class="text-3xl font-semibold text-gray-800">800 households</p>
                <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">In Asia Affected by 140 MW <br></br>hydropower project</p>
            </div>
        </div>

        {/** 4th section */}
        
      </>
    );
  }

export default Home;