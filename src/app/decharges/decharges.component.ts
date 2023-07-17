import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EtagesService } from '../service/etages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decharges',
  templateUrl: './decharges.component.html',
  styleUrls: ['./decharges.component.scss']
})
export class DechargesComponent implements OnInit {
chambre: any;
  constructor(private renderer: Renderer2,private dialogRef:MatDialog, private etagepService:EtagesService,private router:Router, private ref:MatDialogRef<DechargesComponent>) { }

  ngOnInit(): void {
    this.getallChambre();
  }

  private getallChambre(){
    this.etagepService.getAllChambre().subscribe(data => {
      this.chambre = data;
    });
}
deleteChambres(){
  this.etagepService.deleteChambres().subscribe( data => {
    console.log(data);
    this.ref.close();
    this.getallChambre();
    this.goToContinentList();
    location.reload();
  })
}
goToContinentList(){
  this.router.navigate(['/admin/etage2']);
}
}
