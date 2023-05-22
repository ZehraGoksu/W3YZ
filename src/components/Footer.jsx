import React from "react";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import {RiFacebookFill,RiInstagramLine,RiTwitterFill,RiYoutubeFill,RiPinterestFill,RiLinkedinBoxFill} from "react-icons/ri"

const Footer = () => {
  const aboutUsTitles = [
    { name: "Galeri hakkında" },
    { name: "Ziyaret Kuralları" },
    { name: "Bizi desteklemek isteyenler için" },
  ];
  const websiteTitles = [
    { name: "Online bilet al" },
    { name: "Mağaza" },
    { name: "Koleksiyonlar" },
  ];
  const contactTitles = [
    { name: "Sıkça sorulan sorular" },
    { name: "iletişime geç" },
    { name: "bize fikir verin" },
    { name: "Kariyer" },
  ];
  const subTitles = [
    { name: "Legal Notice" },
    { name: "Privacy policy" },
    { name: "Cookies" },
  ];
  return (
    <footer className="body row mx-0 mt-5">
      <div className="col-md-3 mb-3 col-sm-4">
        <h5>HAKKIMIZDA</h5>
        <ul className="nav flex-column">
          {aboutUsTitles.map((title,i) => (
            <li className="nav-item mb-2" key={i}>
              <Link to="/" className="nav-link p-0">
                {title.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-md-2 mb-3 col-sm-4">
        <h5>WEBSITEMIZ</h5>
        <ul className="nav flex-column">
          {websiteTitles.map((title,i) => (
            <li className="nav-item mb-2" key={i}>
              <Link to="/" className="nav-link p-0">
                {title.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-md-2 mb-3 col-sm-4">
        <h5>CONTACT</h5>
        <ul className="nav flex-column">
          {contactTitles.map((title,i) => (
            <li className="nav-item mb-2" key={i}>
              <Link to="/" className="nav-link p-0">
                {title.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-5 vrHeight mb-3 col-sm-12">
        <div className="d-flex align-items-center mb-3">
         <h5 className="mx-1 my-0">BIZI TAKIP ET</h5>
         <hr className="hrWidth"></hr>
         </div>
         <div className="d-flex gap-3">
          <Link to="/facebook"><RiFacebookFill className="riIcon rounded-circle"/></Link>
          <Link to="/instagram"><RiInstagramLine className="riIcon rounded-circle"/></Link>
          <Link to="/twitter"><RiTwitterFill className="riIcon rounded-circle"/></Link>
          <Link to="/youtube"><RiYoutubeFill className="riIcon rounded-circle"/></Link>
          <Link to="/pinterest"><RiPinterestFill className="riIcon rounded-circle"/></Link>
          <Link to="/linkedin"><RiLinkedinBoxFill className="riIcon rounded-circle"/></Link>
         </div>
      </div>
      <hr className="hrLong"></hr>
      <div className="container">
        <div className="d-flex justify-content-center gap-4">
        {subTitles.map((title,i)=>(
          <p key={i}><Link className="subTitle" href="/">{title.name}</Link></p>
        ))}</div>
      </div>
    </footer>
  );
};

export default Footer; 