import { styles } from "@/app/styles/style";
import { FC } from "react";
import icon_arcade from "@/assets/icon-arcade.svg";
import Image from "next/image";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const SelectAddons: FC<Props> = ({ active, setActive }) => {
  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    setActive(active + 1);
  };

  return (
    <div className="w-[80%] m-auto mt-20 ">
      <div>
        <h1 className="font-bold text-[35px] text-textColorPrimary">
          Pick add-ons
        </h1>
        <span className="font-light text-[15px] mt-5 text-textColorPrimary">
          Add-ons help enhance your gaming experience.
        </span>
      </div>
      <div className="mt-15">
        <div className="mt-[30px] flex gap-y-5 items-center flex-col justify-between">
          <div className="p-[20px] border-2 w-full border-[#e3ddf4] rounded-xl ">
            <label
              className="checkbox-label   w-full h-[50px]  flex  justify-between items-center"
              htmlFor="aracde_plan"
            >
              <input
                type="checkbox"
                className="custom-checkbox "
                id="aracde_plan"
              />

              <div>
                <h1 className="font-bold text-textColorPrimary text-[15px]">
                  Online service
                </h1>

                <span className="text-textColorSecondary">
                  Access to multiplayer games
                </span>
              </div>
              <div>
                <h1 className="font-bold text-textColorPrimary text-[15px]">
                  +$1/mo
                </h1>
              </div>
            </label>
          </div>
          <div className="p-[20px] border-2 w-full border-[#e3ddf4] rounded-xl ">
            <label
              className="checkbox-label   w-full h-[50px]  flex  justify-between items-center"
              htmlFor="aracde_plan"
            >
              <input
                type="checkbox"
                className="custom-checkbox "
                id="aracde_plan"
              />

              <div>
                <h1 className="font-bold text-textColorPrimary text-[15px]">
                  Online service
                </h1>

                <span className="text-textColorSecondary">
                  Access to multiplayer games
                </span>
              </div>
              <div>
                <h1 className="font-bold text-textColorPrimary text-[15px]">
                  +$1/mo
                </h1>
              </div>
            </label>
          </div>
          <div className="p-[20px] border-2 w-full border-[#e3ddf4] rounded-xl ">
            <label
              className="checkbox-label   w-full h-[50px]  flex  justify-between items-center"
              htmlFor="aracde_plan"
            >
              <input
                type="checkbox"
                className="custom-checkbox "
                id="aracde_plan"
              />

              <div>
                <h1 className="font-bold text-textColorPrimary text-[15px]">
                  Online service
                </h1>

                <span className="text-textColorSecondary">
                  Access to multiplayer games
                </span>
              </div>
              <div>
                <h1 className="font-bold text-textColorPrimary text-[15px]">
                  +$1/mo
                </h1>
              </div>
            </label>
          </div>
        </div>

        <br />

        <div className="w-full flex items-center justify-between">
          <div
            className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-transparent text-center text-textColorPrimary rounded mt-8 cursor-pointer"
            onClick={() => prevButton()}
          >
            Go back
          </div>
          <div
            className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-textColorPrimary text-center text-[#fff] rounded mt-8 cursor-pointer"
            onClick={() => handleOptions()}
          >
            Next Step
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAddons;
