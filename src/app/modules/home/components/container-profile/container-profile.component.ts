import { Component, OnInit } from '@angular/core';
import { LanguagesModel } from 'src/app/core/models/languages.model';
import { ProfileModel } from 'src/app/core/models/profile.model';
import { SkillsModel } from 'src/app/core/models/skills.model';
import { ProfileService } from 'src/app/core/services/profile-service/profile.service';
import { ageCalculator } from 'src/app/shared/utils/age-calculator';

@Component({
  selector: 'app-container-profile',
  templateUrl: './container-profile.component.html',
  styleUrls: ['./container-profile.component.scss']
})
export class ContainerProfileComponent implements OnInit {

  lightThemeIsChecked: boolean = false;

  profileData: ProfileModel;
  profileLanguages: LanguagesModel[];
  profileSkills: SkillsModel[];

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.controlTheme();
    this.getProfile();
    this.getLanguages();
    this.getSkills();
  }

  controlTheme() {
    if(localStorage.getItem('light-theme') === 'true'){
      document.body.classList.add('light-theme');
      this.lightThemeIsChecked = true;
    }
  }

  getProfile() {
    this.profileService.getProfile()
      .subscribe((data) => {
        this.profileData = data;
      });
  }

  getLanguages() {
    this.profileService.getProfileLanguages()
      .subscribe((data) => {
        this.profileLanguages = data;
      });
  }

  getSkills() {
    this.profileService.getProfileSkills()
      .subscribe((data) => {
        this.profileSkills = data;
      });
  }

  toggleTheme() {
    localStorage.setItem('light-theme', this.lightThemeIsChecked.toString());
    document.body.classList.toggle('light-theme');
  }

  get ageCalculator() {
    return ageCalculator(`${this.profileData.birthDate.split('/')[1]}/${this.profileData.birthDate.split('/')[0]}/${this.profileData.birthDate.split('/')[2]}`);
  }
}
