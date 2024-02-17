import Image from "next/image";
import { FC } from "react";
import thankIcon from "@/assets/icon-thank-you.svg";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const FinishStep: FC<Props> = ({ active, setActive }) => {
  return (
    <div className="w-[80%] m-auto mt-20 flex justify-center flex-col h-[80%] gap-5 items-center ">
      <Image src={thankIcon} alt="img" width={90} height={90} />
      <h1 className=" font-bold text-[35px]">Thank you !</h1>
      <p className=" text-center">
        Thanks fo confirming your subscription ! We hope you have fun using our
        platform . If you ever need support , please feel free to email us at
        support@loremgaming.com{" "}
      </p>
    </div>
  );
};

export default FinishStep;
