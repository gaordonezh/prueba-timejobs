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
} from "@mui/material";
import {
  CardStyled,
  TextStyled,
  SquareCheckIconStyled,
  SquareUncheckIconStyled,
} from "components/styled";
import { Fragment } from "react";

const Filters = () => {
  return (
    <CardStyled variant="outlined">
      <CardContent>
        <Stack direction="column" spacing={5}>
          <TextStyled variant="h3">BUSQUEDA PERSONALIZADA</TextStyled>
          <Box>
            <TextStyled variant="h5">RANGO DE PRECIOS</TextStyled>
            <Slider
              defaultValue={[20, 70]}
              min={0}
              max={200}
              step={10}
              onChange={(event, value) => console.log(value)}
              marks={[
                { value: 0, label: "$0" },
                { value: 200, label: "$200" },
              ]}
            />
          </Box>

          {[1, 2, 3].map((item, index) => (
            <Fragment key={index}>
              <Divider />
              <FormControl>
                <FormLabel>
                  <TextStyled variant="h3" color="text.primary">
                    MARCA
                  </TextStyled>
                </FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        icon={<SquareUncheckIconStyled />}
                        checkedIcon={<SquareCheckIconStyled />}
                      />
                    }
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        icon={<SquareUncheckIconStyled />}
                        checkedIcon={<SquareCheckIconStyled />}
                      />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={
                      <Radio
                        icon={<SquareUncheckIconStyled />}
                        checkedIcon={<SquareCheckIconStyled />}
                      />
                    }
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Fragment>
          ))}
        </Stack>
      </CardContent>
    </CardStyled>
  );
};

export default Filters;
