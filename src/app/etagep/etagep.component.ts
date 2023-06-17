import { Component, OnInit } from '@angular/core';
import { EtagepService } from '../service/etagep.service';
import { MatDialog } from '@angular/material/dialog';
import { Chambre } from '../model/chambre';
import { Router } from '@angular/router';
import { Renderer2, ViewChild, ElementRef } from '@angular/core';
import { group } from '@angular/animations';
import { AnnulerComponent } from '../annuler/annuler.component';
import { ReservationpComponent } from '../reservationp/reservationp.component';


@Component({
  selector: 'app-etagep',
  templateUrl: './etagep.component.html',
  styleUrls: ['./etagep.component.scss']
})
export class EtagepComponent implements OnInit {
  //chambre:Chambre[] | undefined;
  chambre: any[]=[];
  disponibilite: any;
  searchTerm: any | undefined;
  place: any;
  items: Chambre[]=[];
  constructor(private renderer: Renderer2,private dialogRef:MatDialog, private etagepService:EtagepService,private router:Router) { }

  ngOnInit(): void {
    this.getallChambre();
  }
  search() {
    this.chambre = this.chambre.filter(res =>{
     return res.place.toLocaleLowerCase().match(this.place.toLocaleLowerCase())
  });
  }
  public onClick(Chambre:Chambre){
    this.dialogRef.open(AnnulerComponent,{
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        id: Chambre.id,
        appartement: Chambre.appartement,
        place:Chambre.place,
        name: Chambre.name,
        genre:Chambre.genre,
        valider:Chambre.valider
      }
    });
  }
  public onClickR(Chambre:Chambre){
    this.dialogRef.open(ReservationpComponent,{
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        id: Chambre.id,
        appartement: Chambre.appartement,
        place:Chambre.place,
        name: Chambre.name,
        genre:Chambre.genre
       // valider:Chambre.valider

      }
    });
  }
  /*public onClick(Chambre:Chambre){
    this.router.navigate(['/admin/etage1',Chambre.id])
    }*/
 
    public onClick1(Chambre:Chambre){
      this.router.navigate(['/admin/etage1',Chambre.id])
      }
    private getallChambre(){
      this.etagepService.getAllChambre().subscribe(data => {
        this.chambre = data;
      });
}
public preparation(): void{
 // console.log(this.user)
  this.etagepService.preparation().subscribe((disponible: boolean) => {
    this.disponibilite = disponible;
    alert("preparation succesfully");
    //this.router.navigate(['/admin/etage1']);
  },(error: any)=>{
    alert("votre étage est déjà préparé");
    console.error('Erreur:', error);
  }); 
}

public confirmer(Chambre:Chambre){
  // console.log(this.user)
   this.etagepService.confirmer(Chambre.id).subscribe((disponible: boolean) => {
     this.disponibilite = disponible;
     //alert("preparation succesfully");
     //this.router.navigate(['/admin/etage1']);
   },(error: any)=>{
     alert("error for confirm reservation");
     console.error('Erreur:', error);
   }); 
 }
/*deleteContinent(id: any){
  this.continentService.deleteContinent(id).subscribe( data => {
    console.log(data);
    this.getallContinents();
  })
}*/
deleteChambres(){
  this.etagepService.deleteChambres().subscribe( data => {
    console.log(data);
    this.getallChambre();
  })
}



}
