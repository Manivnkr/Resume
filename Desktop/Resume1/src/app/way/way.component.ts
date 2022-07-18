import { Component, OnInit,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-way',
  templateUrl: './way.component.html',
  styleUrls: ['./way.component.css']
})
export class WayComponent implements OnInit {
  @Output() eventtriggered= new EventEmitter() ;
  name='';

  constructor() { }
  onselect( path: string){
      this.name = path;
      this.eventtriggered.emit(this.name);
    
      
  
     

  }

  ngOnInit(): void {
  }

}
