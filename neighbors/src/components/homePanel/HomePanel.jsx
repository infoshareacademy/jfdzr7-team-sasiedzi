import './stylesHomePanel.css';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const HomePanel = () => {
  const slides = [
    {
      image: 'https://picsum.photos/200/300',
      title: 'This is a title',
      description: 'This is a description',
    },
    {
      image: 'https://picsum.photos/600/500',
      title: 'This is a second title',
      description: 'This is a second description',
    },
    {
      image: 'https://picsum.photos/500/600',
      title: 'This is a third title',
      description: 'This is a third description',
    },
    {
      image: 'https://picsum.photos/500/300',
      title: 'This is a fourth title',
      description: 'This is a fourth description',
    },
    // {
    //   image: 'https://picsum.photos/400/300',
    //   title: 'This is a fifth title',
    //   description: 'This is a fifth description',
    // },
  ];

  // const slideLeft = () => {
  //   var slider = document.getElementById('slider');
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };
  // const slideRight = () => {
  //   var slider = document.getElementById('slider');
  //   slider.scrollRight = slider.scrollLeft - 500;
  // };

  return (
    <div id="body">
      <div id="main-container">
        {/* <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        /> */}
        <div id="slider">
          {slides.map((slide, index) => {
            return (
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                  }}
                ></div>
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">{slide.description}</p>
              </div>
            );
          })}
        </div>
        {/* <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
        /> */}
      </div>
    </div>
  );
};
