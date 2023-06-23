const createCard = (array) => {
  function returnHtmlForCard(array) {
    const arrayHtml = array.map(
      (element) => `
        <div class="card">
          <i>
            <tt>${element.number}</tt>
          </i>
          <div class="header">${element.header}</div>
          <img src=${element.mainimg} />
          <div class="text">ADRESS: ${element.adress}<br>
          TimeOfWorke: ${element.timeOfWorke}</div>
          <button class="more-info-btn-open" data-number="${element.id}" data-open="true">
            MORE INFO
          </button>
        </div>
  `
    );
    const returnHtml = arrayHtml.join("");
    return returnHtml;
  }
  const card = document.querySelector(".content");
  card.insertAdjacentHTML("afterbegin", returnHtmlForCard(array));
  const moreInfoBtnOpen = document.querySelectorAll(".more-info-btn-open");
  for (i = 0; i < moreInfoBtnOpen.length; i++) {
    moreInfoBtnOpen[i].addEventListener("click", (event) => {
      numberButton = event.target.dataset.number;
      arrayForCardFilter = arrayForCard.filter(
        (element) => element.id == numberButton
      );
      console.log(arrayForCardFilter);
      if (event.target.dataset.open === "true") {
        myModal.open();
      }
    });
  }
};

createCard(arrayForCard);
