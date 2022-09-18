import './stylesHomePanel.css';

export const HomePanel = () => {
  const slides = [
    {
      image: 'https://picsum.photos/200/300',
      title: 'Ogłoszenia',
      description: 'This is a description',
    },
    {
      image: 'https://picsum.photos/600/500',
      title: 'Dodaj ogłoszenie',
      description: 'This is a second description',
    },
    {
      image: 'https://picsum.photos/500/600',
      title: 'Profil',
      description: 'This is a third description',
    },
    {
      image: 'https://picsum.photos/500/300',
      title: 'Help',
      description: 'This is a fourth description',
    },
  ];

  return (
    <div id="body">
      <div id="main-container">
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
      </div>
    </div>
  );
};
