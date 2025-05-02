export interface BaseLink {
  label?: string;
  href?: string;
  src?: string;
  ariaLabel?: string;
  title?: string;
}

export interface BaseText {
  title: string;
  text: string;
  ariaLabel?: string;
}

export type NavLink = BaseLink;

export type ContactLink = BaseLink & {
  icon?: React.ReactNode;
};

export type SocialLink = ContactLink;

export type BenefitText = BaseText;

export type BenefitCard = BenefitText & {
  icon: React.ReactNode;
};

export type FooterLink = BaseLink;

export type ImageLink = BaseLink;
