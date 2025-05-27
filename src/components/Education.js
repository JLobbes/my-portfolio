'use client';

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

export default function Education() {
  const courseworkTileContainer = useRef(null);
  const courseTile = useRef([]);
  const preventRenderZone = 120; // px

  const [visibleTileCount, setVisibleTileCount] = useState(1);
  const [showRemainingTiles, setShowRemainingTiles] = useState(false);

  useEffect(() => {
    const checkBottomTilePos = () => {
      if (visibleTileCount === 0) return;

      const containerBottom = courseworkTileContainer.current?.getBoundingClientRect().bottom || 0;
      const lastTile = courseTile.current[visibleTileCount - 1];

      if (!lastTile) return;

      const tileBottom = lastTile.getBoundingClientRect().bottom;
      const gap = containerBottom - tileBottom;

      if (gap > preventRenderZone && visibleTileCount < courseTileHeadings.length) {
        setVisibleTileCount((count) => count + 1);
      }
    };

    checkBottomTilePos(); // initial check

    window.addEventListener('resize', checkBottomTilePos);
    return () => window.removeEventListener('resize', checkBottomTilePos);
  }, [visibleTileCount, showRemainingTiles]);

  // Calculate translation for the showMoreButton
  const buttonTranslationX = showRemainingTiles
    ? -(95 - ((courseTileHeadings.length - visibleTileCount) * 9))  // If showRemainingTiles is true, calculate the remaining tiles which are shown
    : -(95 - (visibleTileCount * 9));  // Otherwise, use visibleTileCount

  const tilesToRender = showRemainingTiles
    ? courseTileHeadings.slice(visibleTileCount, courseTileHeadings.length) // Shows tiles that were unrendered
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
        {tilesToRender.map((heading, index) => {
          const isOverviewTile = (index === 0) && (!showRemainingTiles);
          const isRelevantCourseworkTile = (index === 1) && (!showRemainingTiles);

          // Shift tile left to chase fillerBlock-triangle slant
          const translationX = -(90 - (index * 9));
          const tileStyle = {
            transform: `translateX(${translationX}px)`,
            backgroundColor: isOverviewTile
              ? 'var(--dark-purple)' 
              : isRelevantCourseworkTile
              ? 'var(--dark-pink)' 
              : '', // default background color for other tiles
          };
          const fontStyle = {
            color: isOverviewTile
            ? 'var(--background)'
            : isRelevantCourseworkTile
            ? 'var(--foreground)'
            : '',
            fontWeight: isOverviewTile || isRelevantCourseworkTile
            ? 'bold'
            : ''
          }


          return (
            <div
              key={index}
              ref={(element) => (courseTile.current[index] = element)}
              className={styles.courseTile}
              style={tileStyle}
            >
              <h3 
                className={styles.courseName}
                style={fontStyle}
              >
                {heading}
              </h3>
              <img
                className={styles.carrotIcon} 
                src="images/downward_caret_double_icon.png" 
                style={{ display: 'none' }}
              />
            </div>
          );
        })}


        <div 
          className={styles.showMoreButton}
          onClick={() => setShowRemainingTiles(prev => !prev)}
          style={{ transform: `translateX(${buttonTranslationX}px)` }} // Translation based on visibleTileCount
        >
          <img
            className={styles.carrotIcon} 
            src="images/downward_caret_double_icon.png" 
            style={{ transform: `rotate(${showRemainingTiles ? 180 : 0}deg)` }}
          />
          <span 
            className={styles.span}
          >
            {showRemainingTiles ? 'Return to Main Courses' : 'Show Introductory Courses'}
          </span>
        </div>
      </div>
    </div>
  );
}