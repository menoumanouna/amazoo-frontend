export type LandingCardProps = {
  title?: string;
  description?: string;
  backgroundImage?: string;
  images?: {
    src: string;
    alt: string;
    onClick?: () => void;
  }[];
  floating?: boolean;
  backgroundColor?: string;
  withgradient?: string;
  textColor?: string;
  alignText?: "left" | "center" | "right";
  textSpacing?: number;
  subHeader?: string;
  direction?: "row" | "column";
  withImageAlt?: boolean;
  textFullWidth?: boolean;
  divided?: boolean;
  withCarousel?: boolean;
  withOverFlow?: boolean;
  mainHolderSpacing?: number;
};
