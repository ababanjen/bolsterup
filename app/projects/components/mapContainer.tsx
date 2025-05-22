"use client";
import { Container } from "@mui/material";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../components/map"), {
  ssr: false,
});

const MapContainer = () => {
  return (
    <Container className="!w-full md:!w-[60%] !m-0 !p-0" maxWidth="xl">
      <Map />
    </Container>
  );
};

export default MapContainer;
