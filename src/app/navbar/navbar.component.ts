import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lang;

 ngOnInit(){
  this.lang = localStorage.getItem('lang') || 'kin';
  
 }


  // adding the function to set the local storage language
  changeLang(lang){
    //setting the selected language into the local storage
    localStorage.setItem('lang',lang);
  }

}
