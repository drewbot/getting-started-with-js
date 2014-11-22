// Print two messages to your console
console.log('Hello World!');
console.log (1 + 2);

// Alert a message to open your console
alert('Open your console (alt + command + j')

// Examples from:
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// Print the nodeName of the first [0] paragraph element (P)
// When the document is loaded
$( document ).ready(function() {
		// Store all od the paragraph elements to a variable
    var paragraphs = document.getElementsByTagName("p");
    // console log the nodeName
		// paragraphs[0] is the first <p> element
		// paragraphs[1] is the second <p> element, etc.
		console.log(paragraphs[0].nodeName);
});

// run this function when the document is loaded
window.onload = function() {
	// create a couple of elements 
	// in an otherwise empty HTML page
	heading = document.createElement("h1");
	heading_text = document.createTextNode("Welcome to Programming!");
	heading.appendChild(heading_text);
	document.body.appendChild(heading);
}