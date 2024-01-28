import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  constructor(){

  }

  ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh);
  }  
}