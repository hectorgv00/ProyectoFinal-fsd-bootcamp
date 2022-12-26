'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


      await queryInterface.bulkInsert('HR_Users', 

        [
          {
            id: 1,
            username: "Kat",
            email: "kferfulle0@house.gov",
            password: "fUJjYqu",
            createdAt: "2022-07-19 05:13:04",
            updatedAt: "2022-08-28 23:56:25"
          },
          {
            id: 2,
            username: "Upton",
            email: "ucaseborne1@ow.ly",
            password: "gdMyshGZ7yE",
            createdAt: "2022-10-11 04:15:28",
            updatedAt: "2022-09-07 23:33:28"
          },
          {
            id: 3,
            username: "Myrah",
            email: "mbointon2@surveymonkey.com",
            password: "05Ic5nanFsl",
            createdAt: "2022-06-13 01:22:17",
            updatedAt: "2022-07-03 22:46:51"
          },
          {
            id: 4,
            username: "Brear",
            email: "bdevere3@tumblr.com",
            password: "2HeUvrGhqU",
            createdAt: "2022-10-03 18:43:59",
            updatedAt: "2022-07-09 01:26:58"
          },
          {
            id: 5,
            username: "Neysa",
            email: "ngillings4@elpais.com",
            password: "QpEDVOniKNR",
            createdAt: "2022-05-22 15:29:42",
            updatedAt: "2022-12-19 22:24:16"
          },
          {
            id: 6,
            username: "Rona",
            email: "rphethean5@pcworld.com",
            password: "ycSHVyGSH",
            createdAt: "2022-02-20 11:25:48",
            updatedAt: "2022-10-03 00:28:21"
          },
          {
            id: 7,
            username: "Winnie",
            email: "wbezant6@ted.com",
            password: "ZMJfiGMx7",
            createdAt: "2022-04-03 20:29:24",
            updatedAt: "2022-12-19 13:15:55"
          },
          {
            id: 8,
            username: "Zuzana",
            email: "zflaubert7@blinklist.com",
            password: "qlogkuaaWJ",
            createdAt: "2022-07-22 15:48:48",
            updatedAt: "2022-06-15 01:30:19"
          },
          {
            id: 9,
            username: "Peri",
            email: "pvagges8@webnode.com",
            password: "3DY4bZQwV",
            createdAt: "2022-01-30 22:41:25",
            updatedAt: "2022-07-22 18:36:35"
          },
          {
            id: 10,
            username: "Bernardo",
            email: "bredgewell9@eepurl.com",
            password: "iBmOEF",
            createdAt: "2022-06-07 23:07:47",
            updatedAt: "2022-01-05 22:49:35"
          },
          {
            id: 11,
            username: "Novelia",
            email: "nproudlera@last.fm",
            password: "QpMJUF",
            createdAt: "2022-04-14 13:59:36",
            updatedAt: "2022-05-17 08:51:03"
          },
          {
            id: 12,
            username: "Evered",
            email: "ehadgraftb@wikispaces.com",
            password: "iaNsWthpmICR",
            createdAt: "2022-01-09 01:27:55",
            updatedAt: "2022-06-08 11:48:33"
          },
          {
            id: 13,
            username: "Paton",
            email: "plavalliec@japanpost.jp",
            password: "Yd76n2",
            createdAt: "2022-04-13 10:14:48",
            updatedAt: "2022-05-30 19:43:14"
          },
          {
            id: 14,
            username: "Eadie",
            email: "ebaggelleyd@cnet.com",
            password: "sudH2N8B3fW1",
            createdAt: "2022-02-26 03:03:48",
            updatedAt: "2022-05-08 12:16:34"
          },
          {
            id: 15,
            username: "Kayle",
            email: "kmcdougalde@ustream.tv",
            password: "wWHky2IbhPI",
            createdAt: "2022-01-10 20:41:23",
            updatedAt: "2022-11-11 03:18:44"
          },
          {
            id: 16,
            username: "Joline",
            email: "jbrownbridgef@umn.edu",
            password: "ei4lng9A8u",
            createdAt: "2022-07-17 20:07:32",
            updatedAt: "2021-12-31 16:45:36"
          },
          {
            id: 17,
            username: "Ganny",
            email: "gsilkg@thetimes.co.uk",
            password: "jJ46wdLseioq",
            createdAt: "2022-03-24 01:27:37",
            updatedAt: "2022-01-25 02:20:14"
          },
          {
            id: 18,
            username: "Amerigo",
            email: "ashutth@who.int",
            password: "2cKjacJeolea",
            createdAt: "2022-10-28 13:50:53",
            updatedAt: "2022-08-26 01:22:17"
          },
          {
            id: 19,
            username: "Rafferty",
            email: "rwheblei@arizona.edu",
            password: "krOqCTrCBbS",
            createdAt: "2022-11-06 20:06:27",
            updatedAt: "2022-06-15 21:46:21"
          },
          {
            id: 20,
            username: "Rosemonde",
            email: "rmallebonej@qq.com",
            password: "ve0jFQ08So3",
            createdAt: "2022-12-14 12:23:35",
            updatedAt: "2022-10-31 06:53:22"
          },
          {
            id: 21,
            username: "Emory",
            email: "ecoylek@ted.com",
            password: "x3MdwZ",
            createdAt: "2022-01-01 23:51:13",
            updatedAt: "2022-11-02 16:52:24"
          },
          {
            id: 22,
            username: "Isahella",
            email: "iredemilel@wp.com",
            password: "SHRnoS",
            createdAt: "2022-12-09 19:07:12",
            updatedAt: "2022-10-12 07:46:31"
          },
          {
            id: 23,
            username: "Boigie",
            email: "bhalpinem@oracle.com",
            password: "rN95bit",
            createdAt: "2022-04-02 12:56:51",
            updatedAt: "2021-12-29 18:21:04"
          },
          {
            id: 24,
            username: "Donielle",
            email: "dgopselln@theguardian.com",
            password: "VAGNLHLoZK",
            createdAt: "2022-06-21 11:49:21",
            updatedAt: "2022-06-17 04:10:24"
          },
          {
            id: 25,
            username: "Stevy",
            email: "sgookeo@histats.com",
            password: "PVKu8BX2oI",
            createdAt: "2022-11-03 20:39:52",
            updatedAt: "2022-12-01 08:02:54"
          },
          {
            id: 26,
            username: "Liane",
            email: "lblizardp@unesco.org",
            password: "1VxfPMRqnkJq",
            createdAt: "2022-07-23 12:43:19",
            updatedAt: "2022-10-26 06:17:59"
          },
          {
            id: 27,
            username: "Rosabelle",
            email: "rmoreingq@google.de",
            password: "BXwdUjKu",
            createdAt: "2022-08-29 22:29:57",
            updatedAt: "2022-07-11 07:18:40"
          },
          {
            id: 28,
            username: "Griffie",
            email: "gcristofvaor@cocolog-nifty.com",
            password: "jzwXh596XQu",
            createdAt: "2022-03-28 08:55:49",
            updatedAt: "2022-01-10 02:07:57"
          },
          {
            id: 29,
            username: "Wallace",
            email: "wdilkss@moonfruit.com",
            password: "Rv19n0AG",
            createdAt: "2022-07-23 01:10:46",
            updatedAt: "2022-09-12 22:11:54"
          },
          {
            id: 30,
            username: "Iggie",
            email: "ithirstt@g.co",
            password: "MmEQqxTz7",
            createdAt: "2022-05-03 11:47:38",
            updatedAt: "2022-03-09 22:39:38"
          },
          {
            id: 31,
            username: "Lea",
            email: "lidwalevansu@mapquest.com",
            password: "tS7FRL",
            createdAt: "2022-05-09 02:51:18",
            updatedAt: "2021-12-28 09:39:39"
          },
          {
            id: 32,
            username: "Ody",
            email: "okulasv@storify.com",
            password: "VQPEWbOE",
            createdAt: "2022-07-09 04:54:13",
            updatedAt: "2022-10-05 14:25:57"
          },
          {
            id: 33,
            username: "Dela",
            email: "dlorekw@typepad.com",
            password: "B4hZii95jb3a",
            createdAt: "2022-01-22 15:08:02",
            updatedAt: "2022-01-22 06:42:18"
          },
          {
            id: 34,
            username: "Ronni",
            email: "rreyesx@51.la",
            password: "cI71qYXgouN",
            createdAt: "2022-11-06 15:01:39",
            updatedAt: "2022-01-16 13:50:37"
          },
          {
            id: 35,
            username: "Towny",
            email: "tjiriy@woothemes.com",
            password: "rBObIM3MY8",
            createdAt: "2022-05-05 14:35:52",
            updatedAt: "2022-11-08 22:03:35"
          },
          {
            id: 36,
            username: "Felizio",
            email: "fpitsallz@deviantart.com",
            password: "ErWJXHIf",
            createdAt: "2022-11-02 04:39:49",
            updatedAt: "2022-06-07 23:02:45"
          },
          {
            id: 37,
            username: "Gerik",
            email: "greynalds10@over-blog.com",
            password: "etc38vpq",
            createdAt: "2022-02-03 12:38:48",
            updatedAt: "2022-12-10 07:48:06"
          },
          {
            id: 38,
            username: "Nomi",
            email: "njakubovicz11@skyrock.com",
            password: "hHffED",
            createdAt: "2022-09-01 07:32:46",
            updatedAt: "2022-08-24 12:31:09"
          },
          {
            id: 39,
            username: "Georgeanne",
            email: "gradki12@gizmodo.com",
            password: "c6I0Ri",
            createdAt: "2022-06-07 04:36:01",
            updatedAt: "2022-12-14 22:35:54"
          },
          {
            id: 40,
            username: "Billi",
            email: "bchatburn13@google.cn",
            password: "socsHY1zj8qo",
            createdAt: "2022-05-14 21:45:36",
            updatedAt: "2022-05-25 17:18:56"
          },
          {
            id: 41,
            username: "Dorene",
            email: "dzimmer14@wufoo.com",
            password: "fnuHOo3",
            createdAt: "2022-02-22 09:00:09",
            updatedAt: "2022-04-26 04:57:38"
          },
          {
            id: 42,
            username: "Maybelle",
            email: "mrasper15@furl.net",
            password: "PPWHMq",
            createdAt: "2022-06-19 03:00:38",
            updatedAt: "2022-02-19 11:28:42"
          },
          {
            id: 43,
            username: "Hillel",
            email: "hpointing16@weibo.com",
            password: "r6vgxVk40W",
            createdAt: "2022-07-19 09:54:43",
            updatedAt: "2021-12-27 03:13:14"
          },
          {
            id: 44,
            username: "Corbett",
            email: "cgrishagin17@ebay.co.uk",
            password: "Sp89vgoXXm",
            createdAt: "2022-12-03 08:28:37",
            updatedAt: "2022-12-17 07:50:24"
          },
          {
            id: 45,
            username: "Karly",
            email: "kpfeffel18@mashable.com",
            password: "39jynpSIj",
            createdAt: "2022-04-30 00:10:21",
            updatedAt: "2022-05-08 19:00:50"
          },
          {
            id: 46,
            username: "Sarene",
            email: "sshivlin19@netvibes.com",
            password: "Z3FkoHF",
            createdAt: "2022-01-03 06:51:02",
            updatedAt: "2022-04-04 22:04:02"
          },
          {
            id: 47,
            username: "Garv",
            email: "ghierro1a@biblegateway.com",
            password: "6tHT4lt1p4tn",
            createdAt: "2022-05-17 15:01:38",
            updatedAt: "2022-01-27 22:10:17"
          },
          {
            id: 48,
            username: "Fedora",
            email: "fivashnyov1b@networksolutions.com",
            password: "mp0uWD",
            createdAt: "2022-10-29 12:05:13",
            updatedAt: "2022-03-08 23:55:45"
          },
          {
            id: 49,
            username: "Gilbertina",
            email: "gshiell1c@xrea.com",
            password: "gA30Tg",
            createdAt: "2022-05-17 13:15:53",
            updatedAt: "2022-02-15 19:18:23"
          },
          {
            id: 50,
            username: "Grete",
            email: "gsaterweyte1d@cbsnews.com",
            password: "OhQxHWN7fD",
            createdAt: "2022-06-23 04:35:27",
            updatedAt: "2022-03-27 00:57:15"
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
