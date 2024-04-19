import { Stack } from "@mui/material";
import TeamMembers from "./TeamMembers";
import TeamMemberItem from "./TeamMemberItem";
import StyledTitle from "../styled/StyledTitle";

const TeamMembersList = () => {
  return (
    <Stack gap={6}>
      <StyledTitle title="Команда" textAlign="center" />
      <Stack
        flexDirection="row"
        justifyContent={{
          xs: "center",

          lg: "space-between",
        }}
        flexWrap="wrap"
        gap={6}
      >
        {TeamMembers.map((teamMember) => (
          <TeamMemberItem
            key={teamMember.id}
            imageSrc={teamMember.imageSrc}
            fullName={teamMember.fullName}
            jobPosition={teamMember.jobPosition}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default TeamMembersList;
