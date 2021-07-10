let header = document.getElementById('main-header');
let scrollLastPoint = 0;

window.addEventListener('scroll', () => {
    let currentScrollPoint = window.pageYOffset;
    console.log(currentScrollPoint);
    if( currentScrollPoint <= 0 ) {
        header.classList.remove('scroll-up');
        return;
    }

    if( currentScrollPoint > scrollLastPoint && !header.classList.contains('scroll-down') ) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if( currentScrollPoint < scrollLastPoint && header.classList.contains('scroll-down') ) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    scrollLastPoint = currentScrollPoint;
});