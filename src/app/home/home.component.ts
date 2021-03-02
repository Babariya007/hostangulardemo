import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  abc = true;
  ok = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.abc = false;
    },3000)
    setTimeout(() => {
      this.ok = false;
    }, 6000);
  }

}
