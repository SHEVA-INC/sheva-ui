import { Stack } from "@mui/material";
import ShoesSmallList from "../components/shoes-small/ShoesSmallList";
import GradientShoesBlock from "../components/GradientShoesBlock";
import GetToKnowBlock from "../components/GetToKnowBlock";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import ShoesSmallData1 from "../components/shoes-small/ShoesSmallData1";
import ShoesSmallData2 from "../components/shoes-small/ShoesSmallData2";
import ShoesSmallData3 from "../components/shoes-small/ShoesSmallData3";

const AboutUsRoute = () => {
  return (
    <Stack alignItems="center" width={1}>
      <StyledStackForRoutes>
        <GetToKnowBlock />
      </StyledStackForRoutes>
      <GradientShoesBlock />
      <StyledStackForRoutes
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <ShoesSmallList
          title="Flash sale today"
          shoesSmallData={ShoesSmallData1}
        />
        <ShoesSmallList title="Best sellers" shoesSmallData={ShoesSmallData2} />
        <ShoesSmallList title="Top Rated" shoesSmallData={ShoesSmallData3} />
      </StyledStackForRoutes>
    </Stack>
  );
};

export default AboutUsRoute;
