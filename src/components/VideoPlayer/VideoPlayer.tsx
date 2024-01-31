
import { ArticleVideoThumb } from 'components/Article/Article';
import React, { useCallback, useEffect,useRef, useState,  } from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';

import PauseIcon from './assets/pause.svg';
import PlayIcon from './assets/play.svg';

interface VideoPlayerProps {
  videosrc: string,
  thumbnail:any
}

const ControlsLayer = styled.div<{show?:boolean}>`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity .2s ease;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: var(--theme-container-radius);
  overflow: hidden;s89 
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  ${media.large`
    border-radius: calc(var(--theme-container-radius) / 2);
  `}
`

const VideoTag = styled.video.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) || ['webkit-playsinline'].includes(prop) || ['x5-playsinline'].includes(prop) || ['x5-video-player-type'].includes(prop) || ['x5-video-orientation'].includes(prop),
})` 
  position: relative;
  width: 100%;
  display: block;
`;

export const VideoPlayer = ({
  videosrc,
  thumbnail,
  ...props
}: VideoPlayerProps) => {
  const videoRef = useRef() as any;
  const [ IsHovered, setIsHovered ] = useState<boolean>(false);
  const [ IsPlaying, setIsPlaying ] = useState<boolean>(false);
  const [ HasPlayed, setHasPlayed ] = useState<boolean>(false);
 

  const onPlay = useCallback(() => {
    if(videoRef.current) {
      if(!HasPlayed) {
        setHasPlayed(true);
      }
      const playpromise = videoRef.current.play();
      playpromise.then(() => {
        setIsPlaying(true)
        videoRef.current.controls = true;
      }).catch((error:any) => {
        console.log(error)
      })
    }
  }, [HasPlayed])

  const onPause = useCallback(() => {
    if(videoRef.current) {
      videoRef.current.pause();
    }
  }, [])

  const setPause = useCallback(() => {

    async function getStatus(singleVideo:any) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(singleVideo);
        }, 200);
      });
    }

    getStatus(videoRef.current).then(() => {
      if(videoRef.current.paused){
        videoRef.current.controls = false;
        setIsPlaying(false);
      }
    });

  }, [])

  useEffect(() => {
    const reference = videoRef.current;
    reference.addEventListener("pause", setPause)

    return () => {
      reference.removeEventListener("pause", setPause);
    }
  }, [setPause])

  console.log(thumbnail)
  return (
    <Wrapper 
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
    > 
      <ControlsLayer show={!IsPlaying ? true : IsPlaying && IsHovered ? true : false}>
        { IsPlaying ? <PauseButton onClick={onPause}/> : <PlayButton onClick={onPlay}/>}
      </ControlsLayer>
      { thumbnail && !HasPlayed && <ArticleVideoThumb sanityImage={thumbnail}/> }
      <VideoTag ref={videoRef} {...props} webkit-playsinline="true" x5-video-player-type="h5" disablePictureInPicture playsInline loop controlsList="nodownload noplaybackrate">
        <source src={`${videosrc}#t=0.1`} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoTag>
    </Wrapper>
  );
};


const CustomPlayIcon = styled(PlayIcon)`
  
  & path,
  & rect {
    fill: rgb(var(--theme-white));
  }

`

const CustomPauseIcon = styled(PauseIcon)`
  
  & path,
  & rect {
    fill: rgb(var(--theme-white));
  }

`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: rgba(var(--theme-black), 0.4);
  backdrop-filter: blur(20px);
  cursor: pointer;
  pointer-events: auto;

  & > svg {
    width: 32px;
  }
  

  ${media.large`
    width: 100px;
    height: 100px;

    & > svg {
      width: 40px;
    }
  `}

  &:hover {
    background: rgba(var(--theme-white), 1);

    ${CustomPlayIcon},
    ${CustomPauseIcon} {
      path,
      rect {
        fill: rgb(var(--theme-black));
      }
    }
  }
`

const PauseWrapper = styled(ButtonWrapper)`
  display: none;
  ${media.large`
    display: flex;
  `}
`



interface PlayButtonProps extends React.HTMLAttributes<HTMLElement> {
}

const PlayButton = ({
  ...props
}:PlayButtonProps) => {


  return (
    <ButtonWrapper {...props}>
      <CustomPlayIcon />
    </ButtonWrapper>
  )
};

interface PauseButtonProps extends React.HTMLAttributes<HTMLElement> {
}

const PauseButton = ({
  ...props
}:PauseButtonProps) => {


  return (
    <PauseWrapper {...props}>
      <CustomPauseIcon />
    </PauseWrapper>
  )
};