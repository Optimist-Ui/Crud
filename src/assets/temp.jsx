import React from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import NavBar from "./pages/NavBar";
// import PageNotFound from "./pages/PageNotFound";
// import Form from "../components/Form";
import Main from "../components/home";

const App = () => {
  return (
    <div className="bg-[#21303f] border-2 border-[#21303f]">
      <h1 className="text-center  font-bold lg:font-extrabold break-words text-5xl text-white pt-20">
        This is a Basic Crud Operation in React !
      </h1>
      <Main />
      {/* <Form /> */}
    </div>

    // React Router and its feautures
    // <>
    //   <BrowserRouter>
    //     <NavBar />
    //     <Routes>
    //       <Route path="/Home" element={<Home />} />
    //       <Route path="/ABout" element={<About />} />
    //       <Route path="/Contact" element={<Contact />} />
    //       {/* <Route path="/*" element={<Navigate to={"/Home"} />} /> */}
    //       <Route path="/*" element={<PageNotFound />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
  );
};

export default App;
