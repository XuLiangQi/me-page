function createProjectCard(imageUrl, title, description, skillSet, githubLink) {
    var projectContainer = document.getElementById("project-container");
    projectContainer.className = "project-container";

    // Create elements for the new card
    var projectCard = document.createElement("div");
    projectCard.className = "project-card";

    var projectImage = document.createElement("img");
    projectImage.className = "project-img";
    projectImage.src = imageUrl;
    projectImage.alt = "Project Image";

    var projectTitle = document.createElement("h3");
    projectTitle.className = "project-title";
    projectTitle.textContent = title;

    var projectParagraph = document.createElement("p");
    projectParagraph.className = "project-paragraph";
    projectParagraph.textContent = description;

    var skillSetContainer = document.createElement("div");
    skillSetContainer.className = "project-skill-set-container";

    // Loop through the skill set and create individual skill elements
    for (var i = 0; i < skillSet.length; i++) {
        var skillElement = document.createElement("p");
        skillElement.className = "project-skill-set";
        skillElement.textContent = skillSet[i];
        skillSetContainer.appendChild(skillElement);
    }

    // Append all elements to the project card
    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectParagraph);
    projectCard.appendChild(skillSetContainer);

    // Create a link element for the GitHub repository
    var githubLinkElement = document.createElement("a");
    githubLinkElement.className = "project-link"
    githubLinkElement.href = githubLink;
    githubLinkElement.target = "_blank";
    
    // Append the project card to the GitHub link element
    githubLinkElement.appendChild(projectCard);

    // Append the GitHub link element to the project container
    projectContainer.appendChild(githubLinkElement);
}
