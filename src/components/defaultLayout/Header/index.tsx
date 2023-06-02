'use client';

import React, { useRef, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import {
    faAngleDown,
    faBars,
    faEnvelope,
    faHouseChimney,
    faLocationDot,
    faMagnifyingGlass,
    faPhone,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faGooglePlusG,
    faLinkedinIn,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COMPANY_INFORMATION, NavbarData, SubNavbarData } from '~/FakeDatas';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    const [CompanyInformation, setCompanyInformation] =
        useState(COMPANY_INFORMATION);

    const [navbarData, setNavbarData] = useState(NavbarData);
    const [SubnavbarData, setSubNavbarData] = useState(SubNavbarData);
    const [TooggleSubNav, setTooggleSubNav] = useState(false);
    const ShowMenuRef = useRef<HTMLDivElement>(null);
    const rotateSuvNavRef = useRef<SVGSVGElement>(null);
    const SubNavRef = useRef<HTMLUListElement>(null);

    const HandleOpenMenu = () => {
        if (ShowMenuRef.current) {
            ShowMenuRef.current.classList.remove('hidden');
        }
    };

    const HandleCloseMenu = () => {
        if (ShowMenuRef.current) {
            ShowMenuRef.current.classList.add('hidden');
        }
        if (TooggleSubNav) {
            HandleOpenCloseMenu();
        }
    };
    const HandleOpenCloseMenu = () => {
        if (SubNavRef.current && rotateSuvNavRef.current) {
            if (TooggleSubNav) {
                SubNavRef.current.classList.add('hidden');
                rotateSuvNavRef.current.classList.remove('rotate-180');
                setTooggleSubNav(false);
            } else {
                SubNavRef.current.classList.remove('hidden');
                rotateSuvNavRef.current.classList.add('rotate-180');

                setTooggleSubNav(true);
            }
        }
    };
    return (
        <div className=" w-full transition-all">
            {/* start contact */}
            <div className="w-full h-8 px-2 xl:px-0 flex justify-center bg-[#f5f5f5] border-b border-solid border-[#ddd] ">
                <div className="w-full h-8 px-2 flex justify-between xl:w-[1100px] xl:px-0">
                    <div className="flex items-center ">
                        <Link
                            href={`tel:+${CompanyInformation.Tel}`}
                            className="text-black text-[0.6875rem] font-medium leading-8  pr-1 xl:hover:text-[#8b4513] "
                        >
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="w-2 h-3 inline "
                            />
                            <span> Hotline:</span>
                            <span className="m-1 font-bold">
                                {CompanyInformation.phoneNumber}
                            </span>
                        </Link>
                        <span className="px-2 leading-8 text-black text-[0.6875rem]  font-mediun  border-x border-solid border-[#ccc] xl:hover:text-[#8b4513]">
                            RSS
                        </span>
                    </div>
                    <div className="flex justify-center items-center text-black text-[0.6875rem] font-medium px-1">
                        <Link
                            href={`${CompanyInformation.email}`}
                            className="text-black text-[0.6875rem] font-medium px-1 xl:hover:text-[#8b4513] "
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="w-3 h-3 inline-block"
                            />
                            <span className="mx-1">Truy cập mail</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* end contact */}
            {/* start logo and slogan */}
            <div className="w-full xl:w-[1100px] flex justify-between mx-auto">
                <div className="w-[23%] p-4 ml-2 xl:mx-0 xl:w-[15%] xl:ml-20">
                    <Image
                        src={CompanyInformation.logo}
                        alt={CompanyInformation.name}
                        className="w-full object-cover mt-3.5"
                    />
                </div>
                <div className="w-[77%] pt-6 xl:pt-12 px-5 ">
                    <div className="w-full text-center py-auto ">
                        <h3 className=" drop-shadow text-sm  xl:text-3xl font-bold textCustom">
                            {CompanyInformation.organization}
                        </h3>
                        <h3 className=" drop-shadow text-sm xl:text-3xl font-bold textCustom">
                            {CompanyInformation.name}
                        </h3>
                    </div>
                    <div className="w-full text-xs  pt-3  hidden">
                        <div className="w-full   ">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="w-4 h-4 mr-2  inline-block text-red-500"
                            />
                            <span className=" font-bold textCustom">
                                {CompanyInformation.phoneNumber}
                            </span>
                        </div>
                        <div className=" w-full  ">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="w-4 h-4 mr-2  inline-block  text-red-500"
                            />
                            <span className=" font-bold textCustom">
                                {CompanyInformation.email}
                            </span>
                        </div>
                        <div className="w-full  ">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="w-4 h-4 mr-2  inline-block  text-red-500"
                            />
                            <span className=" font-bold textCustom">
                                {CompanyInformation.address}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* end logo and slogan */}
            {/* start navbar */}
            <div className="w-full bg-[#7d4732] ">
                <div className="flex leading-8  justify-end xl:justify-center items-center">
                    <div
                        onClick={HandleOpenMenu}
                        className="w-[40px] h-[36px] flex justify-center items-center m-1 p-1 border border-solid border-white rounded xl:hidden "
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            className="text-[2rem] text-white"
                        />
                    </div>

                    {/* start navbarr list */}
                    <div className=" w-[1100px] hidden xl:block">
                        <div className="w-full  flex  justify-between items-center">
                            {navbarData &&
                                navbarData.map((item, index) => {
                                    if (index === 0) {
                                        return (
                                            <Link
                                                href={item.link}
                                                key={index}
                                                className="py-1.5  px-5 flex  justify-center items-center  text-white grow xl:hover:bg-orange-500 "
                                            >
                                                <span className="capitalize ">
                                                    {item.title}
                                                </span>
                                            </Link>
                                        );
                                    } else if (index === 3) {
                                        return (
                                            <div
                                                key={index}
                                                className=" group/item  relative"
                                            >
                                                <Link
                                                    onClick={
                                                        HandleOpenCloseMenu
                                                    }
                                                    href={item.link}
                                                    className="py-1.5 px-2 flex justify-between items-center   text-white  transition-all grow xl:hover:bg-orange-500 "
                                                >
                                                    <span className="capitalize mr-2">
                                                        {item.title}
                                                    </span>
                                                    <AiFillCaretDown className="text-md " />
                                                </Link>
                                                <ul
                                                    ref={SubNavRef}
                                                    className="xl:hidden group-hover/item:flex w-full  xl:justify-around xl:items-center xl:flex-wrap xl:w-[250%] xl:pl-0 xl:p-2 bg-[#FAFAFA] xl:border xl:border-solid xl:border-[#d4d4d4] pl-5  absolute top-full"
                                                >
                                                    {SubnavbarData &&
                                                        SubnavbarData.map(
                                                            (
                                                                itemSub,
                                                                indexSub,
                                                            ) => {
                                                                if (
                                                                    index === 3
                                                                ) {
                                                                    return (
                                                                        <Link
                                                                            href={
                                                                                itemSub.link
                                                                            }
                                                                            key={
                                                                                indexSub
                                                                            }
                                                                            className="group/subItem xl:w-[50%] xl:text-xs xl:pl-2  py-1.5 pl-3 flex  justify-start items-center xl:text-[#000000] text-[#cccccc] border-b  border-[#2D2D2D] xl:border-0 "
                                                                        >
                                                                            <span className="capitalize xl:border-b xl:border-transparent  group-hover/subItem:xl:border-[#2D2D2D]">
                                                                                {
                                                                                    itemSub.title
                                                                                }
                                                                            </span>
                                                                        </Link>
                                                                    );
                                                                }
                                                                return '';
                                                            },
                                                        )}
                                                </ul>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <Link
                                                href={item.link}
                                                key={index}
                                                className="py-1.5 px-5 flex  justify-center items-center   text-white  grow hover:bg-orange-500  "
                                            >
                                                <span className="capitalize ">
                                                    {item.title}
                                                </span>
                                            </Link>
                                        );
                                    }
                                })}
                        </div>
                    </div>

                    {/* end navbarr list */}
                </div>
            </div>

            <div
                ref={ShowMenuRef}
                className="w-full min-h-full  bg-black04 fixed top-0 left-0 right-0 bottom-0  hidden "
                // className="w-full bg-black04  fixed top-0 left-0 bottom-0 right-0  hidden"
            >
                <div className=" w-3/4 h-full min-h-[100vh] bg-[#222222]   flex   justify-end relative  ">
                    <div className="w-full ">
                        {/* start button close */}
                        <div
                            onClick={HandleCloseMenu}
                            className="w-[40px] h-[36px] flex justify-center items-center m-1 p-1 border border-solid border-white rounded absolute top-0 right-[-3rem]"
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="text-[2rem] text-white"
                            />
                        </div>
                        {/* end button close */}
                        {/* start input search */}
                        <div className="w-full pt-4 pb-1.5 px-5 ">
                            <div className="w-full bg-white py-1 px-3  border border-solid border-black rounded-3xl relative">
                                <button className="w-[10%] h-full px-2.5  absolute right-3 top-0">
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        className="text-base text-black inline-block mx-auto"
                                    />
                                </button>
                                <input
                                    type="text"
                                    className="w-full outline-none leading-4 "
                                />
                            </div>
                        </div>
                        {/* end input search */}
                        {/* start sosial network  */}

                        <div className="w-full mb-1.5 flex justify-center items-center">
                            <Link href={'#'} className="p-2">
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    className="text-sm  inline-block text-[#cccccc] "
                                />
                            </Link>

                            <Link href={'#'} className="p-2">
                                <FontAwesomeIcon
                                    icon={faGooglePlusG}
                                    className="text-sm  inline-block text-[#cccccc] "
                                />
                            </Link>

                            <Link href={'#'} className="p-2">
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    className="text-sm  inline-block text-[#cccccc] "
                                />
                            </Link>

                            <Link href={'#'} className="p-2">
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="text-sm  inline-block text-[#cccccc] "
                                />
                            </Link>

                            <Link href={'#'} className="p-2">
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    className="text-sm  inline-block text-[#cccccc] "
                                />
                            </Link>
                        </div>
                        {/* end sosial network  */}
                        {/* start navbarr list */}
                        <div className="w-full">
                            {navbarData &&
                                navbarData.map((item, index) => {
                                    if (index === 0) {
                                        return (
                                            <Link
                                                href={item.link}
                                                key={index}
                                                onClick={HandleCloseMenu}
                                                className="py-1.5 pl-3 flex  justify-start items-center  text-[#cccccc] border-y  border-[#2D2D2D]  "
                                            >
                                                <FontAwesomeIcon
                                                    icon={faHouseChimney}
                                                    className="text-xs mr-2 hidden   text-[#cccccc]"
                                                />
                                                <span className="capitalize text-base">
                                                    {item.title}
                                                </span>
                                            </Link>
                                        );
                                    } else if (index === 3) {
                                        return (
                                            <div key={index}>
                                                <Link
                                                    onClick={
                                                        HandleOpenCloseMenu
                                                    }
                                                    href={item.link}
                                                    className="py-1.5 pl-3 flex justify-between items-center  text-[#cccccc] border-b  border-[#2D2D2D] transition-all"
                                                >
                                                    <span className="capitalize ">
                                                        {item.title}
                                                    </span>

                                                    <FontAwesomeIcon
                                                        icon={faAngleDown}
                                                        className="text-md mr-4 "
                                                        size="xs"
                                                        ref={rotateSuvNavRef}
                                                    />
                                                </Link>
                                                <ul
                                                    ref={SubNavRef}
                                                    className="w-full h-[35vh] bg-[#333] pl-5 hidden overflow-y-scroll"
                                                >
                                                    {SubnavbarData &&
                                                        SubnavbarData.map(
                                                            (
                                                                itemSub,
                                                                indexSub,
                                                            ) => {
                                                                if (
                                                                    index === 3
                                                                ) {
                                                                    return (
                                                                        <Link
                                                                            href={
                                                                                itemSub.link
                                                                            }
                                                                            key={
                                                                                indexSub
                                                                            }
                                                                            className="py-1.5 pl-3 flex  justify-start items-center  text-[#cccccc] border-b  border-[#2D2D2D] "
                                                                        >
                                                                            <span className="capitalize ">
                                                                                {
                                                                                    itemSub.title
                                                                                }
                                                                            </span>
                                                                        </Link>
                                                                    );
                                                                }
                                                                return '';
                                                            },
                                                        )}
                                                </ul>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <Link
                                                href={item.link}
                                                key={index}
                                                className="py-1.5 pl-3 flex  justify-start items-center  text-[#cccccc] border-b  border-[#2D2D2D]"
                                            >
                                                <span className="capitalize ">
                                                    {item.title}
                                                </span>
                                            </Link>
                                        );
                                    }
                                })}
                        </div>
                        {/* end navbarr list */}
                    </div>
                </div>
            </div>
            {/* end navbar */}
        </div>
    );
};

export default Header;
