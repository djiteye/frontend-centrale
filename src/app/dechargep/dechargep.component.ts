import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EtagepService } from '../service/etagep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dechargep',
  templateUrl: './dechargep.component.html',
  styleUrls: ['./dechargep.component.scss']
})
export class DechargepComponent implements OnInit {
chambre:any;
  constructor(private renderer: Renderer2,private dialogRef:MatDialog, private etagepService:EtagepService,private router:Router, private ref:MatDialogRef<DechargepComponent>) { }

  ngOnInit(): void {
    this.getallChambre()
  }

  deleteChambres(){
    this.etagepService.deleteChambres().subscribe( data => {
      console.log(data);
      this.ref.close();
      this.getallChambre();
    })
  }
  private getallChambre(){
    this.etagepService.getAllChambre().subscribe(data => {
      this.chambre = data;
    });
}
}
