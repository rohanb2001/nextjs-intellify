import SpinnerSvg from "./SpinnerSvg";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="w-[85%] flex justify-between mx-auto py-12">
        <Link href={"/"}>
          <h2 className="text-3xl font-semibold tracking-wide cursor-pointer">
            Rohan B. Dev
          </h2>
        </Link>
        <ul className="flex text-[#A9ADC1] font-semibold text-lg tracking-wide  ">
          <li className="mr-12 hover:text-white cursor-pointer">
            <Link href={"/free"}>Free Courses</Link>
          </li>
          <li className="mr-12 hover:text-white cursor-pointer">
            <Link href={"/premium"}>Premium Courses</Link>
          </li>
          <li className="mr-12 hover:text-white cursor-pointer">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="mr-12 hover:text-white cursor-pointer">
            <Link href={"/register"}>Register</Link>
          </li>
        </ul>
        <div className="flex text-[#A9ADC1] font-semibold text-lg tracking-wide cursor-pointer">
          <SpinnerSvg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
