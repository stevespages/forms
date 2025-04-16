export function showForm_d(dom, populateHome_dForms_ul) {

dom.els.showForm_d.addEventListener("click", event => {
    if (event.target.id === "showForm_dAddQ_btn") {
    }
    if (event.target.id === "showForm_dEnd_btn") {
        populateHome_dForms_ul(dom);
        dom.showDiv(["home_d"]);
    }
    if (event.target.id === "showForm_dNewCol_btn") {
        dom.els.colHeading_d_inp.value = "";
        dom.showDiv(["colHeading_d"]);
    }
})

}
