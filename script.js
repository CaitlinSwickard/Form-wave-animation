const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  // looping through the labels inner text, split in into an array
  // mapping the array to create each letter with span wrapped around it
  // then joining it back into a string
  label.innerHTML = label.innerText
  .split('')
  // adding the inline style to do the delay of the transition by 50ms
  .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
  .join('')
})