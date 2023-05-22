import React from "react";
import image from "../assets/images/content.png";
import "../styles/Content.scss";

const Content = () => {
  return (
    <div className="px-md-2 px-lg-5 mb-5 pb-5">
      <div className="imageDiv col-12 d-flex justify-content-center ">
        <img src={image} className="col-11 bg-gradient sari" alt="GaleryPhoto" />
        <h1 className="card-img-overlay col-md-5 col-lg-5 col-sm-10 fw-normal">Çocuklar için sanat eğitimi</h1>
        <p className="card-img-overlay col-md-5 col-lg-5 col-sm-10">
          Ücretsiz aile etkinliklerimizde bir sanat dünyası oyunu oynayın,
          çocuklarınızla yaratın ve keşfedin
        </p>
      </div>
      <div className="text-center text-dark  justify-content-center">
        <h2 className="fw-happy mb-3">Happy Galeri’ye Hoşgeldiniz</h2>
        <p className="mx-5 px-5 mt-4">
          Bu Muhteşem Müzede Keşfedilecek O Kadar Çok Sanat Eseri Var Ki! Bu
          Yüzden En İyi Şekilde Yararlanmak İçin Ziyaretinizi Önceden Planlayın.
          Temaya Dayalı Bir Turu Takip Etmek İçin Neden Ziyaretçi
          Parkurlarımızdan Birini Seçmiyorsunuz? Molaya İhtiyacınız Olduğunda,
          Müzenin Dinlendirici Bahçelerinden Daha İyi Neresi Var?
        </p>
      </div>
    </div>
  );
};

export default Content;
