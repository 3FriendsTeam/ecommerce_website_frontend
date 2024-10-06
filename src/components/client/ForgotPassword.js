import React from 'react';
import login from '../../assets/client/login.png';
import icons from '../../utils/icons'

const ForgotPassword = () => {
    return (
        <div className="flex flex-col mt-[100px] items-center min-h-screen bg-gray-50">
            <div className="w-[650px] p-8 rounded-lg shadow-lg">
                 {/* Back arrow (optional) */}
                <div className="flex justify-start">
                    <icons.IoArrowBackSharp className='text-xl' />
                </div>
                {/* Icon logo */}
                <div className="flex justify-center mb-6">
                    <img src={login} alt="Logo" className="w-20 h-20" /> {/* Thay đường dẫn logo */}
                </div>

                {/* Title */}
                <h2 className="text-center text-2xl font-semibold mb-2">Quên mật khẩu</h2>
                <p className="text-center text-gray-500 mb-6 text-sm">
                    Hãy nhập số điện thoại/email của bạn vào bên dưới để bắt đầu quá trình khôi phục mật khẩu.
                </p>

                {/* Input field */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Số điện thoại / Email"
                        className="w-full text-sm p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                {/* Submit button */}
                <div className="mb-4">
                    <button className="w-full text-sm bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600">
                        Tiếp tục
                    </button>
                </div>


            </div>
        </div>
    );
};

export default ForgotPassword;
