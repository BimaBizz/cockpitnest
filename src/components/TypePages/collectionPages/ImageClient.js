"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ImageClient = ({ mainImage, additionalImages }) => {
    const [currentImage, setCurrentImage] = useState(mainImage);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % additionalImages.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [additionalImages.length]);

    useEffect(() => {
        setCurrentImage(additionalImages[currentIndex]);
    }, [currentIndex, additionalImages]);

    const handleImageClick = (img, index) => {
        setCurrentImage(img);
        setCurrentIndex(index);
    };

    return (
        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <Image
                className="rounded-xl shadow-lg object-cover object-center"
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${currentImage.path}`}
                alt={currentImage.altText}
                width={currentImage.width}
                height={currentImage.height}
            />
            <div className="mt-4 flex gap-2">
                {additionalImages.map((img, index) => (
                    <Image
                        key={index}
                        className="rounded-xl shadow-lg object-cover object-center w-32 h-32 cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${img.path}`}
                        alt={img.altText}
                        width={img.width}
                        height={img.height}
                        onClick={() => handleImageClick(img, index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageClient;