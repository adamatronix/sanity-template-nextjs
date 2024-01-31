import React from "react";
import styled from "styled-components";

interface VideoProps {
  src: string,
  autoPlay?: boolean
}

const VideoTag = styled.video.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) || ['webkit-playsinline'].includes(prop) || ['x5-playsinline'].includes(prop) || ['x5-video-player-type'].includes(prop) || ['x5-video-orientation'].includes(prop),
})` 
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>( ({ src, autoPlay,...props }, ref) => {
  return (
    <VideoTag ref={ref} {...props} controlsList="nodownload noplaybackrate" webkit-playsinline="true" x5-video-player-type="h5" autoPlay={autoPlay} disablePictureInPicture playsInline muted loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoTag>
  )
});

Video.displayName = "Video";
