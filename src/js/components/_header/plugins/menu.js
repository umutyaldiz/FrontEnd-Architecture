const Toggle = (container) => {
    if(document.querySelector(container)){
        document.querySelector(container).classList.toggle('active')
    }else{
        document.querySelector('.menu-widget').classList.toggle('active')
    }
}
function MenuInit(button, container) {
    if (document.querySelector(button)) {
        document.querySelector(button).addEventListener('click', () => {
            Toggle(container);
        });
    }
};

function MenuToggle() {
    Toggle();
};

export { MenuInit, MenuToggle };