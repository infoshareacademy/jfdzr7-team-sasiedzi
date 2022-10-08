import '../footer/footerLayout.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container t-center">
        <h3>Neighbours</h3>
        <div className="row">
          <div className="col">
            <ul>
              <li>
                <a>Neighbors App</a>
              </li>
              <li>
                <a>Neighbors Policy</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <a>Terms and Conditions</a>
          </div>
          <div className="col">
            <ul>
              <li>
                <a>+48 513 513 513</a>
              </li>
              <li>
                <a>neighbors.info@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <p>Copyright &copy; 2022</p>
      </div>
    </footer>
  );
};
