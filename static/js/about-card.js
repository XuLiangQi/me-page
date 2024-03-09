function createAboutCard(title, details) {
  var aboutCardContainer = document.getElementById("about-card-container");
  aboutCardContainer.className = "about-card-container";

  var aboutCard = document.createElement("div");
  aboutCard.className = "about-card";

  var aboutTitle = document.createElement("h1");
  aboutTitle.className = "about-card-title";
  aboutTitle.textContent = title;

  aboutCard.appendChild(aboutTitle);

  if (details) {
    details.forEach((detail) => {
      var subTitle = document.createElement("h2");
      subTitle.className = "about-card-sub-title";
      subTitle.textContent = detail.subTitle;

      aboutCard.appendChild(subTitle);

      detail.contents.forEach((content) => {
        var subContent = document.createElement("p");
        subContent.className = "about-card-content";
        subContent.textContent = content;

        aboutCard.appendChild(subContent);
      });
    });
  }

  // Append the about card to the about card container
  aboutCardContainer.appendChild(aboutCard);
}
