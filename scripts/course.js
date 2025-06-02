const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false 
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



courses.forEach(course => {
    if ([110, 130, 131].includes(course.number)) { // Modify based on actual completed courses
        course.completed = true;
    }
});

function displayCourses(filteredCourses) {
    const courseList = document.getElementById("courseListl");
    courseList.innerHTML = ""; // Clear previous content

    filteredCourses.forEach(course => {
        const div = document.createElement("div");
        div.textContent = `${course.subject} ${course.number} - ${course.title}`;
        div.style.backgroundColor = course.completed ? "#006400" : "#8b0000"; // Green for completed, red for incomplete
        courseList.appendChild(div);
    });
}

displayCourses(courses); // Show all courses on page load


document.getElementById("button1").addEventListener("click", () => displayCourses(courses));
document.getElementById("button2").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD")));
document.getElementById("button3").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE")));



// Define first
function calculateTotalCredits(filteredCourses) {
    return filteredCourses.reduce((total, course) => total + course.credits, 0);
}

// Then use it
function updateTotalCredits(filteredCourses) {
    document.getElementById("totalCredits").textContent = `Total Credits: ${calculateTotalCredits(filteredCourses)}`;
}


document.getElementById("button1").addEventListener("click", () => {
    displayCourses(courses);
    updateTotalCredits(courses);
});

document.getElementById("button2").addEventListener("click", () => {
    let filtered = courses.filter(c => c.subject === "CSE");
    displayCourses(filtered);
    updateTotalCredits(filtered);
});

document.getElementById("button3").addEventListener("click", () => {
    let filtered = courses.filter(c => c.subject === "WDD");
    displayCourses(filtered);
    updateTotalCredits(filtered);
});

document.getElementById("totalCredits").classList.add("highlight");
document.getElementById("totalCredits").style.fontSize = "20px";
document.getElementById("totalCredits").style.fontWeight = "bold";
document.getElementById("totalCredits").style.color = "blue";
document.getElementById("totalCredits").style.textAlign = "center";
document.getElementById("totalCredits").style.marginTop = "20px";
document.getElementById("totalCredits").style.marginLeft = "20px";
document.getElementById("totalCredits").style.marginRight = "20px";
document.getElementById("totalCredits").style.padding = "10px";
document.getElementById("totalCredits").style.border = "2px solid white";
document.getElementById("totalCredits").style.borderRadius = "5px";
document.getElementById("totalCredits").style.backgroundColor = "#f0f0f0";
document.getElementById("totalCredits").style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
document.getElementById("totalCredits").style.transition = "all 0.3s ease";


