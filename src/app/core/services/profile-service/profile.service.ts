import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileModel } from '../../models/profile.model';
import { environment } from 'src/environments/environment';
import { LanguagesModel } from '../../models/languages.model';
import { SkillsModel } from '../../models/skills.model';
import { ProjectsModel } from '../../models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpCliente: HttpClient
  ) { }

  getProfile(): Observable<ProfileModel>{
    return this.httpCliente.get<ProfileModel>(`home/site/wwwroot/meu-portfolio/assets/json/profile.json`);
  }

  getProfileLanguages(): Observable<LanguagesModel[]>{
    return this.httpCliente.get<LanguagesModel[]>(`home/site/wwwroot/meu-portfolio/assets/json/languages.json`);
  }

  getProfileSkills(): Observable<SkillsModel[]>{
    return this.httpCliente.get<SkillsModel[]>(`home/site/wwwroot/meu-portfolio/assets/json/skills.json`);
  }

  getProjects(): Observable<ProjectsModel[]>{
    return this.httpCliente.get<ProjectsModel[]>(`home/site/wwwroot/meu-portfolio/assets/json/projects.json`);
  }
}
