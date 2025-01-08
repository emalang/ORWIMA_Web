const learnMoreBtns = document.querySelectorAll('.f_btn');
const closeBtns = document.querySelectorAll('.close-btn');
const bookDetails = document.querySelectorAll('.book-details');

learnMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        bookDetails[index].classList.add('active'); 
    });
});

closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        bookDetails[index].classList.remove('active'); 
    });
});