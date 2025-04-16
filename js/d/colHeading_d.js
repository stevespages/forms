export function colHeading_d(dom) {
    
    dom.els.colHeading_d.addEventListener("click", event => {
        if (event.target.id === "colHeading_dCancel_btn") {
            if (forms.editMode) {
                dom.showDiv(["edit_d"]);
            } else {
                // showForm() this func must be passed as an arg...
                dom.showDiv(["showForm_d"]);
            }
        }
        const forms = JSON.parse(localStorage.getItem("forms"));
        const activeFormsIdx = forms.activeIdxs.form;
        const form = forms.formsArr[activeFormsIdx];
        
        
        if (event.target.id === "colHeading_dOk_btn") {
            const colHeading = dom.els.colHeading_d_inp.value;
            if (!colHeading) {
                return;
            }
            const col = {};
            col.heading = colHeading;
            col.questions = [];
            col.userResponses = {};
            const colIdx = (form.columns.push(col) - 1);
            forms.activeIdxs.column = colIdx;
            localStorage.setItem("forms", JSON.stringify(forms));
            dom.showDiv(["question_d"]);
        }
        
    })

}
