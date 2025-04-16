export function question_d(dom) {

    dom.els.question_d.addEventListener("click", (event) => {
        if (event.target.value === "checkbox") {
            dom.els.qChoice_d_h1.innerHTML = "Choice Question (checkbox)";
            dom.els.qChoice_dOk_btn.dataset.type = "checkbox";
            dom.showDiv(["qChoice_d"]);
        }
        if (event.target.value === "date") {
            dom.showDiv(["qDate_d"]);
        }
        if (event.target.value === "radio") {
            dom.els.qChoice_d_h1.innerHTML = "Choice Question (radio)";
            dom.els.qChoice_dOk_btn.dataset.type = "radio";
            dom.showDiv(["qChoice_d"]);
        }
        if (event.target.value === "text") {
            dom.showDiv(["qText_d"]);
        }
    });

}
