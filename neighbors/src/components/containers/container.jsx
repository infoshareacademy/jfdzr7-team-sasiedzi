import '../mainLayout.css';
import { FormsContainer } from './formsContainer';
import { PannelsContainer } from './pannelsContainer';

export function Container() {
  return (
    <div className="container">
      <FormsContainer></FormsContainer>
      <PannelsContainer></PannelsContainer>
    </div>
  );
}
