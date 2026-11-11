const courses = [
    {id: 1, name: "HTML Basics", level: "Beginner", active: true},
    {id: 2, name: "CSS Basics", level: "Beginner", active: true},
    {id: 3, name: "JavaScript Basics", level: "Beginner", active: true},
    {id: 4, name: "JavaScript Advanced", level: "Advanced", active: false},
    {id: 5, name: "React Basics", level: "Intermediate", active: false}
];

const gridContainer = document.querySelector('.grid-container');
for (const course of courses) {
    const item = document.createElement("article");
    item.dataset.courseId = course.id;
    console.log(item.dataset.courseId);
    const heading = document.createElement("h2");
    const level = document.createElement("p");
    const status = document.createElement("p");

    heading.textContent = course.name;
    level.textContent = `Level: ${course.level}`;
    status.textContent = course.active ? "Active" : "Inactive";
    
    item.append(heading, level, status);
    gridContainer.append(item);

    if (!course.active) {
        item.classList.add("inactive");
    } else {
        item.classList.add("active");
    }
}