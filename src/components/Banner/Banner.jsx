import React from 'react';
import image from "../../assets/banner-img-1.png"

const Banner = () => {
    return (
        <div
  className="mt-4 hero min-h-screen rounded-2xl"
  style={{
    backgroundImage:
      `url(${image})`,
  }}
>
  <div className="rounded-2xl hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Dependable Care, Backed by Trusted Professionals.</h1>
      <p className="mb-5">
       Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;