export function formMenu_d(dom) {

    dom.els.formMenu_d.addEventListener("click", event => {
        if (event.target.id === "formMenu_dAddRow_btn") {
            const forms = JSON.parse(localStorage.getItem("forms"));
            const formIdx = forms.activeFormsIdx;
            const form = forms.formsArr[formIdx];
            form.numberOfRows++;
            localStorage.setItem("forms", JSON.stringify(forms));
            dom.els.addRow_d_h2.textContent = form.title;
            dom.els.addRow_d_ul.innerHTML = "";
            form.columns.forEach((col, idx) => {
                const colHeadingLi = document.createElement("li");
                colHeadingLi.classList.add("addRow_d_ul_li");
                colHeadingLi.textContent = col.heading;
                colHeadingLi.dataset.colIdx = idx;
                dom.els.addRow_d_ul.append(colHeadingLi);
            })
            dom.showDiv(["addRow_d"])
        }
        if (event.target.id === "formMenu_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "formMenu_dDelete_btn") {
            const forms = JSON.parse(localStorage.getItem("forms"));
            const formIdx = forms.activeFormsIdx;
            dom.els.deleteReally_dOk_btn.dataset.deleteWhat = "form";
            dom.els.deleteReally_dOk_btn.dataset.formIdx = formIdx;
            dom.showDiv(["deleteReally_d"]);
        }
    })

}
