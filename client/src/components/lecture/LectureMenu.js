import React from "react";
import { useNavigate } from "react-router-dom";
import "../lecture/Lecture.css"
import sir from "../images/animated-cartoon-lecture-animation-png-favpng-9geg7t8LAqp2kn5qf0uWEWRPp.jpg";

export default function LectureMenu() {
  let navigate = useNavigate();
  return (
    <div>
    <div className="lectureMenu">
      <div className="lMheading">
      <i class='fas fa-hand-point-down handI'></i>
        Upload Quizes and Marking Schemes from here 
        
        </div>
      <div className="lecBtn">
        <button
          type="button"
          className="btn btn-light btn-lg btn-block"
          onClick={() => {
            navigate("/uploadQuiz");
          }}
        >
          <div className="lectureMenuBtns"> Upload Quiz</div>
        </button>

        <button
          type="button"
          className="btn btn-light btn-lg btn-block"
          onClick={() => {
            navigate("/viewAllQuizzes");
          }}
        >
          <div className="lectureMenuBtns"> View Quiz</div>
        </button>

        <button
          type="button"
          className="btn btn-light btn-lg btn-block"
          onClick={() => {
            navigate("/admins");
          }}
        >
          <div className="lectureMenuBtns"> Upload Marking Scheme</div>
        </button>

        <button
          type="button"
          className="btn btn-light btn-lg btn-block"
          onClick={() => {
            navigate("/addStaffMember");
          }}
        >
          <div className="lectureMenuBtns"> View Marking Scheme</div>
        </button>
        <button
          type="button"
          className="btn btn-light btn-lg btn-block"
          onClick={() => {
            navigate("/addAdmin");
          }}
        >
          <div className="lectureMenuBtns">  View Quiz Report</div>
        </button>
      </div>
      <div class="divider"></div>
      
    </div>
    
  </div>
    
  );
};

