// function to check or uncheck all checkboxes
function check(checked = true) {
  const checkboxes = document.querySelectorAll('input[name="language"]');

  // Iterate through each checkbox
  checkboxes.forEach((checkbox) => {
    // Set the checked property of each checkbox to the value of the 'checked' parameter
    checkbox.checked = checked;
  });
}

// function to check all checkboxes and change button behavior to uncheck all
function checkAll() {
  check();
  this.onclick = uncheckAll;
}

// function to uncheck all checkboxes and change button behavior to check all
function uncheckAll() {
  check(false);
  this.onclick = checkAll;
}

const btn = document.querySelector("#btn");

btn.onclick = checkAll;

// Alternative Aproach: (comment the above code and uncomment the below one)

// function checkAll(checked = true) {
//   const checkboxes = document.querySelectorAll('input[name="language"]');
//   checkboxes.forEach((checkbox) => {
//     checkbox.checked = checked;
//   });
// }

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   // Find the first checkbox with the name attribute set to 'language'
//   const firstCheckbox = document.querySelector('input[name="language"]');
//   // Check if the first checkbox is checked
//   const isChecked = firstCheckbox.checked;
//   // Call the checkAll function with the opposite state of the first checkbox
//   checkAll(!isChecked);
// });
