import { FC } from "react";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const SubscriptionSteps: FC<Props> = ({ active, setActive }) => {
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <div className="1500px:block flex mx-auto w-[40%] 1500px:w-full">
      {steps.map((step: any, index: number) => (
        <div key={index} className="  flex w-[70%] mx-auto  py-5">
          <div
            className={`w-[50px]  border-2 border-white h-[50px]   rounded-full flex items-center justify-center text- bg-transparent ${
              active + 1 > index
                ? "bg-white text-blue-700"
                : "bg-transparent text-white"
            } relative `}
          >
            {index}
          </div>
          <div className=" 1500px:block hidden ml-5">
            <span className="text-white font-light text-[8px]">
              STEP {index}
            </span>
            <h1 className="text-white font-bold text-[15px]">{step}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionSteps;
