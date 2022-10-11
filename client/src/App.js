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
import UpdateStudentGroup from "./components/student/UpdateStudentGroup";
//Student Project Navigation
import StudentProject from "./components/student/StudentProject";
import RegisterStudentProject from "./components/student/RegisterStudentProject";
import UpdateStudentProject from "./components/student/UpdateStudentProject";
//Student Profile Navugation
import StudentProfile from "./components/student/StudentProfile";
import StudentProfileLogin from "./components/student/StudentProfileLogin";
import StudentProfileUpdate from "./components/student/StudentProfileUpdate";






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
import UpdateAdminProfile from "./components/admin/UpdateAdminProfile";
import AddNotice from "./components/admin/AddNotice";
import AllNotices from "./components/admin/AllNotices";
import UpdateNotice from "./components/admin/UpdateNotice";
import Faculty_Notces from "./components/admin/Faculty_Notices";
import Faculty_Notices from "./components/admin/Faculty_Notices";
import ViewNotice from "./components/admin/ViewNotice";

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


        <Route path="/SupportServiceHome" element={<SupportServiceHome />} />


        <Route path="/addStaffMember" element={<AddStaffMember />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/addNotice" element={<AddNotice />} />
        <Route path="/updateAdmin/:id" element={<AdminUpdate />} />
        <Route path="/updateStaffMember/:id" element={<UpdateStaffMember />} />
        <Route path="/updateStd/:id" element={<UpdateStd />} />
        <Route path="/updateF_Notice/:id" element={<UpdateNotice />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/staffMembers" element={<StaffMembers />} />
        <Route path="/f_notices" element={<AllNotices />} />
        <Route path="/stds" element={<Std />} />
        <Route path="/adminProfile/:id" element={<AdminProfile />} />
        <Route path="/admProfileUpdate/:id" element={<UpdateAdminProfile />} />

        <Route path="/notices" element={<Faculty_Notices />} />
        <Route path="/viewNotice/:id" element={<ViewNotice />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
