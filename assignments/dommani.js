    function changeText() {
      // Accessing elements by ID
      const heading = document.getElementById("mainHeading");
      const paragraph = document.getElementById("content");

      // Modifying text content
      heading.textContent = "New Heading";
      paragraph.textContent = "The text has been changed!";

      // Adding a CSS class
      heading.classList.add("highlight");
    }
