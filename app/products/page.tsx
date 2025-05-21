import Breadcrumbs from "../components/breadcrumbs";
import Header from "../components/header";
import Search from "../components/search";
import fakeData from "../stores/dataTemplate.json";
import ProductsContainer from "./components/container";
const data = [...Array(10)].map((_, key) => ({
  ...fakeData,
  id: `id-${new Date().toISOString()}`,
  projectName: `Project ${key + 1}`,
  companyName: `Company ${key + 1}`,
  location: `Test street 123 ${key + 1}`,
  companyImg: key % 2 ? "/comp-test-logo.png" : null,
}));

const Products = () => {
  return (
    <div className="flex justify-center flex-col gap-4">
      <Header />
      <div className="w-full flex items-center justify-center">
        <Search placeholder={"Search for..."} />
      </div>
      <div className="flex flex-col gap-4 mx-6">
        <Breadcrumbs />
        <div className="flex gap-4">
            <div className="w-max">filter area</div>
          <div className="flex flex-wrap gap-3">
            {data.map((values, key) => (
              <ProductsContainer {...values} key={`${values.id}-${key}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
