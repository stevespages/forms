export function formMenu_d(dom, showForm, viewAllRows) {

    dom.els.formMenu_d.addEventListener("click", event => {
        if (event.target.id === "formMenu_dAddRow_btn") {
            const forms = JSON.parse(localStorage.getItem("forms"));
            const form = forms.formsArr[forms.activeIdxs.form];
            pushNullToAllUserResponses(form);
            localStorage.setItem("forms", JSON.stringify(forms));
            dom.els.addRow_d_h2.textContent = form.title;
            dom.els.addRow_d_ul.innerHTML = "";
            form.columns.forEach((col, idx) => {
                const colHeadingLi = document.createElement("li");
                colHeadingLi.classList.add("addRow_d_ul_li");
                colHeadingLi.textContent = col.heading;
                colHeadingLi.dataset.colIdx = idx;
                const userResponseSpan = document.createElement("span");
                userResponseSpan.classList.add("user-response-span");
                userResponseSpan.dataset.colIdx = idx;
                colHeadingLi.append(userResponseSpan);
                dom.els.addRow_d_ul.append(colHeadingLi);
            })
            dom.showDiv(["addRow_d"])
        }
        if (event.target.id === "formMenu_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "formMenu_dDelete_btn") {
            const forms = JSON.parse(localStorage.getItem("forms"));
            const formIdx = forms.activeIdxs.form;
            dom.els.deleteReally_dOk_btn.dataset.deleteWhat = "form";
            dom.els.deleteReally_dOk_btn.dataset.formIdx = formIdx;
            dom.els.deleteReally_dOk_btn.dataset.okTo = "home_d";
            dom.els.deleteReally_dCancel_btn.dataset.cancelTo = "home_d";
            dom.showDiv(["deleteReally_d"]);
        }
        if (event.target.id === "formMenu_dEdit_btn") {
            showForm(dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        // this should not be needed as it is an anchor element
        if (event.target.id === "formMenu_dEmailRows_btn") {

        }
        if (event.target.id === "formMenu_dView_btn") {
            viewAllRows(dom);
            dom.showDiv(["viewAllRows_d"])
        }
    })

}

// this effectively adds an empty row
function pushNullToAllUserResponses(form) {
    form.columns.forEach(col => {
        col.userResponses.push(null);
    })
}
