/****************************/
/*** FAQ Schema Generator ***/
/****************************/

// Add the event listener constants.
const newRow = document.getElementById('newRow');

// Function to create a new row and insert it into the document.
function createNewRow() {
    console.log(newRow);
}

newRow.addEventListener('click', createNewRow);
