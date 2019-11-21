document.querySelector('.bannerButton').addEventListener('click', () => {
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.form').style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.xButton').addEventListener('click', () => {
    document.querySelector('.landing').style.display = 'flex';
    document.querySelector('.form').style.cssText = 'opacity: 0; visibility: hidden';
})