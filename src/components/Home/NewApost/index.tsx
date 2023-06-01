'use client';

import React, { useRef, useState, useEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoodPostData } from '~/FakeDatas';
import Image from 'next/image';
import Link from 'next/link';

const NewApost: React.FC = () => {
    const [newApost, setNewApost] = useState({
        title: '',
        link: '',
        image: '',
        discription: '',
    });
    useEffect(() => {
        setNewApost(GoodPostData[0]);
    }, [GoodPostData]);

    return (
        <div className="w-full px-3 overflow-hidden">
            <div className="w-full h-[37vw] xl:h-[250px]  overflow-hidden">
                <Link href={newApost.link} className="w-full ">
                    <Image
                        src={newApost.image}
                        alt={newApost.title}
                        // width={100}
                        // height={100}
                        className="w-full object-cover mt-12"
                    />
                </Link>
            </div>
            <div className="w-full">
                <h1 className="w-full my-2  ">
                    <Link
                        href={newApost.link}
                        className="text-[#A52A2A] text-lg"
                    >
                        {newApost.title}
                    </Link>
                </h1>
                <p className="w-full line-clamp-6 xl:line-clamp-4 text-sm text-black ">
                    {newApost.discription}
                </p>
            </div>
        </div>
    );
};

export default NewApost;
