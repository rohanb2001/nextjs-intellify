import { cn } from "@/utils/cn";

const Input = ({ classNames, label, name, register, required }) => (
  <>
    <label className="block mb-2">{label}</label>
    <input
      className={cn(classNames, "p-[10px]")}
      {...register(name, { ...required })}
    />
  </>
);

export default Input;
