export default function App() {
    const images = [
        "images/pic1.jpg",
        "images/pic2.jpg",
        "images/pic3.jpg",
        "images/pic4.jpg",
        "images/pic5.jpg"
    ];
    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src="images/pic1.jpg"
            alt="Closeup of a human eye"
          />
          <div className="overlay"></div>
          <button className="dark">Darken</button>
        </div>
        <div className="thumb-bar">
            {images.map((item) => {
              
            })}
        </div>
      </>
    );
  }