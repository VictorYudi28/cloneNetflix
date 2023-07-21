const informationBox = document.querySelectorAll('.information-box');
const titleInformationBox = document.querySelectorAll('.title-information-box');

for(let i = 0; i < informationBox.length; i++){

    informationBox[i].addEventListener('mouseover', () => {
        titleInformationBox[i].classList.add('color-red-netflix');
    });

};