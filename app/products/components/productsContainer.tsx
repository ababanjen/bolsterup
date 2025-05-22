"use client";
import { Container } from "@mui/material";
import ProjectBox from "./projectBox";
import { useGlobalState } from "../../stores/globals";
import FilterPills from "../../components/filterPills";

const ProductsContainer = () => {
  const { projects, categories } = useGlobalState();

  const getTotalBrandsPerCategory = () => {
    return categories.map((category) => {
      const count = category.brands.reduce((sum, v) => sum + v.count, 0);
      return { name: category.category, count };
    });
  };

  const getTotalBrands = () =>
    getTotalBrandsPerCategory()
      .flatMap((category) => category.count)
      .reduce((sum, value) => sum + value, 0);

  const getFlatfilterPills = () => {
    const results = [{ name: "All", count: getTotalBrands() }];
    getTotalBrandsPerCategory().forEach((brands) => {
      results.push({
        ...brands,
      });
    });
    return results;
  };
  console.log(
    "->>",
    getTotalBrandsPerCategory(),
    getTotalBrands(),
    getFlatfilterPills()
  );
  console.log("Type of:", typeof getFlatfilterPills());
  return (
    <Container className="flex flex-col gap-2" maxWidth="xl">
      <FilterPills tags={getFlatfilterPills()} />
      <Container
        className="flex !items-center flex-wrap !w-full !gap-3 !p-0 !m-0"
        maxWidth="xl"
      >
        {projects.map((values, key) => (
          <ProjectBox {...values} key={`${values.id}-${key}`} />
        ))}
      </Container>
    </Container>
  );
};

export default ProductsContainer;
