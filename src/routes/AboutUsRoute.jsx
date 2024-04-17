import { Stack } from "@mui/material";
import TeamMembersList from "../components/team-members/TeamMembersList";
import ShoesSmallList from "../components/shoes-small/ShoesSmallList";
import GradientShoesBlock from "../components/GradientShoesBlock";
import GetToKnowBlock from "../components/GetToKnowBlock";

const AboutUsRoute = () => {
  return (
    <Stack alignItems="center" width={1}>
      <Stack maxWidth="lg" px={3} my={8} gap={13}>
        <GetToKnowBlock />
        <TeamMembersList />
      </Stack>
      <GradientShoesBlock />
      <Stack
        maxWidth="lg"
        flexDirection="row"
        justifyContent="space-between"
        width={1}
        px={3}
        my={8}
        gap={13}
      >
        <ShoesSmallList title="Flash sale today" />
        <ShoesSmallList title="Best sellers" />
        <ShoesSmallList title="Top Rated" />
      </Stack>
    </Stack>
  );
};

export default AboutUsRoute;
