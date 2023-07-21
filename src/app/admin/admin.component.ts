import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { EtagepService } from '../service/etagep.service';
import { EtagesService } from '../service/etages.service';
import { EtagetService } from '../service/etaget.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
user:User= new User();
id:any;
genr:String="homme";
usa:any;
re:any;
disponibilite:any;
//param: any;
//paramObject: any;

  //User: User[] | undefined;
  constructor( private httpClient:HttpClient, private userservice:LoginService,private route:Router,private userService:UserService, private router: ActivatedRoute, private etagepService:EtagepService, private etagesService:EtagesService,private etagetService:EtagetService) { }

  ngOnInit(): void { //this.param= this.router.snapshot.params[this.param];
    //this.getUser();
   this.use;
   this.genr;
   this.getUser(this.use.userId);
   this.usa;
   //this.refresh();
  
  }
 /* getUser(): void{
    this.id=this.user.id;
      this.userservice.getUser(this.id).subscribe(data => {
        this.User = data;
      },error=>alert("error"));
      
  }*/
   userString = localStorage.getItem('use');
 use = this.userString ? JSON.parse(this.userString) : null;

  save(User:string):void{
    localStorage.setItem('user', User);
   this.route.navigate(['/menu']);
  }
  lout():void{
    this.userService.logout(this.use).subscribe(data=> {
      localStorage.removeItem('use');
      this.route.navigate(['/login']);
    },error=>alert("error"));
    
  }
  public getUser(id:any){
    this.userService.getUser(id).subscribe(data => {
      this.usa = data;
     // this.rol = data;
    });
  }
  public preparation(): void{
    // console.log(this.user)
     this.etagepService.preparation().subscribe((disponible: boolean) => {
       this.disponibilite = disponible;
       alert("preparation succesfully");
       //this.router.navigate(['/admin/etage1']);
     },(error: any)=>{
       alert("votre étage-1 est déjà préparé");
       console.error('Erreur:', error);
     }); 
   }
   public preparations(): void{
    // console.log(this.user)
     this.etagesService.preparation().subscribe((disponible: boolean) => {
       this.disponibilite = disponible;
       alert("preparation succesfully");
       //this.router.navigate(['/admin/etage1']);
     },(error: any)=>{
       alert("votre étage-2 est déjà préparé");
       console.error('Erreur:', error);
     }); 
   }
   public preparationt(): void{
    // console.log(this.user)
     this.etagetService.preparation().subscribe((disponible: boolean) => {
       this.disponibilite = disponible;
       alert("preparation succesfully");
       //this.router.navigate(['/admin/etage1']);
     },(error: any)=>{
       alert("votre étage-3 est déjà préparé");
       console.error('Erreur:', error);
     }); 
   }

     refresh(): void{
    this.userService.refreshAuthToken().subscribe(data => {
      this.re = data;
     // this.rol = data;
    });
  }
  
}
