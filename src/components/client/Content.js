import React from 'react';
import logo1 from '../../assets/client/logo1.jpg'
import {useState,useEffect,useCallback} from 'react';
import a1 from '../../assets/client/a1.png'
import a2 from '../../assets/client/a2.png'
import a3 from '../../assets/client/a3.jpg'
import h1 from '../../assets/client/h1.jpg'
import h2 from '../../assets/client/h2.jpg'
import h3 from '../../assets/client/h3.jpg'
import l1 from '../../assets/client/l1.jpg'
import l2 from '../../assets/client/l2.jpg'
import l3 from '../../assets/client/l3.png'

const FeaturedProducts = () => {
    const images = [l1,l2,l3];
    const images1 = [h1,h2,h3];
    const images2 = [a1,a2,a3];

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
<div className="bg-gray-50">
  <div>
    <img src={logo1} alt="" className="rounded-bl-3xl rounded-br-3xl" /> {/* Bo góc dưới trái và phải */}
  </div>

  <div className="container mx-auto px-[160px]"> {/* Sử dụng px-[183px] để tạo khoảng cách từ hai bên lề */}
    {/* Flex container chính */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-2.5">
      {/* Ảnh chính */}
      <div className="flex justify-center items-center -mt-[161px]">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[770px] h-[330px] rounded-lg"
          style={{ marginBottom: '10px' }}
        />
        
      </div>

      {/* Flex để xếp ảnh 1 trên, 1 dưới */}
      <div className="flex flex-col  justify-center items-center -mt-[110px] -mr-[80px] "> 
        {/* Ảnh trên */}
        <div>
          <img src={h3} alt="" className="w-full h-auto rounded-lg" style={{ marginBottom: '10px' }} /> {/* Thêm khoảng cách 10px giữa ảnh trên và ảnh dưới */}
        </div>

        {/* Ảnh dưới */}
        <div>
          <img src={a1} alt="" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</div>   
    );
};

export default FeaturedProducts;
