import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";

const PostDetails = () => {
  return (
    <>
      <div className="w-full bg-[#25262e] pt-20 pb-24 mb-12">
        <Container classNames="w-9/12 mb-0">
          <div>
            <h1 className="text-3xl mb-16">JavaScript Course</h1>
            <div className="flex items-center">
              <Image
                src={"/demo.jpg"}
                className="mr-20 rounded-xl"
                width={700}
                height={600}
              />

              <div>
                <p className=" mb-16 text-2xl text-[#a9adc1]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci aspernatur ipsum eos dolore tenetur odit officiis
                  quasi minus necessitatibus unde.
                </p>
                <p className=" mb-10">Published: August 03, 2023</p>
                <Button>Start Learning</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container classNames="w-6/12 mx-0 mb-12">
        <div>
          <h1 className="text-4xl mb-9">Table of Contents</h1>
          <ul>
            <li className="py-7 px-16 bg-[#25262e] flex item-start mb-7 text-[19px] text-[#a9adc1] rounded-xl">
              https://frontendmasters.com/courses/advanced-remix/
            </li>
            <li className="py-7 px-16 bg-[#25262e] flex item-start mb-7 text-[19px] text-[#a9adc1] rounded-xl">
              https://frontendmasters.com/courses/advanced-remix/
            </li>
            <li className="py-7 px-16 bg-[#25262e] flex item-start mb-7 text-[19px] text-[#a9adc1] rounded-xl">
              https://frontendmasters.com/courses/advanced-remix/
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default PostDetails;
