export function addCell_d(dom) {

    dom.els.addCell_d.addEventListener("click", event => {
        if (event.target.id === "addCell_dCancel_btn") {
            dom.showDiv(["addRow_d"]);
        }
        if (event.target.id === "addCell_dOk_btn") {
            //const formData = new FormData(dom.els.addCell_d_form);
            const formData = new FormData(dom.els.addCell_d_form);
            console.log("formData", formData)
            console.log("dom.els.addCell_d_form", dom.els.addCell_d_form)
            let userResponse = "";
            for (const value of formData.values()) {
                userResponse += value;
            }
            const forms = JSON.parse(localStorage.getItem("forms"));
            const colIdx = forms.activeIdxs.column;
            const form = forms.formsArr[forms.activeIdxs.form];
            form.columns[colIdx].userResponses[form.numberOfRows] = userResponse;
            localStorage.setItem("forms", JSON.stringify(forms));
            updateUserResponseSpan(userResponse, colIdx);
            dom.showDiv(["addRow_d"]);

            function updateUserResponseSpan(userResponse, colIdx) {
                const spans = document.querySelectorAll(".user-response-span");
                Array.from(spans).forEach(span => {
                    if (span.dataset.colIdx === colIdx) {
                        span.textContent = " " + userResponse;
                    }
                })
            }
        }
    })

}
