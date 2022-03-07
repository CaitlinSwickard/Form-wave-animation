const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  // looping through the labels inner text, split in into an array
  // mapping the array to create each letter with span wrapped around it
  // then joining it back into a string
  label.innerHTML = label.innerText
  .split('')
  .map((letter, idx) => `<span>${letter}</span>`)
  .join('')
})