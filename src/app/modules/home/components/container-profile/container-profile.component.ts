import { Component, OnInit } from '@angular/core';
import { LanguagesModel } from 'src/app/core/models/languages.model';
import { ProfileModel } from 'src/app/core/models/profile.model';
import { ProfileService } from 'src/app/core/services/profile-service/profile.service';
import { ageCalculator } from 'src/app/shared/utils/age-calculator';

@Component({
  selector: 'app-container-profile',
  templateUrl: './container-profile.component.html',
  styleUrls: ['./container-profile.component.scss']
})
export class ContainerProfileComponent implements OnInit {

  profileData: ProfileModel | any;
  profileLanguages: LanguagesModel | any;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getProfile();
    this.getLanguages();
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

  get ageCalculator() {
    return ageCalculator(`${this.profileData.birthDate.split('/')[1]}/${this.profileData.birthDate.split('/')[0]}/${this.profileData.birthDate.split('/')[2]}`);
  }
}
