import { Component, OnInit } from '@angular/core';
import { EtagepService } from '../service/etagep.service';
import { MatDialog } from '@angular/material/dialog';
import { Chambre } from '../model/chambre';
import { Router } from '@angular/router';
import { Renderer2, ViewChild, ElementRef } from '@angular/core';
import { group } from '@angular/animations';
import { AnnulerComponent } from '../annuler/annuler.component';


@Component({
  selector: 'app-etagep',
  templateUrl: './etagep.component.html',
  styleUrls: ['./etagep.component.scss']
})
export class EtagepComponent implements OnInit {
  //chambre:Chambre[] | undefined;
  chambre: any;
  disponibilite: any;
  constructor(private renderer: Renderer2,private dialogRef:MatDialog, private etagepService:EtagepService,private router:Router) { }

  ngOnInit(): void {
    this.getallChambre();
  }
  /*public onClick(){
    this.dialogRef.open(AnnulerComponent);
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
