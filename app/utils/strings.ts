export const asPath = (value: string) =>
  `/${value.replace(/\s+/g, "-").toLocaleLowerCase()}`;

export const isMatch = (value1: string, value2: string) =>
  Boolean(value1 === value2);

export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const getInitials = (str: string) => {
  return str
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .join("");
};
