export interface Cv {
  id: string;
  personalDetails: PersonalDetails;
  experiences: Experience[];
  skillToRating: Map<string, number>;
}

export interface PersonalDetails {
  firstname: string;
  lastname: string,
  email: string;
  phone: string;
  additionDetails: Map<string, string>;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}
