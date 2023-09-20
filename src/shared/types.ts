export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Classes = "classes",
  Contact = "contact",
  Calendar = "calendar",
}

export interface BenefitType{
  icon: JSX.Element
  title: string;
  description: string;
}