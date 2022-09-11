import { RegisterImage } from '../registerImage';

export function RightPanel() {
  return (
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dolorum expedita?
        </p>
        <button className="btn transparent" id="sign-in-btn">
          Sign in
        </button>
      </div>
      {/* <img src="./img/register.svg" className="image" alt=""></img> */}
      <RegisterImage></RegisterImage>
    </div>
  );
}
