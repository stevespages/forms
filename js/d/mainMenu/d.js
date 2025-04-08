export function mainMenu(dom) {

    dom.els.mainMenu_d.addEventListener("click", event => {
        if (event.target.id === "mainMenu_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "mainMenu_dCreateForm_btn") {
            dom.showDiv(["createForm_d"]);
        }
    })

}
