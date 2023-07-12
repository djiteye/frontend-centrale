import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EtagetService } from '../service/etaget.service';

@Component({
  selector: 'app-decharget',
  templateUrl: './decharget.component.html',
  styleUrls: ['./decharget.component.scss']
})
export class DechargetComponent implements OnInit {
  chambre: any;
  constructor(private renderer: Renderer2,private dialogRef:MatDialog, private etagepService:EtagetService,private router:Router, private ref:MatDialogRef<DechargetComponent>) { }

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
  })
}
}
