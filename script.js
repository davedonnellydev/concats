// function to change all jira issues into multiples of the sentance 'issue in linkedIssues([ISSUE ID])'

const issueInLinkedIssues = () => {
  const inputBox = document.getElementById("input");
  const resultBox = document.getElementById("result");
  const input = inputBox.value;
  const regexJira = new RegExp(/[^A-Za-z0-9\r\n\-]/g);
  const inputClean = input.replace(regexJira, "");
  const breakpoint = new RegExp(/[\r\n]/g);
  const inputArr = inputClean.split(breakpoint);
  let result = "";

  for (let i = 0; i < inputArr.length; i++) {
    if (
      inputArr[i] !== undefined &&
      inputArr[i] !== null &&
      inputArr[i] !== ""
    ) {
      if (i == 0) {
        result = result + "issue in linkedIssues('" + inputArr[i] + "')";
      } else {
        result = result + " OR issue in linkedIssues('" + inputArr[i] + "')";
      }
    }
    console.log(typeof inputArr[i]);
  }
  resultBox.textContent = result;
};

// function to concatenate all lines within inverted commas, separated by comma

const inList = () => {
  const inputBox = document.getElementById("input");
  const resultBox = document.getElementById("result");
  const input = inputBox.value;
  const breakpoint = new RegExp(/[\r\n\s]/g);
  const inputArr = input.split(breakpoint);
  let result = "";

  for (let i = 0; i < inputArr.length; i++) {
    if (
      inputArr[i] !== undefined &&
      inputArr[i] !== null &&
      inputArr[i] !== ""
    ) {
      if (i == 0) {
        result = result + "'" + inputArr[i] + "'";
      } else {
        result = result + ",'" + inputArr[i] + "'";
      }
    }
  }
  resultBox.textContent = result;
};

const copy = () => {
  const resultBox = document.getElementById("result");
  resultBox.select();
  resultBox.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(resultBox.value);
};

const clear = () => {
  const inputBox = document.getElementById("input");
  const resultBox = document.getElementById("result");
  inputBox.value = "";
  resultBox.value = "";
  inputBox.focus();
};

document
  .getElementById("linkedIssuesButton")
  .addEventListener("click", issueInLinkedIssues);
document.getElementById("inListButton").addEventListener("click", inList);
document.getElementById("copyButton").addEventListener("click", copy);
document.getElementById("clearButton").addEventListener("click", clear);
