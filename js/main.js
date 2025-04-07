import { dom } from "./dom.js";
import { populateHome_dForms_ul } from "./populateHome_dForms_ul.js";

// d modules
import { home } from "./d/home/d.js"; 

dom.createElVars();
dom.consoleLogEls();

if (!localStorage.getItem("forms")) {
    localStorage.setItem("forms", JSON.stringify([]));
}

dom.showDiv(["home_d"]);

populateHome_dForms_ul(dom);

home(dom);
