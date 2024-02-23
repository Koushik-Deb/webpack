import Heading from '../heading/heading.js';
import KiwiImage from '../kiwi-image/kiwi-image.js';

class KiwiPage {
    render() {
        const heading = new Heading();
        heading.render('kiwi');
        const kiwiImage = new KiwiImage();
        kiwiImage.render();

        import('ImageCaptionApp/ImageCaption').then(module => {
            const imageCaption = module.default;
            const imagecaption = new imageCaption();
            imagecaption.render('kiwi');
        });

    }
}

export default KiwiPage;
