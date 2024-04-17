import { Stack } from "@mui/material";
import TeamMembers from "./TeamMembers";
import TeamMemberItem from "./TeamMemberItem";
import StyledTitle from "../styled/StyledTitle";

const TeamMembersList = () => {
  return (
    <>
      <StyledTitle title="Команда" textAlign="center" />
      <Stack
        flexDirection="row"
        justifyContent="center"
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
    </>
  );
};

export default TeamMembersList;
