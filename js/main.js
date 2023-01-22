const keys = document.querySelector(".container");
keys.addEventListener('click', e => {
    if (!e.target.closest('button')) return;

    const keys = e.target;
    const keysValue = keys.textContent;

    const currentValue = document.querySelector('.current__value');

    if(currentValue.value === '0') {
        currentValue.value = keysValue;
    } else {
        currentValue.value = currentValue.value + keysValue;
    }
})