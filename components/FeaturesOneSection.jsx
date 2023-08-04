"use client";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";

const FeaturesOneSection = () => {
  return (
    <>
      <Container classNames="w-[80%] h-[80vh] relative">
        <div className="flex flex-col items-start justify-center w-[50%] mr-auto">
          <h1 className="text-4xl w-[65%] tracking-wider font-medium mb-14">
            Helping people make the world a better place through quality
            software.
          </h1>
          <Button>Take a course</Button>
        </div>
        <div className="mt-7">
          <Image
            src={"/teddy.webp"}
            className="absolute right-0"
            width={730}
            height={730}
          />
        </div>
        <div
          className="absolute left-0 bottom-0 flex justify-center items-center"
          onClick={(e) => {
            window.scrollBy({ top: 1900, behavior: "smooth" });
          }}
        >
          <Image
            src={"/DownArrow.gif"}
            width={90}
            height={90}
            className="mr-2 hover:cursor-pointer"
          />
          <span className="text-white text-lg tracking-wide hover:cursor-pointer">
            Visit our course
          </span>
        </div>
      </Container>
    </>
  );
};

export default FeaturesOneSection;
