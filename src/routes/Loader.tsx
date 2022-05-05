import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const Progress = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  width: "100%",
});

const Loader = () => (
  <Progress>
    <LinearProgress color="primary" />
  </Progress>
);

export default Loader;
