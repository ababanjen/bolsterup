import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  padding: theme.spacing(1),
}));

export default Div;
