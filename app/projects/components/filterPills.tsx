import { Chip, Container, Typography } from "@mui/material";
import { filterTags } from "../../utils/constants";

const FilterPills = () => {
  return (
    <Container className="!p-0 flex gap-4 !items-center" maxWidth="xl">
      <Container className="flex flex-col !p-0 !w-auto" >
        <Typography className="!w-max">Projects</Typography>
        <Typography className="!w-max">10 Results</Typography>
      </Container>
      <Container className="!p-0 flex gap-2">
        {filterTags.map((tag) => (
          <Chip
            key={tag}
            label={
              <Typography className="flex !text-xs items-center justify-start" maxWidth="xl">
                {tag}
              </Typography>
            }
          />
        ))}
      </Container>
    </Container>
  );
};
export default FilterPills;
