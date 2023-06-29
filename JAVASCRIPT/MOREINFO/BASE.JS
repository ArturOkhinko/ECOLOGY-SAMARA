const plaginObj = {};

const arrayForCard = [
  {
    number: "01",
    id: 1,
    header: "КОРСО",
    text: "TEXT",
    telephone: "+7(927)650-00-65, 7(927)004-54-54",
    address: "ADDRESS: Ракитовское шоссе, 95а",
    contact: {
      timeOfWorke: "TIMEOFWORKE: 08:00–18:00 ПН-СБ",
    },
    img: {
      mainimg: "/IMG/CORSO/MAIN.jpeg",
      secondimg: "/IMG/CORSO/SECOND.jpeg",
      threimg: "/IMG/CORSO/PUNCT.jpeg",
      logoimg: "/IMG/CORSO/LOGO.jpeg",
    },
    googleAddress:
      "https://www.google.com/maps/place/%D0%A1%D0%9F-%D0%AD%D0%BA%D0%BE%D0%93%D1%80%D1%83%D0%BF%D0%BF/@53.2641816,50.2845274,17z/data=!3m1!4b1!4m6!3m5!1s0x4166198071e3f6f9:0xbf3f7b1b13cfd1b0!8m2!3d53.2641816!4d50.2871077!16s%2Fg%2F11pdvwd64h?entry=ttu",
  },
  {
    number: "02",
    id: 2,
    header: "ЭкоВоз",
    text: "Компания активно повышает уровень экологии нашей страны. Она не только принимает мусор в переработку, но и транспортирует его, перерабатывает и занимается его захоронением. Подробней об их проектах написано на их сайте http://ekovoz.ru/about/",
    address: "ADDRESS: Чернореченская ул., 6",
    timeOfWorke: "TIMEOFWORKE: 08:00–18:00 ПН-СБ",
    contact: {
      telephone: "ТЕЛЕФОН: <br> 8 (848)220-42-42",
      telegram: "TELEGRAM: <br> https://t.me/ekovoz_163",
      mail: "ПОЧТА: <br> ekovozr@yandex.ru",
      site: "САЙТ: <br> http://ekovoz.ru/about/",
    },
    img: {
      mainimg: "/IMG/ECOVOZ/MAIN.jpg",
      secondimg: "/IMG/ECOVOZ/LOGO.jpeg",
      threimg: "/IMG/ECOVOZ/PUNCT.jpg",
    },
    googleAddress:
      "https://www.google.com/maps/place/%D0%AD%D0%BA%D0%BE%D0%B2%D0%BE%D0%B7/@53.193851,49.954653,11z/data=!4m10!1m2!2m1!1z0KbQtdC90YLRgCDQv9C-INC_0LXRgNC10YDQsNCx0L7RgtC60LUg0L7RgtGF0L7QtNC-0LI!3m6!1s0x41661e656ef158e5:0x96df718f72b09fd7!8m2!3d53.193851!4d50.128775!15sCjXQptC10L3RgtGAINC_0L4g0L_QtdGA0LXRgNCw0LHQvtGC0LrQtSDQvtGC0YXQvtC00L7QspIBEHJlY3ljbGluZ19jZW50ZXLgAQA!16s%2Fg%2F11hzwbws21?entry=ttu",
  },
  {
    number: "03",
    id: 3,
    header: "ВТОРГРУП",
    text: "Компания активно повышает уровень экологии нашей страны. Она не только принимает мусор в переработку, но и транспортирует его, перерабатывает и занимается его захоронением. Подробней об их проектах написано на их сайте http://ekovoz.ru/about/",
    address: "ADDRESS: Чернореченская ул., 6",
    timeOfWorke: "TIMEOFWORKE: 08:00–18:00 ПН-СБ",
    contact: {
      telephone: "ТЕЛЕФОН: 8 (848)220-42-42",
      telegram: "TELEGRAM: https://t.me/ekovoz_163",
      mail: "ПОЧТА: ekovozr@yandex.ru",
      site: "САЙТ: http://ekovoz.ru/about/",
    },
    img: {
      mainimg: "/IMG/VTORGROUP/MAIN.jpg",
      secondimg: "/IMG/VTORGROUP/SECOND.jpg",
      threimg: "/IMG/VTORGROUP/PUNCT.jpg",
    },
    googleAddress:
      "https://www.google.com/maps/place/%D0%AD%D0%BA%D0%BE%D0%B2%D0%BE%D0%B7/@53.193851,49.954653,11z/data=!4m10!1m2!2m1!1z0KbQtdC90YLRgCDQv9C-INC_0LXRgNC10YDQsNCx0L7RgtC60LUg0L7RgtGF0L7QtNC-0LI!3m6!1s0x41661e656ef158e5:0x96df718f72b09fd7!8m2!3d53.193851!4d50.128775!15sCjXQptC10L3RgtGAINC_0L4g0L_QtdGA0LXRgNCw0LHQvtGC0LrQtSDQvtGC0YXQvtC00L7QspIBEHJlY3ljbGluZ19jZW50ZXLgAQA!16s%2Fg%2F11hzwbws21?entry=ttu",
  },
  {
    number: "04",
    id: 4,
    header: "ВТОРМАРКЕТ",
    text: "Компания активно повышает уровень экологии нашей страны. Она не только принимает мусор в переработку, но и транспортирует его, перерабатывает и занимается его захоронением. Подробней об их проектах написано на их сайте http://ekovoz.ru/about/",
    address: "ADDRESS: Чернореченская ул., 6",
    timeOfWorke: "TIMEOFWORKE: 08:00–18:00 ПН-СБ",
    contact: {
      telephone: "ТЕЛЕФОН: 8 (848)220-42-42",
      telegram: "TELEGRAM: https://t.me/ekovoz_163",
      mail: "ПОЧТА: ekovozr@yandex.ru",
      site: "САЙТ: http://ekovoz.ru/about/",
    },
    img: {
      mainimg: "/IMG/VTORMARKET/MAIN.jpg",
      secondimg: "/IMG/VTORMARKET/SECOND.jpg",
      threimg: "/IMG/VTORMARKET/PUNCT.jpg",
      logoimg: "/IMG/VTORMARKET/LOGO.jpeg",
    },
    googleAddress:
      "https://www.google.com/maps/place/%D0%AD%D0%BA%D0%BE%D0%B2%D0%BE%D0%B7/@53.193851,49.954653,11z/data=!4m10!1m2!2m1!1z0KbQtdC90YLRgCDQv9C-INC_0LXRgNC10YDQsNCx0L7RgtC60LUg0L7RgtGF0L7QtNC-0LI!3m6!1s0x41661e656ef158e5:0x96df718f72b09fd7!8m2!3d53.193851!4d50.128775!15sCjXQptC10L3RgtGAINC_0L4g0L_QtdGA0LXRgNCw0LHQvtGC0LrQtSDQvtGC0YXQvtC00L7QspIBEHJlY3ljbGluZ19jZW50ZXLgAQA!16s%2Fg%2F11hzwbws21?entry=ttu",
  },
];

let numberButton = "";
let arrayForCardFilter = [];
let mainModal = "";
