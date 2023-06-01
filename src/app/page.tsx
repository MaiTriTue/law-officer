'use client';

import React, { useRef, useState } from 'react';

import Image from 'next/image';
import { AiFillCaretDown } from 'react-icons/ai';
import NewApost from '~/components/Home/NewApost';
import ListNewPost from '~/components/Home/ListNewPost';
import SearchAndContact from '~/components/Home/SearchAndContact';

export default function Home() {
    return (
        <main className="w-full ">
            <div className="w-full xl:w-[1100px] my-0 mx-auto  py-5">
                <div className="w-full h-[70vw] xl:h-[430px] pb-3 flex justify-start items-start  overflow-hidden ">
                    <div className="w-[64.5%] xl:w-[50%]   border-r border-[#ccc]">
                        <NewApost />
                    </div>
                    <div className="w-[35.5%]  xl:w-[21.8%]  border-r border-[#ccc]">
                        <ListNewPost />
                    </div>
                    <div className="hidden  xl:w-[28.2%] xl:block  ">
                        <SearchAndContact />
                    </div>
                </div>
            </div>
        </main>
    );
}
