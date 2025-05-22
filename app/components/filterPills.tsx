"use client";
import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { filterPillTypes } from "../utils/types/types";
import { isMatch } from "../utils/strings";
import Pill from "./Pill";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const FilterPills = ({ tags }: { tags: filterPillTypes }) => {
  const [title, setTitle] = useState("");
  const pathName = usePathname();

  useEffect(() => {
    const pageTitle = pathName.replace("/", "");
    setTitle(pageTitle);
  }, []);

  return (
    <Container
      className={clsx({
        "!p-0 flex justify-end gap-1 !items-center": true,
        "flex-col !items-start": isMatch(title, "products"),
      })}
      maxWidth="xl"
    >
      <Typography className="!w-max capitalize">{title}</Typography>
      <Container className="!p-0 flex gap-2">
        {tags.map((tag, key) => {
          const isString = isMatch(typeof tag, "string");
          const isActive = key === 0;
          return <Pill key={key} {...{ tag, isActive, isString }} />;
        })}
      </Container>
    </Container>
  );
};
export default FilterPills;
