import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [
    "https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1692736475249-f7cfea4cc41e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1687360441205-807780a8e5db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length
    );
  };

  return (
    <div className="container p-5">
      <div className="carousel-container">
        {carouselImages.map((image, index) => (
          <div
            className={`carousel-items fade ${
              index === currentImageIndex ? "active" : ""
            }`}
            key={uuidv4()}
          >
            <img src={image} alt="carouselImage" />
          </div>
        ))}
      </div>

      <a className="prev" onClick={handlePrev}>
        &#10094;
      </a>
      <a className="next" onClick={handleNext}>
        &#10095;
      </a>
      <div className="d-flex align-items-center">
        {carouselImages.map((_, index) => (
          <span
            key={uuidv4()}
            className={`carousel-dot ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
