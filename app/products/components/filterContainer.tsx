"use client";
import {
  Container,
  Typography,
} from "@mui/material";
import { useGlobalState } from "../../stores/globals";
import Search from "../../components/search";
import dynamic from "next/dynamic";

const Categories = dynamic(() => import("./categories"), {
  ssr: false,
});

const FilterContainer = () => {
  const { categories } = useGlobalState();

  return (
    <Container className="flex flex-col gap-2 !p-0 !max-w-[25%]">
      <Typography className="!p-0">Filter</Typography>
      <Container className="flex flex-col !p-0">
        <Container className="flex flex-col !p-0">
          <Typography>Brands</Typography>
          <Search className="md:!w-auto" placeholder="Search Brand" />
        </Container>
        <Categories categories={categories} />
      </Container>
    </Container>
  );
};

export default FilterContainer;
