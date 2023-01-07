import { Component, OnInit } from '@angular/core';
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

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile()
      .subscribe((data) => {
        this.profileData = data;
      });
  }

  get ageCalculator() {
    return ageCalculator(`${this.profileData.birthDate.split('/')[1]}/${this.profileData.birthDate.split('/')[0]}/${this.profileData.birthDate.split('/')[2]}`);
  }
}
