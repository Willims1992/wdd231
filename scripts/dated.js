// Get the current year
const currentYear = new Date().getFullYear();


//Get the date the document was last modified//
const lastModified = document.lastModified;

// Output the date the document was last modified in the second paragraph of the footer
document.querySelector('footer p:nth-of-type(2)').textContent = `Last Modified: ${lastModified}`;
