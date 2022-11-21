let squareBody = document.querySelector('.square-body');
let blocks = document.querySelectorAll('.block');
let squareBodyClon = squareBody.cloneNode(true);
let btnReset = document.querySelector('.btn-reset');


document.addEventListener('click', (e) => {
    blocks.forEach((item, index) => {
        if (e.target.closest('.block') === item && e.target.closest('.left') && blocks[index - 1]) {
            item.after(blocks[index - 1]);
        }
        if (e.target.closest('.block') === item && e.target.closest('.right') && blocks[index + 1]) {
            item.before(blocks[index + 1]);
        }
        if (e.target.closest('.block') === item && e.target.closest('.top') && blocks[index - 5]) {
            item.replaceWith(blocks[index - 5].cloneNode(true));
            blocks[index - 5].replaceWith(item);
        }
        if (e.target.closest('.block') === item && e.target.closest('.bottom') && blocks[index + 5]) {
            item.replaceWith(blocks[index + 5].cloneNode(true));
            blocks[index + 5].replaceWith(item);
        }
        blocks = document.querySelectorAll('.block');
    });
    if (e.target.classList.contains('btn-reset')) {
        squareBody.replaceWith(squareBodyClon);
        squareBody = document.querySelector('.square-body');
        blocks = document.querySelectorAll('.block');
        squareBodyClon = squareBody.cloneNode(true);
        btnReset = document.querySelector('.btn-reset');

    }

});
