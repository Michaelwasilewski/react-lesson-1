import img1 from '../images/image-1.jpg'
import img2 from '../images/image-2.jpg'
import img3 from '../images/image-3.jpg'
function PictureGrid() {
    const images = [
      { src: img1, alt: 'Image 1', experience: 2, caption: 'HTML' },
      { src: img2, alt: 'Image 2', experience: 2, caption: 'CSS' },
      { src: img3, alt: 'Image 3', experience: 2, caption: 'JavaScript' },
    ];
  
    const handleMouseEnter = (event, experience) => {
      const imageOverlay = event.currentTarget.querySelector('.image-overlay');
      imageOverlay.style.display = 'block';
      imageOverlay.textContent = `${experience} years of experience`;
    };
  
    const handleMouseLeave = (event) => {
      const imageOverlay = event.currentTarget.querySelector('.image-overlay');
      imageOverlay.style.display = 'none';
    };
  
    return (
      <div className="picture-grid">
        {images.map((image) => (
          <div
            key={image.alt}
            className="image-container"
            onMouseEnter={(event) => handleMouseEnter(event, image.experience)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image.src} alt={image.alt} />
            <div className="image-overlay"></div>
            <div className="image-label">{image.caption}</div>
            <div className="image-caption">{image.caption}</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default PictureGrid;