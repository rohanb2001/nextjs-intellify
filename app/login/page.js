"use client";

import Container from "@/components/Container";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container classNames="w-[22%] h-[400px] bg-[#2e3039] rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="block p-4 mt-6 ">
        <h1 className="ml-auto block mb-8 text-2xl text-[#a9adc1]">Login</h1>
        <Input
          classNames="block mb-7 bg-[#2e3039] border-2 border-[#3d3f47] outline-none"
          label="Enter your email"
          name="Email"
          register={register}
          required={{
            required: true,
          }}
        />
        <Input
          classNames="block mb-9 bg-[#2e3039] border-2 border-[#3d3f47] outline-none"
          label="Create your password"
          name="Password"
          register={register}
          required={{
            required: true,
            maxLength: 20,
            minLength: 2,
          }}
        />
        <button
          type="submit"
          className="w-[100%] h-[40px] bg-yellow-600 text-gray-200 tracking-widest rounded-xl"
        >
          Submit
        </button>
      </form>
    </Container>
  );
}
