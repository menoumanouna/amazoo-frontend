import { Stack, Typography } from "@mui/material";
import { IProfile } from "../shared/profile.interface";

function UpdateProfile({ currentUser }: { currentUser: IProfile }) {
  //TODO::ADD FORM TO UPDATE PROFILE
  return (
    <Stack>
      <Typography variant="h1">Update Profile</Typography>
      <Typography variant="h6">{currentUser.name}</Typography>
    </Stack>
  );
}

export default UpdateProfile;
