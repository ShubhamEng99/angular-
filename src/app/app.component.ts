import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';
import {LoginModule} from './login/login.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
 
}
=======
  title='angular poc';
  public Empname:String;
  public Empnumber:Number;
  Empdata=[];
  Empdetails={};
  dataindex=0;
  Sno=1;
  submit(){
   this.Empdetails={sno:this.Sno,name:this.Empname,number:this.Empnumber,index:this.dataindex};
   this.Empdata.push(this.Empdetails);
   this.Sno++;
   this.dataindex++;
  }
  delete(delindex){
   this.Empdata.splice(delindex,1);
   for(let i=delindex;i<this.Empdata.length;i++){
     this.Empdata[i].index--;
     this.Empdata[i].sno--;
   }
  }
 }
  
  
  

>>>>>>> 310f0eeda443852d6744f4a85c196af3979caf37
