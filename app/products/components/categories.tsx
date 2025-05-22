"use client";
import {
  Checkbox,
  Chip,
  Container,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { CategoryTypes } from "../../utils/types/types";

const Categories = ({ categories }: { categories: CategoryTypes[] }) => {
  console.log({categories});
  return (
    <Container className="flex flex-col !p-0">
      {categories.map(({ category, id, brands }) => (
        <Container className="flex flex-col !p-0" key={id}>
          <Typography>{category}</Typography>
          <FormGroup>
            {brands.map(({ id, name, count }) => (
              <FormControlLabel
                key={id}
                control={<Checkbox />}
                label={
                  <span className="flex gap-2 items-center">
                    {name}
                    <Chip
                      label={
                        <span className="flex !text-xs items-center justify-start">
                          {count}
                        </span>
                      }
                    />
                  </span>
                }
              />
            ))}
          </FormGroup>
        </Container>
      ))}
    </Container>
  );
};

export default Categories;
