var menu = document.querySelector('.menu');
var nav = document.querySelector('.logo-nav');
var dropDowns = Array.from(document.querySelectorAll('.drop-down'));
handleDropDown(dropDowns);
menu.addEventListener('click', function () {
    menu.classList.toggle('menu-close');
    nav.classList.toggle('show-nav');
});
function handleDropDown(dropDowns) {
    dropDowns.forEach(function (dropDown) {
        var parent = dropDown.closest('.list');
        var arrow = parent.querySelector('.arrow');
        var link = parent.querySelector('.link');
        link.addEventListener('click', function () {
            dropDowns.forEach(function (item) {
                var parentItem = item.closest('.list');
                var arrowItem = parentItem.querySelector('.arrow');
                if (item !== dropDown) {
                    item.classList.remove('show-links');
                    arrowItem.classList.remove('arrow-up');
                }
            });
            arrow.classList.toggle('arrow-up');
            dropDown.classList.toggle('show-links');
        });
    });
}
