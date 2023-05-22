import React from "react"; 
import  "../styles/Navbar.scss";
import Logo from "./Logo"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const navElements = [
    {
      name: "HAKKIMIZDA",
      url: "popular",
    },
    {
      name: "SIKÇA SORULAN SORULAR",
      url: "upcoming",
    },
    {
      name: "GALERİ",
      url: "top_rated",
    },
    {
      name: "İLETİŞİM",
      url: "top_rated",
    },
    {
      name: "GİRİŞ YAP",
      url: "top_rated",
    },
    {
      name: "ALIŞVERİŞ (0)",
      url: "top_rated",
    },
  ];
  return (
    <div className="navbar navbar-expand-lg mx-4 mt-lg-3 mt-xl-3 mt-2"> 
       <Logo className="navbar-brand"/>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
       <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
             <ul className="navbar-nav navbar-nav-scroll gap-4"> 
          {
            navElements.map((element, i)=>(
              <li className="nav-item" key={i}>
                <Link className="text" to="/fk">{element.name}</Link>
              </li>
            ))
          }
        </ul> 
    </div></div>
  );
};
/*<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar scroll</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */
export default Navbar;
