import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';

interface MyFormValues {
    service: string;
    title: string;
    name: string;
    email: string;
    phone: string;
    province: string;
    field: string;
    content: string;
    file: any;
}

const ConsultationForm: React.FC<{}> = () => {
    let Schema = Yup.object().shape({
        service: Yup.string().required('Trường này không được đê trống !'),
        title: Yup.string().required('Trường này không được đê trống !'),
        name: Yup.string().required('Trường này không được đê trống !'),
        email: Yup.string()
            .email('không phải định dạng Email')
            .required('Trường này không được đê trống !'),
        phone: Yup.string().required('Trường này không được đê trống !'),
        province: Yup.string(),
        field: Yup.string(),
        content: Yup.string().required('Trường này không được đê trống !'),
    });

    const formik: FormikProps<MyFormValues> = useFormik<MyFormValues>({
        initialValues: {
            service: '',
            title: '',
            name: '',
            email: '',
            phone: '',
            province: '',
            field: '',
            content: '',
            file: '',
        },
        onSubmit: (values, action): void => {
            console.log(values);
        },
        validationSchema: Schema,
    });

    return (
        <form action="" className="w-full" onSubmit={formik.handleSubmit}>
            <div className="w-full flex justify-between items-center my-2.5">
                <label htmlFor="" className="w-[35%] font-medium">
                    Hình thức liên hệ (*)
                </label>
                <div className="w-[62%]  border border-[#ccc] rounded">
                    <select
                        name="service"
                        id="service"
                        onChange={(event) => {
                            formik.values.service = event.target.value;
                            console.log(formik.values.service);
                        }}
                        className="w-full py-2.5 px-2.5 "
                    >
                        <option value={''}>[- Mời lựa chọn -]</option>
                        <option value="1">Báo giá dịch vụ</option>
                        <option value="2">Đặt lịch tư vấn trực tiêp</option>
                    </select>
                </div>
            </div>

            {formik.errors.service && formik.touched.service && (
                <p className="text-red-500 pl-[38%] ">
                    {formik.errors.service}
                </p>
            )}

            <div className="w-full flex justify-between items-center my-2.5">
                <label htmlFor="title" className="w-[35%] font-medium">
                    Tiêu đề (*)
                </label>
                <div className="w-[62%]  border border-[#ccc] rounded">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        className="w-full py-2.5 px-2.5 "
                        placeholder="Tiêu đề"
                    />
                </div>
            </div>
            {formik.errors.title && formik.touched.title && (
                <p className="text-red-500 pl-[38%] ">{formik.errors.title}</p>
            )}

            <div className="w-full flex justify-between items-center my-2.5">
                <label htmlFor="name" className="w-[35%] font-medium">
                    Tên bạn (*)
                </label>
                <div className="w-[62%]  border border-[#ccc] rounded">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        className="w-full py-2.5 px-2.5 "
                        placeholder="Tên của bạn"
                    />
                </div>
            </div>

            {formik.errors.name && formik.touched.name && (
                <p className="text-red-500 pl-[38%] "> {formik.errors.name} </p>
            )}

            <div className="w-full flex justify-between items-center my-2.5">
                <label htmlFor="email" className="w-[35%] font-medium">
                    Email (*)
                </label>
                <div className="w-[62%]  border border-[#ccc] rounded">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="w-full py-2.5 px-2.5 "
                        placeholder="Địa chỉ nhận hỏi đáp"
                    />
                </div>
            </div>

            {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 pl-[38%] ">{formik.errors.email}</p>
            )}

            <div className="w-full flex justify-between items-center my-2.5">
                <label htmlFor="phone" className="w-[35%] font-medium">
                    Điện thoại (*)
                </label>
                <div className="w-[62%]  border border-[#ccc] rounded">
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        className="w-full py-2.5 px-2.5 "
                        placeholder="Điện thoại khi luật sư liên hệ"
                    />
                </div>
            </div>

            {formik.errors.phone && formik.touched.phone && (
                <p className="text-red-500 pl-[38%] ">{formik.errors.phone}</p>
            )}

            <div className="w-full flex justify-between items-center my-2.5">
                <label htmlFor="" className="w-[35%] font-medium">
                    Khu vực
                </label>
                <div className="w-[62%]  border border-[#ccc] rounded">
                    <select
                        name="province"
                        id="province"
                        onChange={(event) => {
                            formik.values.service = event.target.value;
                        }}
                        className="w-full py-2.5 px-2.5 "
                    >
                        <option value=""> [- Lựa chọn Khu vực -]</option>
                        <option value="1">An Giang</option>
                        <option value="2">Bà Rịa-Vũng Tàu</option>
                        <option value="3">Bạc Liêu</option>
                        <option value="4">Bắc Kạn </option>
                        <option value="5">Bắc Giang</option>
                        <option value="6">Bắc Ninh</option>
                        <option value="7">Bến Tre</option>
                        <option value="8">Bình Dương</option>
                        <option value="9">Bình Định</option>
                        <option value="10">Bình Phước</option>
                        <option value="11">Bình Thuận</option>
                        <option value="12">Cà Mau</option>
                        <option value="13">Cao Bằng</option>
                        <option value="14">Thành phố Cần Thơ</option>
                        <option value="15">Thành phố Đà Nẵng</option>
                        <option value="16">Đắk Lắk</option>
                        <option value="17">Đắk Nông</option>
                        <option value="18">Điện Biên</option>
                        <option value="19">Đồng Nai</option>
                        <option value="20">Đồng Tháp</option>
                        <option value="21">Gia Lai</option>
                        <option value="22">Hà Giang</option>
                        <option value="23">Hà Nam</option>
                        <option value="24">Thành phố Hà Nội</option>
                        <option value="25">Hà Tây</option>
                        <option value="26">Hà Tĩnh</option>
                        <option value="27">Hải Dương</option>
                        <option value="28">Thành phố Hải Phòng</option>
                        <option value="29">Hòa Bình</option>
                        <option value="30">Thành phố Hồ Chí Minh</option>
                        <option value="31">Hậu Giang</option>
                        <option value="32">Hưng Yên</option>
                        <option value="33">Khánh Hòa</option>
                        <option value="34">Kiên Giang</option>
                        <option value="35">Kon Tum</option>
                        <option value="36">Lai Châu</option>
                        <option value="37">Lào Cai</option>
                        <option value="38">Lạng Sơn</option>
                        <option value="39">Lâm Đồng</option>
                        <option value="40">Long An</option>
                        <option value="41">Nam Định</option>
                        <option value="42">Nghệ An </option>
                        <option value="43">Ninh Bình</option>
                        <option value="44">Ninh Thuận</option>
                        <option value="45">Phú Thọ</option>
                        <option value="46">Phú Yên</option>
                        <option value="47">Quảng Bình</option>
                        <option value="48">Quảng Nam</option>
                        <option value="49">Quảng Ngãi</option>
                        <option value="50">Quảng Ninh</option>
                        <option value="51">Quảng Trị</option>
                        <option value="52">Sóc Trăng</option>
                        <option value="53">Sơn La</option>
                        <option value="54">Tây Ninh</option>
                        <option value="55">Thái Bình</option>
                        <option value="56">Thái Nguyên</option>
                        <option value="57">Thanh Hóa</option>
                        <option value="58">Thừa Thiên Huế</option>
                        <option value="59">Tiền Giang</option>
                        <option value="60">Trà Vinh</option>
                        <option value="61">Tuyên Quang</option>
                        <option value="62">Vĩnh Long</option>
                        <option value="63">Vĩnh Phúc</option>
                        <option value="64">Yên Bái</option>
                    </select>
                </div>
            </div>

            {formik.errors.province && formik.touched.province && (
                <p className="text-red-500 pl-[38%] ">
                    {formik.errors.province}
                </p>
            )}

            <div className="w-full flex justify-between items-center my-2.5">
                <label htmlFor="" className="w-[35%] font-medium">
                    Lĩnh vực
                </label>
                <div className="w-[62%]  border border-[#ccc] rounded">
                    <select
                        name="field"
                        id="field"
                        onChange={(event) => {
                            formik.values.field = event.target.value;
                        }}
                        className="w-full py-2.5 px-2.5 "
                    >
                        <option value="">[- Lựa chọn Lĩnh vực -]</option>
                        <option value="1">doanh nghiệp</option>
                        <option value="2">đầu tư</option>
                        <option value="3">lao động</option>
                        <option value="4">thuế</option>
                        <option value="5">sở hữu trí tuệ</option>
                        <option value="6">hình sự</option>
                        <option value="7">dân sự</option>
                        <option value="8">thừa kế</option>
                        <option value="9">đất đai</option>
                        <option value="10">hôn nhân</option>
                        <option value="11">bảo hiểm xã hội</option>
                        <option value="12">giao thông</option>
                        <option value="13">hành chính</option>
                        <option value="14">đấu thầu</option>
                        <option value="15">nghĩa vụ quân sự</option>
                        <option value="16">chứng khoán</option>
                        <option value="17">cạnh tranh</option>
                        <option value="18">môi trường</option>
                        <option value="19">giáo dục</option>
                    </select>
                </div>
            </div>
            {formik.errors.field && formik.touched.title && (
                <p className="text-red-500 pl-[38%] ">{formik.errors.title}</p>
            )}

            <div className="w-full flex justify-between items-start my-2.5">
                <label htmlFor="content" className="w-[35%] font-medium">
                    Nội dung (*)
                </label>

                <textarea
                    rows={6}
                    // cols={50}
                    name="content"
                    id="content"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    placeholder="Nội dung yêu cầu phải được viết bằng tiếng việt có dấu"
                    className=" outline-none py-2.5 px-2.5 w-[62%]  border border-[#ccc] rounded "
                ></textarea>
            </div>

            {formik.errors.content && formik.touched.content && (
                <p className="text-red-500 pl-[38%] ">
                    {formik.errors.content}
                </p>
            )}

            <div className="w-full flex justify-between items-center my-2.5">
                <label htmlFor="" className="w-[35%] font-medium">
                    Đính kèm tệp tin
                </label>
                <div className="w-[62%]  ">
                    <input
                        type="file"
                        onChange={(event) => {
                            formik.setFieldValue(
                                'file',
                                event.currentTarget.files &&
                                    event.currentTarget.files[0],
                            );
                        }}
                        className="w-full py-2.5 px-2.5 "
                    />
                </div>
            </div>

            <div className="w-full flex justify-center items-center my-2.5">
                <div className="w-[78%]  border border-[#ccc] rounded">
                    <input
                        type="submit"
                        className="w-full py-3 px-2.5 text-sm text-white font-bold rounded  cursor-pointer bg-gradient-to-t from-[#855f2d] to-[#5e421d] "
                        value={'Gửi'}
                    />
                </div>
            </div>
        </form>
    );
};

export default ConsultationForm;
