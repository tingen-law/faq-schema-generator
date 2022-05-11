/****************************/
/*** FAQ Schema Generator ***/
/****************************/

// Add global variables.
let faqCount = 1;

// Add the event listener constants.
const newRow = document.getElementById('form');

// Function to create a new row and insert it into the document.
function createNewRow() {
    newRow.innerHTML += `
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
    faqCount = faqCount + 1;
}

newRow.addEventListener('click', createNewRow);
