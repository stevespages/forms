export function populateHome_dForms_ul(dom) {
    dom.els.home_dForms_ul.innerHTML = "";
    const forms = JSON.parse(localStorage.getItem("forms"));
    /*
    myforms.forEach((form, idx) => {
        const titleDt = document.createElement("dt");
        titleDt.classList.add("titleDt");
        titleDt.dataset.myformsIdx = idx;
        titleDt.innerHTML = form.title;
        const descriptionDd = document.createElement("dd");
        descriptionDd.innerHTML = form.description;
        const menuDd = document.createElement("dd");
        const addRowBtn = document.createElement("button");
        addRowBtn.innerHTML = "Add Row";
        addRowBtn.classList.add("add-row-btn");
        addRowBtn.dataset.myformsIdx = idx;
        const viewRowsBtn = document.createElement("button");
        viewRowsBtn.innerHTML = "View Rows";
        viewRowsBtn.classList.add("view-rows-btn");
        viewRowsBtn.dataset.myformsIdx = idx;
        menuDd.append(addRowBtn, viewRowsBtn);
        dom.els.home_divMyforms_dl.append(titleDt, descriptionDd, menuDd);
    })
        */
}
