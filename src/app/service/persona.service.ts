import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backend-cecy.onrender.com/personas/';
  //URL = 'https://NOMBRE_DEPLOY.herokuapp.com/personas/';

  constructor(private http: HttpClient) { }
  
    public getPersona(): Observable<persona>{
      return this.http.get<persona>(this.URL + 'traer/perfil');
    }
  
}
