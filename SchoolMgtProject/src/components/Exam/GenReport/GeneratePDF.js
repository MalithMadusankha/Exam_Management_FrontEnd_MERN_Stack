

import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
// import { format } from "date-fns";

// define a generatePDF function that accepts a marks argument
const GeneratePDF = (marks, subject, grade, name) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Student ID", "Marks"];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  marks.forEach(markStd => {
    const markStdData = [
      markStd.stdID,
      markStd.mark
    ];
    // push each tickcet's info into a row
    tableRows.push(markStdData);
  });

  
  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text(`${subject} Grade ${grade} ${name} Exam Marks Report`, 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_exam_mark_${dateStr}.pdf`);
};

export default GeneratePDF;