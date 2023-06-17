import { Component, OnInit, Renderer2 } from '@angular/core';
import { EtageppService } from '../service/etagepp.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Chambre } from '../model/chambre';
import { SortieComponent } from '../sortie/sortie.component';

@Component({
  selector: 'app-etagepp',
  templateUrl: './etagepp.component.html',
  styleUrls: ['./etagepp.component.scss']
})
export class EtageppComponent implements OnInit {
//chambre:Chambre[] | undefined;
chambre: any;
disponibilite: any;
constructor(private renderer: Renderer2,private dialogRef:MatDialog, private etageppService:EtageppService,private router:Router) { }

ngOnInit(): void {
  this.getallChambre();
}
/*public onClick(Chambre:Chambre){
  this.router.navigate(['/admin/etage1',Chambre.id])
  }*/

 /* public onClick1(Chambre:Chambre){
    this.router.navigate(['/admin/etage1',Chambre.id])
    }*/
  private getallChambre(){
    this.etageppService.getAllChambreva().subscribe(data => {
      this.chambre = data;
    });
}

public valider(Chambre:Chambre){
// console.log(this.user)
 this.etageppService.valider(Chambre.id).subscribe((disponible: boolean) => {
   this.disponibilite = disponible;
   //alert("preparation succesfully");
   this.router.navigate(['/admin/etage11']);
 },(error: any)=>{
   alert("error for validate reservation");
   console.error('Erreur:', error);
 }); 
}
/*deleteContinent(id: any){
this.continentService.deleteContinent(id).subscribe( data => {
  console.log(data);
  this.getallContinents();
})
}*/
public onClick(Chambre:Chambre){
  this.dialogRef.open(SortieComponent,{
    width:'60%',
    enterAnimationDuration:'1000ms',
    exitAnimationDuration:'1000ms',
    data:{
      id: Chambre.id,
      appartement: Chambre.appartement,
      place:Chambre.place,
      name: Chambre.name,
      genre:Chambre.genre,
      nationalite:Chambre.nationalite,
      passeport:Chambre.passeport,
      valider:Chambre.valider,
      nom:Chambre.nom,
      prenom:Chambre.prenom,
      date_reserv:Chambre.date_de_reserv,
      date_entre:Chambre.date_entre,
      date_arrive:Chambre.date_arrive
    }
  });
}


}
