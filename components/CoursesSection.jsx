import React from "react";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const CoursesSection = () => {
  return (
    <>
      <Container classNames="w-[70%] block">
        <h1 className="text-[40px] leading-[50px] mb-4">
          Are you ready to level up?
        </h1>
        <h1 className="text-[40px] text-[#a9adc1] mb-32">
          Checkout some of my courses
        </h1>
        <div className="flex justify-between">
          <div className="w-[49.5%] bg-[#2e3039] px-16 pt-36 pb-20 relative">
            <Image
              src={"/rocket.webp"}
              className="w-36 h-36 absolute left-16 top-[-45px]"
              width={112}
              height={112}
            />
            <h2 className="text-[40px] leading-[55px] mb-4">Free Courses</h2>
            <h2 className="text-[40px] leading-[55px] mb-16 w-9/12 text-[#a9adc1]">
              The most comprehensive guide for beginners.
            </h2>
            <Button>
              <Link href={"/free"}>Free course</Link>
            </Button>
          </div>
          <div className=" w-[49.5%] bg-[#2e3039] px-16 pt-36 pb-20 relative">
            <Image
              src={"/testing-trophy.webp"}
              className="w-36 h-36 absolute left-16 top-[-45px]"
              width={112}
              height={112}
            />
            <h2 className="text-[40px] leading-[55px] mb-4">Premium Courses</h2>
            <h2 className="text-[40px] leading-[55px] mb-16 w-9/12 text-[#a9adc1]">
              Learn Advance concept of Web Dev
            </h2>
            <Button classNames="relative bottom-[-56px]">
              <Link href={"/premium"}>Premium course</Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CoursesSection;
