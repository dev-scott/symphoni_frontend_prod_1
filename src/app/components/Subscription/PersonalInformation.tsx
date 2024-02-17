import { PersonalInfoSchema, PersonalInfoType } from "@/app/lib/validation";
import { styles } from "@/app/styles/style";
import { usePersonalInfoStore } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const PersonalInformation: FC<Props> = ({ active, setActive }) => {


  // const personaStore = usePersonalInfoStore((state)=)

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<PersonalInfoType>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  //   const submitData = (e: any) => {
  //     e.preventDefault();
  //     setActive(active + 1);
  //   };

  const onSubmit: SubmitHandler<PersonalInfoType> = (data) => {
    console.log(data);
    setActive(active + 1);
  };

  return (
    <div className="w-[80%] m-auto mt-20 ">
      <div className="mb-5">
        <h1 className="font-bold text-[35px] text-textColorPrimary">
          Personal Info
        </h1>
        <span className="font-light text-[15px] mt-5 text-textColorPrimary">
          Please provide your name , email address , and phne number.
        </span>
      </div>
      <div className="mt-15">
        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.label}`}>
          <div className="w-full ">
            <div className="w-full flex item-center justify-between">
              <label htmlFor="" className="text-textColorPrimary">
                Name
              </label>

              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <input
              type="name"
              {...register("name")}
              id="name"
              placeholder="Enter your name"
              className={`
            ${styles.input} ${errors.name && "z-10 border-red-500"} `}
            />
          </div>

          <br />

          <div>
            <div className="w-full flex item-center justify-between">
              <label htmlFor="" className="text-textColorPrimary">
                Email adresse
              </label>

              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Enter your email"
              className={`
            ${styles.input} ${errors.email && "z-10 border-red-500"} `}
            />
          </div>

          <br />

          <div>
            <div className="w-full flex item-center justify-between">
              <label htmlFor="" className="text-textColorPrimary">
                Phone number
              </label>

              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </div>
            <input
              type="number"
              {...register("phone")}
              id="number"
              placeholder="e.g. +237 655 45 45 65"
              className={`
            ${styles.input} ${errors.phone && "z-10 border-red-500"} `}
            />
          </div>

          <br />

          <div className="w-full flex items-center justify-end">
            <input
              type="submit"
              value="Next"
              className="w-full 800px:w-[180px] h-[40px] bg-textColorPrimary text-center text-[#fff] rounded mt-8 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default PersonalInformation;
