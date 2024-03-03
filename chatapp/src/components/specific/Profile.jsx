import { Avatar, Stack, Typography } from "@mui/material";

const Profile = () => {
  return (
    <>
      <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
          sx={{
            width: "200",
            height: "200",
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white",
          }}
        ></Avatar>
      </Stack>
      <ProfileCard heading={"Bio"} text={"aklsdjaklsjdlaj"} />
    </>
  );
};
const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        color={"white"}
        textAlign={"center"}
      >
        {Icon && Icon}
        <Stack>
          <Typography variant="body1">{text}</Typography>
          <Typography variant="caption" color={"gray"}>
            {heading}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
export default Profile;
