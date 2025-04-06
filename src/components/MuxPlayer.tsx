import MuxPlayer from "@mux/mux-player-react";

const VideoPlayer = () => {
  return (
    <MuxPlayer
      playbackId={process.env.playbackId!}
      className=" border-4 aspect-video"
      metadata={{
        video_title: "Placeholder (optional)",
        viewer_user_id: "Placeholder (optional)",
      }}
    />
  );
};
export default VideoPlayer;
