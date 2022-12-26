'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      Example:
      await queryInterface.bulkInsert('Candidates', 
      [
        {
          id: 1,
          name: "Marie-ève",
          surname: "Rehor",
          email: "grehor0@wikimedia.org",
          password: "J4mGX8ptuI4",
          createdAt: "2022-10-23 15:41:52",
          updatedAt: "2022-07-02 20:52:17"
        },
        {
          id: 2,
          name: "Maëly",
          surname: "Shimoni",
          email: "kshimoni1@com.com",
          password: "h3vbX9bf",
          createdAt: "2022-10-05 00:17:29",
          updatedAt: "2022-07-23 17:42:25"
        },
        {
          id: 3,
          name: "Géraldine",
          surname: "Heephy",
          email: "rheephy2@google.it",
          password: "IYjguEGT4UXQ",
          createdAt: "2022-10-15 13:03:40",
          updatedAt: "2022-01-06 11:46:33"
        },
        {
          id: 4,
          name: "Bérengère",
          surname: "Pilger",
          email: "lpilger3@drupal.org",
          password: "wMgx15GIk",
          createdAt: "2022-02-16 17:52:53",
          updatedAt: "2022-07-30 20:26:27"
        },
        {
          id: 5,
          name: "Maëline",
          surname: "Midlane",
          email: "wmidlane4@ow.ly",
          password: "mDxW7p5c76",
          createdAt: "2021-12-28 09:58:31",
          updatedAt: "2022-03-13 18:59:34"
        },
        {
          id: 6,
          name: "Noémie",
          surname: "Mosedill",
          email: "cmosedill5@google.it",
          password: "nBpsztvLgTEO",
          createdAt: "2022-10-28 02:04:58",
          updatedAt: "2022-05-06 02:08:53"
        },
        {
          id: 7,
          name: "Maëlann",
          surname: "Cogan",
          email: "pcogan6@latimes.com",
          password: "Pq1yaHuq3MGC",
          createdAt: "2022-09-16 16:47:52",
          updatedAt: "2022-12-16 20:37:57"
        },
        {
          id: 8,
          name: "Bérangère",
          surname: "Siggee",
          email: "tsiggee7@illinois.edu",
          password: "cSmkLbUBx7kY",
          createdAt: "2021-12-31 07:27:23",
          updatedAt: "2022-12-11 06:20:44"
        },
        {
          id: 9,
          name: "Desirée",
          surname: "Richardet",
          email: "drichardet8@adobe.com",
          password: "27K5A5",
          createdAt: "2022-12-15 03:15:22",
          updatedAt: "2022-05-18 02:06:19"
        },
        {
          id: 10,
          name: "Loïc",
          surname: "Surfleet",
          email: "rsurfleet9@jimdo.com",
          password: "VTu3HrdDrO3",
          createdAt: "2022-04-04 07:43:30",
          updatedAt: "2022-03-03 20:11:08"
        },
        {
          id: 11,
          name: "Illustrée",
          surname: "Harmond",
          email: "kharmonda@gov.uk",
          password: "GUU5nNx",
          createdAt: "2022-02-12 18:19:32",
          updatedAt: "2022-05-21 22:11:17"
        },
        {
          id: 12,
          name: "Inès",
          surname: "Sleicht",
          email: "csleichtb@linkedin.com",
          password: "KLHNKz4Kwl",
          createdAt: "2022-01-04 14:10:44",
          updatedAt: "2022-12-18 19:39:12"
        },
        {
          id: 13,
          name: "Léandre",
          surname: "Harroway",
          email: "wharrowayc@joomla.org",
          password: "9RP8xBbjSOa",
          createdAt: "2022-04-23 04:09:02",
          updatedAt: "2022-05-09 10:15:29"
        },
        {
          id: 14,
          name: "Pénélope",
          surname: "Krysiak",
          email: "dkrysiakd@techcrunch.com",
          password: "7SFxq3M",
          createdAt: "2022-01-08 07:55:02",
          updatedAt: "2022-09-17 11:37:28"
        },
        {
          id: 15,
          name: "Vénus",
          surname: "Ivers",
          email: "piverse@ustream.tv",
          password: "HEbLS729TD",
          createdAt: "2022-05-03 06:49:42",
          updatedAt: "2022-11-22 17:52:31"
        },
        {
          id: 16,
          name: "Maï",
          surname: "Thompsett",
          email: "mthompsettf@ifeng.com",
          password: "HAuDIZ5BtNv",
          createdAt: "2022-05-09 23:24:13",
          updatedAt: "2022-08-25 05:38:19"
        },
        {
          id: 17,
          name: "Angèle",
          surname: "O'Murtagh",
          email: "homurtaghg@mlb.com",
          password: "tTtqHv",
          createdAt: "2022-01-05 13:00:03",
          updatedAt: "2022-06-17 21:01:57"
        },
        {
          id: 18,
          name: "Mélanie",
          surname: "Fishburn",
          email: "pfishburnh@techcrunch.com",
          password: "P9oYWcl",
          createdAt: "2022-07-01 16:11:41",
          updatedAt: "2022-06-27 01:56:01"
        },
        {
          id: 19,
          name: "Béatrice",
          surname: "Wandrach",
          email: "mwandrachi@usgs.gov",
          password: "1aAdEAjAWiEb",
          createdAt: "2022-06-18 14:35:12",
          updatedAt: "2022-05-10 07:56:32"
        },
        {
          id: 20,
          name: "Dorothée",
          surname: "McCaughran",
          email: "smccaughranj@ox.ac.uk",
          password: "6UX57Ie11",
          createdAt: "2022-11-11 10:59:56",
          updatedAt: "2022-06-12 20:31:13"
        },
        {
          id: 21,
          name: "Véronique",
          surname: "Ells",
          email: "bellsk@samsung.com",
          password: "gw5WTui",
          createdAt: "2022-11-18 20:40:28",
          updatedAt: "2022-04-11 03:29:25"
        },
        {
          id: 22,
          name: "Léone",
          surname: "Juhruke",
          email: "tjuhrukel@google.it",
          password: "ss1lq0U5fFhD",
          createdAt: "2022-08-15 18:45:04",
          updatedAt: "2022-10-06 10:23:54"
        },
        {
          id: 23,
          name: "Pò",
          surname: "McCosh",
          email: "mmccoshm@unc.edu",
          password: "BzYhOxQ",
          createdAt: "2022-11-17 16:44:50",
          updatedAt: "2022-06-04 23:16:03"
        },
        {
          id: 24,
          name: "Märta",
          surname: "Cowins",
          email: "lcowinsn@lycos.com",
          password: "dApkqobVDX",
          createdAt: "2022-01-28 02:01:36",
          updatedAt: "2022-09-24 02:01:29"
        },
        {
          id: 25,
          name: "Andréa",
          surname: "Spurret",
          email: "lspurreto@yellowbook.com",
          password: "178moW8Cat",
          createdAt: "2022-10-29 00:48:24",
          updatedAt: "2022-05-26 21:48:23"
        },
        {
          id: 26,
          name: "Annotée",
          surname: "Penketh",
          email: "spenkethp@webmd.com",
          password: "1OxBD9TsqVU",
          createdAt: "2022-09-07 06:52:32",
          updatedAt: "2022-02-05 10:40:47"
        },
        {
          id: 27,
          name: "Illustrée",
          surname: "Taffee",
          email: "jtaffeeq@istockphoto.com",
          password: "DDCM8C",
          createdAt: "2022-01-17 20:17:12",
          updatedAt: "2022-03-28 06:36:19"
        },
        {
          id: 28,
          name: "Hélèna",
          surname: "Reck",
          email: "areckr@china.com.cn",
          password: "7kaaq1c",
          createdAt: "2022-09-13 19:28:18",
          updatedAt: "2022-12-23 16:49:41"
        },
        {
          id: 29,
          name: "Kallisté",
          surname: "Hansed",
          email: "nhanseds@icio.us",
          password: "IwLdxwWqNv",
          createdAt: "2022-04-06 18:55:34",
          updatedAt: "2022-03-02 18:25:26"
        },
        {
          id: 30,
          name: "Bérengère",
          surname: "Frisel",
          email: "jfriselt@noaa.gov",
          password: "aSKMTZ",
          createdAt: "2021-12-29 16:09:33",
          updatedAt: "2022-07-28 02:13:05"
        },
        {
          id: 31,
          name: "Vérane",
          surname: "Isenor",
          email: "cisenoru@ibm.com",
          password: "8DCgTCT",
          createdAt: "2022-08-11 18:17:32",
          updatedAt: "2022-12-02 03:36:18"
        },
        {
          id: 32,
          name: "Gérald",
          surname: "Jobbings",
          email: "bjobbingsv@clickbank.net",
          password: "xIYjkFdT7uQ7",
          createdAt: "2022-03-28 00:13:21",
          updatedAt: "2022-03-02 05:21:51"
        },
        {
          id: 33,
          name: "Daphnée",
          surname: "Hansill",
          email: "shansillw@networksolutions.com",
          password: "OTfhd6",
          createdAt: "2022-09-13 10:30:08",
          updatedAt: "2022-02-05 06:43:59"
        },
        {
          id: 34,
          name: "Lauréna",
          surname: "Lightbody",
          email: "mlightbodyx@youku.com",
          password: "KLL4lPIFZkXk",
          createdAt: "2022-04-25 07:18:33",
          updatedAt: "2022-07-12 04:15:46"
        },
        {
          id: 35,
          name: "Göran",
          surname: "Boules",
          email: "fboulesy@redcross.org",
          password: "TRM9pr",
          createdAt: "2021-12-31 20:48:14",
          updatedAt: "2022-08-07 13:40:58"
        },
        {
          id: 36,
          name: "Laurélie",
          surname: "Wasson",
          email: "mwassonz@squarespace.com",
          password: "dmBqVuggP",
          createdAt: "2022-02-02 01:05:57",
          updatedAt: "2022-04-12 01:36:06"
        },
        {
          id: 37,
          name: "Françoise",
          surname: "Comiskey",
          email: "rcomiskey10@kickstarter.com",
          password: "5E84l17",
          createdAt: "2022-03-21 10:42:20",
          updatedAt: "2022-10-24 12:45:47"
        },
        {
          id: 38,
          name: "Mélina",
          surname: "Cardenosa",
          email: "jcardenosa11@dailymotion.com",
          password: "vRLRqwc",
          createdAt: "2022-02-20 23:43:17",
          updatedAt: "2021-12-29 19:27:04"
        },
        {
          id: 39,
          name: "Valérie",
          surname: "Stolz",
          email: "fstolz12@over-blog.com",
          password: "kK9BY0yByXfy",
          createdAt: "2022-06-14 17:01:29",
          updatedAt: "2022-01-10 18:26:57"
        },
        {
          id: 40,
          name: "Dà",
          surname: "Hinchcliffe",
          email: "rhinchcliffe13@jimdo.com",
          password: "DUwQlF",
          createdAt: "2022-01-27 18:19:46",
          updatedAt: "2021-12-31 09:18:53"
        },
        {
          id: 41,
          name: "Félicie",
          surname: "Sevitt",
          email: "jsevitt14@wordpress.com",
          password: "BzSoN8d",
          createdAt: "2022-07-14 21:49:38",
          updatedAt: "2022-06-12 14:33:16"
        },
        {
          id: 42,
          name: "Amélie",
          surname: "Summersby",
          email: "asummersby15@google.it",
          password: "D8EBtZUZ7QNZ",
          createdAt: "2022-05-30 22:22:57",
          updatedAt: "2022-09-02 17:47:47"
        },
        {
          id: 43,
          name: "Séverine",
          surname: "Whitwham",
          email: "awhitwham16@pcworld.com",
          password: "AUFamL9tsWm",
          createdAt: "2022-12-15 19:50:18",
          updatedAt: "2022-10-01 14:29:25"
        },
        {
          id: 44,
          name: "Gösta",
          surname: "Hodgins",
          email: "mhodgins17@webeden.co.uk",
          password: "v1j3rFW0",
          createdAt: "2022-09-20 07:52:03",
          updatedAt: "2022-08-13 11:20:14"
        },
        {
          id: 45,
          name: "Adélaïde",
          surname: "Reeds",
          email: "lreeds18@microsoft.com",
          password: "XDWXL0RrPOho",
          createdAt: "2022-05-03 22:49:25",
          updatedAt: "2022-03-16 13:24:51"
        },
        {
          id: 46,
          name: "Liè",
          surname: "Giffon",
          email: "rgiffon19@ucoz.ru",
          password: "8gDDcH",
          createdAt: "2022-09-22 01:43:58",
          updatedAt: "2022-07-28 19:04:51"
        },
        {
          id: 47,
          name: "Mélodie",
          surname: "Vispo",
          email: "gvispo1a@amazonaws.com",
          password: "eLLB7KPm0Wi7",
          createdAt: "2022-10-23 17:44:43",
          updatedAt: "2022-02-12 20:41:49"
        },
        {
          id: 48,
          name: "Mårten",
          surname: "Chiverton",
          email: "achiverton1b@google.ru",
          password: "jBMvFLBBl",
          createdAt: "2022-08-15 13:53:45",
          updatedAt: "2022-12-19 20:12:32"
        },
        {
          id: 49,
          name: "Mélina",
          surname: "Kroger",
          email: "ikroger1c@symantec.com",
          password: "dsrLuWbOA",
          createdAt: "2022-05-24 14:10:47",
          updatedAt: "2022-03-11 08:13:52"
        },
        {
          id: 50,
          name: "Ráo",
          surname: "Geillier",
          email: "jgeillier1d@thetimes.co.uk",
          password: "CjKgim",
          createdAt: "2022-08-23 19:08:33",
          updatedAt: "2022-03-21 01:03:48"
        }
      ]
      , {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
