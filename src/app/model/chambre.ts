import { DatePipe } from "@angular/common";

export class Chambre {
    id!:number;
	appartement!:String;
	place!:String;
	genre!:String;
	name!:String;
	nom!:String;
	prenom!:String;
	nationalite!:String;
	passeport!:String;
	date_arrive!: Date;
	date_de_reserv!:Date;
	date_entre!:Date;
	date_sortie!:Date;
	valider!:Boolean;
}
