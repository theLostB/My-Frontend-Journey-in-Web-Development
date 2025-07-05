function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    if (views >= 1 && views < 999) {
        views = `${views}`
    }
    else if (views >= 1000 && views < 9999) {
        views = `${views}`
        views = views[0] + "." + views[1] + "K"
    }
    else if (views >= 10000 && views < 99999) {
        views = `${views}`
        views = views[0] + views[1] + "K"
    }
    else if (views >= 100000 && views < 999999) {
        views = `${views}`
        views = views[0] + "." + views[1] + "M"
    }
    else {
        views = `${views}`
        views = views[0] + views[1] + "M"
    }
    
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `<img src="${thumbnail}" alt="" class="cardimg"><p class="title"><b>${title}<br></b><span class="cName">${cName}</span><span class="views"> • ${views}</span><span class="monthsOld"> • ${monthsOld}</span></p>`;
    document.querySelector(".container").append(card);
    
}


createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 10790, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 386589, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 7800, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 479, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 536767, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 7568607, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 10790, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 9866798, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 7800, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 479, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 536767, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 7568607, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 10790, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 9866798, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 7800, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 479, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 536767, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 7568607, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 10790, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 9866798, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 7800, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 479, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 536767, "2 months ago", "Duration", "thumbnail.png")

createCard("Installing VS Code & How Websites Work | Sigma Web Dev #2", "Codewithharry", 7568607, "2 months ago", "Duration", "thumbnail.png")