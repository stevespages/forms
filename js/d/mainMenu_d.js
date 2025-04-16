export function mainMenu_d(dom) {

    dom.els.mainMenu_d.addEventListener("click", event => {
        if (event.target.id === "mainMenu_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
        if (event.target.id === "mainMenu_dCreateForm_btn") {
            dom.els.createForm_dDescription_inp.value = "";
            dom.els.createForm_dFpx_inp.value = "";
            dom.els.createForm_dTitle_inp.value = "";
            dom.showDiv(["createForm_d"]);
        }
    })

}
