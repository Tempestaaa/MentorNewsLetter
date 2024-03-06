import { Route, Routes } from "react-router-dom";
import NewsLetter from "./pages/NewsLetter";
import Success from "./pages/Success";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <div className="min-h-screen bg-bg grid place-items-center font-default">
      <Routes>
        <Route
          path="/"
          element={
            <NewsLetter
              email={email}
              setEmail={setEmail}
              isError={isError}
              setIsError={setIsError}
            />
          }
        />
        <Route path="success" element={<Success email={email} />} />
      </Routes>
    </div>
  );
};

export default App;
