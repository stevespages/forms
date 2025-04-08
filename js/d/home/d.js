export function home(dom){

    dom.els.home_d.addEventListener("click", event => {
        if (event.target.classList.contains("home_dForms_ul_li")) {
            const formName = event.target.textContent;
            dom.els.formMenu_d_h2.textContent = formName;
            dom.showDiv(["formMenu_d"]);
        }
        if (event.target.id === "home_dMainMenu_btn") {
            dom.showDiv(["mainMenu_d"]);
        }
    });

}
