'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Skills', 
     [
      {
        id: 1,
        name: "Sonair",
        createdAt: "2022-04-28 21:09:34",
        updatedAt: "2022-05-05 23:22:51",
        HRUserId: 1
      },
      {
        id: 2,
        name: "Gembucket",
        createdAt: "2022-12-14 04:14:21",
        updatedAt: "2022-10-20 16:02:23",
        HRUserId: 2
      },
      {
        id: 3,
        name: "Zaam-Dox",
        createdAt: "2022-07-27 16:11:58",
        updatedAt: "2022-02-18 06:35:15",
        HRUserId: 3
      },
      {
        id: 4,
        name: "Mat Lam Tam",
        createdAt: "2022-04-07 17:16:34",
        updatedAt: "2022-05-15 15:54:24",
        HRUserId: 4
      },
      {
        id: 5,
        name: "Quo Lux",
        createdAt: "2022-11-02 03:52:01",
        updatedAt: "2022-02-02 10:06:11",
        HRUserId: 5
      },
      {
        id: 6,
        name: "Lotstring",
        createdAt: "2022-04-26 19:07:38",
        updatedAt: "2022-09-28 08:45:25",
        HRUserId: 6
      },
      {
        id: 7,
        name: "Wrapsafe",
        createdAt: "2022-09-14 13:52:56",
        updatedAt: "2022-05-14 23:30:41",
        HRUserId: 7
      },
      {
        id: 8,
        name: "Voyatouch",
        createdAt: "2022-04-22 16:29:54",
        updatedAt: "2022-05-31 02:49:53",
        HRUserId: 8
      },
      {
        id: 9,
        name: "Treeflex",
        createdAt: "2022-02-09 08:44:07",
        updatedAt: "2022-09-19 04:41:42",
        HRUserId: 9
      },
      {
        id: 10,
        name: "Sub-Ex",
        createdAt: "2022-04-05 23:45:01",
        updatedAt: "2022-07-27 17:44:59",
        HRUserId: 10
      },
      {
        id: 11,
        name: "Ventosanzap",
        createdAt: "2022-07-30 18:30:36",
        updatedAt: "2022-11-29 17:15:16",
        HRUserId: 11
      },
      {
        id: 12,
        name: "Konklab",
        createdAt: "2022-08-11 07:23:11",
        updatedAt: "2022-11-27 08:39:00",
        HRUserId: 12
      },
      {
        id: 13,
        name: "Voyatouch",
        createdAt: "2022-02-10 14:47:10",
        updatedAt: "2022-02-21 23:39:59",
        HRUserId: 13
      },
      {
        id: 14,
        name: "Cookley",
        createdAt: "2022-09-05 12:13:20",
        updatedAt: "2022-09-05 17:31:11",
        HRUserId: 14
      },
      {
        id: 15,
        name: "Quo Lux",
        createdAt: "2022-01-02 19:38:01",
        updatedAt: "2022-08-19 03:45:13",
        HRUserId: 15
      },
      {
        id: 16,
        name: "Treeflex",
        createdAt: "2022-02-28 16:44:52",
        updatedAt: "2022-09-10 09:32:39",
        HRUserId: 16
      },
      {
        id: 17,
        name: "Sonair",
        createdAt: "2022-10-27 07:43:08",
        updatedAt: "2022-10-27 06:13:24",
        HRUserId: 17
      },
      {
        id: 18,
        name: "Tempsoft",
        createdAt: "2022-08-22 22:51:18",
        updatedAt: "2022-10-24 21:14:55",
        HRUserId: 18
      },
      {
        id: 19,
        name: "Tampflex",
        createdAt: "2022-11-24 07:41:46",
        updatedAt: "2022-03-13 03:03:40",
        HRUserId: 19
      },
      {
        id: 20,
        name: "Fintone",
        createdAt: "2022-07-10 11:58:50",
        updatedAt: "2022-09-03 15:35:21",
        HRUserId: 20
      },
      {
        id: 21,
        name: "Span",
        createdAt: "2022-12-14 19:44:44",
        updatedAt: "2022-08-12 09:59:19",
        HRUserId: 21
      },
      {
        id: 22,
        name: "Latlux",
        createdAt: "2022-11-18 04:55:24",
        updatedAt: "2022-08-30 01:56:58",
        HRUserId: 22
      },
      {
        id: 23,
        name: "Lotlux",
        createdAt: "2022-04-21 22:58:26",
        updatedAt: "2022-12-23 12:26:58",
        HRUserId: 23
      },
      {
        id: 24,
        name: "Veribet",
        createdAt: "2022-04-16 00:18:37",
        updatedAt: "2022-10-10 05:06:58",
        HRUserId: 24
      },
      {
        id: 25,
        name: "Y-find",
        createdAt: "2022-10-15 08:55:15",
        updatedAt: "2022-05-03 17:10:41",
        HRUserId: 25
      },
      {
        id: 26,
        name: "Biodex",
        createdAt: "2022-02-25 04:04:50",
        updatedAt: "2022-12-10 17:35:09",
        HRUserId: 26
      },
      {
        id: 27,
        name: "Quo Lux",
        createdAt: "2022-03-26 01:06:46",
        updatedAt: "2022-09-12 02:32:47",
        HRUserId: 27
      },
      {
        id: 28,
        name: "Bitchip",
        createdAt: "2022-06-27 06:56:57",
        updatedAt: "2022-11-03 23:50:57",
        HRUserId: 28
      },
      {
        id: 29,
        name: "Hatity",
        createdAt: "2022-12-09 21:54:34",
        updatedAt: "2022-05-18 20:35:27",
        HRUserId: 29
      },
      {
        id: 30,
        name: "Voyatouch",
        createdAt: "2022-09-12 23:36:04",
        updatedAt: "2022-05-23 07:29:13",
        HRUserId: 30
      },
      {
        id: 31,
        name: "Sonair",
        createdAt: "2022-05-04 10:16:18",
        updatedAt: "2022-05-22 08:14:52",
        HRUserId: 31
      },
      {
        id: 32,
        name: "Ventosanzap",
        createdAt: "2022-05-10 00:39:28",
        updatedAt: "2022-11-28 21:23:09",
        HRUserId: 32
      },
      {
        id: 33,
        name: "Y-find",
        createdAt: "2022-04-08 16:17:17",
        updatedAt: "2022-07-05 14:37:39",
        HRUserId: 33
      },
      {
        id: 34,
        name: "Tin",
        createdAt: "2022-01-06 22:49:05",
        updatedAt: "2022-07-05 10:38:43",
        HRUserId: 34
      },
      {
        id: 35,
        name: "Matsoft",
        createdAt: "2022-02-26 22:25:29",
        updatedAt: "2022-12-20 18:44:37",
        HRUserId: 35
      },
      {
        id: 36,
        name: "Duobam",
        createdAt: "2022-09-12 10:00:00",
        updatedAt: "2022-02-19 23:47:17",
        HRUserId: 36
      },
      {
        id: 37,
        name: "Mat Lam Tam",
        createdAt: "2022-11-10 17:59:26",
        updatedAt: "2022-04-30 06:53:18",
        HRUserId: 37
      },
      {
        id: 38,
        name: "Bigtax",
        createdAt: "2022-10-26 06:00:47",
        updatedAt: "2022-08-22 22:19:01",
        HRUserId: 38
      },
      {
        id: 39,
        name: "Konklab",
        createdAt: "2022-11-17 00:14:43",
        updatedAt: "2022-06-18 22:57:09",
        HRUserId: 39
      },
      {
        id: 40,
        name: "Bigtax",
        createdAt: "2022-09-06 12:06:05",
        updatedAt: "2022-03-18 22:25:10",
        HRUserId: 40
      },
      {
        id: 41,
        name: "Ronstring",
        createdAt: "2022-11-08 01:47:19",
        updatedAt: "2022-09-19 15:28:48",
        HRUserId: 41
      },
      {
        id: 42,
        name: "Subin",
        createdAt: "2022-09-28 03:56:20",
        updatedAt: "2022-10-16 12:25:32",
        HRUserId: 42
      },
      {
        id: 43,
        name: "Stringtough",
        createdAt: "2022-04-04 08:22:52",
        updatedAt: "2022-01-11 10:45:38",
        HRUserId: 43
      },
      {
        id: 44,
        name: "Overhold",
        createdAt: "2022-01-30 09:50:33",
        updatedAt: "2022-03-28 04:33:28",
        HRUserId: 44
      },
      {
        id: 45,
        name: "Konklux",
        createdAt: "2022-07-13 11:49:25",
        updatedAt: "2022-04-01 00:56:18",
        HRUserId: 45
      },
      {
        id: 46,
        name: "Flexidy",
        createdAt: "2022-11-26 16:01:01",
        updatedAt: "2022-01-21 15:11:43",
        HRUserId: 46
      },
      {
        id: 47,
        name: "Aerified",
        createdAt: "2022-12-11 01:15:44",
        updatedAt: "2022-02-25 09:33:21",
        HRUserId: 47
      },
      {
        id: 48,
        name: "Overhold",
        createdAt: "2022-05-01 21:05:11",
        updatedAt: "2022-07-02 10:06:37",
        HRUserId: 48
      },
      {
        id: 49,
        name: "Tin",
        createdAt: "2022-07-01 18:25:10",
        updatedAt: "2022-07-11 08:24:41",
        HRUserId: 49
      },
      {
        id: 50,
        name: "Duobam",
        createdAt: "2022-03-14 10:43:34",
        updatedAt: "2022-05-28 16:50:54",
        HRUserId: 50
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
