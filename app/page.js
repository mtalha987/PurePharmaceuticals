import Image from "next/image";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Verticals from "./Components/Verticals";
import About from "./Components/About";
import Partners from "./Components/Partners";
import WhyPure from "./Components/WhyPure";
import Products from "./Components/Products";
import PureCommitted from "./Components/PureCommitted";

export default function Home() {
  return (
    <>
      <Hero/>
      <Verticals/>
      <About/>
      <Products/>
      <PureCommitted/>
      <WhyPure/>
      <Partners/>
    </>
  );
}
