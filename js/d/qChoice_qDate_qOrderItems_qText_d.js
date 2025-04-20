export function qChoice_qDate_qOrderItems_qText_d(dom, showForm) {

    dom.els.qChoice_d.addEventListener("click", event => {
        if (event.target.id === "qChoice_dCancel_btn") {
            dom.showDiv(["question_d"]);
        }
        if (event.target.id === "qChoice_dChoiceOk_btn") {
            const li = document.createElement("li");
            li.classList.add("qChoice_d_li");
            li.innerHTML = dom.els.qChoice_d_inp.value;
            dom.els.qChoice_d_inp.value = "";
            dom.els.qChoice_dChoices_ul.append(li);
        }
        if (event.target.id === "qChoice_dOk_btn") {
            const valueLis = document.querySelectorAll(".qChoice_d_li");
            const values = [];
            Array.from(valueLis).forEach(li => {
                values.push(li.textContent);
            })
            const question =
                {
                    category: "choice",
                    type: dom.els.qChoice_dOk_btn.dataset.type,
                    values: values,
                }
            addQToForm(question);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            showForm(dom);
        }
    })

    dom.els.qDate_d.addEventListener("click", event => {
        if (event.target.id === "qDate_dCancel_btn") {
            dom.showDiv(["question_d"]);
        }
        if (event.target.id === "qDate_dOk_btn") {
            const options = {}
            options.includeTime = dom.els.qDate_dIncludeTime_inp.checked;
            options.includeYear = dom.els.qDate_dIncludeYear_inp.checked;
            options.showCurrent = dom.els.qDate_dShowCurrent_inp.checked;
            const question =
                {
                    category: "date",
                    options: options,
                };
            addQToForm(question);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            showForm(dom);
        }
    })

    dom.els.qOrderItems_d.addEventListener("click", event => {
        if (event.target.id === "qOrderItems_dCancel_btn") {
            dom.showDiv(["question_d"]);
        }
        if (event.target.id === "qOrderItems_dOrderItemOk_btn") {
            const li = document.createElement("li");
            li.classList.add("qOrderItems_d_li");
            li.innerHTML = dom.els.qOrderItems_d_inp.value;
            dom.els.qOrderItems_d_inp.value = "";
            dom.els.qOrderItems_d_ul.append(li);
        }
        if (event.target.id === "qOrderItems_dOk_btn") {
            const valueLis = document.querySelectorAll(".qOrderItems_d_li");
            const values = [];
            Array.from(valueLis).forEach(li => {
                values.push(li.textContent);
            })
            const question =
                {
                    category: "orderItems",
                    values: values,
                }
            addQToForm(question);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            showForm(dom);
        }
    })

    dom.els.qText_d.addEventListener("click", event => {
        if (event.target.id === "qText_dCancel_btn") {
            dom.showDiv(["question_d"]);
        }
        if (event.target.id === "qText_dOk_btn") {
            const question = 
                {
                    category: "text",
                };
            addQToForm(question);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            showForm(dom);
        }
    })

    function addQToForm(q) {
        const forms = JSON.parse(localStorage.getItem("forms"));
        const form = forms.formsArr[forms.activeIdxs.form];
        const colIdx = forms.activeIdxs.column;
        form.columns[colIdx].questions.push(q);
        localStorage.setItem("forms", JSON.stringify(forms));
    }

}
