// Function to show hidden content by cloning the template
function showContent() {
    // Find the template element
    let template = document.getElementById("ME!Template");
    if (template) {
        // Clone the template content
        let clone = template.content.cloneNode(true);
        // Append the cloned content to a container
        document.getElementById('contentContainer').appendChild(clone);
    } else {
        console.error("Template not found!");
    }
}

// Initialize event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('showContentButton');
    if (button) {
        button.addEventListener('click', showContent);
    } else {
        console.error("Button not found!");
    }
});