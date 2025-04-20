export function home_d(dom, makeCsv){

    dom.els.home_d.addEventListener("click", event => {
        if (event.target.classList.contains("home_dForms_ul_li")) {
            addHrefToEmailRows(dom, makeCsv);
            const forms = JSON.parse(localStorage.getItem("forms"));
            forms.activeIdxs.form = event.target.dataset.formIdx;
            localStorage.setItem("forms", JSON.stringify(forms));
            const formName = event.target.textContent;
            dom.els.formMenu_d_h2.textContent = formName;
            dom.showDiv(["formMenu_d"]);
        }
        if (event.target.id === "home_dMainMenu_btn") {
            dom.showDiv(["mainMenu_d"]);
        }
    });

}

function addHrefToEmailRows(dom, makeCsv) {
    const forms = JSON.parse(localStorage.getItem("forms"));
    const form = forms.formsArr[forms.activeIdxs.form];
    const subject = form.title + " | (" + form.formFileNamePrefix + ")";
    //const body = "this will be a table of rows and csv...";
    const body = makeCsv("for email");
    const href = "mailto:?subject=" + subject + "&body=" + body;
    dom.els.formMenu_dEmailRows_btn_a.setAttribute("href", href);
}
