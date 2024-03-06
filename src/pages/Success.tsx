import { useNavigate } from "react-router-dom";
import successIcon from "../assets/images/icon-success.svg";

type successProps = {
  email: string;
};

const Success = ({ email }: successProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 bg-white px-8 py-10 rounded-3xl grid grid-flow-row gap-6">
      <img src={successIcon} className=" w-[15%]" />
      <h1 className=" text-4xl font-bold text-textBtn">
        Thanks for subscribing!
      </h1>
      <p className="text-sm">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-bg font-bold text-white py-4 rounded-lg hover:bg-gradient-to-r from-pink to-tomato"
      >
        Dissmiss message
      </button>
    </div>
  );
};

export default Success;
