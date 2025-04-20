export function see_d(dom) {
    dom.els.see_d.addEventListener("click", event => {
        if (event.target.id === "see_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
    })
}
