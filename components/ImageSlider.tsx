import { FC, useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const selectImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative w-full h-[150px] md:h-[400px] lg:h-[420px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider image ${index}`}
            className={`absolute inset-0 object-contain w-full h-full transform scale-105 transition-all duration-500 ease-in-out ${currentImage === index ? 'opacity-100 scale-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute bottom-1 w-full h-10 md:h-14 lg:h-20 flex justify-center gap-x-1 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-[80px] md:w-[112px] lg:w-[160px] object-cover cursor-pointer border border-gray-300 bg-white shadow-lg ${currentImage === index ? 'border-gray-300' : 'border-transparent'}`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;



