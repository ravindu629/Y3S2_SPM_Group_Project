import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Home from "./components/nav/Home";
import StaffLogin from "./components/login/StaffLogin";
import AdminMenu from "./components/admin/AdminMenu";
import LectureMenu from "./components/lecture/LectureMenu";
import SupportService from "./components/supportService/SupportService";

//Student
import StudentLogin from "./components/login/StudentLogin";
import AddSudent from "./components/student/AddStudent";
import StudentMenu from "./components/student/StudentMenu";
import SPMmodulePage from "./components/student/SPMmodulePage";
//Student Group Navigation
import StudentGroup from "./components/student/StudentGroup";
import CreateStudentGroup from "./components/student/CreateStudentGroup";
import UpdateStudentGroup from "./components/student/UpdateStudentGroup";
//Student Project Navigation
import StudentProject from "./components/student/StudentProject";
import RegisterStudentProject from "./components/student/RegisterStudentProject";
import UpdateStudentProject from "./components/student/UpdateStudentProject";
//Student Profile Navugation
import StudentProfile from "./components/student/StudentProfile";
import StudentProfileLogin from "./components/student/StudentProfileLogin";
import StudentProfileUpdate from "./components/student/StudentProfileUpdate";






import AddStaffMember from "./components/admin/AddStaffMember";
import Admins from "./components/admin/Admins";
import AddAdmin from "./components/admin/AddAdmin";

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
        <Route path="/supportServiceMenu" element={<SupportService />} />

        {/*Student*/}
        <Route path="/studentLogin" element={<StudentLogin />} />
        <Route path="/addStudent" element={<AddSudent />} />
        <Route path="/studentMenu" element={<StudentMenu />} />
        <Route path="/SPMmodulePage" element={<SPMmodulePage />} />
        {/*Student Group Navigation*/}
        <Route path="/studentGroup" element={<StudentGroup />} />
        <Route path="/CreateStudentGroup" element={<CreateStudentGroup />} />
        <Route path="/updateStudentGroup/:id" element={<UpdateStudentGroup />} />
        {/**Student Project Navigation*/}
        <Route path="/studentProject" element={<StudentProject />} />
        <Route path="/RegisterStudentProject" element={<RegisterStudentProject />} />
        <Route path="/UpdateStudentProject/:id" element={<UpdateStudentProject />} />
        {/**Student Profile Navigation*/}
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/StudentProfileLogin" element={<StudentProfileLogin />} />
        <Route path="/StudentProfileUpdate/:id" element={<StudentProfileUpdate />} />


        <Route path="/addStaffMember" element={<AddStaffMember />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/admins" element={<Admins />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
