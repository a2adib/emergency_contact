1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans : 
The difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll is given below 

getElementById is selects a element by its unique id

getElementsByClassName is select all the element with same class name

quearySelector is selects the first element that matches a specified CSS selector

quearySelectorall is selects all elements that match a specified CSS selector


2. How do you **create and insert a new element into the DOM**?

Ans :
document.createElement() is use for creating new element in the new HTML element node


3. What is **Event Bubbling** and how does it work?

Ans :
Event Bubbling is that when an event happens on an element it first runs the event handlers on that element then propagates to its parent then the grandparent and so on until it reaches the root.
 
Example :

The child buttons is clicked it goes to Child node. Then it goes to the parent div. Then it would visit to body then html and finally document


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans :
Event delegation is a powerful pattern in javascript that improves both the performance and maintainability of code
It can reduce the number of event listeners in code.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans :
preventDefault() is used to stop the browser from executing the default behavior of the selected element

stopPropagation() is used to stop the propagation of the same event from being called

