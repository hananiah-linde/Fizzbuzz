//Get the values from the Page - controller function
function getValues() {

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let data = fizzBuzzC(fizzValue, buzzValue);
        displayData(data);
    } else {
        alert("You must enter integers");
    }

}

//Generate data using fizzValue and buzzValue - logic function
function fizzBuzz(fizzValue, buzzValue) {

    let data = [];
    for (let index = 1; index <= 100; index++) {

        if ((index % fizzValue == 0) && (index % buzzValue == 0)) {
            data.push("FizzBuzz");
        } else if (index % fizzValue == 0) {
            data.push("Fizz");
        } else if (index % buzzValue == 0) {
            data.push("Buzz");
        } else {
            data.push(index);
        }

    }

    return data;

}

function fizzBuzzB(fizzValue, buzzValue) {

    let data = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {

        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch (true) {
            case Fizz && Buzz: {
                data.push("FizzBuzz");
                break;
            }
            case Fizz: {
                data.push("Fizz");
                break;
            }
            case Buzz: {
                data.push("Buzz");
                break;
            }
            default: {
                data.push(i);
                break;
            }
        }
    }

    return data;
}

function fizzBuzzC(fizzValue, buzzValue) {

    let data = [];

    for (let i = 1; i <= 100; i++) {

        let value = ((i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "") || i);
        data.push(value);

    }

    return data;

}

//display the data - view function
function displayData(data) {

    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";

    for (let index = 0; index < data.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(data[index]);
        rowCols[0].textContent = data[index];

        rowCols[1].classList.add(data[index+1]);
        rowCols[1].textContent = data[index+1];

        rowCols[2].classList.add(data[index+2]);
        rowCols[2].textContent = data[index+2];

        rowCols[3].classList.add(data[index+3]);
        rowCols[3].textContent = data[index+3];

        rowCols[4].classList.add(data[index+4]);
        rowCols[4].textContent = data[index+4];

        tableBody.appendChild(tableRow);

    }

}