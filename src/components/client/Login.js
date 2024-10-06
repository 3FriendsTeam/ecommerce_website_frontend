import React from 'react';
import { path } from '../../utils/constant';
import { NavLink } from 'react-router-dom';
import login from '../../assets/client/login.png';
import zalo from '../../assets/client/zalo.webp';
import google from '../../assets/client/google.png';

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[650px] ">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={login} alt="Logo" className="w-20 h-20" /> {/* Thay đường dẫn logo */}
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-4">Đăng nhập với</h2>

        {/* Social Login */}
        <div className="flex justify-center space-x-4 mb-4">
          <button className="flex items-center py-2 px-4 rounded-lg">
            <img src={google} alt="Google" className="w-6 h-6 mr-2" />
            Google
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg">
            <img src={zalo} alt="Zalo" className="w-6 h-6 mr-2" />
            Zalo
          </button>
        </div>
        {/* Hoặc */}
        <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">hoặc</span>
        <div className="flex-grow border-t border-gray-300"></div>
        </div>


        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nhập số điện thoại"
            className="w-full text-sm p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-full text-sm p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

    {/* Forgot password */}
        <div className="text-right text-sm text-gray-500 hover:underline cursor-pointer ">
            <NavLink to={path.FORGOTPASSWORD}>    Quên mật khẩu? </NavLink>
        
          </div>

          {/* Login button */}
          <button className="w-full text-sm bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600">
            Đăng nhập
          </button>
        </form>

        {/* Register link */}
        <div className="text-center mt-4 text-gray-500">
          Bạn chưa có tài khoản?{' '}
          <NavLink to={path.REGISTER} className="text-red-500 hover:underline cursor-pointer text-sm">Đăng ký ngay</NavLink>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <NavLink href="#" className="text-red-500 hover:underline text-sm">
            Xem chính sách ưu đãi Smember
          </NavLink>
        </div>
      </div>
    </div>
    );
};

export default Login;