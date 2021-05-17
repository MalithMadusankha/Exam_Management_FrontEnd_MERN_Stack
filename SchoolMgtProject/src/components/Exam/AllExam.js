import React, {useState, useEffect} from 'react';
import axois from 'axios';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import GeneratePDFAll from './GenReport/GeneratePDFAll';


// Json web token need to handle with login page username password
export default function AllExam() {

    const [exams, setExams] = useState([]);
    useEffect(() => {
        function getExams() {
            axois.get("http://localhost:8070/exam/").then((res) => {
                setExams(res.data);               
            }).catch((err) => {
                alert(err.massage);
            })
        }
        getExams();
    }, [])

    return (
        <div>
            <div className="container mt-3 text-start" >
                <div className="row">
                    <div className="col col-3">
                        <h3> Exam Details  </h3>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary"
                            onClick={() => GeneratePDFAll(exams)}
                            > Dowenload All Exams 
                        </button>
                    </div>
                </div>
                
                <div>
                    {
                        exams.map((val, key) => {
                            return (
                            <div className="shadow my-3 p-3 rounded bg-dark bg-gradient text-white"> 
                                <table>
                                    <tr>
                                        <th className="w-25">Exam ID</th>
                                        <td className=""> {val.examId} </td>
                                    </tr>
                                    <tr>
                                        <th> Exam Name </th>
                                        <td className=""> {val.name} </td>
                                    </tr>
                                    <tr>
                                        <th> Grade </th>
                                        <td className=""> {val.grade} </td>
                                    </tr>
                                    <tr>
                                        <th> Subject </th>
                                        <td className=""> {val.subject} </td>
                                    </tr>
                                    <tr>
                                        <th> Date </th>
                                        <td className=""> {moment(val.date).format('DD-MM-YYYY') } </td>
                                    </tr>
                                    <tr>
                                        <th> Time  </th>
                                        <td className=""> {val.timeStart}  To {val.timeEnd} </td>
                                    </tr>
                                    <tr>
                                        <th>Notice</th>
                                        <td className=""> {val.notice} </td>
                                    </tr>
                                    
                                </table>
                                <Link className="btn btn-success m-2" to={`/ExamUpdateComponet/${val.examId}`} > Modify </Link>
                                
                                <button className="btn btn-danger m-2"
                                    onClick={() => {
                                        const idExm = val.examId
                                        console.log(val.examId)
                                        axios.delete("http://localhost:8070/exam/delete/"+idExm).then(() => {
                                            alert("Exam Deleted")
                                            window.location = '/ExamComponet';
                                        }).catch((err) => {
                                            alert(err)
                                        })
                                    }}
                                    > Delete </button>
                            </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}
