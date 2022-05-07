import { Box, Skeleton, Stack } from "@mui/material";

export const LoadingGeneral = () => (
  <Box py={2}>
    <Skeleton height={50} />
    <Skeleton height={75} sx={{ mb: 5 }} />
    <Skeleton height={50} />
    <Skeleton height={50} />
    <Skeleton height={50} />
    <Skeleton height={50} />
    <Skeleton height={50} />
    <Skeleton height={100} />
  </Box>
);

export const LoadingImage = () => (
  <Box py={2}>
    <Stack justifyContent="center" alignItems="center">
      <Skeleton height={500} width={300} />
    </Stack>
  </Box>
);

export const LoadingDescriptions = () => (
  <Box py={2}>
    <Skeleton height={50} width={300} />
    <Skeleton />
    <Skeleton sx={{ mb: 7 }} />
    <Skeleton height={50} width={300} />
    <Skeleton />
    <Skeleton sx={{ mb: 7 }} />
    <Skeleton height={50} width={300} />
    <Skeleton />
    <Skeleton sx={{ mb: 7 }} />
    <Skeleton height={50} width={300} />
    <Skeleton />
    <Skeleton sx={{ mb: 7 }} />
  </Box>
);
