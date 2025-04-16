export function consoleLogForms() {
    const forms = JSON.parse(localStorage.getItem("forms"));
    console.log("forms: ", forms);
}
