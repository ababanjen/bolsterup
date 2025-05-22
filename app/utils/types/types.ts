export type ButtonTypes = {
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "error" | "info";
};

export type SearchFieldTypes = {
  placeholder?: string | React.ReactNode;
  className?: string;
};

export type ProjectsTypes = {
  id: string;
  status: string;
  projectName: string;
  location: string;
  type: string;
  companyName: string;
  companyImg: string | null;
};

export type BrandType = {
  id: string;
  name: string;
  count: number;
};
export type CategoryTypes = {
  id: string;
  category: string;
  brands: BrandType[];
};
