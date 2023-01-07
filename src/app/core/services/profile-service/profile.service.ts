import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from '../../models/profile.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpCliente: HttpClient
  ) { }

  getProfile(): Observable<ProfileModel>{
    return this.httpCliente.get<ProfileModel>(`${environment.baseJson}profile.json`);
  }

}
