import { Box, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return (
    <>
      <Link
        to={`/chat/${_id}`}
        onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}
      >
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert?.count} New Message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
            }}
          ></Box>
        )}
      </Link>
    </>
  );
};

export default memo(ChatItem);
