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
      const contactObj = arrayForCardFilter[0].contact;
      console.log(contactObj);
      function addContact(contact) {
        const footer = document.querySelector(".footer-modal");
        const HTMLContact = (contact) => {
          if (contact === contactObj.telephone || contact === contactObj.mail) {
            return `<div class="contact">${contact}</div>`;
          }
          if (contact === contactObj.telegram) {
            return `<a href="${contact}" class="contact">Telegram</a>`;
          }
          if (contact === contactObj.site) {
            return `<a href="${contact}" class="contact">Site</a>`;
          }
        };
        footer.insertAdjacentHTML("afterbegin", HTMLContact(contact));
      }
      contactObj.telephone ? addContact(contactObj.telephone) : null;
      contactObj.mail ? addContact(contactObj.mail) : null;
      contactObj.telegram ? addContact(contactObj.telegram) : null;
      contactObj.site ? addContact(contactObj.site) : null;
      const address = arrayForCardFilter[0].address;
      footer.insertAdjacentHTML(
        "afterbegin",
        `<div class="footer-info"><a href="${arrayForCardFilter[0].googleAddress}">${address}</a></div>`
      );
      const timeOfWorke = arrayForCardFilter[0].timeOfWorke;
      footer.insertAdjacentHTML(
        "afterbegin",
        `<div class="footer-info">${timeOfWorke}</div>`
      );
      function workeButton() {
        const buttonModal = document.querySelector(".modal-button");
        let indexImgArray = 1;
        buttonModal.addEventListener("click", (event) => {
          const img = document.querySelector(".img-modal");
          const imgInCardObj = arrayForCardFilter[0].img;
          const imgArray = [];
          for (key in imgInCardObj) {
            imgArray.push(imgInCardObj[key]);
          }
          while (indexImgArray < imgArray.length) {
            img.src = imgArray[indexImgArray];
            indexImgArray++;
            if (indexImgArray === imgArray.length) {
              indexImgArray = 0;
            }
            break;
          }
        });
      }
      workeButton();
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
      <img class="img-modal"src=${element.img.mainimg} />
      </div>
      <div class="modal-button"></div>
        <hr noshade />
        <p>${element.text}</p>
      </div>
      <div class="footer-modal">
    </div>`
  );
  mainModal.insertAdjacentHTML("afterbegin", modalWindowHtml);
  document.body.appendChild(mainModal);
  function createModuleWindowImg() {
    const divButton = document.querySelector(".modal-button");
    const button = document.createElement("button");
    button.classList.add("imgButton");
    divButton.append(button);
    button.append(">");
  }

  if (window.innerWidth > 700) {
    const content = document.querySelector(".img-content-modal");
    const photo = document.createElement("img");
    photo.src = `${arrayForCardFilter[0].img.secondimg}`;
    content.append(photo);
  }
  if (window.innerWidth > 900) {
    const content = document.querySelector(".img-content-modal");
    const photo = document.createElement("img");
    photo.src = `${arrayForCardFilter[0].img.threimg}`;
    content.append(photo);
  }
  if (window.innerWidth <= 900) {
    createModuleWindowImg();
  }
}
