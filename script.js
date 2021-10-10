// Please implement exercise logic here
// Global Variables
let seconds = 58;
let minutes = 59;
let hours = 1;
const delayInMilliseconds = 1000;


// Create a div for layout of stopwatch
const displayBox = document.createElement('div');
displayBox.setAttribute('id','displayBox');
document.body.appendChild(displayBox);

// Create a lapBox to display laptime and append to DisplayBox
const lapBox = document.createElement('div');
lapBox.setAttribute('id','lapContainer');
lapBox.classList.add('lapContainer');
lapBox.innerHTML = 'Lap time'
displayBox.appendChild(lapBox);

// Create a timeBox to display time Running and append to DisplayBox
const timeBox = document.createElement('div');
timeBox.setAttribute('id','timeContainer');
timeBox.classList.add('timeContainer');
timeBox.innerHTML = 'Time Elapsed'
displayBox.appendChild(timeBox);

// Build timer element to be display in timeBox
let timerEl = document.createElement('div');
timerEl.classList.add('timerContainer');
timerEl.innerHTML = `${hours} hours <br> ${minutes} minutes  <br> ${seconds} seconds`;
console.log(seconds);
timeBox.appendChild(timerEl);

// Timer function

// const timerStart = setInterval(() => {
// if (seconds < 1) {
//     clearInterval(timerStart);
// }
// seconds += 1;
// }, delayInMilliseconds);

// Create a button container to display all stopwatch buttons
const buttonBox = document.createElement('div');
buttonBox.setAttribute('id','buttonContainer');
buttonBox.classList.add('buttonContainer');
buttonBox.innerHTML = 'Buttons'
displayBox.appendChild(buttonBox);

// For loop to create 4 buttons with respective classlist and ID
const createButton = (buttonArr) => {
for (let i = 0; i < 4; i++) {
    const buttonCreate = document.createElement('button');    
    buttonCreate.classList.add('buttonSelection');
    buttonCreate.setAttribute('id', `button${i}`)
    buttonBox.appendChild(buttonCreate);
}
};
createButton();

// To explore using a loop to push the values rather than doing this manually
let buttonArr = ['Start', 'Stop', 'Reset', 'Lap']
button0.innerHTML = 'Start'
button1.innerHTML = 'Stop'
button2.innerHTML = 'Reset'
button3.innerHTML = 'Lap'


// timer function logic
const timerStart = setInterval(() => {
    
    if (minutes == 59 && seconds == 59){
        hours += 1;
        minutes = 0;
        seconds = 0;        
    }
    else if(seconds == 59){
        minutes += 1;
        seconds = 0;        
        console.log('minutes', minutes)    
    } else {
        seconds += 1
        console.log('seconds', seconds)    
    }
    timerEl.innerHTML = `${hours} hours <br> ${minutes} minutes  <br> ${seconds} seconds`;
    }, delayInMilliseconds);



// button0.addEventListener('click', timerStart());



