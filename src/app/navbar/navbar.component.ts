import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  // adding the function to set the local storage language
  changeLang(lang){
    //setting the selected language into the local storage
    localStorage.setItem('lang',lang);
  }

}
