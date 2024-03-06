import Left from "../components/Left";
import Right from "../components/Right";

type newsletterProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewsLetter = ({
  email,
  setEmail,
  isError,
  setIsError,
}: newsletterProps) => {
  return (
    <main className="bg-white w-full sm:w-[70%] rounded-none md:rounded-3xl grid grid-cols-1 md:grid-cols-[60%_40%] grid-rows-[auto_1fr] md:grid-rows-1 p-0 md:p-6 ">
      <Left
        email={email}
        setEmail={setEmail}
        isError={isError}
        setIsError={setIsError}
      />
      <Right />
    </main>
  );
};

export default NewsLetter;
