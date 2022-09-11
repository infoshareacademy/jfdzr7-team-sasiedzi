import { LeftPanel } from '../pannels/left-panel';
import { RightPanel } from '../pannels/right-panel';
import '../mainLayout.css';

export function PannelsContainer() {
  return (
    <div className="pannels-container">
      <LeftPanel></LeftPanel>
      <RightPanel></RightPanel>
    </div>
  );
}
