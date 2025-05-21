import { Container } from "@mui/material";
import Breadcrumbs from "../components/breadcrumbs";
import Header from "../components/header";
import Map from "../components/map";
import Search from "../components/search";
import fakeData from "../stores/dataTemplate.json";
import ProjectContainer from "./components/container";
const data = [...Array(10)].map((_, key) => ({
  ...fakeData,
  id: `id-${new Date().toISOString()}`,
  projectName: `Project ${key + 1}`,
  companyName: `Company ${key + 1}`,
  location: `Test street 123 ${key + 1}`,
  companyImg: key % 2 ? "/comp-test-logo.png" : null,
}));

const Projects = () => {
  return (
    <Container className="!flex !justify-center !flex-col" maxWidth="xl">
      <Header />
      <Container className="!w-full !flex !items-center !justify-center" maxWidth="xl">
        <Search placeholder={"Search for..."} />
      </Container>
      <Container className="flex flex-col gap-4 m-6" maxWidth="xl">
        <Breadcrumbs />
        <Container className="flex !flex-col !md:flex-row !gap-3 !md:gap-0 !m-0 !p-0" maxWidth="xl">
          <Container className="flex !items-center flex-wrap !w-full !gap-3 !p-0 !m-0" maxWidth="xl">
            {data.map((values, key) => (
              <ProjectContainer {...values} key={`${values.id}-${key}`} />
            ))}
          </Container>
          <Container className="!w-full md:!w-[60%] !m-0 !p-0" maxWidth="xl">
            <Map />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Projects;
