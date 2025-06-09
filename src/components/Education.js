// src/components/Education.js

'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Education.module.css';

const courseTileHeadings = [
  "Education Overview",
  "Relevant Coursework",
  "Web Development Capstone",
  "Advanced Web Development",
  "Adv. Client Side Development",
  "Database Management Sys.",
  "Mobile Programming",
  "Human Computer Interaction",
  "Freelancing for Tech Pros",
  "Unix Administration",
  "Web Information Systems Prog",
  "Javascript for Programmers",
  "Fundamentals of Graphic Design",
  "Graphic Editing Software",
  "Intro Web Page Construction",
  "Principles of Computer Networks",
  "Problem Solving With Computing",
];

function CourseTile({
  index,
  heading,
  isOverviewTile,
  isRelevantCourseworkTile,
  isTopHalf,
  expandedIndex,
  justClosedIndex,
  setExpandedIndex,
  setJustClosedIndex,
  courseTileRef,
  styles,
}) {
  const isExpanded = expandedIndex === index;

  const handleClick = (e) => {
    e.stopPropagation();

    if (isExpanded) {
      const el = courseTileRef.current[index]?.querySelector(`.${styles.expandedContent}`);
      if (el) el.offsetHeight; // force reflow

      setJustClosedIndex(index);
      setExpandedIndex(null);
      setTimeout(() => setJustClosedIndex(null), 300);
    } else {
      setExpandedIndex(index);
    }
  };

  const translationX = -(90 - (index * 9));

  const tileStyle = {
    transform: `translateX(${translationX}px)`,
    backgroundColor: isOverviewTile
      ? 'var(--dark-purple)'
      : isRelevantCourseworkTile
      ? 'var(--dark-pink)'
      : '',
    zIndex: isExpanded || justClosedIndex === index ? 999 : 1,
  };

  const fontStyle = {
    color: isOverviewTile
      ? 'var(--background)'
      : isRelevantCourseworkTile
      ? 'var(--foreground)'
      : '',
    fontWeight: isOverviewTile || isRelevantCourseworkTile ? 'bold' : '',
  };

  return (
    <div
      key={index}
      ref={(el) => (courseTileRef.current[index] = el)}
      className={styles.courseTile}
      style={tileStyle}
      onClick={handleClick}
    >
      <h3 className={styles.courseName} style={fontStyle}>
        {heading}
      </h3>
      <img
        className={styles.carrotIcon}
        src="images/downward_caret_double_icon.png"
        alt="Expand toggle"
        style={{
          transform: `rotate(${isExpanded ? 180 : 0}deg)`,
          transition: 'transform 0.3s ease',
          backgroundColor: isRelevantCourseworkTile ? 'var(--light-pink)' : 'var(--dark-pink)',
        }}
      />
      <div
        className={`${styles.expandedContent} ${isExpanded ? styles.show : ''} ${
          isTopHalf ? styles.expandDown : styles.expandUp
        }`}
      >
        <p>
          Focused on building mobile apps using Android Studio and Dart/Flutter. Covered app
          development basics, including Firebase for authentication and data storage, integrating
          APIs (e.g., movie search), and using camera/geo-tagging features. Final project involved
          creating a custom app, such as a scuba dive log.
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  const courseworkTileContainer = useRef(null);
  const courseTileRef = useRef([]);
  const preventRenderZone = 120;

  const [visibleTileCount, setVisibleTileCount] = useState(1);
  const [showRemainingTiles, setShowRemainingTiles] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [justClosedIndex, setJustClosedIndex] = useState(null);

  // Dynamically increase visible tiles based on space
  useEffect(() => {
    const checkBottomTilePos = () => {
      if (visibleTileCount === 0) return;

      const containerBottom = courseworkTileContainer.current?.getBoundingClientRect().bottom || 0;
      const lastTile = courseTileRef.current[visibleTileCount - 1];
      if (!lastTile) return;

      const tileBottom = lastTile.getBoundingClientRect().bottom;
      const gap = containerBottom - tileBottom;

      if (gap > preventRenderZone && visibleTileCount < courseTileHeadings.length) {
        setVisibleTileCount((count) => count + 1);
      }
    };

    checkBottomTilePos();

    window.addEventListener('resize', checkBottomTilePos);
    return () => window.removeEventListener('resize', checkBottomTilePos);
  }, [visibleTileCount, showRemainingTiles]);

  // Close expanded tile when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expandedIndex !== null &&
        courseTileRef.current[expandedIndex] &&
        !courseTileRef.current[expandedIndex].contains(event.target)
      ) {
        setJustClosedIndex(expandedIndex);
        setExpandedIndex(null);
        setTimeout(() => setJustClosedIndex(null), 300);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedIndex]);

  const buttonTranslationX = showRemainingTiles
    ? -(95 - (courseTileHeadings.length - visibleTileCount) * 9)
    : -(95 - visibleTileCount * 9);

  const tilesToRender = showRemainingTiles
    ? courseTileHeadings.slice(visibleTileCount)
    : courseTileHeadings.slice(0, visibleTileCount);

  return (
    <div className={styles['education-section']}>
      <div className={styles['filler-blocks-wrapper']}>
        <div className={styles['fillerBlock-rectangle']}></div>
        <svg
          viewBox="0 0 90 300"
          preserveAspectRatio="none"
          className={styles['fillerBlock-triangle']}
        >
          <path
            d="M 43 4 C 42 0 40 0 38 0 L 0 0 V 300 H 86 C 87 300 90 299 89 296"
            className={styles.path}
          />
        </svg>
      </div>

      <div className={styles['relevant-coursework']} ref={courseworkTileContainer}>
        {tilesToRender.map((heading, idx) => {
          // idx here is relative to tilesToRender, but visibleTileCount offset matters for the second slice
          const index = showRemainingTiles ? idx + visibleTileCount : idx;
          const isOverviewTile = index === 0 && !showRemainingTiles;
          const isRelevantCourseworkTile = index === 1 && !showRemainingTiles;
          const isTopHalf = idx < tilesToRender.length / 2;

          return (
            <CourseTile
              key={index}
              index={index}
              heading={heading}
              isOverviewTile={isOverviewTile}
              isRelevantCourseworkTile={isRelevantCourseworkTile}
              isTopHalf={isTopHalf}
              expandedIndex={expandedIndex}
              justClosedIndex={justClosedIndex}
              setExpandedIndex={setExpandedIndex}
              setJustClosedIndex={setJustClosedIndex}
              courseTileRef={courseTileRef}
              styles={styles}
            />
          );
        })}

        <div
          className={styles.showMoreButton}
          onClick={() => setShowRemainingTiles((prev) => !prev)}
          style={{ transform: `translateX(${buttonTranslationX}px)` }}
        >
          <img
            className={styles.carrotIcon}
            src="images/downward_caret_double_icon.png"
            alt="Toggle show more"
            style={{ transform: `rotate(${showRemainingTiles ? 180 : 0}deg)` }}
          />
          <span className={styles.span}>
            {showRemainingTiles ? 'Return to Main Courses' : 'Show Introductory Courses'}
          </span>
        </div>
      </div>
    </div>
  );
}
