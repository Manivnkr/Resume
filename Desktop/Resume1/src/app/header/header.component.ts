import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public backgroundimage ="images/macbook_mouse.jpg";
  @Output() eventtriggered= new EventEmitter() ;
  @Output() value = new EventEmitter<any>();
  value1 ='1';
  name='';

   constructor() { 
    
   }
   
   

  ngOnInit(): void {
    
  }

}
