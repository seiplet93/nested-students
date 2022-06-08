import React, { Component } from "react";
import Student from "./Student";

class Roster extends Component {
  render() {
    const allStudents = this.props.students.map((studentz, index) => {
      return <Student key={`Student-${index}`} student={studentz} />;
    });
    return <>{allStudents}</>;
  }
}

export default Roster;
