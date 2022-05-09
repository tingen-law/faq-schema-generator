/****************************/
/*** FAQ Schema Generator ***/
/****************************/

// Add the event listener constants.
const newRow = document.getElementById('form');

// Function to create a new row and insert it into the document.
function createNewRow() {
    newRow.innerHTML += `<div>
        <textarea rows="20" cols="60"></textarea>
    </div>`
}

newRow.addEventListener('click', createNewRow);
