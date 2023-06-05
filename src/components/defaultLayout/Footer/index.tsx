'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    BsFillBuildingFill,
    BsFillTelephoneFill,
    BsFillSignpostSplitFill,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { COMPANY_INFORMATION, COMPANY_INFORMATION_EN } from '~/FakeDatas';
import images from '~/assets/images';

const Footer: React.FC = () => {
    const HandleFooterMakeAQuestion = () => {
        console.log('click đặt câu hỏi');
    };
    const HandleFooterMakeAnAppointment = () => {
        console.log('click đặt lịch hẹn');
    };
    return (
        <div className="w-full  bg-[#FAFAFA] border-t border-[#d4d4d4] ">
            <div className="wfull pt-10 pb-5 px-4 text-[15px] xl:w-[1100px] xl:mx-auto xl:grid xl:grid-cols-3 xl:px-0 ">
                <div className="w-full px-[15px]  pb-4 mb-5 col-span-1 ">
                    <div className="w-full px-16 py-5 ">
                        <Link href={'/'} className="w-full text-base font-bold">
                            <Image
                                src={images.LogoCompanyNoBg}
                                alt="logo"
                                className="w-full  object-contain"
                            />
                        </Link>
                    </div>
                    <button
                        onClick={HandleFooterMakeAQuestion}
                        className="w-full uppercase bg-[#ffa801] text-white text-base xl:text-xs xl:font-medium  py-1.5 px-2.5 text-center rounded mb-2.5"
                    >
                        Đặt Câu Hỏi Trực Tuyến
                    </button>
                    <button
                        onClick={HandleFooterMakeAnAppointment}
                        className="w-full uppercase bg-[#4f3829] text-white text-base xl:text-xs xl:font-medium py-1.5 px-2.5 text-center rounded"
                    >
                        Đặt Lịch Hẹn Luật Sư
                    </button>
                </div>
                <div className="w-full px-[15px] pb-4 mb-5 col-span-1 ">
                    <div className="w-full mb-6 ">
                        <h3 className=" text-[18px] inline-block uppercase pb-1  relative before:absolute before:inset-0 before:w-1/5  before:border-b-2 before:border-[#ff9400]  ">
                            Văn Phòng Tại TP. Hồ Chí Minh :
                        </h3>
                    </div>
                    <div className="w-full">
                        <div className="w-full mb-4">
                            <BsFillBuildingFill className="inline mr-2" />
                            <strong className="mr-2">Trụ sở chính:</strong>
                            {COMPANY_INFORMATION.address}. [
                            <div className=" px-1.5  inline-block">
                                <Link
                                    href={
                                        'https://www.google.com/maps/place/45+Nguy%E1%BB%85n+Minh+Ho%C3%A0ng,+Ph%C6%B0%E1%BB%9Dng+12,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.800405,106.6487951,21z/data=!4m6!3m5!1s0x31752948e25342c3:0x2018336576c81088!8m2!3d10.8003553!4d106.6488185!16s%2Fg%2F11f6dcwdz9?entry=ttu'
                                    }
                                    target="_blank"
                                    className=" flex justify-center items-center"
                                >
                                    <div className="w-[15px] ">
                                        <Image
                                            src={images.ImageMap}
                                            alt="chi duong"
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    <span className="inline ml-1.5">
                                        Chỉ đường
                                    </span>
                                </Link>
                            </div>
                            ]
                        </div>
                        <p className="w-full mb-4">
                            <BsFillTelephoneFill className="inline mr-2" />
                            <strong className="mr-2"> Điện thoại:</strong>
                            <span className="text-[#FF0000] font-medium text-base">
                                {COMPANY_INFORMATION.phoneNumber}
                            </span>
                        </p>

                        <p className="w-full mb-4 ">
                            <MdEmail className="inline mr-2" />
                            <strong className="mr-2">Mail:</strong>
                            <span className="text-[#0000FF] text-base">
                                {COMPANY_INFORMATION.email}
                            </span>
                        </p>
                    </div>
                    <div className="w-full"></div>
                </div>

                <div className="w-full px-[15px]  pb-4 mb-5 col-span-1  ">
                    <div className="w-full mb-6 ">
                        <h3 className=" text-[18px] inline-block uppercase pb-1  relative before:absolute before:inset-0 before:w-1/5  before:border-b-2 before:border-[#ff9400]  ">
                            Office in Ho Chi Minh City :
                        </h3>
                    </div>
                    <div className="w-full">
                        <div className="w-full mb-4">
                            <BsFillBuildingFill className="inline mr-2" />
                            <strong className="mr-2">Headquarters:</strong>
                            {COMPANY_INFORMATION_EN.address}. [
                            <div className=" px-1.5  inline-block">
                                <Link
                                    href={
                                        'https://www.google.com/maps/place/45+Nguy%E1%BB%85n+Minh+Ho%C3%A0ng,+Ph%C6%B0%E1%BB%9Dng+12,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.800405,106.6487951,21z/data=!4m6!3m5!1s0x31752948e25342c3:0x2018336576c81088!8m2!3d10.8003553!4d106.6488185!16s%2Fg%2F11f6dcwdz9?entry=ttu'
                                    }
                                    target="_blank"
                                    className=" flex justify-center items-center"
                                >
                                    <div className="w-[15px] ">
                                        <Image
                                            src={images.ImageMap}
                                            alt="chi duong"
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    <span className="inline ml-1.5">
                                        Chỉ đường
                                    </span>
                                </Link>
                            </div>
                            ]
                        </div>
                        <p className="w-full mb-4">
                            <BsFillTelephoneFill className="inline mr-2" />
                            <strong className="mr-2"> Phone:</strong>
                            <span className="text-[#FF0000] font-medium text-base">
                                {COMPANY_INFORMATION_EN.phoneNumber}
                            </span>
                        </p>

                        <p className="w-full mb-4 ">
                            <MdEmail className="inline mr-2" />
                            <strong className="mr-2">Mail:</strong>
                            <span className="text-[#0000FF] text-base">
                                {COMPANY_INFORMATION_EN.email}
                            </span>
                        </p>
                    </div>
                    <div className="w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
