export function edit_d(dom, showForm) {
    dom.els.edit_d.addEventListener("click", event => {
        if (event.target.id === "edit_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "edit_d-delete-col-btn") {
            dom.els.deleteReally_dCancel_btn.dataset.cancelTo = "edit_d";
            dom.els.deleteReally_dOk_btn.dataset.colIdx = event.target.dataset.colIdx;
            dom.showDiv(["deleteReally_d"]);
        }
        if (event.target.id === "edit_dOk_btn") {
            const forms = JSON.parse(localStorage.getItem("forms"));
            const form = forms.formsArr[forms.activeIdxs.form];
            if (dom.els.edit_d_inp.dataset.itemToEditCategory === "column") {
                form.columns[dom.els.edit_d_inp.dataset.itemToEditColIdx].heading =
                    dom.els.edit_d_inp.value;
            }
            if (dom.els.edit_d_inp.dataset.itemToEditCategory === "description") {
                form.description = dom.els.edit_d_inp.value;
            }
            if (dom.els.edit_d_inp.dataset.itemToEditCategory === "fileNamePrefix") {
                form.formFileNamePrefix = dom.els.edit_d_inp.value;
            }
            if (dom.els.edit_d_inp.dataset.itemToEditCategory === "title") {
                form.title = dom.els.edit_d_inp.value;
            }
            localStorage.setItem("forms", JSON.stringify(forms));
            showForm(dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })
}
