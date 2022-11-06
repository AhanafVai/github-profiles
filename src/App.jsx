import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/layouts/Alert";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import User from "./Pages/User";

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen ">
            <Navbar />
            <main className="container mx-auto px-3">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
};

export default App;
