import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        Navbar
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"Home"} />
          <Route path="/projects" element={"Home"} />
          <Route path="/abpit" element={"Home"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
