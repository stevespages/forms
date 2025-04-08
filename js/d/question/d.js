export function question(dom) {

    dom.els.question_d.addEventListener("click", (event) => {
        if (event.target.value === "checkbox") {
            dom.els.choiceQ_div_h1.innerHTML = "Choice Question (checkbox)";
            dom.els.choiceQ_divOk_btn.dataset.type = "checkbox";
            dom.showDiv(["qChoice_d"]);
        }
        if (event.target.value === "date") {
            dom.showDiv(["qDate_d"]);
        }
        if (event.target.value === "radio") {
            dom.els.choiceQ_div_h1.innerHTML = "Choice Question (radio)";
            dom.els.choiceQ_divOk_btn.dataset.type = "radio";
            dom.showDiv(["qchoice_d"]);
        }
        if (event.target.value === "text") {
            dom.showDiv(["qText_d"]);
        }
    });

    dom.els.qChoice_d.addEventListener("click", (event) => {
        if (event.target === "qChoice_dChoiceOk_btn") {
            const li = document.createElement("li");
            li.classList.add("qChoice_d_li");
            li.innerHTML = dom.els.choiceQ_divChoice_inp.value;
            dom.els.choiceQ_divChoice_inp.value = "";
            dom.els.choiceQ_divChoices_ul.append(li);
        }
        if (event.target === "choiceQ_dOk_btn") {
            addChoiceQToForm(dom, form);
            showForm(dom, form);
        }
    })

    dom.els.qDate_dOk_btn.addEventListener("click", () => {
        addDateQToForm(dom, form);
        showForm(dom, form)
    })

    dom.els.qText_dOk_btn.addEventListener("click", () => {
        const forms = JSON.parse(localStorage.getItem("forms"));
        const form = forms.formsArr[forms.activeFormsIdx]
        const colIdx = forms.createFormIdxs.column;
        form.columns[colIdx].questions.push(
            {
                category: "text",
            }
        )

        localStorage.setItem("forms", JSON.stringify(forms));
        showForm(dom, form);
    })

}

