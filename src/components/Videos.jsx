import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./index";

export function Videos({ videos }) {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, i) => (
        <Box key={i}>
          {/* videoCard */}
          {item.id.videoId && <VideoCard video={item} />}
          {/* channelCard */}
          {item.id.channelId && <ChannelCard channeldetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}
