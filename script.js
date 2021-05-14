window.onload = function () {

    window.onscroll = function (e) {

        let navLink = document.getElementsByClassName('nav-link');
        navLink[0].style.fontSize = '1.5rem';
        navLink[1].style.fontSize = '1.5rem';
        navLink[2].style.fontSize = '1.5rem';
        if (window.outerWidth > 1240) {
            let nav = document.getElementById('scroll-nav');
            let navComponent = document.getElementById('nav-components');
            if (window.scrollY > 212) {
                nav.style.display = 'flex'
                navComponent.style.marginTop = 0;
            }
            else {
                nav.style.display = 'none';
            }
        }
        else if (window.outerWidth > 790) {
            let nav = document.getElementById('scroll-nav');
            if (window.scrollY > 100) {
                nav.style.display = 'flex'
                nav.style.height = '50px';
            }
            else {
                nav.style.display = 'none';
            }
        }
        else if (window.outerWidth > 500 && window.outerWidth < 790) {
            let nav = document.getElementById('scroll-nav');
            navLink[0].style.fontSize = '1rem';
            navLink[1].style.fontSize = '1rem';
            navLink[2].style.fontSize = '1rem';
            if (window.scrollY > 80) {
                nav.style.display = 'flex'
                nav.style.height = '50px';
            }
            else {
                nav.style.display = 'none';
            }
        }
        else if (window.outerWidth < 500) {
            let nav = document.getElementById('navbar-main')
            if (window.scrollY > 2) {
                nav.style.boxShadow = '0 10px 25px -4px rgb(0 0 0 / 20%)'
            }
            else {
                nav.style.boxShadow = 'none';
            }
        }
    };

}
