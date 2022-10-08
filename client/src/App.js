import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Home from "./components/nav/Home";
import StaffLogin from "./components/login/StaffLogin";
import AdminMenu from "./components/admin/AdminMenu";
import LectureMenu from "./components/lecture/LectureMenu";

import SupportService from "./components/supportService/SupportService";

import StudentLogin from "./components/login/StudentLogin";
import AddSudent from "./components/student/AddStudent";
import StudentMenu from "./components/student/StudentMenu";
import SPMmodulePage from "./components/student/SPMmodulePage";
//Student Group Navigation
import StudentGroup from "./components/student/StudentGroup";
import CreateStudentGroup from "./components/student/CreateStudentGroup";

//suppoert services pages
import SupportServiceHome from "./components/supportService/SupportServiceHome";

import AddStaffMember from "./components/admin/AddStaffMember";
import Admins from "./components/admin/Admins";
import AddAdmin from "./components/admin/AddAdmin";
import AdminUpdate from "./components/admin/AdminUpdate";
import StaffMembers from "./components/admin/StaffMembers";
import UpdateStaffMember from "./components/admin/UpdateStaffMember";
import Std from "./components/admin/Std";
import UpdateStd from "./components/admin/UpdateStd";
import AdminProfile from "./components/admin/AdminProfile";

//suppoert services pages

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/staffLogin" element={<StaffLogin />} />
        <Route path="/adminMenu" element={<AdminMenu />} />
        <Route path="/lectureMenu" element={<LectureMenu />} />
        {/*Student*/}
        <Route path="/studentLogin" element={<StudentLogin />} />
        <Route path="/addStudent" element={<AddSudent />} />
        <Route path="/studentMenu" element={<StudentMenu />} />
        <Route path="/SPMmodulePage" element={<SPMmodulePage />} />
        <Route path="/SupportServiceHome" element={<SupportServiceHome />} />

        <Route path="/addStaffMember" element={<AddStaffMember />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/updateAdmin/:id" element={<AdminUpdate />} />
        <Route path="/updateStaffMember/:id" element={<UpdateStaffMember />} />
        <Route path="/updateStd/:id" element={<UpdateStd />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/staffMembers" element={<StaffMembers />} />
        <Route path="/stds" element={<Std />} />
        <Route path="/adminProfile/:id" element={<AdminProfile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
