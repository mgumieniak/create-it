export interface Cv {
  id: string;
  personalDetails: Map<string, any>;
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
