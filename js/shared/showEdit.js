export function showEdit(dom, itemToEdit) {
    console.log("itemToEdit", itemToEdit);
    const forms = JSON.parse(localStorage.getItem("forms"));
    const form = forms.formsArr[forms.activeIdxs.form];
    if (itemToEdit.category === "column") {
        const existingColTitle = form.columns[itemToEdit.colIdx].heading;
        dom.els.edit_d_inp.value = existingColTitle;
        dom.els.edit_d_inp.dataset.itemToEditCategory = "column";
        dom.els.edit_d_inp.dataset.itemToEditColIdx =  itemToEdit.colIdx;
        const deleteColBtn = document.createElement("button");
        deleteColBtn.textContent = "delete";
        deleteColBtn.setAttribute("id", "edit_d-delete-col-btn");
        deleteColBtn.dataset.colIdx = itemToEdit.colIdx;
        dom.els.edit_d.append(deleteColBtn);
    }
    if (itemToEdit.category === "description") {
        const existingDescription = form.description;
        dom.els.edit_d_inp.value = existingDescription;
        dom.els.edit_d_inp.dataset.itemToEditCategory = "description";
    }
    if (itemToEdit.category === "fileNamePrefix") {
        const existingFileNamePrefix = form.formFileNamePrefix;
        dom.els.edit_d_inp.value = existingFileNamePrefix;
        dom.els.edit_d_inp.dataset.itemToEditCategory = "fileNamePrefix";
    }
    if (itemToEdit.category === "title") {
        const existingTitle = form.title;
        dom.els.edit_d_inp.value = existingTitle;
        dom.els.edit_d_inp.dataset.itemToEditCategory = "title";
    }

}
