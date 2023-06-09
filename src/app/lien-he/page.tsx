'use client';

import Link from 'next/link';
import React from 'react';
import ConsultationForm from '~/components/contacts/consultationForm';

const Contact: React.FC = () => {
    return (
        <div className="w-full pb-10">
            <div className="w-full xl:w-[1100px] mx-auto px-2.5">
                <div className="w-full my-5">
                    <h1 className="text-center text-2xl text-black font-bold my-2.5">
                        Liên Hệ
                    </h1>
                </div>

                <div className="w-full  xl:grid xl:grid-cols-2">
                    <div className="text-sm xl:col-span-1 mb-5 xl:pr-5 xl:border-r xl:border-[#ccc] ">
                        <h2 className="text-base text-black font-bold mb-5 py-2 px-1 border-b border-[#ccc] rounded bg-[#F1F1F1] shadow-md ">
                            CÔNG TY LUẬT TNHH MTV PHÚC MINH ANH
                        </h2>
                        <p className="py-1.5">
                            Địa chỉ trụ sở : Tầng trệt 45 Nguyễn Minh Hoàng,
                            P.12, Q.Tân Bình, Tp Hồ Chí Minh. [
                            <Link
                                href={
                                    'https://www.google.com/maps/place/45+Nguy%E1%BB%85n+Minh+Ho%C3%A0ng,+Ph%C6%B0%E1%BB%9Dng+12,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.800405,106.6487951,21z/data=!4m6!3m5!1s0x31752948e25342c3:0x2018336576c81088!8m2!3d10.8003553!4d106.6488185!16s%2Fg%2F11f6dcwdz9?entry=ttu'
                                }
                                target="_blank"
                                className=" text-black hover:text-[#8b4513]"
                            >
                                Xem trên bản đồ
                            </Link>
                            ]
                        </p>
                        <p className="py-1.5">
                            Điện thoại liên hệ dịch vụ: 0703-681-368
                        </p>
                        <p className="py-1.5">Email: luatsuhuyvinh@gmail.com</p>
                        <p className="py-1.5">
                            LUẬT SƯ TƯ VẤN PHÁP LUẬT TRỰC TUYẾN QUA TỔNG ĐÀI
                            ĐIỆN THOẠI: 0703-681-368
                        </p>
                        <p className="py-1.5 font-bold">Thời gian làm việc</p>
                        <p className="py-1.5">
                            Giờ hành chính: Từ thứ Hai đến thứ Sáu Sáng: 8h00 –
                            12h00, Chiều: 13h00 – 17h00
                        </p>
                        <p className="py-1.5">
                            Ngoài giờ: Chủ nhật và khung giờ các ngày trong
                            tuần: 12h00 – 13h00, Chiều: 17h00 – 21h00
                        </p>
                    </div>
                    <div className="text-sm xl:col-span-1 xl:pl-5  ">
                        <h2 className="text-base text-black font-bold mb-5 py-2 px-1 border-b border-[#ccc] rounded bg-[#F1F1F1] shadow-md ">
                            Gửi liên hệ đến Luật PHÚC MINH ANH
                        </h2>
                        <p className="py-1.5 text-[#FF0000] font-medium">
                            Lưu ý: Trang này chỉ tiếp nhận báo giá dịch vụ và
                            đặt lịch tư vấn trực tiếp tại văn phòng.
                            <a
                                href={
                                    'https://www.google.com/maps/place/45+Nguy%E1%BB%85n+Minh+Ho%C3%A0ng,+Ph%C6%B0%E1%BB%9Dng+12,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.800405,106.6487951,21z/data=!4m6!3m5!1s0x31752948e25342c3:0x2018336576c81088!8m2!3d10.8003553!4d106.6488185!16s%2Fg%2F11f6dcwdz9?entry=ttu'
                                }
                                target="_blank"
                                className=" text-[#0000FF] hover:text-[#8b4513] px-1 underline decoration-inherit"
                            >
                                Nhấn vào đây
                            </a>
                            nếu bạn cần tư vấn pháp luật trực tuyến qua Email.
                        </p>
                        <div className="w-full text-xs">
                            <ConsultationForm />

                            {/* <form action="" className="w-full">
                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Hình thức liên hệ (*)
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="abc"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Tiêu đề (*)
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="Tiêu đề"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Tên bạn (*)
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="Tên của bạn"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Email (*)
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="Địa chỉ nhận hỏi đáp"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Điện thoại (*)
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="Điện thoại khi luật sư liên hệ"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Khu vực (*)
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="abc"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Lĩnh vực (*)
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="abc"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Nội dung (*)
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="Nội dung yêu cầu phải được viết bằng tiếng việt có dấu"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Đính kèm tệp tin
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="abc"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center my-2.5">
                                    <label
                                        htmlFor=""
                                        className="w-[35%] font-medium"
                                    >
                                        Hình thức liên hệ (*)
                                    </label>
                                    <div className="w-[62%]  border border-[#ccc] rounded">
                                        <input
                                            type="text"
                                            className="w-full py-2.5 px-2.5 "
                                            placeholder="abc"
                                        />
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
