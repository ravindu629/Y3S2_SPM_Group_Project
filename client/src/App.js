import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Home from "./components/nav/Home";
import StaffLogin from "./components/login/StaffLogin";
import AdminMenu from "./components/admin/AdminMenu";
import StudentMenu from "./components/student/StudentMenu";
import LectureMenu from "./components/lecture/LectureMenu";
import SupportService from "./components/supportService/SupportService";
import StudentLogin from "./components/login/StudentLogin";
import AddSudent from "./components/student/AddStudent";

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
        <Route path="/supportServiceMenu" element={<SupportService />} />

        <Route path="/addStudent" element={<AddSudent />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
