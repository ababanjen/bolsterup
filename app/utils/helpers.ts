
export const generateProjectsObj = (objCnt: number) => {
  return [...Array(objCnt)].map((_, key) => ({
    status: key % 2 ? "in progress" : "pending",
    type: "commercial",
    id: `id-${new Date().toISOString()}`,
    projectName: `Project ${key + 1}`,
    companyName: `Company ${key + 1}`,
    location: `Test street 123 ${key + 1}`,
    companyImg: key % 2 ? "/comp-test-logo.png" : null,
  }));
};

export const generateProductsObj = (objCnt: number) => {
  return [...Array(objCnt)].map((_, key) => ({
    id: `id-${Date.now().toString()+key}`,
    projectName: `Project ${key + 1}`,
    companyName: `Company ${key + 1}`,
    location: `Test street 123 ${key + 1}`,
    companyImg: key % 2 ? "/comp-test-logo.png" : null,
  }));
};


export const alphabetMap = Object.fromEntries(
  Array.from({ length: 26 }, (_, i) => [i, String.fromCharCode(65 + i)])
);

export const generateBrands = (cnt: number) =>
  [...Array(cnt)].map((_, key) => ({
    id: `brand-${Date.now().toString()+key}`,
    name: `Brand ${key}`,
    count: Math.floor(Math.random() * 100) + 1,
  }));

export const generateCategories = (cnt: number) => {
  const categories = [...Array(cnt)].map((_, key) => alphabetMap[key]);
  return categories.map((category,key) => ({
    category,
    id: `id-${Date.now().toString()+key}`,
    brands: generateBrands(Math.floor(Math.random() * 10) + 1)
  }));
};
