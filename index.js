
// Cache at least one element using querySelector or querySelectorAll.
const mainContent = document.querySelector("main");
console.log ("mainContent");

// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
mainContent.style.backgroundColor = 'lightblue';
mainContent.classList.add('highlight');

// // Cache at least one element using selectElementById.
// let mainPort = document.selectElementbyId('Portfolio');

// // Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.)
// let firstChildOfMain = mainContent.firstChild;
// let parentOfMain = mainContent.parentNode;
// let nextSiblingOfMain = mainContent.nextElementSibling;
// console.log(nextSiblingOfMain)

// // Iterate over a collection of elements to accomplish some task.
// let portfolioItems = document.querySelectorAll('portfolio');
// portfolioItems.forEach(item => {

// });

// // Create at least one element using createElement.
// let newElement = document.createElement('div');

// // Use appendChild and/or prepend to add new elements to the DOM.
// mainContent.appendChild(newElement);

// // Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
// let template = document.getElementById('portfolio');
// let clone = template.content.cloneNode(true);
// mainContent.appendChild(clone);

// // Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
// mainEl.innerHTML = '<p>New content</p>';


// // Modify at least one attribute of an element in response to user interaction.
// mainContent.setAttribute('data-custom', 'value');


// // Register at least two different event listeners and create the associated event handler functions.
// mainContent.addEventListener('click', handleClick);
// bodyContent.addEventListener('mouseover', handleMouseOver);

// function handleClick(event) {
//     console.log('Element clicked!', event.target);
//   }

//   function handleMouseOver(event) {
//     console.log('Mouse over body!', event.target);
//   }

// // Use at least two Browser Object Model (BOM) properties or methods.
// console.log('Window width:', window.innerWidth);
// console.log('Document title:', document.title);

// // Include at least one form and/or input with HTML attribute validation.
// let form = document.getElementById('myForm');
// form.addEventListener('submit', handleFormSubmit);

// function handleFormSubmit(event) {
//     // Validation logic
//     event.preventDefault();
//     console.log('Form submitted!');
//   }

// // Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
// let input = document.getElementById('myInput');
// input.addEventListener('input', handleInput);

// function handleInput(event) {
//   let inputValue = event.target.value;
//   if (inputValue.length < 3) {
//     input.setCustomValidity('Input must be at least 3 characters long.');
//   } else {
//     input.setCustomValidity('');
//   }
// }

