/****************************/
/*** FAQ Schema Generator ***/
/****************************/

// Add global variables.
let faqCount = 1;
let submitArrayQuestion = [];
let submitArrayAnswer = [];
let jsonScript = '';

// Add the event listener constants.
const newRowButton = document.getElementById('newRow');
const submitButton = document.getElementById('submit');
const form = document.getElementById('form');
const newEntry = document.createElement('div');
const solution = document.getElementById('solution');

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

// Function to create an array out of the Questions and Answers.
function submitEntries() {
    for (var i = 1; i < faqCount; i++) {
        submitArrayQuestion.push(document.getElementById(`faqQuestion${i}`).value);
        submitArrayAnswer.push(document.getElementById(`faqAnswer${i}`).value);
        console.log(submitArrayQuestion);
        console.log(submitArrayAnswer);
    }
}

// Function to generate the JSON script and print it to the "Solution" div.
function createScript() {
    submitEntries();
    for (var i = 0; i < submitArrayQuestion.length; i++) {
        if (i + 1 < submitArrayQuestion.length) {
            jsonScript +=
            `
            {
                "@type": "Question",
                "name": "${submitArrayQuestion[i]}",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "${submitArrayAnswer[i]}"
                }
            },
            `
        } else {
            jsonScript +=
            `
            {
                "@type": "Question",
                "name": "${submitArrayQuestion[i]}",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "${submitArrayAnswer[i]}"
                }
            }
            `
        }
    }

    jsonScript =
        `
        <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
            ` + jsonScript +
        `
            ]}
        </script>
        `

    jsonScript = `<textarea rows="${10 + (10 * (faqCount - 1))}" cols="60">` + jsonScript + `</textarea>`
    solution.innerHTML = `<div class="output">` + jsonScript + `</div>`;
}

// Event Listeners for the buttons.
newRowButton.addEventListener('click', createNewRow);
submitButton.addEventListener('click', createScript);
