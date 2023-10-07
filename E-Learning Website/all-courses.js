document.addEventListener("DOMContentLoaded", function () {
  const courses = [
    {
      icon: "fa-code",
      title: "Programming",
      description:
        "Learn coding from scratch or advance your programming skills with our programming courses.",
    },
    {
      icon: "fa-language",
      title: "Languages",
      description:
        "Explore the world of languages with our language courses, including English, Spanish, and more.",
    },
    {
      icon: "fa-flask",
      title: "Science",
      description:
        "Dive into the fascinating world of science through our engaging science courses.",
    },
    {
      icon: "fa-paint-roller",
      title: "Art & Creativity",
      description:
        "Unleash your creativity with our art and design courses, covering painting, drawing, and more.",
    },
    {
      icon: "fa-music",
      title: "Music",
      description:
        "Discover the world of music with our music courses, including instrument lessons and music theory.",
    },
    {
      icon: "fa-globe",
      title: "Geography",
      description:
        "Explore the world's geography and cultures with our geography courses.",
    },
    {
      icon: "fa-history",
      title: "History",
      description:
        "Travel back in time and learn about history through our history courses.",
    },
    {
      icon: "fa-space-shuttle",
      title: "Astronomy",
      description:
        "Explore the mysteries of the universe with our astronomy courses.",
    },
    {
      icon: "fa-balance-scale",
      title: "Philosophy",
      description:
        "Contemplate life's big questions with our philosophy courses.",
    },
  ];

  function createCourseCard(course) {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", course.icon, "fa-xl");

    const title = document.createElement("h3");
    title.textContent = course.title;

    const description = document.createElement("p");
    description.textContent = course.description;

    courseCard.appendChild(icon);
    courseCard.appendChild(title);
    courseCard.appendChild(description);

    return courseCard;
  }

  function displayCourses() {
    const courseContainer = document.getElementById("courseContainer");

    for (const course of courses) {
      const courseCard = createCourseCard(course);
      courseContainer.appendChild(courseCard);
    }
  }
  displayCourses();
});
