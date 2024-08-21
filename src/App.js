import { useState } from "react";
import Header from "./components/header/Header";
import ResultDetail from "./components/result/ResultDetail";
import Search from "./components/search/Search";
import "./App.css";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDark, setIsDark] = useState(function () {
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    return systemSettingDark;
  });

  async function handleGetUserData(query) {
    try {
      setErrorMsg("");
      setIsLoading(true);
      const res = await fetch(`https://api.github.com/users/${query}`, {
        headers: {
          authorization: "token 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",
        },
      });

      if (res.status === 404) throw new Error("⛔ Oops, User not found!");
      if (!res.ok) throw new Error("Error Getting Data!");
      const data = await res.json();

      setUserDetails(data);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleToggleDark() {
    setIsDark((dark) => !dark);
  }

  return (
    <div className={`app ${isDark && "dark"}`}>
      <div className="main-container">
        <Header isDark={isDark} onToggleDark={handleToggleDark} />
        <Search onGetUserData={handleGetUserData} />
        <ResultDetail
          userDetails={userDetails}
          isLoading={isLoading}
          errorMsg={errorMsg}
        />
      </div>
    </div>
  );
}

export default App;
