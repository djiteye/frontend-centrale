import { Component, OnInit, Renderer2 } from '@angular/core';
import { AnnulertComponent } from '../annulert/annulert.component';
import { Chambre } from '../model/chambre';
import { ReservationtComponent } from '../reservationt/reservationt.component';
import { MatDialog } from '@angular/material/dialog';
import { EtagetService } from '../service/etaget.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { DechargetComponent } from '../decharget/decharget.component';

@Component({
  selector: 'app-etaget',
  templateUrl: './etaget.component.html',
  styleUrls: ['./etaget.component.scss']
})
export class EtagetComponent implements OnInit {

  //chambre:Chambre[] | undefined;
  chambre: any[]=[];
  disponibilite: any;
  searchTerm: any | undefined;
  place: any;
  nom: any;
  appartement:any;
  items: Chambre[]=[];
  nombrecs:any;
  nombrecd:any;
  nombrect:any;
  nombrecdipos:any;
  nombrecreserve:any;
  fileName= 'Etage3.xlsx';
  constructor(private renderer: Renderer2,private dialogRef:MatDialog, private etagepService:EtagetService,private router:Router) { }

  ngOnInit(): void {
    this.getallChambre();
    this.nombrecsv();
    this.nombrecdv();
    this.nombrectv();
    this.nombrecdis();
    this.nombrecres();
  }
  search() {
    this.chambre = this.chambre.filter(res =>{
     return res.place.toLocaleLowerCase().match(this.place.toLocaleLowerCase())
  });
  }
  searchn() {
    this.chambre = this.chambre.filter(res =>{
     return res.name.toLocaleLowerCase().match(this.nom.toLocaleLowerCase())
  });
  }
  searcha() {
    this.chambre = this.chambre.filter(res =>{
     return res.appartement.toLocaleLowerCase().match(this.appartement.toLocaleLowerCase())
  });
  }
  nombrecsv(){
    this.etagepService.nombrecsv().subscribe(data => {
      this.nombrecs = data;
    });
  }
  nombrecdv(){
    this.etagepService.nombrecdv().subscribe(data => {
      this.nombrecd = data;
    });
  }
  nombrectv(){
    this.etagepService.nombrectv().subscribe(data => {
      this.nombrect = data;
    });
  }
  nombrecdis(){
    this.etagepService.nombrecd().subscribe(data => {
      this.nombrecdipos = data;
    });
  }
  nombrecres(){
    this.etagepService.nombrecR().subscribe(data => {
      this.nombrecreserve = data;
    });
  }
  /*search(): void {
    const searchString = this.place.toLowerCase();// Terme de recherche converti en minuscules
    this.chambre = this.chambre.filter(res => {
      return Object.values(res).some((value: any) =>
        value.toString().toLowerCase().includes(searchString)
    );
    });
  }*/
  public onClick(Chambre:Chambre){
    this.dialogRef.open(AnnulertComponent,{
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
    this.dialogRef.open(ReservationtComponent,{
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
  public decharge(){
    this.dialogRef.open(DechargetComponent,{
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
     
    });
  }
  /*public onClick(Chambre:Chambre){
    this.router.navigate(['/admin/etage1',Chambre.id])
    }*/
 
    public onClick1(Chambre:Chambre){
      this.router.navigate(['/admin/etage3',Chambre.id])
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
/*deleteChambres(){
  this.etagepService.deleteChambres().subscribe( data => {
    console.log(data);
    this.getallChambre();
  })
}*/

exportExcel(): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.chambre);
  const workbook: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Feuille 1');
  XLSX.writeFile(workbook, this.fileName);
}
}
