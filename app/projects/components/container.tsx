import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import LoaderIcon from "../../components/icons/loaderIcon";
import { Avatar, Container } from "@mui/material";
import HeartOutlinedIcon from "../../components/icons/heartOutlinedIcon";
import { orange } from "@mui/material/colors";
import VerifiactionBadgeIcon from "../../components/icons/verificationBadgeIcon";
// import Image from "next/image";
import LocationIcon from "../../components/icons/locationIcon";
import BuildingIcon from "../../components/icons/buildingIcon";
import { ProductTypes } from "../../utils/types/formComponentsTypes";
import { getInitials } from "../../utils/strings";
import clsx from "clsx";

const ProjectContainer = ({
  status,
  type,
  projectName,
  location,
  companyName,
  companyImg,
}: ProductTypes) => {
  return (
    <div className="rounded-2xl overflow-hidden w-full md:w-[264px]">
      <Container className="flex relative flex-col bg-blue-400 !m-0 !p-0" maxWidth="xl">
        <Container className="h-[136px]">
          {/* <Image src="/test-comp-img.jpg" fill={true} alt="com-img" /> */}
        </Container>
        <Container className="flex top-4 w-auto rounded-md justify-between w-full absolute top-2 !px-4 left-0 " >
          <Chip
            label={
              <span className="flex gap-1 items-center">
                <LoaderIcon />
                {status}
              </span>
            }
            variant="info"
          />
          <Container className="flex gap-1">
            <Avatar className="!bg-white !text-[#204C5B]">
              <FontAwesomeIcon icon={faShareNodes} />
            </Avatar>
            <Avatar className="!bg-white !text-[#204C5B]">
              <HeartOutlinedIcon />
            </Avatar>
          </Container>
        </Container>
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
        <Container className=" w-full bg-gradient-to-t from-black h-[5rem] absolute bottom-0" />
      </Container>
      <Container className="bg-[#F7FAFC] p-4 w-full flex flex-col gap-2">
        <span>{companyName}</span>
        <Container className="flex gap-2 items-center">
          <LocationIcon />
          <span>{location}</span>
        </Container>
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
      </Container>
    </div>
  );
};

export default ProjectContainer;
