import React from "react";
import { FaSearch } from 'react-icons/fa';
import { HiDocumentReport } from 'react-icons/hi';
import { VscNewFile } from 'react-icons/vsc';

import {
  Nav,
  Navbar,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import AddMark from "./AddMark";

function RenderSideBar(props) {


  return (
 <div>
    
     <Navbar>
      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> Students
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-briefcase" aria-hidden="true"></i> Staff
          </NavLink>
          <NavLink className="nav-link" to="/ExamComponet">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Exams
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-book" aria-hidden="true"></i> Subjects
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i> Attendance
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-usd" aria-hidden="true"></i> Finance
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-trophy" aria-hidden="true"></i> Sports
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-bell" aria-hidden="true"></i> Notices
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>

        <div className="nav flex-column">
          <NavLink className="nav-item" to="/NewExamCompt"> <VscNewFile /> New Exam </NavLink>
          <NavLink className="nav-item" to="/CompSearchExm"> <FaSearch /> Search Exam </NavLink>
          <NavLink className="nav-item" to="/GenReportComponet"> <HiDocumentReport /> Mark Reports </NavLink>
        </div>

 </div>
  );
}

const ComponetAddMark = (props) => {
    console.log(props.match.params.examId);
    const id = props.match.params.examId;
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-2">
          <RenderSideBar />
        </div>
        <div className="col-12 col-sm-10">
            <div><AddMark name={id} /> </div>
        </div>
      </div>
    </div>
  );
};

export default ComponetAddMark;
