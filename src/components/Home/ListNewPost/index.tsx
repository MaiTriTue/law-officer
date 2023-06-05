'use client';

import React, { useRef, useState, useEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NewPostData } from '~/FakeDatas';
import Image from 'next/image';
import Link from 'next/link';

const ListNewPost: React.FC = () => {
    const [newPostData, setNewPostData] = useState(NewPostData);

    useEffect(() => {
        setNewPostData(NewPostData);
    }, [NewPostData]);
    return (
        <div className="w-full px-[10px]">
            <div className="w-full mb-2.5 border-b border-[#ccc]">
                <h1 className="text-base text-[#A52A2A] font-bold px-3 py-2.5 inline-block border-b-2 border-[#f3a400]">
                    Bài viết mới nhất
                </h1>
            </div>

            <div className="w-full h-[380px] xl:h-[340px]    overflow-y-scroll ">
                {newPostData &&
                    newPostData.map((item, index) => {
                        return (
                            <div
                                className="w-full snap-center pb-1.5  border-b border-[#ccc]"
                                key={index}
                            >
                                <Link
                                    href={item.link}
                                    className="text-sm text-[#333333]"
                                >
                                    {item.title}
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ListNewPost;
