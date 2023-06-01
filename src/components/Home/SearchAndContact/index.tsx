'use client';

import React, { useRef, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COMPANY_INFORMATION, NavbarData, SubNavbarData } from '~/FakeDatas';
import Image from 'next/image';
import Link from 'next/link';
import images from '~/assets/images';

const SearchAndContact: React.FC = () => {
    return (
        <div className="w-full pl-2.5">
            <div className=" w-full mb-2.5 border-b border-[#ccc]">
                <h1 className="text-base text-[#A52A2A] font-bold px-3 py-2.5 inline-block border-b-2 border-[#f3a400]">
                    Tìm Kiếm
                </h1>
            </div>
            <div className="w-full pb-1.5">
                <form
                    action="/search"
                    method="get"
                    className="flex justify-between items-center "
                >
                    <div className="w-[65%] py-1 text-xs border border-[#ccc] rounded">
                        <input
                            type="text"
                            id="q"
                            name="q"
                            className="w-full pl-2.5"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[30%] py-1 text-xs text-white rounded bg-[#B68656]"
                    >
                        Tìm kiếm
                    </button>
                </form>
            </div>
            <div className="w-full pb-2.5">
                <Link href={'/search?q=  '} className="inline-block"></Link>
                <span className="text-xs text-black  w-full">
                    VD:
                    <Link
                        href={'/search?q=đơn ly hôn  '}
                        className="ml-2 text-xs text-black hover:text-[#8b4513] inline-block"
                    >
                        đơn ly hôn
                    </Link>
                    ,
                    <Link
                        href={'/search?q=ly hôn đơn phương  '}
                        className="ml-2 text-xs text-black hover:text-[#8b4513] inline-block"
                    >
                        ly hôn đơn phương
                    </Link>
                    ,
                    <Link
                        href={'/search?q=tư vấn luật  '}
                        className="ml-2 text-xs text-black hover:text-[#8b4513] inline-block"
                    >
                        tư vấn luật
                    </Link>
                    ,
                    <Link
                        href={'/search?q=tư vấn pháp luật  '}
                        className="ml-2 text-xs text-black hover:text-[#8b4513] inline-block"
                    >
                        tư vấn pháp luật
                    </Link>
                    <Link
                        href={'/search?q=đơn khởi kiện  '}
                        className="ml-2 text-xs text-black hover:text-[#8b4513] inline-block"
                    >
                        đơn khởi kiện
                    </Link>
                    ,
                    <Link
                        href={'/search?q=công ty luật  '}
                        className="ml-2 text-xs text-black hover:text-[#8b4513] inline-block"
                    >
                        công ty luật
                    </Link>
                    ,
                    <Link
                        href={'/search?q=luật sư tư vấn  '}
                        className="ml-2 text-xs text-black hover:text-[#8b4513] inline-block"
                    >
                        luật sư tư vấn
                    </Link>
                    ,
                </span>
            </div>
            <div className="w-full ">
                <div className="w-full  pb-2.5">
                    <Link href={'tel:+84703681368'} className="w-full">
                        <Image
                            src={images.counSelors1}
                            alt="lien he"
                            className="w-full object-cover "
                        />
                    </Link>
                </div>
                <div className="w-full hidden pb-2.5">
                    <Link href={'tel:+84703681368'} className="w-full">
                        <Image
                            src={images.counSelors2}
                            alt="lien he"
                            className="w-full object-cover "
                        />
                    </Link>
                </div>
                <div className="w-full hidden pb-2.5">
                    <Link href={'tel:+84703681368'} className="w-full">
                        <Image
                            src={images.counSelors3}
                            alt="lien he"
                            className="w-full object-cover "
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchAndContact;
