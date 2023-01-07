
export interface ProfileModel{
  name: string,
  birthDate: Date,
  email: string,
  urlGitHub: string,
  urlLinkedin: string,
  specialties: Speciality[],
  address: Address
}

export interface Speciality{
  title: string
}

export interface Address{
  country: string,
  city: string
}
