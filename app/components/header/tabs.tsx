"use client"
import { useGlobalState } from "../../stores/globals";
import { headerNavigation } from "../../utils/constants";
import { asPath, isMatch } from "../../utils/strings";
import clsx from "clsx";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const HeaderTabs = () => {
  const { setIsActiveNav } = useGlobalState();
  const router = useRouter();
  const pathName = usePathname();

  const handleClickTab = (tab: string) => {
    const toPath = asPath(isMatch(tab, "Home") ? "/" : tab);
    setIsActiveNav(false);
    router.push(toPath);
  };

  const isActive = (tab: string) =>
    Boolean(pathName === asPath(isMatch(tab, "Home") ? "/" : tab));

  return headerNavigation.map((tab, index) => {
    return (
      <span
        key={`${tab}-${index}`}
        onClick={() => handleClickTab(tab)}
        className={clsx({
          "md:hidden": isMatch(tab, "Home"),
          "capitalize text-[#204C5B] font-medium cursor-pointer w-full justify-center flex  hover-text-default text-base mb-4 md:mb-0":
            true,
          "border-b-2 font-bold border-b-[#8565c3] md:text-[#8565c3]":
            isActive(tab),
        })}
      >
        {tab}
      </span>
    );
  });
};

export default HeaderTabs;