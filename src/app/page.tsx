'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { AiFillCaretDown } from 'react-icons/ai';
import NewApost from '~/components/Home/newApost';
import ListNewPost from '~/components/Home/listNewPost';
import SearchAndContact from '~/components/Home/searchAndContact';
import ListPost from '~/components/Home/listPost';

import {
    DICHVU_LUATSU,
    TUVAN_PHAPLUAT,
    TVL_DOANHNGHIEP,
    TVL_DAUTU,
    TVL_LAODONG,
    TVL_THUE,
    TVL_SOHUUTRITUE,
    TVL_HINHSU,
    TVL_THUAKE,
    TVL_DATDAI,
    TVL_HONNHAN,
    TVL_BAOHIEMXAHOI,
    TVL_GIAOTHONG,
    TVL_HANHCHINH,
    TVL_DAUTHAU,
    TVL_NGHIAVUQUANSU,
    TVL_CANHTRANH,
    TVL_MOITRUONG,
    TVL_NGANHANG,
    TVL_CHUNGKHOAN,
    TVL_GIAODUC,
    TUDIEN_PHAPLUAT,
    VANBAN_PHAPLUAT,
    BIEU_MAU,
    GIAO_DUC,
    THONGTIN_HUUICH,
    DICHVU_NOIBAT,
    GoodPostData,
} from '~/FakeDatas';
import PostsInField from '~/components/Home/postsInField';

export default function Home() {
    const [DataInfield, setDataInfield] = useState<Array<any>>([]);

    useEffect(() => {
        setDataInfield([
            {
                title: 'Dịch vụ Luật sư',
                link: '',
                data: DICHVU_LUATSU,
            },
            {
                title: 'Tư vấn Pháp luật',
                link: '',
                data: TUVAN_PHAPLUAT,
            },
            {
                title: 'Tư vấn luật doanh nghiệp ',
                link: '',
                data: TVL_DOANHNGHIEP,
            },
            {
                title: 'Tư vấn luật đầu tư',
                link: '',
                data: TVL_DAUTU,
            },
            {
                title: 'Tư vấn luật lao động',
                link: '',
                data: TVL_LAODONG,
            },
            {
                title: 'Tư vấn luật thuế',
                link: '',
                data: TVL_THUE,
            },
            {
                title: 'Tư vấn luật sở hữu trí tuệ',
                link: '',
                data: TVL_SOHUUTRITUE,
            },
            {
                title: 'Tư vấn luật hình sự',
                link: '',
                data: TVL_HINHSU,
            },
            {
                title: 'Tư vấn luật thừa kế',
                link: '',
                data: TVL_THUAKE,
            },
            {
                title: 'Tư vấn luật đất đai',
                link: '',
                data: TVL_DATDAI,
            },
            {
                title: 'Tư vấn luật hôn nhân',
                link: '',
                data: TVL_HONNHAN,
            },
            {
                title: 'Tư vấn luật bảo hiểm xã hội',
                link: '',
                data: TVL_BAOHIEMXAHOI,
            },
            {
                title: 'giao thông',
                link: '',
                data: TVL_GIAOTHONG,
            },
            {
                title: 'Tư vấn luật hành chính',
                link: '',
                data: TVL_HANHCHINH,
            },
            {
                title: 'Tư vấn luật đấu thầu',
                link: '',
                data: TVL_DAUTHAU,
            },
            {
                title: 'Tư vấn luật nghĩa vụ quân sự',
                link: '',
                data: TVL_NGHIAVUQUANSU,
            },
            {
                title: 'Tư vấn luật cạnh tranh',
                link: '',
                data: TVL_CANHTRANH,
            },
            {
                title: 'Tư vấn luật môi trường',
                link: '',
                data: TVL_MOITRUONG,
            },
            {
                title: 'Tư vấn luật Ngân hàng',
                link: '',
                data: TVL_NGANHANG,
            },
            {
                title: 'Tư vấn luật chứng khoán',
                link: '',
                data: TVL_CHUNGKHOAN,
            },
            {
                title: 'Tư vấn luật giáo dục',
                link: '',
                data: TVL_GIAODUC,
            },
            {
                title: 'Từ điển pháp luật',
                link: '',
                data: TUDIEN_PHAPLUAT,
            },
            {
                title: 'Văn bản pháp luật',
                link: '',
                data: VANBAN_PHAPLUAT,
            },
            {
                title: 'Biểu mẫu',
                link: '',
                data: BIEU_MAU,
            },
            {
                title: 'Giáo dục',
                link: '',
                data: GIAO_DUC,
            },
            {
                title: 'Thông tin hữu ích',
                link: '',
                data: THONGTIN_HUUICH,
            },
            {
                title: 'Dịch vụ nổi bật',
                link: '',
                data: DICHVU_NOIBAT,
            },
        ]);
    }, []);

    console.log(DataInfield[0]);
    return (
        <main className="w-full ">
            <div className="w-full xl:w-[1100px] my-0 mx-auto  py-2 xl:py-5">
                <div className="w-full  xl:h-[430px] pb-3 mb-2.5 flex flex-col xl:flex-row justify-start items-start  overflow-hidden border-b border-[#ccc] ">
                    <div className="w-full xl:w-[50%]   border-r border-[#ccc]">
                        <NewApost data={GoodPostData[0]} />
                    </div>
                    <div className="hidden  xl:block w-full  xl:w-[21.8%]  border-r border-[#ccc]">
                        <ListNewPost />
                    </div>
                    <div className="hidden  xl:w-[28.2%] xl:block  ">
                        <SearchAndContact />
                    </div>
                </div>

                <div className="w-full px-2.5 xl:flex xl:justify-between xl:items-start">
                    <div className="w-full xl:w-1/2 xl:pr-2.5 xl:border-r xl:border-[#ccc] ">
                        <ListPost />
                    </div>
                    <div className="w-full xl:w-1/2 xl:pl-2.5">
                        {DataInfield &&
                            DataInfield.map((item, index) => {
                                return (
                                    <PostsInField
                                        key={index}
                                        title={item.title}
                                        link={item.link}
                                        data={item.data}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </main>
    );
}
