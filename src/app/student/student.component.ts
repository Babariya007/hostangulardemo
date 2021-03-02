import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  tempStudent = "";
  Student = [];
  isDisable = true;
  constructor() { }

  ngOnInit(): void {
  }

  addstudent(){
    if(this.Student.indexOf(this.tempStudent)==-1)
    {
      this.Student.push(this.tempStudent);
    }
    else
    {
      alert("You have already Enter this Number");
    }
    this.tempStudent = "";
    this.isDisable = true;
  }

  checkforEmpty(e){
    if(e.target.value==""){
      this.isDisable = true;
    }
    else
    {
      this.isDisable = false;
    }
  }

}
