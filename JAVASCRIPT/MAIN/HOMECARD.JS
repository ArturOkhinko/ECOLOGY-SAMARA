function createCardForHome() {
  const content = document.querySelector(".content");
  console.log(arrayForCardMain);
  function createHtmlForCard(array) {
    const arrayHtml = array.map(
      (element) =>
        `<div class="main-card">
        <div class="head">
          <div class="number-card">
            <tt>${element.number}</tt>
          </div>
          <p class="header-in-content">${element.header}</p>
        </div>
        <div class="card-img">
          <img src="${element.mainimg}" />
        </div>
        <div class="content">
          <div>
            <div class="card-address">${element.address}</div>
            <div class="card-time-of-worke">${element.timeOfWorke}</div>
          </div>
          <div class="card-a">
          <a href="${element.moreInfo}">MOREINFO</a>
          </div>
        </div>
      </div>`
    );
    console.log(arrayHtml);
    const stringHtml = arrayHtml.join("");
    return stringHtml;
  }
  content.insertAdjacentHTML("afterbegin", createHtmlForCard(arrayForCardMain));
}

createCardForHome();
