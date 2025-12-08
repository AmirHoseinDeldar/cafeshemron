import AboutCafe from "../components/AboutUs";
import DailyOffer from "../components/DailyOffer";
import IntroVideo from "../components/IntroVideo";
import ReserveTable from "../components/ReserveTable";
import HeaderComponents from "../components/HeaderComponents";
import OurTeam from "../components/OurTeam";
import OurTarget from "../components/OurTarget";

const AboutUs = () => {
  return (
    <>
      <HeaderComponents title="درباره ما" />
      <AboutCafe />
      <OurTarget />
      <DailyOffer />
      <IntroVideo />
      <OurTeam />
      <ReserveTable />
    </>
  );
};

export default AboutUs;
