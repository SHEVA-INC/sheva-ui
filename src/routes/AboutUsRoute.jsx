import { Stack, Typography } from "@mui/material";
import ShoesImageMain from "../assets/shoes/shoes-image-1.png";
import DoubleCheckIcon from "../icons/DoubleCheckIcon";
import StyledTitle from "../components/styled/StyledTitle";
import TeamMembersList from "../components/team-members/TeamMembersList";
import ShoesSmallList from "../components/shoes-small/ShoesSmallList";
import GradientShoesBlock from "../components/GradientShoesBlock";

const AboutUsRoute = () => {
  const items = [
    "Corem ipsum dolor sit amet",
    "Worem ipsum dolor sit amet",
    "Gorem ipsum dolor sit amet",
    "Borem ipsum dolor sit amet",
  ];

  return (
    <Stack px={3} my={8} gap={10} maxWidth="xl">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack gap={8}>
          <StyledTitle title="YOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT." />
          <Typography>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </Typography>
          <Stack gap={3}>
            {items.map((item, idx) => (
              <Stack key={idx} flexDirection="row" gap={2} alignItems="center">
                <DoubleCheckIcon />
                <Typography>{item}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <img
          src={ShoesImageMain}
          alt="Boots"
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "max-content",
          }}
        />
      </Stack>
      <StyledTitle title="Команда" textAlign="center" />
      <TeamMembersList />
      <GradientShoesBlock />
      <Stack flexDirection="row" justifyContent="space-between">
        <ShoesSmallList title="Flash sale today" />
        <ShoesSmallList title="Best sellers" />
        <ShoesSmallList title="Top Rated" />
      </Stack>
    </Stack>
  );
};

export default AboutUsRoute;
