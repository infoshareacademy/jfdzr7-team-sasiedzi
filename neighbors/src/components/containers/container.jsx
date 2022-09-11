import '../mainLayout.css';
import { useRef } from 'react';

import { FormsContainer } from './FormsContainer';
import { PannelsContainer } from './PannelsContainer';

export function Container() {
  const containerRef = useRef(null);
  const onButtonClick = () => {
    containerRef.current;

    containerRef.current.classList.toggle('sign-up-mode');
  };
  return (
    <div className="container" ref={containerRef}>
      <FormsContainer />
      <PannelsContainer onClick={onButtonClick} />
    </div>
  );
}
