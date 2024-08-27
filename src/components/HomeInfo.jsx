import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className=" info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className=" w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold text-orange-300  ">Kent </span>
      from Pampanga, Philippines
    </h1>
  ),
  2: (
    <InfoBox
      text="Hi, I am currently a Service Desk Engineer under Phitopolis Company"
      link="/about"
      btnText=" BOOM! 💣💥🧨"
    />
  ),
  3: (
    <InfoBox
      text="Hello 2, I am currently a Service Desk Engineer under Phitopolis Company"
      link="/about"
      btnText="
           BOOM! 💣💥🧨"
    />
  ),
  4: (
    <InfoBox
      text="Hello 3, I am currently a Service Desk Engineer under Phitopolis Company"
      link="/about"
      btnText="
           BOOM! 💣💥🧨"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  // console.log({ currentStage });
  return renderContent[currentStage] || null;
};

export default HomeInfo;
