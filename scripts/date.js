// Get the current year
//const currentYear = new Date().getFullYear();

// Output the copyright year in the first paragraph of the footer
//document.querySelector('#current').textContent = `© ${currentYear} Uyo Chamber of Cormmerce\nA. William

//Get the date the document was last modified//
//const lastModified = document.lastModified;

// Output the date the document was last modified in the second paragraph of the footer
//document.querySelector('#lastModified').textContent = `Last Modified: ${lastModified}`;
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = 
`WDD231 Project class <br>
A. Williams <br>
© ${currentYear} Uyo Chamber of Commerce <br>`;
  


const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

