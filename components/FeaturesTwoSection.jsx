import React from "react";
import Image from "next/image";
import Container from "./Container";

const FeaturesTwoSection = () => {
  return (
    <>
      <Container classNames="w-[80%] mb-72">
        <div className="h-[30%] w-[30%] mr-16">
          <Image
            src={"/one_wheel.webp"}
            className="h-full w-full mr-10"
            height={730}
            width={730}
          />
        </div>
        <div className="flex items-center justify-center w-[50%]">
          <h1 className="text-4xl w-[78%] h-[25%] tracking-wider ">
            Level up as a developer.
            <br />
            <font className="text-[#a9adc1]">
              Invest in yourself with a premium dev course.
            </font>
          </h1>
        </div>
      </Container>
    </>
  );
};

export default FeaturesTwoSection;
