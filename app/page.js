import Image from "next/image";
import Header from "./components/Header";
import AboutCafe from "./components/AboutUs";
import OurDishes from "./components/OurDishes";
import DailyOffer from "./components/DailyOffer";

export default function Home() {
  return (
    <>
      <Header />
      <AboutCafe />
      <OurDishes />
      <DailyOffer />
      {/* <OurMenu /> */}
      {/* <IntroVideo /> */}
      {/* <OurIngredients /> */}
      {/* <OurBlog /> */}
      {/* <ReserveTable /> */}
    </>
  );
}
