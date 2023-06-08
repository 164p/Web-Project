import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import { Link } from 'react-router-dom';

function CarouselFadeExample() {
  return (
    
    <>
    <h1>--Game Console Collection Land--</h1>
    <Carousel fade>
         <Carousel.Item>
         <div className='box'>
          <Link to={`/show-item/6480b4d56cf17a942f175bfe`}>
          <img
            className="d-block w-100 home-img"
            src={require("../img/Psp-1000.jpg")}
            alt="First slide" />
          </Link>
          </div>
              <Carousel.Caption>
                  <h3 className='home-t'>PSP</h3>
                  <p className='home-t'> Sony</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className='box'>
          <Link to={`/show-item/64802cf22de868a1bef45388`}>
              <img
                  className="d-block w-100 home-img"
                  src={require("../img/xboxjpg.jpg")}
                  alt="Second slide" />
          </Link>
            </div>
            
              <Carousel.Caption>
                  <h3 className='home-t'>Xbox360</h3>
                  <p className='home-t'>Microsoft</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className='box'>
          <Link to={`/show-item/64812a7bed2eaefbf4f86b8d`}>
              <img
                  className="d-block w-100 home-img"
                  src={require("../img/gba.jpg")}
                  alt="Third slide" />
                      </Link>
            </div>
              <Carousel.Caption>
                  <h3 className='home-t'>Game Boy Advance</h3>
                  <p className='home-t'> 
                      Nintendo
                    </p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      
      <div id='adventure-message'>
        ...Welcome to...<br/><br/>
      “Game Console Collection Land!!”<br/>
      <a href='item'>Begin your adventure!!</a>
      </div>

      </>
  );
}

export default CarouselFadeExample;