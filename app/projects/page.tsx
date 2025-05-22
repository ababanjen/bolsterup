import { Container } from "@mui/material";
import Breadcrumbs from "../components/breadcrumbs";
import Header from "../components/header";
import Search from "../components/search";
import MapContainer from "./components/mapContainer";
import FilterPills from "./components/filterPills";
import ProjectsContainer from "./components/projectsContainer";
const Projects = () => {
  return (
    <Container className="!flex !justify-center !flex-col" maxWidth="xl">
      <Header />
      <Container
        className="!w-full !flex !items-center !justify-center"
        maxWidth="xl"
      >
        <Search placeholder={"Search for..."} />
      </Container>
      <Container className="flex flex-col gap-4 m-6" maxWidth="xl">
        <Breadcrumbs />
        <Container
          className="flex !flex-col md:!flex-row !gap-3 !md:gap-0 !m-0 !p-0"
          maxWidth="xl"
        >
          <Container className="!p-0 gap-2 !flex !flex-col" maxWidth="xl">
            <FilterPills />
            <ProjectsContainer />
          </Container>
          <MapContainer />
        </Container>
      </Container>
    </Container>
  );
};

export default Projects;
