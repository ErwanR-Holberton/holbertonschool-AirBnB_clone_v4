document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is loaded!');
    let selectedAmenities = []
    const popover = document.querySelector('#popover');
    popover.classList.toggle('red');
    const ul = popover.querySelector('ul');
    for (let i = 0; i < ul.children.length; i++) {
        const amenity = ul.children[i];
        const checkbox = amenity.querySelector('input');
        checkbox.addEventListener('click', function () {
            console.log('Checkbox clicked!');
            amenity.classList.toggle('red');
            popover.classList.toggle('red');
            checkbox.classList.toggle('red');
            ul.classList.toggle('red');
        })
    }
/*
    const checkboxes = document.querySelectorAll('li input');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function () {
            const id = checkbox.
            if ()
        });
    });*/
});
