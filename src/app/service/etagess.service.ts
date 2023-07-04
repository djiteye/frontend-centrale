import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Chambre } from '../model/chambre';

@Injectable({
  providedIn: 'root'
})
export class EtagessService {
  private REST_API_SERVER = "http://localhost:8082/ChambreA2"
    
  constructor(private httpService: HttpClient) { }
  
  getAllChambreva(): Observable<Chambre[]> {
      return this.httpService.get(`${this.REST_API_SERVER}/listCVA`).pipe(
          map((res: any) => res));
  }
  getChambre(id:number): Observable<Chambre[]> {
    return this.httpService.get(`${this.REST_API_SERVER}/C/${id}`).pipe(
        map((res: any) => res));
}
  
 /* preparation(): Observable<boolean>{
      return this.httpService.get<boolean>(`${this.REST_API_SERVER}/prepCAP`);
  }*/
  valider(id:number): Observable<boolean>{
    return this.httpService.get<boolean>(`${this.REST_API_SERVER}/confirmer/${id}`);
}
  
  updateChambre(id: number, value: Chambre) {
      return this.httpService.put(`${this.REST_API_SERVER}/upC/${id}`, value);
  }
  
  /*deleteContinent(id: number): Observable<Continent> {
      return this.httpService.delete<Continent>(`${this.REST_API_SERVER}/deleteContinent/${id}`);
  }*/
 /* deleteChambres(): Observable<Chambre> {
    return this.httpService.delete<Chambre>(`${this.REST_API_SERVER}/deletes`);
}*/
}
