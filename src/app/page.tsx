'use client';

import React, { useRef, useState } from 'react';

import Image from 'next/image';
import { AiFillCaretDown } from 'react-icons/ai';
import NewApost from '~/components/Home/NewApost';
import ListNewPost from '~/components/Home/ListNewPost';
import SearchAndContact from '~/components/Home/SearchAndContact';
import ListPost from '~/components/Home/ListPost';

export default function Home() {
    return (
        <main className="w-full ">
            <div className="w-full xl:w-[1100px] my-0 mx-auto  py-2 xl:py-5">
                <div className="w-full  xl:h-[430px] pb-3 mb-2.5 flex flex-col xl:flex-row justify-start items-start  overflow-hidden border-b border-[#ccc] ">
                    <div className="w-full xl:w-[50%]   border-r border-[#ccc]">
                        <NewApost />
                    </div>
                    <div className="hidden  xl:block w-full  xl:w-[21.8%]  border-r border-[#ccc]">
                        <ListNewPost />
                    </div>
                    <div className="hidden  xl:w-[28.2%] xl:block  ">
                        <SearchAndContact />
                    </div>
                </div>

                <div className="w-full px-2.5">
                    <div className="w-full">
                        <ListPost />
                    </div>
                </div>
            </div>
        </main>
    );
}
