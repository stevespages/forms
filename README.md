# forms

## The `forms` Object

`forms` is a JavaScript object stored in localStorage as a JSON string.

```
{
    activeFormIdx: <null || INT>,
    editMode: <true || false>,
    createFormIdxs: {
        column,
        question,
    }
    formsArr: <[{}, {}, etc]>
}
```

alternatively...

```
{
    activeIdxs: {
        column: <null || INT>,
        form: <null || INT>,
        question: <null || INT>,
    editMode: <true || false>,
    formsArr: <[{}, {}, etc]>
}
```

## A JSON form

The following is an example of a JSON form which will work with this website. The `userResponses` property will be modified as the user enters data into the form.

```
{
    "description": "A record of observations made during a bee hive inspection",
    "fileNamePrefix": "hive",
    "columns": [
        {
            "heading": "Hive Name",
            "questions": [
                {
                    "category": "text"
                },
            ],
            "userResponses": {},
        },
        {
            "heading": "Hive Name",
            "questions": [
                {
                    "category": "text"
                },
            ],
            "userResponses": {},
        },
    ],
    "title": "Hive Inspection Record",
}
```

## File Structure

```
/
    js/
        d/
            home/
                d.js
                only-used-by-home_d.js 
            etc/
                d.js
                only-used-by-etc_d.js
        used-by-more-than-one-div.js
        main.js
```

Avoid importing files which are directly inside `/js/` into the div modules eg `/js/d/home/d.js`. Import them into `/js/main.js` and then pass them as arguments to the function exported by, for example, `/js/d/home/d.js`.
