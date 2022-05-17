/****************************/
/*** FAQ Schema Generator ***/
/****************************/

// Add global variables.
let faqCount = 1;

// Add the event listener constants.
const newRowButton = document.getElementById('newRow');
const submitButton = document.getElementById('submit');
const form = document.getElementById('form');
const newEntry = document.createElement('div');

// Function to create a new row and insert it into the document.
function createNewRow() {
    newEntry.innerHTML +=
    `
    <div class="faq-entry">
        <div>
            <label for="faqQuestion${faqCount}">Question ${faqCount}</label>
            <input type="text" id="faqQuestion${faqCount}">
        </div>
        <div>
            <label for="faqAnswer${faqCount}">Answer ${faqCount}</label>
            <textarea id="faqAnswer${faqCount}" rows="20" cols="60"></textarea>
        </div>
    </div>
    `

    form.appendChild(newEntry);
    faqCount = faqCount + 1;
}

function submitEntries() {
    for (var i = 1; i < faqCount; i++) {
        console.log(document.getElementById(`faqQuestion${i}`).value);
    }
}

newRowButton.addEventListener('click', createNewRow);
submitButton.addEventListener('click', submitEntries);
