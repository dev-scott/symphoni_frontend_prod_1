import { styles } from "@/app/styles/style";
import Image from "next/image";
import { FC } from "react";
import icon_arcade from "@/assets/icon-arcade.svg";
import icon_advanced from "@/assets/icon-advanced.svg";
import icon_pro from "@/assets/icon-pro.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { SelectPlanSchema, SelectPlanType } from "@/app/lib/validation";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const SelectPlan: FC<Props> = ({ active, setActive }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SelectPlanType>({
    resolver: zodResolver(SelectPlanSchema),
  });

  const onSubmit: SubmitHandler<SelectPlanType> = (data) => {
    console.log(data);
    setActive(active + 1);
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    // setActive(active + 1);
  };

  return (
    <div className="w-[80%] m-auto mt-20 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="font-bold text-[35px] text-textColorPrimary">
            Select your plan
          </h1>
          <span className="font-light text-[15px] mt-5 text-textColorPrimary">
            You have the option of monthly or yearly billing
          </span>
        </div>
        <div className="mt-15 ">
          <div className="mt-[30px] flex items-center  1500px:flex-row flex-col gap-y-3 justify-between">
            <div className="p-[20px] cursor-pointer border-2 border-[#e3ddf4] rounded-xl ">
              <label
                className="checkbox-label   w-[140px] h-[130px]   flex flex-col justify-between items-start"
                htmlFor="aracde_plan"
              >
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  id="aracde_plan"
                  {...register("arcadeField")}
                />
                <div>
                  <Image
                    src={icon_arcade}
                    alt="arcode icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h1 className="font-bold text-textColorPrimary text-[20px]">
                    Arcade
                  </h1>

                  <span className="text-textColorSecondary">$9/mo</span>
                </div>
              </label>
            </div>
            <div className="p-[20px] cursor-pointer border-2 border-[#e3ddf4] rounded-xl ">
              <label
                className="checkbox-label   w-[140px] h-[130px]   flex flex-col justify-between items-start"
                htmlFor="advanced"
              >
                <input
                  type="checkbox"
                  className="custom-checkbox hidden"
                  id="advanced"
                  {...register("advancedField")}
                />
                <div>
                  <Image
                    src={icon_advanced}
                    alt="arcode icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h1 className="font-bold text-textColorPrimary text-[20px]">
                    Adcanced
                  </h1>

                  <span className="text-textColorSecondary">$12/mo</span>
                </div>
              </label>
            </div>
            <div className="p-[20px] cursor-pointer border-2 border-[#e3ddf4] rounded-xl ">
              <label
                className="checkbox-label   w-[140px] h-[130px]   flex flex-col justify-between items-start"
                htmlFor="pro"
              >
                <input
                  type="checkbox"
                  className="custom-checkbox hidden"
                  id="pro"
                  {...register("proField")}
                />
                <div>
                  <Image
                    src={icon_pro}
                    alt="arcode icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h1 className="font-bold text-textColorPrimary text-[20px]">
                    Pro
                  </h1>

                  <span className="text-textColorSecondary">$15/mo</span>
                </div>
              </label>
            </div>
          </div>

          <br />

          <div className="p-5 w-full h-[100px] bg-[#f8f9fe] flex gap-8 justify-center items-center">
            <span className="font-bold text-[15px] text-textColorPrimary">
              Monthly
            </span>

            <span className="font-bold text-[15px] text-textColorSecondary">
              Yearly
            </span>
          </div>

          <br />

          <div className="w-full flex items-center justify-between">
            <div
              className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-transparent text-center text-textColorPrimary rounded mt-8 cursor-pointer"
              onClick={() => prevButton()}
            >
              Go back
            </div>
            <input
              type="submit"
              value="Next"
              className="w-full 800px:w-[180px] h-[40px] bg-textColorPrimary text-center text-[#fff] rounded mt-8 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectPlan;
