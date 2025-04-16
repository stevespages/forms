export function qChoice_qDate_qText_d(dom) {

    dom.els.qChoice_d.addEventListener("click", event => {
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

    dom.els.qDate_dOk_btn.addEventListener("click", (event) => {
        const options = {}
        options.includeTime = dom.els.qDate_dIncludeTime_inp.checked;
        options.includeYear = dom.els.qDate_dIncludeYear_inp.checked;
        options.showCurrent = dom.els.qDate_dShowCurrent_inp.checked;
        /*
        Array.from(optionInps).forEach(optionInp => {
            const optionObject = {};
            optionObject[optionInp.name] = optionInp.checked;
            options.push(optionObject)
        })
        */
        const question =
            {
                category: "date",
                options: options,
            };
        addQToForm(question);
        dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        showForm(dom)
    })

    dom.els.qText_dOk_btn.addEventListener("click", () => {
        const question = 
            {
                category: "text",
            };
        addQToForm(question);
        dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        showForm(dom)
    });

    function showForm(dom) {
        const forms = JSON.parse(localStorage.getItem("forms"));
        const form = forms.formsArr[forms.activeIdxs.form];
        dom.els.showForm_dInner_d.innerHTML = "";
        const titleP = document.createElement("p");
        titleP.innerHTML = "title: " + form.title;
        const descriptionP = document.createElement("p");
        descriptionP.innerHTML = "description: " + form.description;
        const fileNamePrefixP = document.createElement("p");
        fileNamePrefixP.innerHTML = "file name prefix: " + form.formFileNamePrefix;
        dom.els.showForm_dInner_d.append(titleP, fileNamePrefixP);
        form.columns.forEach((column, i) => {
            const columnP = document.createElement("p");
            columnP.innerHTML = "column " + parseInt(i + 1) + " " + column.heading;
            dom.els.showForm_dInner_d.append(columnP);
            column.questions.forEach(question => {
                const questionP = document.createElement("p");
                questionP.innerHTML = JSON.stringify(question);
                dom.els.showForm_dInner_d.append(questionP);
            })
        })
    }

    function addQToForm(q) {
        const forms = JSON.parse(localStorage.getItem("forms"));
        const form = forms.formsArr[forms.activeIdxs.form];
        const colIdx = forms.activeIdxs.column;
        form.columns[colIdx].questions.push(q);
        localStorage.setItem("forms", JSON.stringify(forms));
    }

}
