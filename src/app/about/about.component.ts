import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  contact = {
    name : "Abhay Babariya",
    address : "",
    mobileno : "",
    email : "",
    city : "",
    state : ""
  };
  
  bordercolor = "";
  isDisable = true;

  changName(e){
    if(e.target.value=="")
    {
      this.isDisable = true;
    }
    else
    {
      this.isDisable = false;
      this.bordercolor = "1px solid red";
    }
    this.contact.address = e.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
