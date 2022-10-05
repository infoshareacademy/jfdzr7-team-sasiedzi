import '../footer/footerLayout.css';

export const Footer = () => {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">Neighbors App</section>
          <section className="footer-info__returns">Neighbors Policy</section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">neighbors.info@gmail.com</section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            <p className="copy-right">Copyright &copy; 2022</p>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">+48 513 513 513</section>
          <section className="footer-info__contact">Contact Us</section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
};
