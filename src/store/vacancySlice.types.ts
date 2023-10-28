export interface Vacancy {
  id: number;
  title: string;
  salary: string;
  duration: string;
  format: string;
  location: string;
  experience: string;
  knowledgeLevel: string;
  age: string;
  englishLevel: string;
  skills: string[];
  description: string;
  opened?: boolean;
}

export interface VacancyState {
  activeVacancies: Vacancy[];
  archivedVacancies: Vacancy[];
  fullVacancyId: number | null;
}
