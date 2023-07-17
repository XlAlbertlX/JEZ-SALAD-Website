let mas = ['.cards__item1', '.cards__item2', '.cards__item3'];
let mas2 = ['item1', 'item2', 'item3'];
for (let i = 0; i < 3; i++)
{
    const observer = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
                // добавить ему CSS-класс
                entry.target.classList.add(mas2[i]);
            }
        });
    });
    observer.observe(document.querySelector(mas[i]));
}


let mas_menu = ['.card1', '.card2', '.card3'];
let mas2_menu = ['item1', 'item2', 'item3'];
for (let i = 0; i < 3; i++)
{
    const observer = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
                // добавить ему CSS-класс
                entry.target.classList.add(mas2_menu[i]);
            }
        });
    });
    observer.observe(document.querySelector(mas_menu[i]));
}