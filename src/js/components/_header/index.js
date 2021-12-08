import { DarkModeInit, DarkModeToggle } from './plugins/darkModeSelector';
import { MenuInit, MenuToggle } from './plugins/menu';

export default class Header {
    Init() {
        DarkModeInit('.dark-mode-selector');
        MenuInit('.menu-button', '.menu-widget');
    }
    MenuToggle() {
        MenuToggle();
    }
    DarkToggle() {
        DarkModeToggle();
    }
}