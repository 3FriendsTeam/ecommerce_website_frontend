import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';
import anh1 from '../../assets/client/anh1.jpg'
import anh2 from '../../assets/client/anh2.jpg'
import anh3 from '../../assets/client/anh3.png'
import logo from '../../assets/client/logo.png'
import icons from '../../utils/icons';
import { NavLink } from 'react-router-dom';

const {
    BsFillPhoneFill,
    BsFillLaptopFill,
    FaTablet,
    IoWatchSharp,
    GiRiceCooker,
    HiMiniTv,
    RiVipCrown2Fill
} = icons;

const Header = () => {
    const images = [anh1, anh2, anh3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImg = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevImg = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImg();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextImg]);

    return (
        <div className='relative max-w-full mx-auto'>
            {/* banner */}
            <div className='relative w-full max-w-[1170px] mx-auto'>
                <button onClick={prevImg} className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                    <icons.IoIosArrowDropleft className="text-white text-3xl opacity-75 hover:opacity-100" />
                </button>

                <div className='flex justify-center'>
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className='w-full h-auto' 
                    />
                </div>
                <button onClick={nextImg} className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                    <icons.IoIosArrowDropright className="text-white text-3xl opacity-75 hover:opacity-100" />
                </button>
            </div>

            {/* searchbar */}
            <div style={{ backgroundColor: '#EE0033' }} className='flex flex-col md:flex-row md:h-16 items-center'>
                <div className='ml-4 md:ml-[183px]'>
                    <div className='border border-transparent rounded p-2 bg-transparent'>
                        <a href='/'>
                            <img
                                src={logo}
                                alt='logo'
                                className='w-32 md:w-auto h-auto'
                            />
                        </a>
                    </div>
                </div>

                <div className='flex items-center border rounded-2xl bg-white mt-2 md:mt-0 ml-4 md:ml-10 w-full md:w-[335px] h-10 md:h-[38px]'>
                    <div className='ml-3'>
                        <icons.IoSearch />
                    </div>
                    <input type='text' placeholder='Bạn cần tìm sản phẩm nào...' className='w-full border-none outline-none px-2 py-1 bg-transparent' />
                </div>

                <div className='text-xs text-white p-2 rounded-xl ml-4 w-auto md:w-[141px] h-[40px] mt-2 md:mt-0' style={{ backgroundColor: '#C81B1B' }}>
                    <div className='flex justify-between items-center h-full'>
                        <div className='flex flex-col'>
                            <p>Xem giá tồn kho tại:</p>
                            <span className='font-bold'>Toàn Quốc</span>
                        </div>
                        <div className='flex items-center'>
                            <icons.TiArrowSortedDown className='text-white text-lg' />
                        </div>
                    </div>
                </div>

                <div className='text-xs text-white p-3 rounded-xl ml-4 w-auto md:w-[140px] h-[40px] mt-2 md:mt-0' style={{ backgroundColor: '#C81B1B' }}>
                    <div className='flex justify-between items-center h-full'>
                        <div className='flex items-start'>
                            <icons.FaPhone className='text-white text-lg' />
                        </div>
                        <div className='flex flex-col'>
                            <span>Tư vấn mua hàng:</span>
                            <span className='font-bold'>1900 8123</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center mt-4 md:mt-0'>
                    <div className='text-xs text-white p-3 rounded-xl w-[122px] h-[80px]'>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <div className='flex mb-1'>
                                <icons.FaShopify className='text-white text-2xl' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <a href='/' className='font-bold'>Tra cứu đơn hàng</a>
                            </div>
                        </div>
                    </div>

                    <div className='text-xs text-white rounded-xl w-[85px] h-[80px]'>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <div className='flex items-start mb-1'>
                                <icons.TbTruckDelivery className='text-white text-2xl' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <a href='/' className='font-bold'>Giỏ hàng</a>
                            </div>
                        </div>
                    </div>

                    <div className='text-xs text-white rounded-xl w-[85px] h-[80px]'>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <div className='flex items-start mb-1'>
                                <icons.RxAvatar className='text-white text-2xl' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <NavLink to='/login' className='font-bold'>Đăng nhập</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* toolbar */}
            <div className='flex flex-wrap items-center w-full h-auto mt-4 md:mt-0 ml-4 md:ml-[183px] space-x-4'>
                <Button text={'Điện thoại'} IcAfter={BsFillPhoneFill} />
                <Button text={'Laptop'} IcAfter={BsFillLaptopFill} />
                <Button text={'Máy tính bảng'} IcAfter={FaTablet} />
                <Button text={'Đồng hồ thông minh'} IcAfter={IoWatchSharp} />
                <Button text={'Phụ kiện'} IcAfter={BsFillPhoneFill} />
                <Button text={'Điện máy - Gia dụng'} IcAfter={GiRiceCooker} />
                <Button text={'TiVi'} IcAfter={HiMiniTv} />
                <Button text={'Mua kèm gói cước'} IcAfter={RiVipCrown2Fill} />
            </div>
        </div>
    );
};

export default Header;
