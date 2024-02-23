import './navigation-bar.scss';


class NavigationBar {
    render(navigationItems) {
        const listItems = navigationItems.map(item => {
            return `<li><a href="${item.url}">${item.name}</a></li>`;
        })
        const ul = document.createElement('ul');
        ul.innerHTML = listItems.join('');
        ul.classList.add('navigation-bar');
        document.querySelector('body').appendChild(ul);
    }

}

export default NavigationBar;