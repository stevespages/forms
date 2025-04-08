import { dom } from "./dom.js";
import { populateHome_dForms_ul } from "./populateHome_dForms_ul.js";

// d modules
import { home } from "./d/home/d.js";
import { mainMenu } from "./d/mainMenu/d.js";

// d modules for creating form
import { createForm } from "./d/createForm/d.js";
import { colHeading } from "./d/colHeading/d.js";
import { question } from "./d/question/d.js";

dom.createElVars();
dom.consoleLogEls();

if (!localStorage.getItem("forms")) {
    localStorage.setItem("forms", JSON.stringify(
        {
            activeFormsIdx: null,
            editMode: false,
            createFormIdxs: {
                column: null,
                question: null,
            },
            formsArr: [],
        }));
}

dom.showDiv(["home_d"]);

populateHome_dForms_ul(dom);

home(dom);
mainMenu(dom);
createForm(dom);
colHeading(dom);
question(dom);
