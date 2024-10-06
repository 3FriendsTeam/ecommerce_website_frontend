import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Signup() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Phần form đăng nhập */}
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-black w-full max-w-md">
          {/* Title Đăng Nhập */}
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Đăng Kí</h2>

          {/* Form đăng nhập */}
          <form>
          <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Họ tên
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Nhập họ tên"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Số điện thoại hoặc Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Nhập email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Mật khẩu
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Nhập mật khẩu"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Nhập lại mật khẩu
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Nhập lại mật khẩu"
              />
              <div className=" mt-2">
                <p>Tôi đã đồng ý với các <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm">
                  Điều khoản sử dụng
                </a> và <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm">
                  Chính sách bảo mật
                </a> của 3FRIENDS.</p>
              </div>
              </div>

            {/* Nút đăng nhập */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
            >
              Đăng kí
            </button>
          </form>

          {/* Hoặc với đường gạch ngang */}
          <div className="flex items-center justify-center my-4">
            <div className="w-full h-px bg-gray-300"></div> {/* Đường gạch ngang bên trái */}
            <span className="px-2 text-gray-500">Hoặc</span> {/* Chữ "Hoặc" */}
            <div className="w-full h-px bg-gray-300"></div> {/* Đường gạch ngang bên phải */}
          </div>

          {/* Nút đăng nhập với Google */}
          <button
            type="button"
            className="w-full bg-white text-black border-2 border-black font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
          >
            <img
              src="Google.png"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Đăng kí với Google
          </button>

          {/* Link Đăng nhập */}
          <div className="text-center mt-4">          
            <p>Bạn đã có tài khoản? <a href="/login" className="text-indigo-500 hover:text-indigo-600 text-sm">
              Đăng nhập
            </a> tại đây.
            </p>
          </div>
        </div>
      </div>

       {/* Footer */}
       <Footer /> {/* Thêm footer ở đây */}
    </div>
  );
}

export default Signup;