export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Testimonials = "testimonials",
  Contact = "contact",
}

export interface BenefitType{
  icon: JSX.Element
  title: string;
  description: string;
}