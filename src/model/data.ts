export interface Cv {
  id: string;
  personalDetails: Map<string, string>;
  experiences: Experience[];
  skillToRating: Map<string, number>;
}


export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}
