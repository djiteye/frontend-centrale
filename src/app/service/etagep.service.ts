import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from '../model/chambre';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtagepService {
  private REST_API_SERVER = "http://localhost:8082/ChambreA1"
    
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
  
  updateChambre(id: number, value: Chambre) {
      return this.httpService.put(`${this.REST_API_SERVER}/upC/${id}`, value);
  }
  
  /*deleteContinent(id: number): Observable<Continent> {
      return this.httpService.delete<Continent>(`${this.REST_API_SERVER}/deleteContinent/${id}`);
  }*/
  deleteChambres(): Observable<Chambre> {
    return this.httpService.delete<Chambre>(`${this.REST_API_SERVER}/deletes`);
}
}
