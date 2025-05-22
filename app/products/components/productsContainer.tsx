"use client";
import { Container } from "@mui/material";
import ProjectBox from "./projectBox";
import { useGlobalState } from "../../stores/globals";

const ProductsContainer = () => {
  const { projects } = useGlobalState();

  // const getTotalBrandsPerCategory = () => {
  //   return categories.map((category) => {
  //     const total = category.brands.reduce((sum, v) => sum + v.count, 0);
  //     return { name: category.category, total };
  //   });
  // };

  return (
    <Container
      className="flex !items-center flex-wrap !w-full !gap-3 !p-0 !m-0"
      maxWidth="xl"
    >
      {projects.map((values, key) => (
        <ProjectBox {...values} key={`${values.id}-${key}`} />
      ))}
    </Container>
  );
};

export default ProductsContainer;
