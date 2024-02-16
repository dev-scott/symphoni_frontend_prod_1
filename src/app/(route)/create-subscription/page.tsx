import CreateSubscription from "@/app/components/Subscription/CreateSubscription";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center p-5 min-h-screen bg-bgColor ">
      <CreateSubscription />
    </div>
  );
};

export default page;
