import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User=new User();
 
  constructor(private lserviceService: LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  userlogin() {
    console.log(this.user)
    this.lserviceService.loginuser(this.user).subscribe(data=>{
      //alert("login succesfully");
      this.route.navigate(['/admin']);
    },error=>alert("error"));
   
    
  }
}
