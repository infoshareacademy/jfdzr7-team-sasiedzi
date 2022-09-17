import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Post } from './post-card';

export const PostList = () => {
  return (
    <main>
      <div className="container">
        <div className="pt-15 pb-15 bg-white">
          <h1 className="header-1 mb-15">Search for helping hands</h1>
          <div className="row">
            <div className="col-auto">
              <p>
                <label htmlFor="city">City</label>
              </p>
              <input type="text" className="input-field" id="city" />
            </div>
            <div className="col-auto">
              <p>
                <label htmlFor="street">Street</label>
              </p>
              <input type="text" className="input-field" id="street" />
            </div>
            <div className="col-auto">
              <br />
              <button className="btn m-10">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient pt-30 pb-30">
        <div className="container">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </main>
  );
};
