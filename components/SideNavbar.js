import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure} from "@headlessui/react";
import { IoStatsChart } from "react-icons/io5";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdQuiz,
  MdOutlineAddchart,
  MdOutlineWaterfallChart 
} from "react-icons/md";
import { FiSun, FiMoon } from 'react-icons/fi';
import { RiAdminFill } from "react-icons/ri";
import { FaRegComments,FaMapMarkedAlt,FaAngleDown ,FaChartPie,FaChartArea,FaAngleRight} from "react-icons/fa";
import { FaChartBar, FaChartLine } from "react-icons/fa6";


function SideNavbar(){
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Disclosure as="nav">
     
        <div className={`p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 ${darkMode ? 'dark' : 'light'}`}>
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Dashboard
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaMapMarkedAlt  className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Map Embed
                </h3>
              </div>
              <Disclosure>
                {({ open }) => (
                  <>
                   <Disclosure.Button className="flex items-center mb-2 justify-start gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                     <div className="flex items-center">
                     <IoStatsChart className="text-2xl text-gray-600 group-hover:text-white" />
                     <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ml-2">Chart Embed</h3>
                      </div>
                     <FaAngleDown className="text-gray-600 ml-auto" />
                      </Disclosure.Button>

                    <Disclosure.Panel>
                      <div className="pl-8">
                        {/* Submenu items for Chart Embed */}
                        <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                          <FaChartBar className="text-2xl text-gray-600 group-hover:text-white" />
                          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Bar Chart</h3>
                          <FaAngleRight className="text-gray-600 ml-auto" />
                        </div>
                        
                        <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                          <FaChartPie className="text-2xl text-gray-600 group-hover:text-white" />
                          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Pie Chart</h3>
                        </div>
                        <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                          <FaChartLine className="text-2xl text-gray-600 group-hover:text-white" />
                          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Line Chart</h3>
                        </div>
                        <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                          <MdOutlineAddchart className="text-2xl text-gray-600 group-hover:text-white" />
                          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Column & Line Chart</h3>
                        </div>
                        <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                          <FaChartArea className="text-2xl text-gray-600 group-hover:text-white" />
                          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Area Chart</h3>
                        </div>
                        <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                          <MdOutlineWaterfallChart className="text-2xl text-gray-600 group-hover:text-white" />
                          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Waterfall Chart</h3>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* End of Submenu for Chart Embed */}
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Crossword
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdQuiz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Quiz
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <RiAdminFill className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Admin
                </h3>
              </div>
          </div>

            {/* Settings */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* Dark Mode Button in Top Right Corner */}
      <div className="fixed top-4 right-4">
        <button className="focus:outline-none" onClick={toggleDarkMode}>
          {darkMode ? <FiSun className="text-2xl text-yellow-400" /> : <FiMoon className="text-2xl text-gray-600" />}
        </button>
      </div>
    </div>
  );
}

export default SideNavbar; 







