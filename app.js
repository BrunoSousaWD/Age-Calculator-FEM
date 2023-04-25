let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let invalidInput = document.querySelectorAll('.invalid-input');

let icon = document.getElementById('icon');

let yearD = document.getElementById('yearDisplay');
let monthD = document.getElementById('monthDisplay');
let dayD = document.getElementById('dayDisplay');

// INPUT TYPE NUMBER MAX LENGTH
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if (input.value.length > input.maxLength) {
            input.value = input.value.slice(0, input.maxLength);
        }
    };
});


//display Values
icon.addEventListener('click', () => {
    calculate();
    validateNum();
    checkDate();

});






// validateNum
function validateNum() {
    if (day.value === '' || month.value == '' || year.value == '') {
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.add('error')
        })
        document.querySelectorAll('label').forEach(label => {
            label.classList.add('error');
        })

        document.querySelectorAll('.error-message').forEach(message => {
            message.classList.remove('hide');
        })
    }
    else if (day.value > 31 || day.value < 1) {
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.add('error')
        })
        document.querySelectorAll('label').forEach(label => {
            label.classList.add('error');
        })
        dayD.innerText = '--';
        monthD.innerText = '--';
        yearD.innerText = '--';
    } else if (month.value > 12 || month.value < 1) {
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.add('error')
        })
        document.querySelectorAll('label').forEach(label => {
            label.classList.add('error');
        })
        dayD.innerText = '--';
        monthD.innerText = '--';
        yearD.innerText = '--';
    } else if (year.value > 2023 || year.value < 0) {

        invalidInput.forEach(inv => {
            inv.style.display = 'block';
        })
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.add('error')
        })
        document.querySelectorAll('label').forEach(label => {
            label.classList.add('error');
        })
        dayD.innerText = '--';
        monthD.innerText = '--';
        yearD.innerText = '--';
    }
    else {
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.remove('error')
        })
        document.querySelectorAll('label').forEach(label => {
            label.classList.remove('error');
        })
        document.querySelectorAll('.error-message').forEach(message => {
            message.classList.add('hide');
        })
    }
}
// CHECK DATE
function checkDate() {
    let invalidDate = document.getElementById('invalid-date');


    if ((month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) && day.value > 30) {
        invalidDate.style.display = 'block';
        document.querySelectorAll('label').forEach(label => {
            label.classList.add('error');
        })
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.add('error')
        })
        dayD.innerText = '--';
        monthD.innerText = '--';
        yearD.innerText = '--';
    } else if ((month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) && day.value > 31) {
        invalidDate.style.display = 'block';
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.add('error')
        })
        document.querySelectorAll('label').forEach(label => {
            label.classList.add('error');
        })
        dayD.innerText = '--';
        monthD.innerText = '--';
        yearD.innerText = '--';
    }
    else if (month.value == 2 && day.value > 29) {
        invalidDate.style.display = 'block';
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.add('error')
        })
        document.querySelectorAll('label').forEach(label => {
            label.classList.add('error');
        })
        dayD.innerText = '--';
        monthD.innerText = '--';
        yearD.innerText = '--';
    } else if (month.value > 12) {
        invalidInput.forEach(inv => {
            inv.style.display = 'block';
        })
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.add('error')
        })
        document.querySelectorAll('label').forEach(label => {
            label.classList.add('error');
        })
        dayD.innerText = '--';
        monthD.innerText = '--';
        yearD.innerText = '--';
    }
    else {
        invalidDate.style.display = 'none';
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.classList.remove('error')
        })
        document.querySelectorAll('label').forEach(label => {
            label.classList.remove('error');
        })
        invalidInput.forEach(inv => {
            inv.style.display = 'none';
        })
    }
}


// calculate  
function calculate() {


    const date = new Date();

    let cDay = date.getDate();
    let cMonth = date.getMonth() + 1;
    let cYear = date.getFullYear();



    if ((cDay - day.value) < 0) {
        monthD.innerText = (cMonth - month.value) - 1;
        dayD.innerText = day.value - (day.value - cDay);
        if (monthD.innerText < 0) {
            monthD.innerText = 12 + parseInt(monthD.innerText);
            yearD.innerText = (cYear - year.value) - 1;
        }
    } else if ((cDay - day.value) === 0) {
        monthD.innerText = (cMonth - month.value);
        dayD.innerText = 0;
        if (monthD.innerText < 0) {
            monthD.innerText = 12 + parseInt(monthD.innerText);
            yearD.innerText = (cYear - year.value) - 1;
        }
    } else if (cMonth < month.value) {
        monthD.innerText = cMonth + (12 - month.value);
        yearD.innerText = (cYear - year.value) - 1;
        dayD.innerText = cDay - day.value;
    }

    else {
        yearD.innerText = cYear - year.value;
        monthD.innerText = cMonth - month.value;
        dayD.innerText = cDay - day.value;
    }
}