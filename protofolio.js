//turn pages when click next or prev button

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn) {
            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                }, 500);
            } else {
                pageTurn.classList.add('turn');
                setTimeout(((currentIndex) => {
                    return () => {
                        pageTurn.style.zIndex = 20 + currentIndex;
                    };
                })(index), 500);
            }
        } else {
            console.error(`Element with id ${pageTurnId} not found`);
        }
    };
});
