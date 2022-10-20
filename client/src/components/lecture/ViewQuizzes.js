import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lecture.css";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useNavigate } from "react-router-dom";

function ViewQuizzes() {
  const [quiz, setQuiz] = useState([]);

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
  };

  function filterData(quiz, searchKey) {
    const result = quiz.filter((quiz) => {
      return quiz.moduleN.toLowerCase().includes(searchKey);
    });

    setQuiz(result);
  }

  function handleSearchArea(e) {
    const searchKey = e.target.value;

    axios.get("http://localhost:5000/api/quiz").then((res) => {
      filterData(res.data, searchKey);
    });
  }

  function removeQuiz(_id) {
    axios
      .delete("http://localhost:5000/api/quiz/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("quiz deleted ");
      })
      .catch((err) => {
        alert(err);
      });

    setQuiz(quiz.filter((quiz) => quiz._id !== _id));
  }
  return (
    <div className="tableStyle">
      <div>
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<PersonAddAlt1Icon />}
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
          onClick={window.print}
        >
          Generate Quiz Report
        </Button>
      </div>
      
      <div className="searchBar">
        <input
          type="text"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleSearchArea}
        />
      </div>
      <div style={{backgroundColor:"blue"}}><center><h1 className="AllVheading">All Added Quizzes</h1></center></div>
      <div class="AllQTable">
        {quiz.map((quiz, index) => {
              return (
                <table className="table table-bordered table-hover quizDetails" >
                 <thead className="table-dark"> 
                 <th colspan="2" key={quiz._id} ><h1 style={{position:"fix", color:"black"}}><center>{index + 1}</center></h1>
                 <br></br>
                 <h3><center>{quiz.quizNumber}</center></h3>
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
                     <td colspan="2"><center>
                     <Button
                                variant="contained"
                                style={{
                                    borderRadius: 35,
                                    backgroundColor: "",
                                    marginRight: "18px",
                                    color: "white",
                                    fontWeight: "bold",
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
                                  fontWeight: "550600",
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
                            </center>
                     </td>
                </tbody>
                </table>
              );
            })}
      </div>
    </div>
  );
}

export default ViewQuizzes;
