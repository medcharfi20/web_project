import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/AuthService (2) (1)';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
constructor(private route:Router ,private as:AuthService){}
logout():void{
  this.as.doLogout().then(()=>{
    this.route.navigate(['']);
  })
}
}
