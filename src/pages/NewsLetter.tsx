import Left from "../components/Left";
import Right from "../components/Right";

const NewsLetter = () => {
  return (
    <main className="bg-white w-full sm:w-[70%] rounded-none md:rounded-3xl grid grid-cols-1 md:grid-cols-[60%_40%] grid-rows-[auto_1fr] md:grid-rows-1 p-0 md:p-6 ">
      <Left />
      <Right />
    </main>
  );
};

export default NewsLetter;
