import { Component, OnInit, Renderer2 } from '@angular/core';
import { EtageppService } from '../service/etagepp.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Chambre } from '../model/chambre';
import { SortieComponent } from '../sortie/sortie.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-etagepp',
  templateUrl: './etagepp.component.html',
  styleUrls: ['./etagepp.component.scss']
})
export class EtageppComponent implements OnInit {
//chambre:Chambre[] | undefined;
chambre: any[]=[];
disponibilite: any;
currentDate!: Date;
col!:String;
nom:any;
prenom:any;
nombrecrva:any;
nombrecrvi:any;
fileName= 'Etage1-confirmer.xlsx';
constructor(private renderer: Renderer2,private dialogRef:MatDialog, private etageppService:EtageppService,private router:Router) { this.currentDate = new Date(); }

ngOnInit(): void {
  this.getallChambre();
 // this.cool();
 this.nombrecrerva();
 this.nombrecrervi();
}
/*public onClick(Chambre:Chambre){
  this.router.navigate(['/admin/etage1',Chambre.id])
  }*/

 /* public onClick1(Chambre:Chambre){
    this.router.navigate(['/admin/etage1',Chambre.id])
    }*/
    /*public cool(){
      if(this.currentDate == this.chambre.date_arrive || this.chambre.date_entre ==null){
         this.col ='c';
      }else if(this.currentDate < this.chambre.date_arrive || this.chambre.date_entre ==null){
         this.col = 'd';
      }else if(this.currentDate > this.chambre.date_arrive || this.chambre.date_entre ==null){
         this.col = 'a';
      }else if(this.currentDate > this.chambre.date_arrive || this.chambre.date_entre !=null){
         this.col = 'e';
      }else{
        this.col='e';
      }
      return this.col;
    }*/
    nombrecrerva(){
      this.etageppService.nombrecva().subscribe(data => {
        this.nombrecrva = data;
      });
    }
    nombrecrervi(){
      this.etageppService.nombrecv().subscribe(data => {
        this.nombrecrvi = data;
      });
    }
    search() {
      this.chambre = this.chambre.filter(res =>{
       return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase())
    });
    }
    searchn() {
      this.chambre = this.chambre.filter(res =>{
       return res.prenom.toLocaleLowerCase().match(this.prenom.toLocaleLowerCase())
    });
    }
  private getallChambre(){
    this.etageppService.getAllChambreva().subscribe(data => {
      this.chambre = data;
    });
}

public valider(Chambre:Chambre){
// console.log(this.user)
 this.etageppService.valider(Chambre.id).subscribe((disponible: boolean) => {
   this.disponibilite = disponible;
   this.getallChambre();
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
exportExcel(): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.chambre);
  const workbook: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Feuille 1');
  XLSX.writeFile(workbook, this.fileName);
}


}
