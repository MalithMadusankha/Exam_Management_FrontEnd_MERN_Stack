import React, { Component } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import moment from 'moment';
import GeneratePDF from './GeneratePDF'
import { Bar } from 'react-chartjs-2';

const stay=
    {labelsA: [],
    dataA:[]};


class GenReport extends Component{

    constructor(props) {
        super(props);
           
        // Function Binding
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            examId: '',
            name: '',
            grade: 0,
            subject: '',
            date: '',
            timeStart: '',
            timeEnd: '',
            notice: '',
            mark: [{
              stdID: '',
              mark:0
            }],
            tmpID:'',
            tmpMark:null,
            sta :{
              labels: [],
              datasets: [
                {
                  label: 'Rainfall',
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: []
                }
              ]
            }
          }

        
      }

      onSubmit() {
        axios.get('http://localhost:8070/exam/get/'+this.state.examId)
        .then(response => {
            console.log(response.data.exam);
            this.setState({
                examId: response.data.exam.examId,
                name: response.data.exam.name,
                grade: response.data.exam.grade,
                subject: response.data.exam.subject,
                date: moment(response.data.exam.date).format('DD-MM-YYYY'),
                timeStart: response.data.exam.timeStart,
                timeEnd: response.data.exam.timeEnd,
                notice: response.data.exam.notice,
                mark: response.data.exam.mark,
       })

       console.log("Bar Chart");
       stay.labelsA.splice(response.data.exam.mark[0].stdID);

    for (let index = 0; index < response.data.exam.mark.length; index++) {
        console.log("Chart Data : "+response.data.exam.mark[index].stdID);
        stay.labelsA.push(response.data.exam.mark[index].stdID);
        console.log("Chart Data : "+response.data.exam.mark[index].mark);
        stay.dataA.push(response.data.exam.mark[index].mark);
        console.log("Chart Data STD : "+stay.labelsA); 
        console.log("Chart Data Data : "+stay.dataA); 
    }

    this.setState({

        sta:{
            labels:[... stay.labelsA],
            datasets:[{
                label: 'Exam Marks',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [... stay.dataA]
            }]
        }
        
    })
   })
   .catch((error) => {
     console.log(error);
   })

   
}

onChangeSearch(e) {
    this.setState({
        examId: e.target.value
    })
}
      
 

    render(){

        return (
            <React.Fragment>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home"> <IoIosArrowForward /> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ExamComponet">|  Exam</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/NewExamCompt">|  Modyfy Exam Page</NavLink>
                        </li>
                    </ul>
                </nav>
                <h1 className="text-start m-3"> Genarate Exam Marks Reports </h1>

                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="input-group m-3">
                    <input type="text" class="form-control" placeholder="Type here Exam ID . . ." 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2"
                        value={this.state.examId}
                        onChange={this.onChangeSearch} />
                        <button class="btn btn-outline-secondary btn-primary text-white px-3" 
                        type="submit" id="examId"
                        onClick={this.onSubmit}
                        >Search</button>
                    </div>
                </div>

                <div className="w-75">
                   
                    <Bar
                    data={this.state.sta}
                    options={{
                        title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                    />
                </div>


                <h3 className="text-start m-3"> Result </h3>
                <div>
                    <form>
                        <div>
                            <div>
                    <form>
                        <div>
                        <div className="shadow my-3 p-3 rounded bg-dark bg-gradient text-white"> 
                                <table>
                                    <tr>
                                        <th className="w-25">Exam ID</th>
                                        <td className=""> {this.state.examId} </td>
                                    </tr>
                                    <tr>
                                        <th> Exam Name </th>
                                        <td className=""> {this.state.name} </td>
                                    </tr>
                                    <tr>
                                        <th> Grade </th>
                                        <td className=""> {this.state.grade} </td>
                                    </tr>
                                    <tr>
                                        <th> Subject </th>
                                        <td className=""> {this.state.subject} </td>
                                    </tr>
                                    <tr>
                                        <th> Date </th>
                                        <td className=""> {this.state.date} </td>
                                    </tr>
                                    <tr>
                                        <th> Time  </th>
                                        <td className=""> {this.state.timeStart}  To {this.state.timeEnd} </td>
                                    </tr>
                                    <tr>
                                        <th>Notice</th>
                                        <td className=""> {this.state.notice} </td>
                                    </tr>
                                    
                                </table>
                                <Link className="btn btn-primary m-2" to={`/ComponetAddMark/${this.state.examId}`} > Add Marks </Link>
                                <button className="btn btn-danger m-2"
                                    onClick={() => {
                                        const idExm = this.state.examId
                                        console.log(this.state.examId)
                                        axios.delete("http://localhost:8070/exam/delete/"+idExm).then(() => {
                                            alert("Exam Deleted")
                                            window.location = '/ExamComponet';
                                        }).catch((err) => {
                                            alert(err)
                                        })
                                    }}
                                    > Delete </button>
                            </div>
                        </div>
                        
                    </form>
                </div>
                        </div>
                        <button className="btn btn-warning"
                        onClick={() => GeneratePDF(this.state.mark, this.state.subject, this.state.grade, this.state.name)}
                        >Dowenload Report</button>
                    </form>

                </div>
                <form class="g-3 p-3" >
                {
                    
                    this.state.mark.map((val, key) => {
                        return(
                            <div className=" my-3 row">
                                    <div class="col-auto">
                                        <input type="text" className="form-control ms-2" id="stdId" value={val.stdID} />
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" className="form-control" id="mark" value={val.mark} />
                                    </div>
                                    
                            </div>
                        )
                    })
                }
                    
                </form>
     

            </React.Fragment>

        );
    }
}

export default GenReport;