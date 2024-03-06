import { Route, Routes } from "react-router-dom";
import NewsLetter from "./pages/NewsLetter";
import Success from "./pages/Success";

const App = () => {
  return (
    <div className="min-h-screen bg-bg grid place-items-center font-default">
      <Routes>
        <Route path="/" element={<NewsLetter />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default App;
