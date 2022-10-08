import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { Post } from './post-card';

export const PostList = () => {
  const searchForm = {
    city: '',
    street: '',
  };
  let x = false;
  const [searchFor, setSearchFor] = useState(searchForm);
  const [disabledButton, setDisabledButton] = useState(true);
  const [startSearch, setStartSearch] = useState(x);

  const [avaibleToSearchForSteet, setAvailbeToSearchForStreet] = useState(true);
  const onClickSearch = () => {
    setStartSearch(!x);
  };

  const onChange = (e) => {
    // setDisabledButton(false);
    const { name, value } = e.target;
    setSearchFor({
      ...searchFor,
      [name]: value,
    });
  };

  useEffect(() => {
    searchFor.city ? setDisabledButton(false) : setDisabledButton(true);
    if (searchFor.city) {
      setAvailbeToSearchForStreet(false);
    } else {
      setAvailbeToSearchForStreet(true);
    }
  }, [searchFor.city]);
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
              <input
                type="text"
                className="input-field"
                value={searchFor.city}
                name="city"
                onChange={onChange}
                id="city"
              />
            </div>
            <div className="col-auto">
              <p>
                <label htmlFor="street">Street</label>
              </p>
              <input
                type="text"
                name="street"
                disabled={avaibleToSearchForSteet}
                value={searchFor.street}
                onChange={onChange}
                className="input-field"
                id="street"
              />
            </div>
            <div className="col-auto">
              <br />
              <button onClick={onClickSearch} className="btn m-10">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient pt-30 pb-30">
        <div className="container">
          <Post searchFor={searchFor} startSearch={startSearch} setStartSearch={setStartSearch} />
        </div>
      </div>
    </main>
  );
};
