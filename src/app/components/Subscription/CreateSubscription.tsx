"use client";

import { useState } from "react";
import SubscriptionSteps from "./SubscriptionSteps";
import PersonalInformation from "./PersonalInformation";
import SelectPlan from "./SelectPlan";
import SelectAddons from "./SelectAddons";
import SummaryInformation from "./SummaryInformation";
import FinishStep from "./FinishStep";

type Props = {};

const CreateSubscription = (props: Props) => {
  const [active, setActive] = useState(0);

  return (
    <div className=" flex justify-between w-[70%] min-h-[80vh] flex-col 1500px:flex-row rounded-lg 1500px:bg-white p-10 z-10">
      <div className="1500px:w-[30%] w-[100%] h-[400px] 1500px:h-auto top-0  absolute left-0 right-0   1500px:relative 1500px:rounded-lg bg-blue-700 1500px:bg-hero_bg bg-no-repeat bg-cover bg-center">
        <SubscriptionSteps active={active} setActive={setActive} />
      </div>
      <div className="1500px:w-[60%] w-full relative bg-white p-10 rounded-lg ">
        {active === 0 && (
          <PersonalInformation active={active} setActive={setActive} />
        )}
        {active === 1 && <SelectPlan active={active} setActive={setActive} />}
        {active === 2 && <SelectAddons active={active} setActive={setActive} />}
        {active === 3 && (
          <SummaryInformation active={active} setActive={setActive} />
        )}
        {active === 4 && <FinishStep active={active} setActive={setActive} />}
      </div>
    </div>
  );
};

export default CreateSubscription;
