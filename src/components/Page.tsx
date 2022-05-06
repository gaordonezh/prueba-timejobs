import { forwardRef, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";

const Page = forwardRef(({ children, title }: { title: string; children: ReactNode }, ref) => (
  <Box ref={ref}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));

export default Page;
