"use client";
import * as React from "react";
import MUIBreadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "./icons/homeIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // removes empty segments

  const breadcrumbs = pathSegments.map((segment, i) => {
    const href = "/" + pathSegments.slice(0, i + 1).join("/");
    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize words
    return (
      <span key={href}>
        <Link href={href} className="bg-[#ECF8F6] text-[#204C5B] rounded-md p-2">
          {label}
        </Link>
        {i < pathSegments.length - 1 && (
          <span className="mx-1 text-gray-400">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        )}
      </span>
    );
  });

  return (
    <MUIBreadcrumbs className="!text-[#204C5B]" separator={<FontAwesomeIcon icon={faChevronRight} />} aria-label="breadcrumb">
      <Link href="/">
        <HomeIcon />
      </Link>
      {breadcrumbs}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
