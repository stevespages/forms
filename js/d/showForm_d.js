export function showForm_d(dom, populateHome_dForms_ul, showEdit) {

dom.els.showForm_d.addEventListener("click", event => {
    if (event.target.classList.contains("showForm_dColumn_p")) {
        showEdit(
            dom,
            {
                category: "column",
                colIdx: event.target.dataset.colIdx
            }
        );
        dom.showDiv(["edit_d"])
    }
    if (event.target.classList.contains("showForm_dDescription_p")) {
        showEdit(
            dom,
            {
                category: "description"
            }
        );
        dom.showDiv(["edit_d"]);
    }
    if (event.target.classList.contains("showForm_dTitle_p")) {
        showEdit(
            dom, 
            {
                category: "title",
            }
        );
        dom.showDiv(["edit_d"]);
    }
    if (event.target.classList.contains("showForm_dFileNamePrefix_p")) {
        showEdit(
            dom,
            {
                category: "fileNamePrefix"
            }
        );
        dom.showDiv(["edit_d"]);
    }

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
