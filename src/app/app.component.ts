import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='angular poc';
  public Empname:any;
  public Empnumber:any;
  Empdata=[];
  Empdetails={}
  index=0;
  Sno=1;
  submit(){
   this.Empdetails={sno:this.Sno,name:this.Empname,number:this.Empnumber,index:this.index};
   this.Empdata.push(this.Empdetails);
   this.Sno++;
   this.index++;
  }
  delete(index){
   this.Empdata.splice(index,1);
   for(let i=index;i<this.Empdata.length;i++){
     this.Empdata[i].index--;
     this.Empdata[i].sno--;
   }
  }
 }
  
  
  

