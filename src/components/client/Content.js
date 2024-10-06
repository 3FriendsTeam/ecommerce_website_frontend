import React from "react";
import logo1 from "../../assets/client/logo1.jpg";
import { useState, useEffect, useCallback } from "react";
import a1 from "../../assets/client/a1.png";
import a2 from "../../assets/client/a2.png";
import a3 from "../../assets/client/a3.jpg";
import a4 from "../../assets/client/a4.jpg";
import h1 from "../../assets/client/h1.jpg";
import h2 from "../../assets/client/h2.jpg";
import h3 from "../../assets/client/h3.jpg";
import l1 from "../../assets/client/l1.jpg";
import l2 from "../../assets/client/l2.jpg";
import l3 from "../../assets/client/l3.png";

const FeaturedProducts = () => {
  const images = [l1, l2, l3, a4];
  const images1 = [h1, h2, h3];
  const images2 = [a1, a2, a3];

  const imageNames = [
    "Xiaomi 14T Series",
    "Tecno Pova 6 Neo",
    "ViVo Y18s (6+128GB)",
    "Reno12 Series 5G",
  ];

  const prices = [
    "Ưu Đãi Đến 5.5 Triệu",
    "Giá Chỉ 3.990.000đ",
    "Giá Chỉ 4.190.000đ",
    "Giá chỉ từ 9.490.000đ",
  ];

  // State cho từng bộ ảnh
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  // Hàm chung để thay đổi ảnh
  const changeImage = useCallback((setIndex, images) => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  // useEffect cho từng bộ ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(setCurrentIndex, images);
    }, 5000);
    return () => clearInterval(interval);
  }, [changeImage, images]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(setCurrentIndex1, images1);
    }, 5000);
    return () => clearInterval(interval);
  }, [changeImage, images1]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(setCurrentIndex2, images2);
    }, 5000);
    return () => clearInterval(interval);
  }, [changeImage, images2]);

  return (
    <div className="bg-slate-50 ">
      <div>
        <img src={logo1} alt="" className="rounded-bl-3xl rounded-br-3xl" />
      </div>

      <div className="container mx-auto px-[160px] bg-transparent ">
        <div className="p-6 rounded-lg flex flex-col lg:flex-row gap-2.5">
          <div className="relative overflow-hidden w-[770px] h-[330px] -mt-[110px]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-[770px] h-[330px] rounded-lg flex-shrink-0"
                  style={{ marginBottom: "10px" }}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-[-70px] w-full -ml-[383px] text-black text-center">
            <div className="flex justify-center">
              {imageNames.map((name, index) => (
                <div
                  key={index}
                  className={`bg-white p-4  border-red-500 w-[192.5px] text-center ${
                    index === currentIndex ? "border-b-4 border-red-500" : ""
                  }`}
                >
                  <h3 className="text-sm font-medium cursor-pointer">{name}</h3>
                  <p className="text-sm">{prices[index]}</p>{" "}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center -mt-[110px] -mr-[80px] gap-2">
            {/* Thẻ cho ảnh đầu tiên */}
            <div className="relative overflow-hidden w-[390px] h-[190px]">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(${-currentIndex1 * 100}%)` }}
              >
                {images1.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-[390px] h-[190px] rounded-lg flex-shrink-0"
                    style={{ marginBottom: "10px" }}
                  />
                ))}
              </div>
            </div>

            {/* Thẻ cho ảnh thứ hai */}
            <div className="relative overflow-hidden w-[390px] h-[190px]">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(${-currentIndex2 * 100}%)` }}
              >
                {images2.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-[390px] h-[190px] rounded-lg flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
