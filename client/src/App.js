import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Home from "./components/nav/Home";
import StaffLogin from "./components/login/StaffLogin";
import AdminMenu from "./components/admin/AdminMenu";
import LectureMenu from "./components/lecture/LectureMenu";



import StudentLogin from "./components/login/StudentLogin";
import AddSudent from "./components/student/AddStudent";
import StudentMenu from "./components/student/StudentMenu";
import SPMmodulePage from "./components/student/SPMmodulePage";
//Student Group Navigation
import StudentGroup from "./components/student/StudentGroup";
import CreateStudentGroup from "./components/student/CreateStudentGroup";

//support services pages 
import SupportServiceHome from "./components/supportService/SupportServiceHome";
<<<<<<< HEAD

=======
>>>>>>> d26af8f6ff5f946f88c0b07a70fc2859fa646638
import HostalDetails from "./components/supportService/HostalDetails"
import AddHostal from "./components/supportService/AddHostal"
import UpdateHostal from "./components/supportService/UpdateHostal"
import TransportDetails from "./components/supportService/TransportDetails"
import AddTransport from "./components/supportService/AddTransport";
import UpdateTransport from "./components/supportService/UpdateTransport"
import ViewHostelReport from "./components/supportService/ViewHostelReport"
import ViewTransportReport from "./components/supportService/ViewTransportReport"
import ContactDetails from "./components/supportService/ContactDetails"

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


<<<<<<< HEAD


=======
>>>>>>> d26af8f6ff5f946f88c0b07a70fc2859fa646638
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
<<<<<<< HEAD

   

        <Route path="/studentMenu" element={<StudentMenu />} />
        <Route path="/SPMmodulePage" element={<SPMmodulePage />} />


=======
        <Route path="/studentMenu" element={<StudentMenu />} />
        <Route path="/SPMmodulePage" element={<SPMmodulePage />} />
>>>>>>> d26af8f6ff5f946f88c0b07a70fc2859fa646638
        <Route path="/SupportServiceHome" element={<SupportServiceHome />} />
        <Route path="/HostalDetails" element={<HostalDetails />} />
        <Route path="/AddHostal" element={<AddHostal />} />
        <Route path="/UpdateHostal/:id" element={<UpdateHostal />} />
        <Route path="/TransportDetails" element={<TransportDetails/>} />
        <Route path="/AddTransport" element={<AddTransport/>} />
        <Route path="/UpdateTransport/:id" element={<UpdateTransport/>} />
        <Route path="/ViewHostelReport" element={<ViewHostelReport/>} />
        <Route path="/ViewTransportReport" element={<ViewTransportReport/>} />
        <Route path="/ContactDetails" element={<ContactDetails/>} />




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
