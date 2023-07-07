import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { Role } from '../model/role';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
  users!: User[];
  rol: any;
  user:any;
  re:any;
  //users:any[] | undefined;
//name: any;

  constructor(private dialogRef:MatDialog, private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
    //this.getRole(this.user.id);
    //this.rol;
    //this.re;
    
  }
  public onClick(){
    this.dialogRef.open(RegisterComponent,{
      width:'60%',
      height: '60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms'});}
    /*public onClick1(user:User){
      this.router.navigate(['/admin/utilisateur',user.id])
      }*/
  
    public getUsers(){
      this.userService.getAllUsers().subscribe(data => {
        this.users = data;
        /*this.rol=data;
        this.re = this.hasRole(this.rol.role);*/
      });
    }
   /* hasRole(roll: Role[]) {
     // return rol.some(role => role.name);
     roll.forEach(Role => {
       this.re= Role.name;
     });
     return this.re;
    }*/
    public getUser(id:number){
      this.userService.getUser(id).subscribe(data => {
        this.user = data;
       // this.rol = data;
      });
    }
    public getRole(id:number){
      this.userService.getRole(id).subscribe(data => {
        this.rol = data;
       // this.rol = data;
      });
    }
    deleteUser(id: number){
      this.userService.deleteUser(id).subscribe( data => {
        console.log(data);
        this.getUsers();
      })
    }}
