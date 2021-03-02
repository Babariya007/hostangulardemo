import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {

  StudentName = "";
  rollnumber = "";

  StudentArray = 
  [
    { name : "Abhay", rollno : "101" },
    { name : "Babariya", rollno : "102" },
    { name : "Jamnagar", rollno : "103" }
  ];

  selectedStudent = null;
  constructor() { }

  ngOnInit(): void {
  }

  AddStudent(){
    let tempStu = { name : this.StudentName, rollno : this.rollnumber }
    this.StudentArray.push(tempStu);
    this.StudentName = "";
    this.rollnumber = "";
  }

  deleteStudent(a){
    this.StudentArray.splice(a,1);
  }

  selectStudent(i){
    this.selectedStudent = i;
    this.StudentName = this.StudentArray[i].name;
    this.rollnumber = this.StudentArray[i].rollno;
  }

  EditStudent(){
    this.StudentArray[this.selectedStudent].name = this.StudentName;
    this.StudentArray[this.selectedStudent].rollno = this.rollnumber;
    this.selectedStudent = null;
  }
}
