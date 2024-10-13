function showContent() {
    let template = document.getElementById("ME!Template");
    if (template) {
        // Clone the template content
        let clone = template.content.cloneNode(true);
        // Append the cloned content to a container
        document.getElementById('contentContainer').appendChild(clone);
        this.style.display = 'none';
    } else {
        console.error("Template not found!");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('showContentButton');
    if (button) {
        button.addEventListener('click', showContent);
    } else {
        console.error("Button not found!");
    }
});

var tablinks = document.getElementsByClassName("tabLinks");
var tabcontents = document.getElementsByClassName("tabContents");

for (let tablink of tablinks) {
    tablink.addEventListener('click', function(event) {
        opentab(event, this.dataset.tab);
    });
}

function opentab(event, tabName) {
    
    for (let tablink of tablinks) {
        tablink.classList.remove("activeLink");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("activeTab");
    }

    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabName).classList.add("activeTab");
}

// Initialize the first tab as active on page load
document.addEventListener('DOMContentLoaded', function() {
    opentab({ currentTarget: tablinks[0] }, 'education'); // Simulate a click on the first tab
});

document.querySelectorAll('.icon').forEach(icon => {
    const color = icon.getAttribute('data-color');
    icon.style.color = color; // Set the color using JavaScript
});

// JavaScript to change the color based on data attribute
document.querySelectorAll('.icons').forEach(icon => {
    const color = icon.getAttribute('data-color');
    icon.style.fill = color; // Set the fill color based on the data-color attribute
});