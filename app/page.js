import Image from "next/image";
import Header from "./components/Header";
import AboutCafe from "./components/AboutUs";
import OurDishes from "./components/OurDishes";
import DailyOffer from "./components/DailyOffer";
import OurMenu from "./components/OurMenu";
import IntroVideo from "./components/IntroVideo";
import OurIngredients from "./components/OurIngredients";
import OurBlog from "./components/OurBlog";
import ReserveTable from "./components/ReserveTable";

export default function Home() {
  return (
    <>
      <Header />
      <AboutCafe />
      <OurDishes />
      <DailyOffer />
      <OurMenu />
      <IntroVideo />
      <OurIngredients />
      <OurBlog />
      <ReserveTable />
    </>
  );
}
