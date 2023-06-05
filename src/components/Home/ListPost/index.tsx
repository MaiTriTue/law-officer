'use client';

import React, { useRef, useState, useEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoodPostData } from '~/FakeDatas';
import Image from 'next/image';
import Link from 'next/link';

const ListPost: React.FC = () => {
    const [ListPostData, setListPostData] = useState(GoodPostData);
    useEffect(() => {
        setListPostData(GoodPostData);
    }, [GoodPostData]);

    return (
        <div className="w-full">
            {ListPostData &&
                ListPostData.map((item, index) => {
                    if (index <= 10) {
                        return (
                            <div
                                key={index}
                                className="w-full mb-2.5 pb-1.5 border-b border-[#999]"
                            >
                                <div className="w-full  line-clamp-6 xl:line-clamp-4  overflow-hidden   ">
                                    <div className="w-1/3 float-left mr-2 xl:mb-2  rounded  overflow-hidden ">
                                        <Link
                                            href={item.link}
                                            className="w-full "
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full object-cover "
                                            />
                                        </Link>
                                    </div>

                                    <div className="w-full ">
                                        <h1 className="xl:my-2  ">
                                            <Link
                                                href={item.link}
                                                className="text-[#A52A2A] text-base xl:text-lg"
                                            >
                                                {item.title}
                                            </Link>
                                        </h1>
                                        <p className=" text-sm text-black ">
                                            {item.discription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return '';
                })}
        </div>
    );
};

export default ListPost;
