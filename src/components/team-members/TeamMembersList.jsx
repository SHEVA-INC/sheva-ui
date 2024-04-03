import { Stack } from "@mui/material";
import TeamMembers from "./TeamMembers";
import TeamMemberItem from "./TeamMemberItem";

const TeamMembersList = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
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
  );
};

export default TeamMembersList;
