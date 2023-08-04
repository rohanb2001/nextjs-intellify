import { cn } from "@/utils/cn";

const Container = ({ classNames, children }) => {
  return (
    <div
      className={cn(
        "w-full h-full flex mx-auto justify-evenly relative mb-60",
        classNames
      )}
    >
      {children}
    </div>
  );
};

export default Container;
