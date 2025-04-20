export function addCell_d(dom) {

    dom.els.addCell_d.addEventListener("click", event => {
        if (event.target.classList.contains("orderItemsQuestionLi")) {
            const orderedItemsInp = document.querySelector("#orderedItemsInp");
            const orderedItemsP = document.querySelector("#orderedItemsP");
            const orderedItemsPSpan = document.createElement("span");
            orderedItemsPSpan.classList.add("orderedItemsPSpan");
            orderedItemsPSpan.textContent += " " + event.target.textContent;
            orderedItemsP.append(orderedItemsPSpan);
            orderedItemsInp.value = orderedItemsP.textContent;
        }
        if (event.target.classList.contains("orderedItemsPSpan")) {
            event.target.remove();
            const orderedItemsInp = document.querySelector("#orderedItemsInp");
            const orderedItemsP = document.querySelector("#orderedItemsP");
            orderedItemsInp.value = orderedItemsP.textContent;
        }
        if (event.target.id === "addCell_dCancel_btn") {
            dom.showDiv(["addRow_d"]);
        }
        if (event.target.id === "addCell_dOk_btn") {
            
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
            const lastUserResponseIdx = (form.columns[0].userResponses.length) - 1;
            form.columns[colIdx].userResponses.splice(
                lastUserResponseIdx,
                1,
                userResponse
            )
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
