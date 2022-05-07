import { Fragment, useState } from "react";
import {
  Box,
  CardContent,
  Divider,
  Slider,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Skeleton,
  Drawer,
  Grid,
  Hidden,
} from "@mui/material";
import {
  CardStyled,
  TextStyled,
  SquareCheckIconStyled,
  SquareUncheckIconStyled,
  FabStyled,
} from "components/styled";
import { useBeerContext } from "context";
import fCurrency from "utils/fCurrency";
import sleep from "utils/sleep";
import { Settings } from "@mui/icons-material";

const Filters = ({ loading, setLoading }: { loading: boolean; setLoading: Function }) => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => setVisible(!visible);

  return (
    <>
      <Hidden mdDown>
        <Grid item sx={{ width: 300 }}>
          <CardStyled variant="outlined" sx={{ position: "sticky", top: 140 }}>
            <CardContent>
              {loading ? <LoaderFilter /> : <ItemsFilter setLoading={setLoading} />}
            </CardContent>
          </CardStyled>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <FabStyled onClick={handleClose} color="primary">
          <Settings />
        </FabStyled>
        <Drawer open={visible} onClose={handleClose}>
          <Box sx={{ width: 300 }} role="presentation" p={4}>
            <ItemsFilter setLoading={setLoading} />
          </Box>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Filters;

const ItemsFilter = ({ setLoading }: { setLoading: Function }) => {
  const { DBBeers, setBeerList } = useBeerContext();
  const prices = DBBeers.map((item) => item.price ?? 0);

  const filterByPrices = async (value: Array<number>) => {
    setLoading(true);
    const filtered = DBBeers.filter(
      (item) => (item.price ?? 0) > value[0] && (item.price ?? 0) < value[1]
    );
    setBeerList([...filtered]);
    await sleep(500);
    setLoading(false);
  };

  return (
    <Stack direction="column" spacing={5}>
      <TextStyled variant="h3">BUSQUEDA PERSONALIZADA</TextStyled>
      <RangeFilter filterByPrices={filterByPrices} prices={prices} />

      <OtherFilters />
    </Stack>
  );
};

const RangeFilter = ({
  filterByPrices,
  prices,
}: {
  filterByPrices: Function;
  prices: Array<number>;
}) => {
  const maxPrice = Math.max.apply(null, prices);

  return (
    <Box>
      <TextStyled variant="h5">RANGO DE PRECIOS</TextStyled>
      <Slider
        defaultValue={[0, maxPrice]}
        min={0}
        max={maxPrice + 50}
        step={1}
        onChangeCommitted={(event, value) => filterByPrices(value)}
        marks={[
          { value: 0, label: "$0" },
          { value: maxPrice + 50, label: fCurrency(maxPrice + 50) },
        ]}
      />
    </Box>
  );
};

const LoaderFilter = () => (
  <Stack spacing={5} direction="column">
    <Skeleton height={75} />
    <Box>
      <Skeleton width={100} height={50} />
      <Skeleton />
      <Skeleton />
    </Box>
    <Divider />
    <Box>
      <Skeleton width={100} height={50} />
      <Skeleton />
      <Skeleton />
    </Box>
    <Divider />
    <Box>
      <Skeleton width={100} height={50} />
      <Skeleton />
      <Skeleton />
    </Box>
  </Stack>
);

const OtherFilters = () => (
  <Fragment>
    {[1, 2].map((item, index) => (
      <Fragment key={index}>
        <Divider />
        <FormControl>
          <FormLabel>
            <TextStyled variant="h3" color="text.primary">
              BRAND
            </TextStyled>
          </FormLabel>
          <RadioGroup>
            <FormControlLabel
              value="female"
              control={
                <Radio icon={<SquareUncheckIconStyled />} checkedIcon={<SquareCheckIconStyled />} />
              }
              label="Filter by One"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio icon={<SquareUncheckIconStyled />} checkedIcon={<SquareCheckIconStyled />} />
              }
              label="Filter by Two"
            />
            <FormControlLabel
              value="other"
              control={
                <Radio icon={<SquareUncheckIconStyled />} checkedIcon={<SquareCheckIconStyled />} />
              }
              label="Filter by Three"
            />
          </RadioGroup>
        </FormControl>
      </Fragment>
    ))}
  </Fragment>
);
