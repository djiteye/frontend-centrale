import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User=new User();
  role!:[any] ;
  constructor(private register:RegisterService,private route:Router) { }

  ngOnInit(): void {
  }
   
  registerlogin() {
    this.role=[this.user.roles];
    this.user.roles=this.role;
    console.log(this.user)
    this.register.register(this.user).subscribe(data=>{
      //alert("login succesfully");
      this.route.navigate(['./admin/users']);
    },error=>alert("error"));
   
    
  }
}
