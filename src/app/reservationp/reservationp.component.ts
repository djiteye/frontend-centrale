import { Component, OnInit } from '@angular/core';
import { Chambre } from '../model/chambre';

import { ActivatedRoute, Router } from '@angular/router';
import { EtagepService } from '../service/etagep.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reservationp',
  templateUrl: './reservationp.component.html',
  styleUrls: ['./reservationp.component.scss']
})
export class ReservationpComponent implements OnInit {
  id:any;
  chambre:any;
  reservationChambreData: Chambre=new Chambre(); 
  objetFormControl: FormControl | undefined;
  //selectedObject: any;
  constructor(private etagepService:EtagepService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void { this.id= parseInt(this.route.snapshot.params['id']);
 this.getChambre();
  }
  onSubmit(){
    this.reservationChambreData.id=this.chambre.id;
    this.reservationChambreData.appartement=this.chambre.appartement;
    this.reservationChambreData.place=this.chambre.place;
    this.reservationChambreData.name=this.chambre.name;
    this.reservationChambreData.genre=this.chambre.genre;
    this.etagepService.updateChambre(this.id, this.reservationChambreData).subscribe( data =>{
      this.goToContinentList();
    }
    , error => console.log(error));
  }
  
     
  goToContinentList(){
    this.router.navigate(['/admin/etage1']);
  }
  getChambre(){
    this.etagepService.getChambre(this.id).subscribe(data => {
      this.chambre = data;
    },error=>alert("error"));
    
}

}
