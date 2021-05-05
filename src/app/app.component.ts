import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  Empname='';
  Empnumber='';
  data=[];
  details={}
 index=0;
  Sno=1;
  submit(){
   this.details={
      sno:this.Sno,
      name:this.Empname,
      number:this.Empnumber,
      index:this.index
}
   this.data.push(this.details);
   this.Sno++;
   this.index++;
}
  delete(index){
   this.data.splice(index,1);
   for(let i=index;i<this.data.length;i++){
     this.data[i].index--;
     this.data[i].sno--;
   }
}
}
  
  
  

