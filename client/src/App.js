import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Home from "./components/nav/Home";
import StaffLogin from "./components/login/StaffLogin";
import AdminMenu from "./components/admin/AdminMenu";
import StudentMenu from "./components/student/StudentMenu";
import LectureMenu from "./components/lecture/LectureMenu";
import StudentLogin from "./components/login/StudentLogin";
import AddSudent from "./components/student/AddStudent";

//suppoert services pages 
import SupportServiceHome from "./components/supportService/SupportServiceHome";
import HostalDetails from "./components/supportService/HostalDetails"
import AddHostal from "./components/supportService/AddHostal"
import UpdateHostal from "./components/supportService/UpdateHostal"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/staffLogin" element={<StaffLogin />} />
        <Route path="/studentLogin" element={<StudentLogin />} />
        <Route path="/adminMenu" element={<AdminMenu />} />
        <Route path="/studentMenu" element={<StudentMenu />} />
        <Route path="/lectureMenu" element={<LectureMenu />} />
    

        <Route path="/addStudent" element={<AddSudent />} />
   
        <Route path="/SupportServiceHome" element={<SupportServiceHome />} />
        <Route path="/HostalDetails" element={<HostalDetails />} />
        <Route path="/AddHostal" element={<AddHostal />} />
        <Route path="/UpdateHostal" element={<UpdateHostal />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
