import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';
import moment from 'moment';

class UpdateFormExam extends Component {

    constructor(props) {
        super(props);
        // Function Binding
        this.onChangeExamId = this.onChangeExamId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGrade = this.onChangeGrade.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangetimeS = this.onChangetimeS.bind(this);
        this.onChangetimeE = this.onChangetimeE.bind(this);
        this.onChangeNotice = this.onChangeNotice.bind(this);
        console.log(props.name);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          examId: '',
          name: '',
          grade: 0,
          subject: '',
          date: '',
          timeStart: '',
          timeEnd: '',
          notice: ''
        }
      }

      componentDidMount() {
        axios.get('http://localhost:8070/exam/get/'+this.props.name)
          .then(response => {
            console.log(response.data.exam);
              this.setState({
                examId: response.data.exam.examId,
                name: response.data.exam.name,
                grade: Number(response.data.exam.grade),
                subject: response.data.exam.subject,
                date: moment(response.data.exam.date).format('DD-MM-YYYY'),
                timeStart: response.data.exam.timeStart,
                timeEnd: response.data.exam.timeEnd,
                notice: response.data.exam.notice,
              })
          })
          .catch((error) => {
            console.log(error);
          })

          
      }

      onChangeExamId(e) {
          this.setState({
             examId: e.target.value
          })
      }
      onChangeName(e) {
          this.setState({
            name: e.target.value
          })
      }

      onChangeGrade(e) {
        this.setState({
          grade: Number(e.target.value)
        })
    }

      onChangeSubject(e) {
          this.setState({
            subject: e.target.value
          })
      }
      onChangeDate(e) {
          this.setState({
            date: moment(e.target.value).format('DD-MM-YYYY')
          })
      }
      onChangetimeS(e) {
          this.setState({
            timeStart: e.target.value
          })
      }
      onChangetimeE(e) {
          this.setState({
            timeEnd: e.target.value
          })
      }
      onChangeNotice(e) {
          this.setState({
            notice: e.target.value
          })
      }

      onSubmit(e) {
        
        e.preventDefault();
    
        const exercise = {
          examId: this.state.examId,
          name: this.state.name,
          grade: this.state.grade,
          subject: this.state.subject,
          date: this.state.date,
          timeStart: this.state.timeStart,
          timeEnd: this.state.timeEnd,
          notice: this.state.notice
        }
        
        console.log(exercise);

        axios.put('http://localhost:8070/exam/update/' + this.props.name, exercise)
          .then(res => {
              console.log(res.data);
              alert("Updated");
            });
            
        window.location = '/ExamComponet';

      }
    
    render(){
        return (
            <div>
                {/* <div> <h2> Componet abc  ID : {props.name} </h2> </div> */}
                <form onSubmit={this.onSubmit}>
                <div className="container mt-3 text-start">

                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlFor="examId"> Exam ID </label>
                        </div>
                        <div className="col col-3">
                            <input className="form-control" id="examId"
                            type='text' 
                            value={this.state.examId}
                            onChange={this.onChangeExamId} disabled />
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlForor="name"> Exam Name </label>
                        </div>
                        <div className="col col-3">
                            <input className="form-control" id="name"
                            type='text' 
                            value={this.state.name}
                            onChange={this.onChangeName} required  />
                        </div>
                    </div>

                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlForor="grade"> Grade </label>
                        </div>
                        <div className="col col-3">
                            <input className="form-control" id="grade"
                            type='number' 
                            value={this.state.grade}
                            onChange={this.onChangeGrade} required />
                        </div>
                    </div>
                    
                    <div class="row my-1">
                        <div class="col col-2">
                            <label htmlFor="subject" > Subject </label>
                        </div>
                        <div class="col col-3">
                            <input lassName="form-control" id="subject"
                            type='text' 
                            value={this.state.subject}
                            onChange={this.onChangeSubject} required />
                        </div>
                    </div>

                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlFor="date"> Date </label>
                        </div>
                        <div className="col col-3">
                            <input className="form-control" id="date"
                            type='text' 
                            value={this.state.date}
                            onChange={this.onChangeDate} required />
                        </div>
                    </div>

                    <div className="row my-1">
                        <div className="col col-2">
                            <label> Time </label>
                        </div>
                        <div className="col col-auto">
                            <label htmlFor="timeStart">From</label>
                        </div>
                        <div className="col col-3">
                            <input className="form-control" id="timeStart"
                            type='time' 
                            value={this.state.timeStart}
                            onChange={this.onChangetimeS} required />
                        </div>
                        <div className="col col-auto">
                            <label htmlFor="timeEnd">To</label>
                        </div>
                        <div className="col col-3">
                            <input className="form-control" id="timeEnd"
                            type='time' 
                            value={this.state.timeEnd}
                            onChange={this.onChangetimeE} required />
                        </div>
                    </div>

                    <div className="row my-1">
                        <div className="col col-2">
                            <label htmlFor="notice"> Notice </label>
                        </div>
                        <div className="col col-6">
                            <textarea className="form-control" rows="5" id="notice"
                                type='text' 
                                value={this.state.notice}
                                onChange={this.onChangeNotice} required >
                            </textarea>
                        </div>
                    </div>
                    
                    <div className="row my-2">
                        <div className="col col-2"></div>
                        <div className="col col-3">
                            <button type="submit" className="btn btn-primary w-100 p-3 " >
                                UPDATE
                            </button>
                        </div>
                        
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default UpdateFormExam;