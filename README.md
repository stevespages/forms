# forms

## A JSON form

The following is an example of a JSON form which will work with this website. The `rowNumber` and `userResponses` properties will be modified as the user enters data into the form.

```
{
    "description": "A record of observations made during a bee hive inspection",
    "fileNamePrefix": "hive",
    "items": [
        {
            "title": "Hive Name",
            "questions": [
                {
                    "category": "text"
                },
            ],
            "userResponses": {},
        },
        {
            "title": "Hive Name",
            "questions": [
                {
                    "category": "text"
                },
            ],
            "userResponses": {},
        },
    ],
    "rowNumber": 0,
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
