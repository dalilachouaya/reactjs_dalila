import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
function Carousels() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="images/zone-hostile.jpg"
            alt="zone-hostile"
          />
          <Carousel.Caption>
            <h3>Hostile zone</h3>
            <p>
              A sci-fi thriller starring Anthony Mackie ("Altered Carbon",
              "Captain America") and Damson Idris ... released in Jan 6, 2021
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="images/dans-les-angles-morts.jpg"
            alt="dans-les-angles-morts"
          />
          <Carousel.Caption>
            <h3>In the Blind Spots</h3>
            <p>
              Into The Blind Spots is an American horror film written and
              directed by Shari Springer Berman and Robert Pulcini, released in
              April 29, 2021
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/mortal-kombat.jpeg"
            alt="mortal-kombat"
          />
          <Carousel.Caption>
            <h3>Mortal Kombat</h3>
            <p>
              Mortal Kombat is an American-Australian film directed by Simon
              McQuoid and released in 2021. It is a film adaptation of the
              Mortal Kombat video game series, and more specifically the
              embodiment of the franchise developed by NetherRealm Studios.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/the-king-s-man.jpg"
            alt="the-king-s-man"
          />
          <Carousel.Caption>
            <h3>The king's man</h3>
            <p>
              The King's Man : First Mission or Kingsman: First Mission to
              Quebec ( The King's Man) is an American-British film directed by
              Matthew Vaughn ... released in 2021{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/the-marksman.jpg"
            alt="the-marksman"
          />
          <Carousel.Caption>
            <h3>The Marksman </h3>
            <p>
              Le Vétéran ou Le Protecteur au Québec ( The Marksman ) is an
              American thriller co-written and directed by Robert Lorenz and
              released in 2021...{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/raya-and-the-first-dragon.webp"
            alt="raya-and-the-first-dragon"
          />
          <Carousel.Caption>
            <h3>Raya and the Last Dragon </h3>
            <p>
              Raya and the Last Dragon is an American animated fantasy film
              produced by Walt Disney Animation Studios, released in 2021...{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
