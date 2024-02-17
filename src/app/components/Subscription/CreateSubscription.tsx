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
    <div className=" flex justify-between w-[70%] min-h-[80vh] rounded-lg bg-white p-10 ">
      <div className="w-[30%]   rounded-lg bg-hero_bg bg-no-repeat bg-contain bg-center">
        <SubscriptionSteps active={active} setActive={setActive} />
      </div>
      <div className="w-[60%] ">
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
