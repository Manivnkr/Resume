import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'Resume'; 
  loaded ='Home';
  firsttime= 1;
  

  onnavigate(featured1:string){
    this.loaded=featured1;
    console.log(featured1);
  }
  


  ngOnInit(): void {
     
  }


}


  