import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User=new User();
  role!:[any] ;
  nextId: number = 0; // Variable de classe pour suivre le prochain ID
  elements: any[] = []; // Tableau d'éléments
  constructor(private register:RegisterService,private route:Router, private ref:MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
    //this.nextId++;
  }
   
  registerlogin() {
    this.role=[this.user.roles];
    this.user.roles=this.role;
    //this.user.id=this.nextId;
    console.log(this.user)
    this.register.register(this.user).subscribe(data=>{
     // this.nextId++; // Incrémenter le prochain ID
      //alert("login succesfully");
      this.ref.close();
      this.route.navigate(['/admin/users']);
      location.reload();

    },error=>alert("error"));
   
    //this.nextId++; // Incrémenter le prochain ID
  }
}
