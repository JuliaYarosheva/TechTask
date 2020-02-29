const elements = {
    rowsBtn: document.querySelector('.btn-row'),
    blocksBtn: document.querySelector('.btn-block'),
    items: document.querySelectorAll('.item'),
    textContent: document.querySelectorAll('.text-content')
};

[elements.rowsBtn, elements.blocksBtn].forEach(el => el.addEventListener('click', el => toggleStyle(el)));

function toggleStyle(el) {
    if (el.target.matches('.disabled-btn')) {
        return;
    }

    elements.blocksBtn.classList.toggle('disabled-btn');
    elements.rowsBtn.classList.toggle('disabled-btn');

    document.querySelector('.item_container').classList.toggle('block');
    document.querySelector('.item_container').classList.toggle('row');

    elements.items.forEach(el => {
        el.classList.toggle('item-block');
        el.classList.toggle('item-row');
    });

    elements.textContent.forEach(el => {
        el.classList.toggle('block-content');
        el.classList.toggle('row-content');
    });
}
