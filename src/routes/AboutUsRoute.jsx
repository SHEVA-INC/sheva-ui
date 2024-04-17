import { Stack } from "@mui/material";
import TeamMembersList from "../components/team-members/TeamMembersList";
import ShoesSmallList from "../components/shoes-small/ShoesSmallList";
import GradientShoesBlock from "../components/GradientShoesBlock";
import GetToKnowBlock from "../components/GetToKnowBlock";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";

const AboutUsRoute = () => {
  return (
    <Stack alignItems="center" width={1}>
      <StyledStackForRoutes>
        <GetToKnowBlock />
        <TeamMembersList />
      </StyledStackForRoutes>
      <GradientShoesBlock />
      <StyledStackForRoutes flexDirection="row" justifyContent="space-between">
        <ShoesSmallList title="Flash sale today" />
        <ShoesSmallList title="Best sellers" />
        <ShoesSmallList title="Top Rated" />
      </StyledStackForRoutes>
    </Stack>
  );
};

export default AboutUsRoute;
