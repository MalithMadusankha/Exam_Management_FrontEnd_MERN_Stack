import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import StudentList from "./StudentComponent";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { ITEMS } from "../shared/functionItems";
import { STUDENTS } from "../shared/studentList";
import ExamComponet from "./Exam/ExamComponet";
import NewExamCompt from "./Exam/NewExam/NewExamCompt";
import ExamUpdateComponet from "./Exam/Update/ExamUpdateComponet";
import GenReportComponet from "./Exam/GenReport/GenReportComponet";
import CompSearchExm from "./Exam/SearchExam/CompSearchExm";
import ComponetAddMark from "./Exam/AddMark/ComponetAddMark";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS,
      students: STUDENTS,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <BrowserRouter>
          <Header />
          
          <Switch>
            <Route
              exact
              path="/menu"
              component={() => <Menu items={this.state.items} />}
            />
            <Route
              exact
              path="/studentList"
              component={() => <StudentList students={this.state.students} />}
            />
            <Route path="/ExamComponet">
              <ExamComponet />
            </Route>
            <Route path="/NewExamCompt">
              <NewExamCompt />
            </Route>
            <Route path="/ExamUpdateComponet/:examId" component={ExamUpdateComponet} exact={true} />
            <Route path="/GenReportComponet" component={GenReportComponet} />
            <Route path="/CompSearchExm" component={CompSearchExm} />
            <Route path="/ComponetAddMark/:examId" component={ComponetAddMark} />


            <Route path="/" component={HomePage} />
          </Switch>
          
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
