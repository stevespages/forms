export function createForm_d(dom) {

    dom.els.createForm_d.addEventListener("click", event => {
        if (event.target.id === "createForm_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "createForm_dStart_btn") {
            console.log("start!")
            const fileNamePrefix = dom.els.createForm_dFpx_inp.value;
            const title = dom.els.createForm_dTitle_inp.value;
            const description = dom.els.createForm_dDescription_inp.value;
            // formFileNamePrefix should be validated for fit to good file name prefix
            if (fileNamePrefix === "") {
                return;
            }
            if (title === "") {
                return;
            }
            const newForm = {
                numberOfRows: 0,
                columns: [],
            };
            newForm.formFileNamePrefix = fileNamePrefix;
            newForm.title = title;
            newForm.description = description;
            const forms = JSON.parse(localStorage.getItem("forms"));
            //forms.formsArr.push(newForm);
            const activeFormsIdx = (forms.formsArr.push(newForm) - 1);
            forms.activeIdxs.form = activeFormsIdx;
            localStorage.setItem("forms", JSON.stringify(forms));
            dom.showDiv(["colHeading_d"]);
        }
    })

}
