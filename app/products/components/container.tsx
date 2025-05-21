import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import LoaderIcon from "../../components/icons/loaderIcon";
import { Avatar } from "@mui/material";
import HeartOutlinedIcon from "../../components/icons/heartOutlinedIcon";
import { orange } from "@mui/material/colors";
import VerifiactionBadgeIcon from "../../components/icons/verificationBadgeIcon";
import Image from "next/image";
import LocationIcon from "../../components/icons/locationIcon";
import BuildingIcon from "../../components/icons/buildingIcon";
import { ProductTypes } from "../../utils/types/formComponentsTypes";
import { getInitials } from "../../utils/strings";
import clsx from "clsx";

const ProductsContainer = ({
  status,
  type,
  projectName,
  location,
  companyName,
  companyImg,
}: ProductTypes) => {
  return (
    <div className="rounded-2xl overflow-hidden w-[264px]">
      <div className="flex relative flex-col bg-blue-400 ">
        <div className="h-[136px]">
          <Image src="/test-comp-img.jpg" fill={true} alt="com-img" />
        </div>
        <div className="flex top-4 w-auto rounded-md justify-between w-full absolute top-2 px-4 left-0">
          <Chip
            label={
              <span className="flex gap-1 items-center">
                <LoaderIcon />
                {status}
              </span>
            }
            variant="info"
          />
          <div className="flex gap-1">
            <Avatar className="!bg-white !text-[#204C5B]">
              <FontAwesomeIcon icon={faShareNodes} />
            </Avatar>
            <Avatar className="!bg-white !text-[#204C5B]">
              <HeartOutlinedIcon />
            </Avatar>
          </div>
        </div>
        <div className="flex gap-2 items-center z-10 p-4">
          <div className="flex relative w-max border-white ">
            <Avatar
              sx={{ bgcolor: orange }}
              className={clsx({ "border-white border": companyImg })}
              src={companyImg ?? null}
            >
              {!companyImg && getInitials(companyName)}
            </Avatar>
            <span className="absolute bottom-0 right-0">
              <VerifiactionBadgeIcon />
            </span>
          </div>
          <span className="text-white capitalize ">{projectName}</span>
        </div>
        <div className=" w-full bg-gradient-to-t from-black h-[5rem] absolute bottom-0" />
      </div>
      <div className="bg-[#F7FAFC] p-4 w-full flex flex-col gap-2">
        <span>{companyName}</span>
        <div className="flex gap-2 items-center">
          <LocationIcon />
          <span>{location}</span>
        </div>
        <span>
          <Chip
            label={
              <span className="flex gap-1 items-center">
                <BuildingIcon />
                {type}
              </span>
            }
            variant="success"
          />
        </span>
      </div>
    </div>
  );
};

export default ProductsContainer;
