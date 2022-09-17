import PropTypes from 'prop-types';

import { LeftPanel } from '../pannels/leftPanel';
import { RightPanel } from '../pannels/rightPanel';

import '../mainLayout.css';

export const PannelsContainer = ({ onClick }) => {
  return (
    <div className="pannels-container">
      <LeftPanel handleClick={onClick} />
      <RightPanel handleClick={onClick} />
    </div>
  );
};

PannelsContainer.propTypes = {
  onClick: PropTypes.func,
};
