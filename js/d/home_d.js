export function home_d(dom){

    dom.els.home_d.addEventListener("click", event => {
        if (event.target.classList.contains("home_dForms_ul_li")) {
            addHrefToEmailRows(dom);
            const forms = JSON.parse(localStorage.getItem("forms"));
            forms.activeIdxs.form = event.target.dataset.formIdx;
            localStorage.setItem("forms", JSON.stringify(forms));
            const formName = event.target.textContent;
            dom.els.formMenu_d_h2.textContent = formName;
            dom.showDiv(["formMenu_d"]);
        }
        if (event.target.id === "home_dMainMenu_btn") {
            dom.showDiv(["mainMenu_d"]);
        }
    });

}

function addHrefToEmailRows(dom) {
    const forms = JSON.parse(localStorage.getItem("forms"));
    const form = forms.formsArr[forms.activeIdxs.form];
    const subject = form.title + " | (" + form.formFileNamePrefix + ")";
    //const body = "this will be a table of rows and csv...";
    const body = makeCsv();
    const href = "mailto:?subject=" + subject + "&body=" + body;
    dom.els.formMenu_dEmailForm_btn_a.setAttribute("href", href);
}

function makeCsv() {
    const forms = JSON.parse(localStorage.getItem("forms"));
    const form = forms.formsArr[forms.activeIdxs.form];
    const lengthOfUserResponsesArrays = form.columns[0].userResponses.length;
    console.log("lengthOfUserResponsesArrays", lengthOfUserResponsesArrays)
    let csvHeader = "";
    form.columns.forEach(col => {
        csvHeader += col.heading + ", ";
    })
    csvHeader = csvHeader.slice(0, csvHeader.length - 2);
    let csvData = "";
    for (let i = 0; i < lengthOfUserResponsesArrays; i++) {
        form.columns.forEach(col => {
            csvData += col.userResponses[i] + ", ";
        })
        csvData = csvData.slice(0, csvData.length - 2);
        csvData += "%0D%0A";
    }
    //const csv = csvHeader + "%0D%0A" + "xyz";
    const csv = csvHeader + "%0D%0A" + csvData;
    return csv;
}
