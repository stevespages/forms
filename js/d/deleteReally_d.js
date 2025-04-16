export function deleteReally_d(dom) {
    dom.els.deleteReally_d.addEventListener("click", event => {
        if (event.target.id === "deleteReally_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "deleteReally_dOk_btn") {
            if (event.target.dataset.deleteWhat === "form") {
                const formIdx = event.target.dataset.formIdx;
                const forms = JSON.parse(localStorage.getItem("forms"));
                forms.formsArr.splice(formIdx, 1);
                localStorage.setItem("forms", JSON.stringify(forms))
                populateHome_dForms_ul(dom);
                dom.showDiv(["home_d"]);
            }
        }
    })
}
