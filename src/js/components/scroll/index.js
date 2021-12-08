export default class Scroll {
    on() {
        window.addEventListener('scroll', function () {
            console.log('scrolling');
        });
    }
}