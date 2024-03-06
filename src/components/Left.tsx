import { useState } from "react";
import listIcon from "../assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";

type monthlyUpdatesType = {
  id: number;
  icon: string;
  update: string;
}[];

const monthlyUpdates: monthlyUpdatesType = [
  {
    id: 1,
    icon: listIcon,
    update: "Product discovery and building what matters",
  },
  {
    id: 2,
    icon: listIcon,
    update: "Measuring to ensure updates are a success",
  },
  {
    id: 3,
    icon: listIcon,
    update: "And much more!",
  },
];

const emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Left = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailRegex.test(email)) setIsError(true);
    else {
      setIsError(false);
      navigate("/success");
    }
  };

  return (
    <section className="grid grid-cols-1 grid-rows-[1fr_auto] py-8 md:pb-8 px-6 md:px-12 gap-8 md:gap-4 row-start-2 row-end-3 md:row-start-1 md:row-end-1">
      <div className="flex flex-col gap-6 justify-center">
        <h1 className="text-6xl font-bold text-textBtn">Stay updated!</h1>
        <p>Jion 60.000+ product managers receiving monthly updates on:</p>
        <div className="flex flex-col gap-2">
          {monthlyUpdates.map((item) => (
            <div key={item.id} className="flex gap-4">
              <span>
                <img src={item.icon} alt="list item" />
              </span>
              <li className="list-none">{item.update}</li>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-rows-[auto_1fr_1fr] gap-2"
      >
        <div className="flex items-center justify-between text-xs font-bold">
          <label htmlFor="input" className="text-textBtn">
            Email address
          </label>
          {isError && <p className="text-tomato">Valid email required</p>}
        </div>
        <input
          id="input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={isError ? "ash#loremcompany.com" : "email@company.com"}
          className={`rounded-lg border-2 mb-2 px-6 py-4 ${
            isError
              ? "placeholder:text-tomato bg-error border-tomato outline-tomato"
              : ""
          }`}
        />
        <input
          type="submit"
          value="Subscribe to monthly newsletter"
          className="cursor-pointer bg-textBtn text-white font-bold rounded-lg mt-2 hover:bg-gradient-to-r from-pink to-tomato"
        />
      </form>
    </section>
  );
};

export default Left;
