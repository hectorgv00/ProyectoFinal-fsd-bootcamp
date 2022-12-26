'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      Example:
      await queryInterface.bulkInsert('CandidatePositions',
      [
        {
          id: 1,
          testDate: "2022-06-12 22:52:49",
          result: 1,
          completionDate: "2022-06-03 09:53:36",
          registryDate: "2022-05-14 00:12:39",
          createdAt: "2022-11-07 13:37:42",
          updatedAt: "2022-06-27 03:56:24",
          CandidateId: 1,
          PositionId: 1
        },
        {
          id: 2,
          testDate: "2022-08-14 00:43:57",
          result: 10,
          completionDate: "2022-05-13 18:31:53",
          registryDate: "2022-04-04 15:26:55",
          createdAt: "2022-10-18 15:34:57",
          updatedAt: "2022-01-15 12:44:54",
          CandidateId: 2,
          PositionId: 2
        },
        {
          id: 3,
          testDate: "2022-08-30 10:47:22",
          result: 1,
          completionDate: "2022-06-02 14:40:28",
          registryDate: "2022-04-01 01:07:27",
          createdAt: "2022-08-16 02:45:12",
          updatedAt: "2022-06-27 00:55:18",
          CandidateId: 3,
          PositionId: 3
        },
        {
          id: 4,
          testDate: "2022-06-21 16:06:27",
          result: 4,
          completionDate: "2022-02-17 00:03:01",
          registryDate: "2022-02-24 23:16:30",
          createdAt: "2022-08-06 05:49:22",
          updatedAt: "2022-09-21 23:02:03",
          CandidateId: 4,
          PositionId: 4
        },
        {
          id: 5,
          testDate: "2022-06-08 11:50:24",
          result: 9,
          completionDate: "2022-10-16 17:51:35",
          registryDate: "2022-04-06 09:10:33",
          createdAt: "2022-07-06 05:28:18",
          updatedAt: "2022-03-10 06:46:58",
          CandidateId: 5,
          PositionId: 5
        },
        {
          id: 6,
          testDate: "2022-02-20 08:04:04",
          result: 9,
          completionDate: "2022-04-12 16:19:47",
          registryDate: "2022-12-02 03:40:06",
          createdAt: "2022-07-19 04:34:46",
          updatedAt: "2022-10-29 19:32:09",
          CandidateId: 6,
          PositionId: 6
        },
        {
          id: 7,
          testDate: "2022-08-29 20:20:49",
          result: 6,
          completionDate: "2021-12-31 05:55:49",
          registryDate: "2022-08-02 19:48:20",
          createdAt: "2022-08-02 15:20:39",
          updatedAt: "2022-04-12 20:40:33",
          CandidateId: 7,
          PositionId: 7
        },
        {
          id: 8,
          testDate: "2022-06-21 04:11:20",
          result: 5,
          completionDate: "2022-06-15 14:25:04",
          registryDate: "2022-02-25 15:54:41",
          createdAt: "2022-07-10 15:25:28",
          updatedAt: "2022-05-28 16:17:03",
          CandidateId: 8,
          PositionId: 8
        },
        {
          id: 9,
          testDate: "2022-04-23 10:05:01",
          result: 10,
          completionDate: "2022-03-30 04:23:10",
          registryDate: "2021-12-31 15:04:16",
          createdAt: "2022-08-29 08:27:27",
          updatedAt: "2022-01-30 13:52:10",
          CandidateId: 9,
          PositionId: 9
        },
        {
          id: 10,
          testDate: "2022-04-01 21:50:54",
          result: 8,
          completionDate: "2022-02-21 00:09:19",
          registryDate: "2022-03-04 01:45:48",
          createdAt: "2022-03-05 18:12:53",
          updatedAt: "2022-03-15 18:02:12",
          CandidateId: 10,
          PositionId: 10
        },
        {
          id: 11,
          testDate: "2022-03-16 01:35:36",
          result: 9,
          completionDate: "2022-08-06 13:22:27",
          registryDate: "2022-04-21 11:19:09",
          createdAt: "2022-09-02 04:52:36",
          updatedAt: "2022-09-19 06:24:45",
          CandidateId: 11,
          PositionId: 11
        },
        {
          id: 12,
          testDate: "2022-11-27 17:46:46",
          result: 6,
          completionDate: "2022-02-23 12:17:42",
          registryDate: "2022-04-02 19:14:45",
          createdAt: "2022-11-12 16:42:50",
          updatedAt: "2022-02-02 11:40:44",
          CandidateId: 12,
          PositionId: 12
        },
        {
          id: 13,
          testDate: "2022-01-14 10:16:42",
          result: 9,
          completionDate: "2022-12-20 03:04:27",
          registryDate: "2022-05-24 19:29:07",
          createdAt: "2022-10-14 06:51:46",
          updatedAt: "2022-08-21 09:54:51",
          CandidateId: 13,
          PositionId: 13
        },
        {
          id: 14,
          testDate: "2022-11-09 02:22:22",
          result: 7,
          completionDate: "2022-07-02 12:14:52",
          registryDate: "2022-01-23 18:19:44",
          createdAt: "2022-11-29 01:54:03",
          updatedAt: "2022-08-17 12:10:37",
          CandidateId: 14,
          PositionId: 14
        },
        {
          id: 15,
          testDate: "2022-03-04 17:27:32",
          result: 1,
          completionDate: "2022-10-14 17:02:01",
          registryDate: "2022-01-09 12:29:55",
          createdAt: "2022-05-09 16:53:47",
          updatedAt: "2022-08-15 06:51:21",
          CandidateId: 15,
          PositionId: 15
        },
        {
          id: 16,
          testDate: "2022-11-09 12:33:49",
          result: 3,
          completionDate: "2022-01-15 20:37:36",
          registryDate: "2022-11-03 06:38:46",
          createdAt: "2022-05-05 04:37:04",
          updatedAt: "2022-07-18 05:31:38",
          CandidateId: 16,
          PositionId: 16
        },
        {
          id: 17,
          testDate: "2022-01-13 16:45:55",
          result: 7,
          completionDate: "2022-12-01 16:21:22",
          registryDate: "2022-02-06 00:05:31",
          createdAt: "2022-03-22 02:08:26",
          updatedAt: "2022-10-02 20:43:26",
          CandidateId: 17,
          PositionId: 17
        },
        {
          id: 18,
          testDate: "2022-06-22 10:49:33",
          result: 1,
          completionDate: "2022-12-04 07:55:18",
          registryDate: "2022-10-12 21:14:16",
          createdAt: "2022-01-20 18:59:42",
          updatedAt: "2022-05-18 18:14:40",
          CandidateId: 18,
          PositionId: 18
        },
        {
          id: 19,
          testDate: "2022-03-17 18:52:02",
          result: 8,
          completionDate: "2022-04-26 15:12:42",
          registryDate: "2022-04-26 15:39:01",
          createdAt: "2022-06-17 01:59:15",
          updatedAt: "2022-03-02 21:10:05",
          CandidateId: 19,
          PositionId: 19
        },
        {
          id: 20,
          testDate: "2022-09-05 09:35:17",
          result: 9,
          completionDate: "2022-04-30 11:33:41",
          registryDate: "2022-05-04 04:59:37",
          createdAt: "2022-02-20 16:26:29",
          updatedAt: "2022-01-27 09:05:24",
          CandidateId: 20,
          PositionId: 20
        },
        {
          id: 21,
          testDate: "2022-01-01 08:45:47",
          result: 5,
          completionDate: "2022-03-05 03:50:45",
          registryDate: "2022-03-22 16:47:03",
          createdAt: "2022-07-31 02:24:57",
          updatedAt: "2022-01-30 22:39:28",
          CandidateId: 21,
          PositionId: 21
        },
        {
          id: 22,
          testDate: "2022-01-29 02:52:44",
          result: 4,
          completionDate: "2022-06-30 04:47:30",
          registryDate: "2022-09-02 08:13:14",
          createdAt: "2022-02-20 07:12:53",
          updatedAt: "2022-01-29 20:10:36",
          CandidateId: 22,
          PositionId: 22
        },
        {
          id: 23,
          testDate: "2022-08-23 12:34:58",
          result: 2,
          completionDate: "2022-01-17 19:25:46",
          registryDate: "2022-05-14 06:51:42",
          createdAt: "2022-06-10 12:39:24",
          updatedAt: "2022-10-31 22:35:36",
          CandidateId: 23,
          PositionId: 23
        },
        {
          id: 24,
          testDate: "2022-01-17 01:10:25",
          result: 2,
          completionDate: "2022-02-27 19:39:06",
          registryDate: "2022-08-20 10:51:32",
          createdAt: "2022-03-14 15:06:04",
          updatedAt: "2022-04-10 18:07:57",
          CandidateId: 24,
          PositionId: 24
        },
        {
          id: 25,
          testDate: "2022-11-08 05:48:33",
          result: 4,
          completionDate: "2022-08-11 16:35:45",
          registryDate: "2022-10-01 08:26:21",
          createdAt: "2022-02-23 23:54:37",
          updatedAt: "2022-06-25 09:02:18",
          CandidateId: 25,
          PositionId: 25
        },
        {
          id: 26,
          testDate: "2022-10-10 02:55:15",
          result: 8,
          completionDate: "2022-10-06 05:40:42",
          registryDate: "2022-05-16 04:31:19",
          createdAt: "2022-07-01 23:19:09",
          updatedAt: "2022-03-11 15:31:33",
          CandidateId: 26,
          PositionId: 26
        },
        {
          id: 27,
          testDate: "2022-02-12 00:18:00",
          result: 1,
          completionDate: "2022-03-14 00:01:26",
          registryDate: "2022-02-05 10:54:38",
          createdAt: "2022-06-24 22:49:23",
          updatedAt: "2022-04-24 00:25:08",
          CandidateId: 27,
          PositionId: 27
        },
        {
          id: 28,
          testDate: "2022-01-21 15:04:21",
          result: 1,
          completionDate: "2022-05-31 04:27:07",
          registryDate: "2022-11-08 22:02:43",
          createdAt: "2022-07-11 15:52:51",
          updatedAt: "2021-12-28 19:29:18",
          CandidateId: 28,
          PositionId: 28
        },
        {
          id: 29,
          testDate: "2022-02-17 23:48:30",
          result: 4,
          completionDate: "2022-05-01 10:34:34",
          registryDate: "2022-01-16 12:56:58",
          createdAt: "2022-09-16 09:27:25",
          updatedAt: "2022-02-18 07:58:09",
          CandidateId: 29,
          PositionId: 29
        },
        {
          id: 30,
          testDate: "2022-08-20 14:29:17",
          result: 10,
          completionDate: "2022-09-22 06:57:25",
          registryDate: "2022-03-03 07:07:50",
          createdAt: "2022-07-25 13:39:28",
          updatedAt: "2022-10-08 00:23:05",
          CandidateId: 30,
          PositionId: 30
        },
        {
          id: 31,
          testDate: "2022-06-25 19:42:31",
          result: 3,
          completionDate: "2022-11-28 04:10:27",
          registryDate: "2022-09-26 09:29:03",
          createdAt: "2022-02-24 22:46:26",
          updatedAt: "2022-07-30 10:33:57",
          CandidateId: 31,
          PositionId: 31
        },
        {
          id: 32,
          testDate: "2022-09-07 11:38:59",
          result: 7,
          completionDate: "2022-07-28 09:39:19",
          registryDate: "2022-02-06 04:12:54",
          createdAt: "2022-01-24 13:50:07",
          updatedAt: "2022-10-18 03:44:11",
          CandidateId: 32,
          PositionId: 32
        },
        {
          id: 33,
          testDate: "2022-07-11 01:54:53",
          result: 8,
          completionDate: "2022-07-22 21:12:27",
          registryDate: "2022-02-28 07:10:38",
          createdAt: "2022-06-17 07:23:07",
          updatedAt: "2022-02-09 02:21:15",
          CandidateId: 33,
          PositionId: 33
        },
        {
          id: 34,
          testDate: "2022-01-25 03:51:01",
          result: 6,
          completionDate: "2022-08-20 22:22:40",
          registryDate: "2021-12-29 07:22:23",
          createdAt: "2022-08-30 00:01:11",
          updatedAt: "2022-10-12 13:18:42",
          CandidateId: 34,
          PositionId: 34
        },
        {
          id: 35,
          testDate: "2022-10-12 01:33:41",
          result: 7,
          completionDate: "2022-07-09 22:48:49",
          registryDate: "2022-02-23 19:36:37",
          createdAt: "2022-03-18 01:59:00",
          updatedAt: "2022-02-17 17:48:35",
          CandidateId: 35,
          PositionId: 35
        },
        {
          id: 36,
          testDate: "2022-08-29 03:05:30",
          result: 7,
          completionDate: "2022-02-23 07:32:25",
          registryDate: "2022-05-11 01:23:15",
          createdAt: "2022-02-23 11:09:45",
          updatedAt: "2022-03-08 10:22:05",
          CandidateId: 36,
          PositionId: 36
        },
        {
          id: 37,
          testDate: "2022-06-14 08:58:23",
          result: 10,
          completionDate: "2022-07-18 21:43:26",
          registryDate: "2021-12-30 19:59:34",
          createdAt: "2022-03-24 21:02:08",
          updatedAt: "2022-11-17 07:28:55",
          CandidateId: 37,
          PositionId: 37
        },
        {
          id: 38,
          testDate: "2022-05-19 17:52:33",
          result: 5,
          completionDate: "2022-10-26 22:48:19",
          registryDate: "2022-10-21 00:52:51",
          createdAt: "2022-03-21 13:36:09",
          updatedAt: "2022-11-28 11:31:51",
          CandidateId: 38,
          PositionId: 38
        },
        {
          id: 39,
          testDate: "2022-03-18 14:04:07",
          result: 4,
          completionDate: "2022-07-09 10:12:40",
          registryDate: "2022-07-10 23:14:35",
          createdAt: "2022-02-25 18:54:17",
          updatedAt: "2022-07-30 14:02:42",
          CandidateId: 39,
          PositionId: 39
        },
        {
          id: 40,
          testDate: "2022-03-14 16:49:06",
          result: 7,
          completionDate: "2022-11-29 01:39:33",
          registryDate: "2022-11-16 02:05:48",
          createdAt: "2022-06-30 12:29:15",
          updatedAt: "2022-11-15 23:05:06",
          CandidateId: 40,
          PositionId: 40
        },
        {
          id: 41,
          testDate: "2022-01-01 13:31:08",
          result: 8,
          completionDate: "2022-10-04 07:47:48",
          registryDate: "2022-12-18 21:39:57",
          createdAt: "2022-04-02 20:43:30",
          updatedAt: "2022-11-26 23:26:48",
          CandidateId: 41,
          PositionId: 41
        },
        {
          id: 42,
          testDate: "2022-01-20 04:50:42",
          result: 1,
          completionDate: "2022-12-14 22:50:27",
          registryDate: "2022-09-08 07:46:39",
          createdAt: "2022-04-13 23:30:12",
          updatedAt: "2022-05-23 05:31:35",
          CandidateId: 42,
          PositionId: 42
        },
        {
          id: 43,
          testDate: "2022-07-18 16:02:11",
          result: 8,
          completionDate: "2022-04-25 08:55:58",
          registryDate: "2022-03-27 08:02:05",
          createdAt: "2022-10-14 18:06:07",
          updatedAt: "2022-04-12 22:50:57",
          CandidateId: 43,
          PositionId: 43
        },
        {
          id: 44,
          testDate: "2022-04-29 03:14:52",
          result: 10,
          completionDate: "2022-08-12 14:23:52",
          registryDate: "2022-11-12 14:42:29",
          createdAt: "2022-11-06 03:29:01",
          updatedAt: "2022-07-16 13:22:24",
          CandidateId: 44,
          PositionId: 44
        },
        {
          id: 45,
          testDate: "2022-12-22 15:21:14",
          result: 4,
          completionDate: "2022-06-22 01:08:23",
          registryDate: "2022-06-28 17:30:54",
          createdAt: "2022-08-31 19:33:57",
          updatedAt: "2022-10-27 10:48:17",
          CandidateId: 45,
          PositionId: 45
        },
        {
          id: 46,
          testDate: "2022-07-15 08:41:46",
          result: 4,
          completionDate: "2022-11-13 07:53:03",
          registryDate: "2022-09-16 09:02:12",
          createdAt: "2022-01-19 18:31:19",
          updatedAt: "2022-05-04 11:38:37",
          CandidateId: 46,
          PositionId: 46
        },
        {
          id: 47,
          testDate: "2022-03-05 00:15:06",
          result: 7,
          completionDate: "2022-05-27 12:17:22",
          registryDate: "2022-09-08 09:31:26",
          createdAt: "2022-09-10 23:29:28",
          updatedAt: "2022-06-18 14:45:28",
          CandidateId: 47,
          PositionId: 47
        },
        {
          id: 48,
          testDate: "2022-03-15 09:54:11",
          result: 7,
          completionDate: "2022-10-26 01:29:37",
          registryDate: "2022-02-20 16:58:00",
          createdAt: "2022-07-26 07:40:27",
          updatedAt: "2022-07-16 03:06:45",
          CandidateId: 48,
          PositionId: 48
        },
        {
          id: 49,
          testDate: "2022-05-13 05:24:38",
          result: 6,
          completionDate: "2022-10-19 16:57:14",
          registryDate: "2022-11-08 09:20:28",
          createdAt: "2022-11-27 16:31:11",
          updatedAt: "2022-11-20 19:35:54",
          CandidateId: 49,
          PositionId: 49
        },
        {
          id: 50,
          testDate: "2022-03-16 12:24:39",
          result: 8,
          completionDate: "2022-02-19 06:33:52",
          registryDate: "2022-06-08 15:19:03",
          createdAt: "2022-07-04 21:35:19",
          updatedAt: "2022-03-17 11:37:54",
          CandidateId: 50,
          PositionId: 50
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
