export interface StyleProjectItemsProps {
  bgColor?: string;
  textColor?: string;
}

export interface StackProjectItemsProps {
  name: string;
  class?: string;
  style?: StyleProjectItemsProps;
}

export interface ProjectItemsDataProps {
  name: string;
  desc: string;
  href: string;
  bgColor?: string;
  pinned?: boolean;
  new?: boolean;
  stack: StackProjectItemsProps[];
}

export interface MenuNavigationProps {
  [x: string]: any;
  name: string;
  href: string;
  icon?: JSX.Element;
  showNavbar?: boolean;
  showFooter?: boolean;
  openWindows?: boolean;
}

export interface SosialProps {
  name: string;
  href: string;
  icon?: JSX.Element;
}
