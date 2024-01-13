function createAboutCard(title, details) {
    var aboutCardContainer = document.getElementById("about-card-container");
    aboutCardContainer.className = "about-card-container";

    // Create elements for the new card
    var aboutCard = document.createElement("div");
    aboutCard.className = "about-card";

    var aboutTitle = document.createElement("div");
    aboutTitle.className = "about-card-title";
    aboutTitle.textContent = title;

    aboutCard.appendChild(aboutTitle);

    if (details) {
        details.forEach(detail => {
            var subTitle = document.createElement("div");
            subTitle.className = "about-card-sub-title";
            subTitle.textContent = detail.subTitle;

            aboutCard.appendChild(subTitle);

            detail.contents.forEach(content => {
                var contentDiv = document.createElement("div");
                contentDiv.className = "about-card-content";
                contentDiv.textContent = content;

                aboutCard.appendChild(contentDiv);
            });
        });
    }

    // Append the about card to the about card container
    aboutCardContainer.appendChild(aboutCard);
}