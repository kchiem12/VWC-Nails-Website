const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.image-container img');
const fullImage = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');


previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        fullImage.classList.add('open');
        const image = preview.getAttribute('src').replace("reimages/", "");


        console.log(image);
        fullImage.src = `${image}`;
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        fullImage.classList.remove('open');
        fullImage.src = '';
    };
});