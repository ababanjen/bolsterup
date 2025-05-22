"use client"
import { Container } from "@mui/material";
import ProjectBox from "./projectBox";
import { useGlobalState } from "../../stores/globals";

const ProjectsContainer = () => {
  const { projects } = useGlobalState();
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

export default ProjectsContainer;
