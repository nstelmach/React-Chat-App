import { Box, Typography } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";

type TopWrapperProps = {
  name: string;
};

export const TopWrapper: FunctionComponent<
  PropsWithChildren<TopWrapperProps>
> = ({ children, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRight: "1px solid #dddddd",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "#428cdf",
          padding: "10px",
          color: "white",
          fontSize: "26px",
        }}
      >
        {name}
      </Typography>
      {children}
    </Box>
  );
};
