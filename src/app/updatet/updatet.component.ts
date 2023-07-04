import { Component, OnInit } from '@angular/core';
import { EtagesService } from '../service/etages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from '../model/chambre';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-updatet',
  templateUrl: './updatet.component.html',
  styleUrls: ['./updatet.component.scss']
})
export class UpdatetComponent implements OnInit {

  id:any;
  chambre:any;
  reservationChambreData: Chambre=new Chambre(); 
  objetFormControl: FormControl | undefined;
  //selectedObject: any;
  constructor(private etagepService:EtagesService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void { this.id= parseInt(this.route.snapshot.params['id']);
 this.getChambre();
  }
  onSubmit(){
    this.reservationChambreData.id=this.chambre.id;
    this.reservationChambreData.appartement=this.chambre.appartement;
    this.reservationChambreData.place=this.chambre.place;
    this.reservationChambreData.name=this.chambre.name;
    this.reservationChambreData.genre=this.chambre.genre;
    this.reservationChambreData.date_de_reserv=this.chambre.date_de_reserv;
    this.reservationChambreData.nom=this.chambre.nom;
    this.reservationChambreData.prenom=this.chambre.prenom;
    this.reservationChambreData.nationalite=this.chambre.nationalite;
    this.reservationChambreData.passeport=this.chambre.passeport;
    this.reservationChambreData.date_arrive=this.chambre.date_arrive;
    this.reservationChambreData.valider=false;
    this.etagepService.updateChambre(this.id, this.reservationChambreData).subscribe( data =>{
      this.goToContinentList();
    }
    , error => console.log(error));
  }  
  goToContinentList(){
    this.router.navigate(['/admin/etage3']);
  }
  getChambre(){
    this.etagepService.getChambre(this.id).subscribe(data => {
      this.chambre = data;
    },error=>alert("error"));
    
}

}
