"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Button from "../button";
import HeaderTabs from "./tabs";
import { Rubik_Mono_One } from "next/font/google";
import clsx from "clsx";
import { isMatch } from "../../utils/strings";
import { Container } from "@mui/material";

const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const pathName = usePathname();
    const router = useRouter();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(isMatch(pathName, "/"));
  }, []);

  const navigateToHome = () => router.push('/');

  return (
    <Container className="flex flex-col md:flex-row justify-between w-full items-center gap-2 p-4" maxWidth="xl">
      <div className="flex flex-col md:flex-row items-center">
        <span
        onClick={navigateToHome}
          className={clsx({
            "text-[#204C5B] text-[24px] cursor-pointer": true,
            [rubikMonoOne.className]: true,
            "md:border-r md:border-[#E4E4E4] md:pr-2": isHome,
          })}
        >
          LOGO
        </span>
        {isHome && (
          <div className="flex gap-4 ml-2">
            <HeaderTabs />
          </div>
        )}
      </div>
      {!isHome && (
        <div className="flex gap-4 ml-2">
          <HeaderTabs />
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-2">
        <Button
          variant="outlined"
          color="secondary"
          className="!shadow-none !rounded-full"
        >
          Log in
        </Button>
        <Button
          color="secondary"
          className="!shadow-none !text-white !rounded-full"
        >
          Create an account
        </Button>
      </div>
    </Container>
  );
};

export default Header;
