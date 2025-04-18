// d modules
import { addCell_d } from "./d/addCell_d.js";
import { addRow_d } from "./d/addRow_d.js";
import { deleteReally_d } from "./d/deleteReally_d.js";
import { edit_d } from "./d/edit_d.js";
import { formMenu_d } from "./d/formMenu_d.js";
import { home_d } from "./d/home_d.js";
import { mainMenu_d } from "./d/mainMenu_d.js";
import { viewAllRows_d } from "./d/viewAllRows_d.js";

// d modules for creating form
import { colHeading_d } from "./d/colHeading_d.js";
import { createForm_d } from "./d/createForm_d.js";
import { qChoice_qDate_qText_d } from "./d/qChoice_qDate_qText_d.js";
import { question_d } from "./d/question_d.js";
import { showForm_d } from "./d/showForm_d.js";

// shared modules
import { dom } from "./shared/dom.js";
import { populateHome_dForms_ul } from "./shared/populateHome_dForms_ul.js";
import { showEdit } from "./shared/showEdit.js";
import { showForm } from "./shared/showForm.js";
import { viewAllRows } from "./shared/viewAllRows.js";

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
deleteReally_d(dom, populateHome_dForms_ul);
edit_d(dom, showForm);
formMenu_d(dom, showForm, viewAllRows);
home_d(dom);
mainMenu_d(dom);
viewAllRows_d(dom);

// d modules for creating form (event listeners)
colHeading_d(dom);
createForm_d(dom);
qChoice_qDate_qText_d(dom, showForm);
question_d(dom);
showForm_d(dom, populateHome_dForms_ul, showEdit);

populateHome_dForms_ul(dom);

dom.showDiv(["home_d"]);
