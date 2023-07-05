const plaginObj = {};

const arrayForCard = [
  {
    number: "01",
    id: 1,
    header: "Корсо",
    text: "Эта компания принимает вторсырье и выплачивает за него деньги. Она сотрудничает с крупными компаниями, а так же офисами. ",
    address: "ADDRESS: ул. Кабельная, 34a, Самара, Самарская обл",
    timeOfWorke: "TIMEOFWORKE: 7:00 – 22:00 ПН-ВС",
    contact: {
      telephone: "ТЕЛЕФОН: <br> 8 (846) 219 29 92 ",
      telegram: "https://t.me/corso_eco",
    },
    img: {
      mainimg: "/IMG/CORSO/MAIN.jpeg",
      secondimg: "/IMG/CORSO/SECOND.jpeg",
      threimg: "/IMG/CORSO/PUNCT.jpeg",
      logoimg: "/IMG/CORSO/LOGO.jpeg",
    },
    googleAddress:
      "https://www.google.com/maps/search/прием+вторсытья+Самара/@53.0965959,49.4977208,10z?entry=ttu",
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
      telegram: "https://t.me/ekovoz_163",
      mail: "ПОЧТА: <br> ekovozr@yandex.ru",
      site: "http://ekovoz.ru/about/",
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
    header: "ВторГруп",
    text: "Эта компания специализируется на приеме лома. При необходимости они даже сами произведут демонтаж. Хоть лом и является их основной специализацией, они занимаются приемом и другого сырья.",
    address: "ADDRESS: Самара улица Авиационная 30 ",
    timeOfWorke: "TIMEOFWORKE: круглосуточно ПН-ВС",
    contact: {
      telephone: "ТЕЛЕФОН: 8 (902) 154 14 13",
      telegram: "",
      mail: "",
      site: "https://priemloma63.ru/",
    },
    img: {
      mainimg: "/IMG/VTORGROUP/MAIN.jpg",
      secondimg: "/IMG/VTORGROUP/SECOND.jpg",
      threimg: "/IMG/VTORGROUP/PUNCT.jpg",
    },
    googleAddress:
      "https://www.google.com/maps/place/Втор-Групп/@53.0965959,49.4977208,10z/data=!4m10!1m2!2m1!1z0L_RgNC40LXQvCDQstGC0L7RgNGB0YvRgtGM0Y8g0KHQsNC80LDRgNCw!3m6!1s0x41661dd7263c682b:0xff919f92f7d495ba!8m2!3d53.1825087!4d50.1520821!15sCirQv9GA0LjQtdC8INCy0YLQvtGA0YHRi9GC0YzRjyDQodCw0LzQsNGA0LCSARJzY3JhcF9tZXRhbF9kZWFsZXLgAQA!16s%2Fg%2F11h2n4gx9w?entry=ttu",
  },
  {
    number: "04",
    id: 4,
    header: "ВторМаркет",
    text: "Компания занимается сбором различных материалов и платит за это деньги. В начале 2022 года у них открылось уже 8 точек.  Более подробную информацию о них ищите на их сайте.",
    address: "ADDRESS: Заводское ш., 5Б корп 7, Самара, Самарская обл., ",
    timeOfWorke: "TIMEOFWORKE: Круглосуточно ПН-ВС",
    contact: {
      telephone: "ТЕЛЕФОН: <br> 8 (927) 655 58 62",
      telegram: "",
      mail: "",
      site: "",
    },
    img: {
      mainimg: "/IMG/VTORMARKET/MAIN.jpg",
      secondimg: "/IMG/VTORMARKET/SECOND.jpg",
      threimg: "/IMG/VTORMARKET/PUNCT.jpg",
      logoimg: "/IMG/VTORMARKET/LOGO.jpeg",
    },
    googleAddress:
      "https://www.google.com/maps/place/Втормаркет/@53.2044705,50.0879567,12z/data=!4m10!1m2!2m1!1z0JLQotCe0KDQoNCc0JDQoNCa0JXQoiDQodCc0JDQkA!3m6!1s0x41661b8c1b54705f:0xd127dd770a20601e!8m2!3d53.1797838!4d50.2088033!15sCiHQktCi0J7QoNCc0JDQoNCa0JXQoiDQodCQ0JzQkNCg0JBaIyIh0LLRgtC-0YDQvNCw0YDQutC10YIg0YHQsNC80LDRgNCwkgEYd2FzdGVfbWFuYWdlbWVudF9zZXJ2aWNl4AEA!16s%2Fg%2F1tdpkmqk?entry=ttu",
  },
];

let numberButton = "";
let arrayForCardFilter = [];
let mainModal = "";
