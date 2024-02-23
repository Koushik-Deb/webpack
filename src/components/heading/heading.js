import './heading.scss';
import jQuery from 'jquery';
class Heading {
    render(pageName) {
        const h1 = jQuery('<h1>');
        const body = jQuery('body');
        h1.text('Webpack is awesome. This is "' + pageName + '" page');
        body.append(h1);
    }
}

export default Heading;
