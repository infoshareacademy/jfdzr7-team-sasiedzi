import { LoginImage } from '../loginImage';

export function LeftPanel() {
  return (
    <div className="panel left-panel">
      <div className="content">
        <h3>New here?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dolorum expedita?
        </p>
        <button className="btn transparent" id="sign-up-btn">
          Sign up
        </button>
      </div>
      {/* <img src={LoginImage} className="image" alt=""></img> */}
      <LoginImage></LoginImage>
    </div>
  );
}
