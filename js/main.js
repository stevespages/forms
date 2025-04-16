import { dom } from "./dom.js";
import { populateHome_dForms_ul } from "./populateHome_dForms_ul.js";

// d modules
import { addCell_d } from "./d/addCell_d.js";
import { addRow_d } from "./d/addRow_d.js";
import { deleteReally_d } from "./d/deleteReally_d.js";
import { formMenu_d } from "./d/formMenu_d.js";
import { home_d } from "./d/home_d.js";
import { mainMenu_d } from "./d/mainMenu_d.js";

// d modules for creating form
import { colHeading_d } from "./d/colHeading_d.js";
import { createForm_d } from "./d/createForm_d.js";
import { qChoice_qDate_qText_d } from "./d/qChoice_qDate_qText_d.js";
import { question_d } from "./d/question_d.js";
import { showForm_d } from "./d/showForm_d.js";

if (!localStorage.getItem("forms")) {
    localStorage.setItem("forms", JSON.stringify(
        {
            activeIdxs: {
                column: null,
                form: null,
                question: null,
            },
            editMode: false,
            formsArr: [],
        }));
}

dom.createElVars();
dom.consoleLogEls();

// d modules (event listeners)
addCell_d(dom);
addRow_d(dom);
deleteReally_d(dom);
formMenu_d(dom);
home_d(dom);
mainMenu_d(dom);

// d modules for creating form (event listeners)
colHeading_d(dom);
createForm_d(dom);
qChoice_qDate_qText_d(dom);
question_d(dom);
showForm_d(dom, populateHome_dForms_ul);

populateHome_dForms_ul(dom);

dom.showDiv(["home_d"]);
