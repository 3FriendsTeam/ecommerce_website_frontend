import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Cột Liên Hệ */}
                    <div>
                        <h4 className="text-lg font-bold mb-2 text-xl">LIÊN HỆ</h4>
                        <div className="flex space-x-4">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                <img src="Tiktok.png" alt="TikTok" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                            </a>

                        </div>
                        <h4 className="text-lg font-bold mb-1 mt-3 text-xl">TỔNG ĐÀI (MIỄN PHÍ)</h4>
                        <ul>
                            <li><a className='text-xl'>Tổng đài kĩ thuật</a></li>
                            <li><a className='font-bold text-xl'>19001000</a></li>
                            <li><a className='text-xl'>Tổng đài bán hàng</a></li>
                            <li><a className='font-bold text-xl'>19001000</a></li>
                        </ul>
                    </div>

                    {/* Cột Về Chúng Tôi */}
                    <div>
                        <h4 className="text-lg font-bold mb-2 text-xl">VỀ CHÚNG TÔI</h4>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400 text-white text-xl">Giới thiệu</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-white text-xl">Đội ngũ</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-white text-xl">Tin tức</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-white text-xl">Mua hàng trả góp</a></li>
                        </ul>
                    </div>

                    {/* Cột Chính Sách */}
                    <div>
                        <h4 className="text-lg font-bold mb-2 text-xl">CHÍNH SÁCH</h4>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400 text-white text-xl">Chính sách bảo mật</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-white text-xl">Chính sách hoàn trả</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-white text-xl">Điều khoản dịch vụ</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-white text-xl">Giới hạn trách nhiệm</a></li>
                        </ul>
                    </div>

                    {/* Cột Hỗ Trợ Thanh Toán */}
                    <div>
                        <h4 className="text-lg font-bold mb-2 text-xl">HỖ TRỢ THANH TOÁN</h4>
                        <img src="tt.png" alt="" className=''></img>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6">
                <p className="text-sm text-white">Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật 3F. Địa chỉ văn phòng: 140 Lê Trọng Tấn, phường Tây Thạnh, Quận Tân Phú , Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 025.7123.4567.</p>
            </div>
        </footer>
    );
}

export default Footer;
