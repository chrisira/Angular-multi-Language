import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
 constructor(private translateService: TranslateService) {
  
  }

  // adding the function to set the local storage language
  changeLang(lang){
    //setting the selected language into the local storage
    localStorage.setItem('lang',lang);
    //changing the page contents without refreshing it
    this.translateService.use(lang)
    
    
  }

}
