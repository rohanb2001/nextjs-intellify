import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Container classNames=" border-t border-[#3d3f47] pt-28 pb-10 mb-10">
        <div>
          <h1 className="text-[23px] leading-[30px] mb-4">Rohan B. Dev</h1>
          <h1 className="text-[23px] leading-[30px] mb-4 text-[#a9adc1]">
            Visit our courses for better future.
          </h1>
        </div>
        <div className="flex flex-col justify-center relative top-[-42px] text-[#a9adc1] ">
          <Link href="/" className="p-3 hover:text-white">
            Sign In
          </Link>
          <Link href="/" className="p-3 hover:text-white">
            Free Courses
          </Link>
          <Link href="page" className="p-3 hover:text-white">
            Premium Courses
          </Link>
        </div>
        <div className="text-[#a9adc1] text-[17px]">
          All rights reserved @ Rohan B. Dev 2023
        </div>
      </Container>
    </>
  );
};

export default Footer;
