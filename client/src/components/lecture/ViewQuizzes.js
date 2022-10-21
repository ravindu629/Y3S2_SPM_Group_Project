import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lecture.css";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

function ViewQuizzes() {
  const [Quiz, setQuiz] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getQuizzes() {
      axios
        .get("http://localhost:5000/api/quiz")
        .then((res) => {
          setQuiz(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getQuizzes();
  }, []);

  const btnStyle = {
    borderRadius: 35,
    backgroundColor: "white",
    margin: "0 18px 18px",
    color: "black",
    fontWeight: "bold",
    fontFamily: "cursive"
  };

  function removeQuiz(_id) {
    axios
      .delete("http://localhost:5000/api/quiz/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("quiz deleted ");
        navigate("/viewAllQuizzes")
      })
      .catch((err) => {
        alert(err);
      });

    setQuiz(Quiz.filter((quiz) => quiz._id !== _id));
  }

  function filterData(quiz, searchKey) {
    const result = quiz.filter((quiz) => {
      return quiz.moduleN.toLowerCase().includes(searchKey);
    });

    setQuiz(result);
    console.log("..lll[[lo",result);
  }

  function handleSearchArea(e) {
    const searchKey = e.target.value;

    axios.get("http://localhost:5000/api/quiz").then((res) => {
      filterData(res.data, searchKey);
    });
  }
  function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
 

  return (
    <div className="tableStyleL">
      <div className="L-header">
        <div className="header-index">
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<AddIcon />}
          onClick={() => {
            navigate("/uploadQuiz");
          }}
        >
          Add New Quiz
        </Button>
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<PictureAsPdfIcon />}
          onClick={()=>printDiv(`quiz-report`)}
        >
          Generate Quiz Report
        </Button>
        </div>
        <div className="homebtn">
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<HomeIcon />}
          onClick={() => {
            navigate("/lectureMenu");
          }}
        >
         Home 
        </Button>
        </div>
      </div>
      
      <div className="searchBarL">
        <div className="searchBarL-divLeft">
        <center><h1 className="AllVheading">All Added Quizzes</h1></center>
        </div>

        <div className="searchBar-divRight" >
        <input
          type="text"
          class="search-control rounded"
          placeholder="Search    🔍"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleSearchArea}
        />
        </div>
      </div>
      <div id="quiz-report" class="AllQTable">
      <div class="viewMain">
        {Quiz.map((quiz,index)=>{
           return(
            
            <div class="quizCard-content" key={quiz._id} >
              <div class="label-div">
               <div class="label-contain">
                  <h2 style={{alignSelf:"center"}} >{index + 1}</h2>
                  <h2 style={{alignSelf:"center"}}>{quiz.quizNumber}</h2>
                  <center>
                        <div className="quiz-cred-M" style={{fontSize:"2px",wordBreak:"break-all", width:"inherit"}}>
                          <div className="quiz-cred">{quiz.date}<br></br>
                          {quiz.moduleN} <br></br>
                          {quiz.Lecture} <br></br></div> <br></br>
                         
                        </div>
                        </center>
               </div>
              </div>
              <div class="link-div">
              <a class="viewLink" href={`#${quiz._id}`}> View</a>
              </div>
            </div>
            
        );
        })}
        </div>
        {Quiz.map((quiz, index) => {
              return (
               
                <div class="modalDialog" id={quiz._id} >
                  <div class="modal2" id="print">
                  <a class="close" title="Close" href="#close">
                  X
                  </a>
                  <div class="table-card">
                    <table className="table table-bordered table-hover quizDetails" >
                    <thead className="table-dark"> 
                    <th colspan="2" key={quiz._id} >
                    <div class="L-header">
                        <div class="header-index">
                        <h1 style={{position:"fix", color:"black"}}>
                        <center>{index + 1}</center></h1>
                        <h1 style={{position:"fix", color:"black"}}><center>{quiz.quizNumber}</center></h1>
                        
                      </div>
                      <div class="header-left">
                      <Button
                                variant="contained"
                                style={{
                                    borderRadius: 35,
                                    backgroundColor: "",
                                    marginRight: "18px",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontFamily: "cursive",
                                    fontSize: "large"
                                }}
                                startIcon={<EditIcon />}
                                onClick={() => {
                                navigate(`/UpdateQuiz/${quiz._id}`);
                                }}
                            > Update
                            </Button>
                            <Button
                              variant="contained"
                              style={{
                                  borderRadius: 35,
                                  backgroundColor: "brown",
                                  marginRight: "18px",
                                  color: "white",
                                  fontWeight: "bold",
                                  fontFamily: "cursive",
                                  fontSize: "large"
                            }}
                      startIcon={<DeleteForeverIcon />}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this record?"
                          )
                        )
                        removeQuiz(quiz._id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button  
                    variant="contained"
                    
                    style={{
                      borderRadius: 35,
                      marginRight: "18px",
                      backgroundColor:" #006d2d",
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "cursive",
                      fontSize: "large"
                }}
                    startIcon={<PictureAsPdfIcon />} onClick={()=>printDiv(`${quiz._id}`)}> 
                    <b>Download Quiz </b> </Button>

                      </div>
                    </div>
                    </th> 
                  </thead>
                  <tbody className="table-light">
                 
                     <tr>
                        <td><p><label>Date:</label></p></td>
                        <td><p style={{color:"green"}}>{quiz.date}</p></td>
                     </tr>
                     <tr>
                        <td><p>Module: </p></td>
                        <td><p style={{color:"red"}}>{quiz.moduleN}</p></td>
                     </tr>
                     <tr>
                        <td><p>Lecture:</p></td>
                        <td><p style={{color:"blue"}}>{quiz.Lecture}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 01:</p></td>
                        <td><p> {quiz.quiz1}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 02:</p></td>
                        <td><p>{quiz.quiz2}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 03:</p></td>
                        <td><p>{quiz.quiz3}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 04:</p></td>
                        <td><p>{quiz.quiz4}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 05: </p></td>
                        <td><p>{quiz.quiz5}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 06: </p></td>
                        <td><p>{quiz.quiz6}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 07:</p></td>
                        <td><p>{quiz.quiz7}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 08:</p></td>
                        <td><p>{quiz.quiz8}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 09:</p></td>
                        <td><p>{quiz.quiz9}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 10:</p></td>
                        <td><p>{quiz.quiz10}</p></td>
                     </tr>
                    
                  </tbody>
                </table>
                </div>
                </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ViewQuizzes;
