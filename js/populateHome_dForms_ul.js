export function populateHome_dForms_ul(dom) {
    dom.els.home_dForms_ul.innerHTML = "";
    const forms = JSON.parse(localStorage.getItem("forms"));
    forms.formsArr.forEach((form, idx) => {
        const li = document.createElement("li");
        li.textContent = form.title;
        li.classList.add("home_dForms_ul_li");
        li.dataset.formIdx = idx;
        dom.els.home_dForms_ul.append(li);
    })

}
