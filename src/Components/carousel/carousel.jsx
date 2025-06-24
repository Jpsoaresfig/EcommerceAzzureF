import React from 'react';
import image1 from '../../Pages/images/propdutos_carrosel/Produto_01.png';
import image2 from '../../Pages/images/propdutos_carrosel/Produto_02.png';
import image3 from '../../Pages/images/propdutos_carrosel/Produto_03.png';

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicadores (bolinhas embaixo) */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      {/* Botões laterais */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        aria-label="Previous"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        aria-label="Next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
}

export default Carousel;
