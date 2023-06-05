import { faListUl } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import { AiFillHome, AiOutlineDoubleRight } from 'react-icons/ai';

const Introduce: React.FC = () => {
    return (
        <div className="w-full">
            <div className="w-full xl:w-[1100px] xl:mx-auto px-2.5 pt-5 pb-10">
                <div className="w-full px-2.5 py-1 mb-10 bg-[#F1F1F1] rounded shadow-sm shadow-[#c2bfbf]">
                    <div className="inline-block">
                        <Link
                            href={'/'}
                            className="text-xs flex justify-center items-center"
                        >
                            <AiFillHome className=" mr-1" />
                            Trang chủ
                        </Link>
                    </div>
                    <span className="px-1">
                        <AiOutlineDoubleRight className="text-[#ccc] text-sm inline-block" />
                    </span>
                    <div className="inline-block text-xs">Giới Thiệu</div>
                </div>
                <div className="w-full">
                    <h1 className=" mb-10 text-xl font-bold text-[#ff3a3a] text-center">
                        Giới Thiệu
                        <span className="block">
                            Công Ty Luật PHÚC MINH ANH
                        </span>
                    </h1>
                    <div className="w full">
                        <p className="text-[15px] mb-2.5 indent-3">
                            Chào mừng đến với công ty TNHH MTV Phúc Minh Anh,
                            một phần của Đoàn Luật sư TP.Hồ Chí Minh! Chúng tôi
                            tự hào là một công ty luật hàng đầu, chuyên cung cấp
                            dịch vụ pháp lý chất lượng và tận tâm cho khách hàng
                            tại Tp. Hồ Chí Minh và các vùng lân cận.công ty TNHH
                            MTV Phúc Minh Anh, một phần của Đoàn Luật sư TP.Hồ
                            Chí Minh!
                        </p>

                        <p className="text-[15px] mb-2.5 indent-3">
                            Với sứ mệnh đồng hành cùng khách hàng trong mọi vấn
                            đề pháp lý, chúng tôi cam kết cung cấp giải pháp
                            pháp lý tối ưu và tư vấn chuyên nghiệp đáp ứng mọi
                            nhu cầu và mong muốn của khách hàng. Với đội ngũ
                            luật sư giàu kinh nghiệm, chúng tôi sẵn sàng hỗ trợ
                            và tư vấn trong các lĩnh vực như luật doanh nghiệp,
                            luật lao động, luật hợp đồng, luật dân sự, luật hình
                            sự và nhiều lĩnh vực pháp lý khác. Chúng tôi cam kết
                            cung cấp giải pháp pháp lý tối ưu và tư vấn chuyên
                            nghiệp đáp ứng mọi nhu cầu và mong muốn của khách
                            hàng.
                        </p>

                        <p className="text-[15px] mb-2.5 indent-3">
                            Công ty TNHH MTV Phúc Minh Anh có trụ sở chính đặt
                            tại Tầng trệt 45 Nguyễn Minh Hoàng, Phường 12, Quận
                            Tân Bình, Tp. Hồ Chí Minh. Với vị trí thuận lợi,
                            chúng tôi dễ dàng tiếp cận và phục vụ khách hàng
                            trên toàn TP.Hồ Chí Minh.
                        </p>

                        <p className="text-[15px] mb-2.5 indent-3">
                            Chúng tôi cam kết mang đến cho khách hàng sự tận
                            tâm, chuyên nghiệp và hiệu quả cao trong việc giải
                            quyết các vấn đề pháp lý phức tạp. Chúng tôi luôn
                            đặt lợi ích của khách hàng lên hàng đầu và tận dụng
                            tối đa kiến thức chuyên môn và kinh nghiệm để đảm
                            bảo sự thành công cho khách hàng trong mọi vụ
                            việc.Chúng tôi cam kết mang đến cho khách hàng sự
                            tận tâm, chuyên nghiệp và hiệu quả cao trong việc
                            giải quyết các vấn đề pháp lý phức tạp. Chúng tôi
                            luôn đặt lợi ích của khách hàng lên hàng đầu và tận
                            dụng tối đa kiến thức chuyên môn và kChúng tôi cam
                            kết mang đến cho khách hàng sự tận tâm, chuyên
                            nghiệp và hiệu quả cao trong việc giải quyết các vấn
                            đề pháp lý phức tạp.
                        </p>

                        <p className="text-[15px] mb-2.5 indent-3">
                            Nếu bạn cần sự hỗ trợ pháp lý đáng tin cậy và chất
                            lượng, hãy liên hệ với chúng tôi tại địa chỉ trên
                            hoặc qua số điện thoại 0703-681-368. Chúng tôi sẽ
                            rất vui lòng được làm việc cùng bạn và giúp đỡ trong
                            mọi vấn đề pháp lý pháp lý đáng tin cậy và chất
                            lượng, hãy liên hệ với chúng tôi tại địa chỉ trên
                            hoặc qua số điện thoại 0703-681-368.
                        </p>

                        <p className="text-[15px] mb-4 indent-3">
                            Xin cảm ơn bạn đã quan tâm đến công ty TNHH MTV Phúc
                            Minh Anh. Chúng tôi hy vọng có cơ hội được phục vụ
                            và giúp đỡ bạn trong tương lai gần !
                        </p>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 col-start-2 text-center">
                                <p className="text-[15px] mb-2.5 indent-3 uppercase font-medium">
                                    Giám Đốc
                                </p>
                                <p className="text-[15px] mb-2.5 indent-3">
                                    Luật Sư <strong>Lê Huy Vịnh</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
