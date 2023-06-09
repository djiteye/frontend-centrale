import { Component, OnInit } from '@angular/core';
import { Chambre } from '../model/chambre';

import { ActivatedRoute, Router } from '@angular/router';
import { EtagepService } from '../service/etagep.service';

@Component({
  selector: 'app-reservationp',
  templateUrl: './reservationp.component.html',
  styleUrls: ['./reservationp.component.scss']
})
export class ReservationpComponent implements OnInit {
  id:any;
  chambre:any;
  reservationChambreData: Chambre=new Chambre(); 
  constructor(private etagepService:EtagepService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void { this.id= parseInt(this.route.snapshot.params['id']);
  this.getChambre();
  }
  onSubmit(){
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
