"use client";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import SearchIcon from "./icons/searchIcon";
import { SearchFieldTypes } from "../utils/types/types";
import { twMerge } from "tailwind-merge";

const Search = ({
  placeholder = "Enter value",
  className,
}: SearchFieldTypes) => {
  const [searchValue, setSearchValue] = useState("");
  const onChange = ({ target: { value } }) => setSearchValue(value);
  const classNames = twMerge(
    "mt-6 border-[#EAEAEA] border !w-[21rem] md:!w-[40rem] !shadow-none !rounded-[3rem]",
    className
  );
  return (
    <Paper
      component="form"
      className={classNames}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <span className="relative flex items-center w-full">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          className="z-10"
          value={searchValue}
          onChange={onChange}
          inputProps={{
            "aria-label": "Search for new Contruction projects in area",
          }}
        />
        {!searchValue && (
          <span className="absolute left-2 opacity-[0.7] text-[12px] md:text-base">
            {placeholder}
          </span>
        )}
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </span>
    </Paper>
  );
};

export default Search;
