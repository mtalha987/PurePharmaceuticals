import React from "react";
import LocationIcon from "@/public/images/locationIcon.svg";
import EmailIcon from "@/public/images/emailIcon.svg";
import PhoneIcon from "@/public/images/phoneIcon.svg";
import CardContact from "./CardContact";

const ContactInformation = () => {
  return (
    <>
      <h2 className="text-black text-center text-[32px] font-normal font-arial mt-36">
        Contact Information
      </h2>
      <p className="lg:w-[548px] mx-auto text-center text-black text-base font-normal font-secondary leading-normal mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore{" "}
      </p>
      <div className="flex flex-wrap gap-5 justify-center">
        <CardContact image={PhoneIcon} title="Phone:" info="(12+) 123 3456"/>
        <CardContact image={EmailIcon} title="Email:" info="support@yoursite.com"/>
        <CardContact image={LocationIcon} title="Location:" info="121th Haidezign st, Melbourne, AUS 12313"/>
      </div>
    </>
  );
};

export default ContactInformation;
