import { Chip, Typography } from "@mui/material";
import clsx from "clsx";
import { ChipTypes } from "../utils/types/types";

const Pill = ({ isString, isActive, tag }: ChipTypes) => {
  return (
    <Chip
      className={clsx({
        "!py-5 !rounded-full capitalize": true,
        "!border !border-[#EAEAEA]": !isString && !isActive,
      })}
      variant={
        isString ? "light" : isActive ? "active-parent" : "default-parent"
      }
      label={
        <span className="flex !text-xs items-center justify-start">
          <span className="pr-2">{isString ? tag : tag["name"]}</span>
          {!isString && (
            <Chip
              label={tag["count"]}
              className="!p-0"
              variant={isActive ? "active" : "default"}
            />
          )}
        </span>
      }
    />
  );
};

export default Pill;
