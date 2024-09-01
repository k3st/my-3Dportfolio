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
      Hi, I am <span className="font-semibold text-orange-300  ">Kent 👋</span>
      <br />A Web Developer from Philippines
    </h1>
  ),
  2: (
    <>
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          I am currently a Service Desk Engineer under Phitopolis"
        </p>
      </div>
      <div className="neo-brutalism-white neo-btn">
        via a BPO Company: Boomering 💜💙
      </div>
    </>
  ),
  3: (
    <InfoBox
      text="I'm aspiring to be a Front-end Developer and hopefully some be a capable and well known Software Engineer."
      link="/about"
      btnText="
           More Details About me"
    />
  ),
  4: (
    <InfoBox
      text={
        <>
          "Feel free to reach out to me ANYTIME. <br />
          I’ll be in touch with you as well!"
        </>
      }
      link="/contact"
      btnText="
           Contact me "
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  // console.log({ currentStage });
  return renderContent[currentStage] || null;
};

export default HomeInfo;
