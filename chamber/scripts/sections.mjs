/*export function setSectionSelection(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");
  sectionSelect.innerHTML = ""; // Clear existing options
  byuiCourse.sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}*/





export function setSectionSelection(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");
  //sectionSelect.innerHTML = ""; // Clear existing options

  sections.forEach(section => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}