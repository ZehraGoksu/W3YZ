import React from "react";
import "../styles/ApiGallery.scss";
import { useState, useEffect } from "react";

const ApiGallery = () => {
  const [data, setData] = useState([]);
  const [imageurl] = useState([]);
  const [smallImageUrl] = useState([]);

  const getData = () => {
    fetch("https://w3yz.com/api/ch", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.products);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  for (let i = 1; i < data.length; i++) {
    const element = data[i].imagelist[0].url;
    const url = element.match(/Rectangle/gi);
    if (url !== null) {
      imageurl.push(element);
    } else {
      smallImageUrl.push(element);
    }
  }
  console.log(imageurl);
  console.log(smallImageUrl);

  return (
    <div className="bg-div my-5 mx-4">
      <div className="row d-flex align-items-center">
        <div className="col-xl-5 col-12">
          <div>
            <h3>Podcast</h3>
            <p>
              Bu Muhteşem Müzede Keşfedilecek O Kadar Cok Sanat Eseri Var Ki! Bu
              Yüzden En Iyi Sekilde .
            </p>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </small>
          </div>
          <br></br>
          <div className="align-self-end my-5 pt-5 ">
            <small>SPOTİFAY</small>
          </div>
        </div>
        <div className="col-xl-7 col-12">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <img alt="Small-2" src={smallImageUrl[2]} />
                </td>
                <td rowSpan={2}>
                  <img alt="Small-3" src={smallImageUrl[3]} />
                </td>
                <td colSpan={2}>
                  <img alt="Small-5" src={smallImageUrl[5]} />
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <img alt="Small-0" src={smallImageUrl[0]} />
                </td>
                <td colSpan={2} className="tdRight">
                  <img alt="Small-4" src={smallImageUrl[4]} className="me-2" />

                  <img alt="Small-4" src={smallImageUrl[4]} />
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="Small-2" src={smallImageUrl[2]} />
                </td>
                <td colSpan={2}>
                  <img alt="Small-1" src={smallImageUrl[1]} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        {imageurl.map((url) => (
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 text-md-center textImage">
            <img src={url} alt="rowPhotos" className="images mb-2" />
            <div className="card-img-overlay text-white d-flex flex-column justify-content-between align-items-start">
            <h4>EUROPEAN</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiGallery;
