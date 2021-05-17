import React, { Component, useState } from 'react'
import axios from 'axios';
import moment from 'moment';

function Form() {

    const [examId, setExamId] = useState("");
    const [name, setName] = useState("");
    const [grade, setGrade] = useState(0);
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [timeStart, setTimeStart] = useState("");
    const [timeEnd, setTimeEnd] = useState("");
    const [notice, setNotice] = useState("");

    function sendData(e) {
        e.preventDefault();
        
        const newExam = {
            examId,
            name,
            grade,
            subject,
            date,
            timeStart,
            timeEnd,
            notice,
        }
        console.log(newExam);

        axios.post("http://localhost:8070/exam/add", newExam).then(() => {
            alert("student Added");
            console.log("newExam");
            window.location = '/ExamComponet';
        }).catch((err) => {
            alert(err)
        })

        

    }

        return (
            <div>
                <form onSubmit={sendData}>
                <div className="container mt-3 text-start">

                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlFor="examId"> Exam ID </label>
                        </div>
                        <div className="col col-3">
                            <input className="form-control" id="examId"
                            type='text' 
                            onChange={(e) => {
                                setExamId(e.target.value)
                            }}  />
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlFor="name"> Exam Name </label>
                        </div>
                        <div className="col col-3">
                            <input className="form-control" id="name"
                            type='text' 
                            onChange={(e) => {
                                setName(e.target.value)
                            }} required />
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlFor="grade"> Grade </label>
                        </div>
                        <div className="col col-3">
                            <input className="form-control" id="gender"
                            type='number' 
                            onChange={(e) => {
                                setGrade(e.target.value)
                            }} required />
                        </div>
                    </div>
                    
                    <div class="row my-1">
                        <div class="col col-2">
                            <label htmlFor="subject" > Subject </label>
                        </div>
                        <div class="col col-3">
                            <input className="form-control" id="subject"
                            type='text' 
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }} required />
                        </div>
                    </div>

                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlFor="date"> Date </label>
                        </div>
                        <div className="col col-2">
                            <input className="form-control" id="date"
                            type='text' 
                            onChange={(e) => {
                                setDate(moment(e.target.value).format('DD-MM-YYYY'))
                            }} required />
                        </div>
                    </div>

                    <div className="row my-1">
                        <div className="col col-2">
                            <label> Time </label>
                        </div>
                        <div className="col col-auto">
                            <label htmlFor="timeStart">From</label>
                        </div>
                        <div className="col col-auto">
                            <input className="form-control" id="timeStart"
                            type='time' 
                            onChange={(e) => {
                                setTimeStart(e.target.value)
                            }} required />
                        </div>
                        <div className="col col-auto">
                            <label htmlFor="timeEnd">To</label>
                        </div>
                        <div className="col col-auto">
                            <input className="form-control" id="timeEnd"
                            type='time' 
                            onChange={(e) => {
                                setTimeEnd(e.target.value)
                            }} required />
                        </div>
                    </div>

                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlFor="notice"> Notice </label>
                        </div>
                        <div className="col col-6">
                            <textarea className="form-control" rows="5" id="notice"
                                type='time' 
                                onChange={(e) => {
                                    setNotice(e.target.value)
                                }} required > 
                            </textarea>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col col-2"></div>
                        <div className="col col-3">
                            <button type="submit" className="btn btn-primary w-100 p-3 " >
                                SUBMIT
                            </button>
                        </div>
                        
                    </div>
                </div>
                </form>
            </div>
        )
}
export default Form; 