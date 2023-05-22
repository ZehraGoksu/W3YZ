import "../styles/FormOfVisit.scss";
import family from "../assets/images/babyCarriage.svg";
import group from "../assets/images/people.svg";
import research from "../assets/images/document.svg";
import wheelchair from "../assets/images/wheelchair.svg";
import institutional from "../assets/images/institutional.svg";
import supporter from "../assets/images/supporter.svg";
import { AiOutlineRight } from "react-icons/ai";

const FormOfVisit = () => {
  const leftOptions = [
    {
      name: "Aile ile ziyaret",
      src: family,
    },
    {
      name: "Grup Olarak ziyaret",
      src: group,
    },
    {
      name: "Araştırma için ziyaret",
      src: research,
    },
  ];
  
  const rightOptions = [
    {
      name: "Engelinize göre ziyaret",
      src: wheelchair,
    },
    {
      name: "Kurumsal eğitim için ziyaret",
      src: institutional,
    },
    {
      name: "Sponsor olmak için ziyaret",
      src: supporter,
    },
  ];

  return (
    <div className="row mx-0 my-5 py-5">
      <div className="pt-5 my-5 col-xl-6 col-lg-6 col-12 title text-center align-middle">
        <h3>Ziyaret Biçimini Seç</h3>
        <p>Bu Muhteşem Müzeyi Nasıl Keşfetmek Istersin?</p>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-12 options">
        {
          leftOptions.map((option,i)=>(
        <div className="d-flex align-items-center justify-content-between gap-3 my-5 ps-4" key={i}>
          <div className="d-flex align-items-center">
            <img src={option.src} alt="Family Logo" />
            <p>{option.name}</p>
          </div>
          <AiOutlineRight className="mx-5" />
        </div> 

          ))
        }
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-12 options">
        {
          rightOptions.map((option,i)=>(
        <div className="d-flex align-items-center justify-content-between gap-3 my-5 ps-4" key={i}>
          <div className="d-flex align-items-center">
            <img src={option.src} alt="Wheelchair Logo" />
            <p>{option.name}</p>
          </div>
          <AiOutlineRight className="mx-5" />
        </div> 

          ))
        }
      </div>
    </div>
  );
};

export default FormOfVisit;
