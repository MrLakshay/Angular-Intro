import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First_App';
  x:String="";
  clickme(name:String){
    console.log(name);
    this.x=name;
  }
}
