import Image from "next/image";
import Button from "@/components/Button";

const PostItem = () => {
  return (
    <>
      <li className="bg-[#2e3039] p-12 h-[700px] rounded-2xl">
        <div>
          <Image
            src={"/demo.jpg"}
            className="h-3/5 w-3/5 mb-5"
            height={130}
            width={130}
          />
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-semibold tracking-wider">
            Advance Remix
          </h2>
          <p className="text-[#a9adc1] mb-8 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            similique libero, nam natus consequuntur quod aut? Rem commodi
            delectus possimus, totam vel eius suscipit officia laborum, ullam
            iure doloremque ut perferendis deleniti est. Illum, expedita velit
            corrupti iusto nam dolores.
          </p>
          <Button>Visit Course</Button>
        </div>
      </li>
    </>
  );
};

export default PostItem;
