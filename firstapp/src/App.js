import "./App.css";


import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

const App = () => {
  const username = "Shailanshu";

  return (
    <div>
      <Header/>
      <h1 className="active">welcome {username}</h1>
      <Counter/>
      <Footer/>
    </div>
  );
};

export default App;
