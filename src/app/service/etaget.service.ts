import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Chambre } from '../model/chambre';

@Injectable({
  providedIn: 'root'
})
export class EtagetService {
  private REST_API_SERVER = "http://localhost:8082/ChambreA3"
    
  constructor(private httpService: HttpClient) { }
  
  getAllChambre(): Observable<Chambre[]> {
      return this.httpService.get(`${this.REST_API_SERVER}/listC`).pipe(
          map((res: any) => res));
  }
  getChambre(id:number): Observable<Chambre[]> {
    return this.httpService.get(`${this.REST_API_SERVER}/C/${id}`).pipe(
        map((res: any) => res));
}
  
  preparation(): Observable<boolean>{
      return this.httpService.get<boolean>(`${this.REST_API_SERVER}/prepCAP`);
  }
  confirmer(id:number): Observable<boolean>{
    return this.httpService.get<boolean>(`${this.REST_API_SERVER}/valider/${id}`);
}
  
  updateChambre(id: number, value: Chambre) {
      return this.httpService.put(`${this.REST_API_SERVER}/upC/${id}`, value);
  }
  nombrecsv(): Observable<Int32Array>{
    return this.httpService.get<Int32Array>(`${this.REST_API_SERVER}/NCSV`).pipe(
      map((res: any) => res));
}
nombrecdv(): Observable<Int32Array>{
  return this.httpService.get<Int32Array>(`${this.REST_API_SERVER}/NCDV`).pipe(
    map((res: any) => res));
}
nombrectv(): Observable<Int32Array>{
  return this.httpService.get<Int32Array>(`${this.REST_API_SERVER}/NCTV`).pipe(
    map((res: any) => res));
}
//chambre dispo
nombrecd(): Observable<Int32Array>{
  return this.httpService.get<Int32Array>(`${this.REST_API_SERVER}/NCD`).pipe(
    map((res: any) => res));
}
//chambre reservée
nombrecR(): Observable<Int32Array>{
  return this.httpService.get<Int32Array>(`${this.REST_API_SERVER}/NCR`).pipe(
    map((res: any) => res));
}

  
  /*deleteContinent(id: number): Observable<Continent> {
      return this.httpService.delete<Continent>(`${this.REST_API_SERVER}/deleteContinent/${id}`);
  }*/
  deleteChambres(): Observable<Chambre> {
    return this.httpService.delete<Chambre>(`${this.REST_API_SERVER}/deletes`);
}
}
