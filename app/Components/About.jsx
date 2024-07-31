import React from "react";
import Image from "next/image";
import AboutImg from "@/public/images/aboutPure.svg";

const About = () => {
  return (
    <>
      <div className="flex xl:px-[90px] lg:px-10 px-5 mt-44 gap-20">
        <div className="w-[100%]">
          <Image src={AboutImg} alt="" />
        </div>
        <div>
          <button>About Pure Pharmaceuticals</button>
          <h2>
            Raising Pharmaceutical Standards from Abu Dhabi to Worldwide
            Excellence
          </h2>
          <p>
            Pure Pharmaceuticals is committed to upholding the highest standards
            of quality and safety in the production of pharmaceuticals, from our
            base in Abu Dhabi to our global reach. Our state-of-the-art
            facilities employ rigorous quality control measures at every stage
            of the manufacturing process, ensuring that our products meet or
            exceed international regulatory requirements. We adhere strictly to
            Good Manufacturing Practices (GMP) and employ cutting-edge
            technology to guarantee the purity, potency, and efficacy of our
            medications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
