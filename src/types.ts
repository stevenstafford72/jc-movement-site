export interface IMenuItem {
    text: string;
    url: string;
    target?: string;
}

export interface IBenefit {
    title: string;
    description: string;
    imageSrc: string;
    bullets: IBenefitBullet[]
}

export interface IBenefitBullet {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IPricingSection {
  title: string;
  items: string[];
}

export interface IPricingLocation {
  label: string;
  href: string;
}

export interface IPricing {
  name: string;
  price: number | string;
  features: string[];
  link: string;
  target?: string;

  // optional structured fields
  ctaLabel?: string;
  location?: IPricingLocation;
  sections?: IPricingSection[];
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
    target?: string;
}