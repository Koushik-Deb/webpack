import './image-caption.scss';

class ImageCaption {
    render(text) {
        const p = document.createElement('p');
        p.innerHTML = text;
        p.classList.add('image-caption');
        document.querySelector('body').appendChild(p);
    }
}

export default ImageCaption;