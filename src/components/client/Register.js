import React, { useState } from 'react';
import login from '../../assets/client/login.png';
import zalo from '../../assets/client/zalo.webp';
import google from '../../assets/client/google.png';
import icons from '../../utils/icons'; 

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        birthdate: '',
        password: '',
        confirmPassword: '',
        newsletter: false,
        agreeTerms: false,
        isStudent: false,
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        // Kiểm tra nếu trường trống thì hiển thị thông báo lỗi
        if (!value.trim()) {
            setErrors({
                ...errors,
                [name]: 'Vui lòng không bỏ trống',
            });
        } else {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
            <div className="w-[700px] p-8 rounded-lg shadow-lg mt-[50px]">
                <div className="flex justify-start">
                    <icons.IoArrowBackSharp className="text-xl" />
                </div>
                {/* Icon logo */}
                <div className="flex justify-center mb-6">
                    <img src={login} alt="Logo" className="w-20 h-20" />
                </div>

                {/* Title */}
                <h2 className="text-center text-2xl font-semibold mb-2">Đăng ký với</h2>

                {/* Social Login */}
                <div className="flex justify-center space-x-4 mb-4">
                    <button className="flex items-center py-2 px-4 rounded-lg">
                        <img src={google} alt="Google" className="w-6 h-6 mr-2" /> Google
                    </button>
                    <button className="flex items-center py-2 px-4 rounded-lg">
                        <img src={zalo} alt="Zalo" className="w-6 h-6 mr-2" /> Zalo
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">hoặc</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div className="relative">
                        <input
                            
                            type="text"
                            name="name"
                            placeholder="Nhập họ và tên"
                            className={`w-full text-sm p-3 rounded-lg focus:outline-none focus:ring-2 ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Nhập số điện thoại"
                            className={`w-full p-3 text-sm rounded-lg focus:outline-none focus:ring-2 ${
                                errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email Input */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Nhập email (không bắt buộc)"
                        className="w-full p-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <p className="text-sm text-gray-400"></p>
                    <input
                        type="date"
                        name="birthdate"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                        value={formData.birthdate}
                        onChange={handleChange}
                    />

                    {/* Other Inputs... */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Nhập mật khẩu"
                        className={`w-full p-3 rounded-lg text-sm focus:outline-none focus:ring-2 ${
                            errors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Nhập lại mật khẩu"
                        className={`w-full p-3 rounded-lg text-sm focus:outline-none focus:ring-2 ${
                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                        }`}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}

                        <div className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                name="newsletter"
                                className="mr-2"
                                checked={formData.newsletter}
                                onChange={handleChange}
                            />
                            <label>Đăng ký nhận bản tin khuyến mãi từ CellphoneS</label>
                        </div>

                        <div className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                className="mr-2"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                required
                            />
                            <label>Tôi đồng ý với các điều khoản bảo mật cá nhân</label>
                        </div>

                    {/* Submit button */}
                    <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 text-sm">
                        Đăng ký
                    </button>
                </form>

                {/* Login link */}
                <div className="text-center mt-4 text-gray-500 text-sm">
                    Bạn đã có tài khoản?{' '}
                    <span className="text-red-500 hover:underline cursor-pointer text-sm">Đăng nhập ngay</span>
                </div>
            </div>
        </div>
    );
};

export default Register;
