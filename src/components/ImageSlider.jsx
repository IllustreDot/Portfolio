import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ImageSlider = ({ images, onClose }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            onClose();
        }
    };

    const handleClickOutside = (event) => {
        if (event.target.classList.contains("slider-overlay")) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 slider-overlay"
            onClick={handleClickOutside}
        >
            <div className="relative w-3/4 h-3/4">
                <button
                    className="absolute top-4 right-4 text-white text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                />
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                    onClick={handlePrev}
                >
                    &#8249;
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                    onClick={handleNext}
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImageSlider;