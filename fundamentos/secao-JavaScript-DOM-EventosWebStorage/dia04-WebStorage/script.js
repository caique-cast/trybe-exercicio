window.onload = () => {
    const buttonBackGroudColor = document.querySelectorAll('#background-color button');
    const main = document.querySelector('main');
    console.log(main);
    const buttonLineHeight = document.querySelectorAll('#line-height button');
    console.log(buttonLineHeight);
 
    const changeLineHeight = (event) => {
        const lineHeight = event.target.innerText;
        main.style.lineHeight = lineHeight;
        localStorage.setItem('LineHeight', lineHeight);
    };
    const createLineHeight = () => {
        for (let index = 0; index < buttonLineHeight.length; index += 1) {
            let cutButton = buttonLineHeight[index]
            cutButton.addEventListener('click', changeLineHeight)
        }
    };
    createLineHeight();
    const lineHeight = localStorage.getItem('LineHeight');
    main.style.lineHeight = lineHeight;

    const setBackGroundColor = (event) => {
        const backgroundColor = event.target.innerText
        main.style.backgroundColor = backgroundColor;
        /* localStorage.setItem('backgroundColor', color) */
    }
    const createBackGroundColor = () => {

        for (let index = 0; index < buttonBackGroudColor.length; index += 1) {
            buttonBackGroudColor[index].addEventListener('click', setBackGroundColor)
        }
    }
    /*   createBackGroundColor(); */
}
