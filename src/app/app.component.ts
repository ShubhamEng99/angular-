import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  Empname='';
  Empnumber:any;
  name=[];
  details={}
  Sno=1;
  
  submit(){
   
    this.details={
      sno:this.Sno,
      name:this.Empname,
      number:this.Empnumber,
      }
      
    this.name.push(this.details);
   this.Sno++;
  }

  delete(){
    
  }

  }
  
  

