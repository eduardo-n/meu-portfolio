import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from '../../models/profile.model';
import { environment } from 'src/environments/environment';
import { LanguagesModel } from '../../models/languages.model';

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

  getProfileLanguages(): Observable<LanguagesModel>{
    return this.httpCliente.get<LanguagesModel>(`${environment.baseJson}languages.json`);
  }
}
