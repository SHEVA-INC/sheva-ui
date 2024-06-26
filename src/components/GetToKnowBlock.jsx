import { Stack, Typography, Box } from "@mui/material";
import ShoesImageMain from "../assets/shoes/shoes-image-1.png";
import DoubleCheckIcon from "../icons/DoubleCheckIcon";
import StyledTitle from "../components/styled/StyledTitle";

const items = [
  "Corem ipsum dolor sit amet",
  "Worem ipsum dolor sit amet",
  "Gorem ipsum dolor sit amet",
  "Borem ipsum dolor sit amet",
];

const GetToKnowBlock = () => {
  return (
    <Stack
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack gap={6}>
        <StyledTitle title="YOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT." />
        <Typography>
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </Typography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          gap={2}
        >
          <Stack gap={3}>
            {items.map((item, idx) => (
              <Stack key={idx} flexDirection="row" gap={2} alignItems="center">
                <DoubleCheckIcon />
                <Typography>{item}</Typography>
              </Stack>
            ))}
          </Stack>
          <Box
            component="img"
            src={ShoesImageMain}
            alt="Boots"
            width="100%"
            maxWidth={{ xs: "50%", sm: "50%" }}
            height="max-content"
            display={{ xs: "block", md: "none" }}
          />
        </Stack>
      </Stack>
      <Box
        component="img"
        src={ShoesImageMain}
        alt="Boots"
        width="100%"
        maxWidth="50%"
        height="max-content"
        display={{ xs: "none", md: "block" }}
      />
    </Stack>
  );
};

export default GetToKnowBlock;
