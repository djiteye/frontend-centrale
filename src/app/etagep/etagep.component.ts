import { Component, OnInit } from '@angular/core';
import { EtagepService } from '../service/etagep.service';
import { MatDialog } from '@angular/material/dialog';
import { Chambre } from '../model/chambre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etagep',
  templateUrl: './etagep.component.html',
  styleUrls: ['./etagep.component.scss']
})
export class EtagepComponent implements OnInit {
  //chambre:Chambre[] | undefined;
  chambre: any;
  constructor(private dialogRef:MatDialog, private etagepService:EtagepService,private router:Router) { }

  ngOnInit(): void {
    this.getallChambre();
  }
  /*public onClick(){
    this.dialogRef.open(AddContinentComponent);}*/
    public onClick1(Chambre:Chambre){
      this.router.navigate(['/admin/etage1',Chambre.id])
      }
    private getallChambre(){
      this.etagepService.getAllChambre().subscribe(data => {
        this.chambre = data;
      });
}
/*deleteContinent(id: any){
  this.continentService.deleteContinent(id).subscribe( data => {
    console.log(data);
    this.getallContinents();
  })
}*/

}
