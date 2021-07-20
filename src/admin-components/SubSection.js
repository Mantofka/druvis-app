import { AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { sections } from '../sections';

function SubSection({ section, setSubSection, styles }) {
  const [sectionPicks, setSectionPicks] = useState(sections);
  const [desiredKey, setDesiredKey] = useState([]);
  const selectionRef = useRef(null);
  useEffect(() => {
    section = section.split('').slice(0, section.indexOf('-')).join('');
    showSubSection(section);
  }, [section]);

  const showSubSection = (section) => {
    setDesiredKey([]);
    setDesiredKey(
      Object.entries(sectionPicks)
        .filter((key) => key[0] === section)
        .flat(2)
    );
    setDesiredKey((prevState) => prevState.filter((key, i) => i !== 0));

    if (selectionRef.current !== null) {
      selectionRef.current.selectedIndex = 0;
    }
  };
  return (
    <>
      <AnimatePresence>
        {desiredKey.length > 0 && (
          <select
            style={styles}
            ref={selectionRef}
            name='Sub-skiltis'
            onChange={(e) => {
              setSubSection(e.target.value);
            }}
          >
            {desiredKey.map((key, i) => (
              <option key={i} value={key[0]}>
                {key[1]}
              </option>
            ))}
          </select>
        )}
      </AnimatePresence>
    </>
  );
}

export default SubSection;
