import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/AuthService (2) (1)';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
constructor(private aS:AuthService,private route:Router){}
signin():void{
  this.aS.doGoogleLogin().then(()=>{
    this.route.navigate(['/member']);

  })
}
}
