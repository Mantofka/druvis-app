import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Styles.
import {
  Container,
  SectionContainer,
  SectionLeft,
  SectionRight,
  Button,
  Video,
  PrimaryText,
  SecondaryText,
} from "../styled-components/Section";

// Reducer.
import { useStateValue } from "../StateProvider";

// Framer motion variants
import {
  sectionVariants,
  contentVariants,
} from "../framer-animation/variants/Section";

function Section({ bigText, subText, secRef, reference, video = "" }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [isVisible, setIsVisible] = useState(false);
  const [{ sectionVideos }, dispatch] = useStateValue();

  const videoRef = useRef(null);
  useEffect(() => {
    inView && setIsVisible(true);
    inView && sectionVideos[reference]?.minimized
      ? videoRef.current.play()
      : videoRef.current.pause();
  }, [inView, []]);

  const fetchReferencedVideo = () => {
    return sectionVideos[reference]
      ? window.innerWidth > 840
        ? sectionVideos[reference]?.detailed
        : sectionVideos[reference]?.minimized
      : "";
  };

  return (
    <Container>
      <SectionContainer ref={secRef}>
        <SectionLeft
          ref={ref}
          variants={sectionVariants}
          initial='closed'
          animate={isVisible ? "open" : "closed"}
        >
          <PrimaryText variants={contentVariants} custom={1}>
            {bigText}
          </PrimaryText>
          <SecondaryText variants={contentVariants} custom={1}>
            {subText}
          </SecondaryText>
          <Button variants={contentVariants} custom={-1}>
            <Link to={reference} style={{ textDecoration: "none" }}>
              Į galeriją
            </Link>
          </Button>
        </SectionLeft>
        <SectionRight>
          <Video
            muted
            loop
            playsinline
            ref={videoRef}
            key={fetchReferencedVideo()}
          >
            <source src={fetchReferencedVideo()} type='video/mp4' />
          </Video>
        </SectionRight>
      </SectionContainer>
    </Container>
  );
}

export default Section;
