export function home_d(dom){

    dom.els.home_d.addEventListener("click", event => {
        if (event.target.classList.contains("home_dForms_ul_li")) {
            const forms = JSON.parse(localStorage.getItem("forms"));
            forms.activeFormsIdx = event.target.dataset.formIdx;
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
