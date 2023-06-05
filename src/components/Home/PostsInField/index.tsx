'use client';

import React, { useRef, useState, useEffect } from 'react';
import { BsDot } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GoodPostData } from '~/FakeDatas';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '~/models/Post';

interface Props {
    title?: string;
    link?: string;
    data?: Array<Post>;
}

const PostsInField: React.FC<Props> = (props: Props) => {
    const { title, link, data } = props;
    const [ListPostData, setListPostData] = useState(GoodPostData);
    useEffect(() => {
        setListPostData(GoodPostData);
    }, [GoodPostData]);

    return (
        <div className="w-full pb-5">
            <div className="w-full bg-[#E8E8E8]">
                <Link
                    href={link ? link : '/'}
                    className="inline-block text-base text-[#A52A2A]"
                >
                    <h3 className=" px-3 py-1 font-bold inline-block  border-b-2 border-[#F3A400] ">
                        {title}
                    </h3>
                </Link>
            </div>
            {data && (
                <div className="w-full xl:flex xl:justify-between xl:items-start  border-b border-[#e2e2e3] pb-2.5 mb-2.5">
                    <div className="w-full xl:w-3/5 xl:pr-2.5">
                        <h3 className="w-full py-2 mb-2">
                            <Link
                                href={link ? link : '/'}
                                className="w-full text-base font-bold"
                            >
                                {data[0].title}
                            </Link>
                        </h3>
                        <div className="w-full line-clamp-6 overflow-hidden">
                            <div className="w-[40%] px-2.5 pb-2.5 float-left">
                                <Link
                                    href={link ? link : '/'}
                                    className="w-full "
                                >
                                    <img
                                        src={data[0].image}
                                        alt={data[0].title}
                                        className="w-full object-cover "
                                    />
                                </Link>
                            </div>
                            <p className="text-sm">{data[0].discription}</p>
                        </div>
                    </div>
                    <div className="w-full xl:w-2/5 xl:pl-2.5">
                        {data.map((item, index) => {
                            if (index > 0 && index < 4) {
                                return (
                                    <div
                                        className="w-full flex justify-start items-center py-2.5 "
                                        key={index}
                                    >
                                        <BsDot className="w-4 text-[#666666]" />
                                        <Link
                                            href={item.link ? item.link : '/'}
                                            className="line-clamp-1 text-xs text-[#666666]"
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            )}

            <div className="w-full">
                {data &&
                    data.map((item, index) => {
                        if (index >= 4 && index < 10) {
                            return (
                                <div
                                    className="w-full flex justify-start items-center py-1 "
                                    key={index}
                                >
                                    <BsDot className="w-4 text-[#666666]" />
                                    <Link
                                        href={item.link ? item.link : '/'}
                                        className="line-clamp-1 text-sm text-[#666666]"
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
    );
};

export default PostsInField;
