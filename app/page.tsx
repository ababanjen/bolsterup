import React from "react";
import Header from "./components/header";
// import HomePage from "./components/home";
import Search from "./components/search";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <Header />
      <div
        className="flex flex-col items-center h-screen
      bg-[url('/home-bg.png')]  bg-bottom bg-no-repeat
      p-[10rem] gap-4 bg-[2rem]
      "
      >
        <Typography className="!text-[#204C5B] !w-max !p-0">Search, Connect and Build</Typography>
        <Typography className="!text-4xl !text-center">
          Discover Global Construction Opportunities
        </Typography>
        <Search
          placeholder={
            <>
              Search for{" "}
              <span className="text-[#204C5B]">New Contruction projects</span>{" "}
              in area
            </>
          }
        />
      </div>
    </main>
  );
}
