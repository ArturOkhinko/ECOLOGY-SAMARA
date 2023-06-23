plaginObj.modal = function (options) {
  function createModal(options) {
    mainModal = document.createElement("div");
    mainModal.classList.add("main-modal");
    mainModal.setAttribute("data-close", "true");
    return mainModal;
  }

  const modalWindow = createModal(options);
  const modalObj = {
    open() {
      modalWindow.classList.add("open");
      modalWindowForObj();
    },
    close() {
      modalWindow.classList.remove("open");
      const deleteHtml = document.querySelector(".modal-window");
      const parent = deleteHtml.parentNode;
      parent.removeChild(deleteHtml);
    },
    destroy() {},
  };
  modalWindow.addEventListener("click", (event) => {
    console.log(event.target.dataset);
    if (event.target.dataset.close === "true") {
      modalObj.close();
    }
  });
  return modalObj;
};
function modalWindowForObj() {
  const modalWindowHtml = arrayForCardFilter.map(
    (element) => `
      <div class="modal-window">
      <div class="header">
      <tt>${element.id}</tt>
        ${element.header}
        <button class="model-close" data-close="true">
          &times;
        </button>
      </div>
      <div class="content-modal">
      <div class="img-content-modal">
      <img src=${element.mainimg} />
      </div>
        <hr noshade />
        <p>${element.text}</p>
      </div>
      <div class="footer"><a href="#">Ardess: ${element.adress}</a><br> 
      time of work: ${element.timeOfWorke}</div>
    </div>`
  );
  mainModal.insertAdjacentHTML("afterbegin", modalWindowHtml);
  document.body.appendChild(mainModal);
  if (window.innerWidth > 700) {
    const content = document.querySelector(".img-content-modal");
    const photo = document.createElement("img");
    photo.src = `${arrayForCardFilter[0].twoimg}`;
    content.append(photo);
  }
  if (window.innerWidth > 900) {
    const content = document.querySelector(".img-content-modal");
    const photo = document.createElement("img");
    photo.src = `${arrayForCardFilter[0].threPhoto}`;
    content.append(photo);
  }
}
