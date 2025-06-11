/*const byuiCourse = {
  code: "WDD231",
  name: "Web Frontend Development I",
  sections: [
    { sectionNumber: "1",
      enrolled: 88,
      
      instructor: "Brother Bingham", 
    },
    { sectionNumber: "2",
      enrolled: 81,
      instructor: "Sister Shultz", 
    },
    { sectionNumber: "3",
      enrolled: 95,
      instructor: "Sister Smith", 
    },
  ],

  changeEnrollment: function (sectionNumber, add = true) {
    // Find the section with the given section number
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNumber == sectionNumber
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }

    }
  },
};

export default byuiCourse;*/
 

const byuiCourse = {
  code: "WDD231",
  name: "Web Frontend Development I",
  sections: [
    { sectionNumber: "1", enrolled: 88, instructor: "Brother Bingham" },
    { sectionNumber: "2", enrolled: 81, instructor: "Sister Shultz" },
    { sectionNumber: "3", enrolled: 95, instructor: "Sister Smith" },
  ],

  changeEnrollment(sectionNumber, add = true) {
    const section = this.sections.find(sec => sec.sectionNumber == sectionNumber);
    if (section) {
      if (add) {
        section.enrolled++;
      } else {
        section.enrolled = Math.max(0, section.enrolled - 1); // Prevent negative enrollment
      }
    }
  }
};

export default byuiCourse;