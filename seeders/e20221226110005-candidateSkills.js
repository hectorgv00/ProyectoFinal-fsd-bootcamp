'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('CandidateSkills', 
      [
        {
          id: 1,
          mark: 6,
          createdAt: "2022-02-05 20:40:52",
          updatedAt: "2022-06-28 01:37:41",
          CandidateId: 1,
          SkillId: 1
        },
        {
          id: 2,
          mark: 4,
          createdAt: "2022-08-01 01:54:05",
          updatedAt: "2022-01-30 15:18:32",
          CandidateId: 2,
          SkillId: 2
        },
        {
          id: 3,
          mark: 1,
          createdAt: "2022-01-13 01:48:36",
          updatedAt: "2022-03-20 23:58:52",
          CandidateId: 3,
          SkillId: 3
        },
        {
          id: 4,
          mark: 3,
          createdAt: "2022-06-24 07:03:23",
          updatedAt: "2022-10-09 04:05:27",
          CandidateId: 4,
          SkillId: 4
        },
        {
          id: 5,
          mark: 8,
          createdAt: "2022-06-07 14:13:33",
          updatedAt: "2022-02-17 10:36:57",
          CandidateId: 5,
          SkillId: 5
        },
        {
          id: 6,
          mark: 2,
          createdAt: "2022-10-26 03:05:53",
          updatedAt: "2022-08-08 22:24:47",
          CandidateId: 6,
          SkillId: 6
        },
        {
          id: 7,
          mark: 6,
          createdAt: "2022-07-18 02:00:03",
          updatedAt: "2022-07-04 06:27:21",
          CandidateId: 7,
          SkillId: 7
        },
        {
          id: 8,
          mark: 1,
          createdAt: "2022-04-17 16:20:42",
          updatedAt: "2022-02-28 16:01:19",
          CandidateId: 8,
          SkillId: 8
        },
        {
          id: 9,
          mark: 8,
          createdAt: "2022-08-04 09:11:55",
          updatedAt: "2022-03-17 18:49:20",
          CandidateId: 9,
          SkillId: 9
        },
        {
          id: 10,
          mark: 2,
          createdAt: "2022-12-15 21:42:07",
          updatedAt: "2022-11-25 13:46:44",
          CandidateId: 10,
          SkillId: 10
        },
        {
          id: 11,
          mark: 1,
          createdAt: "2021-12-28 08:29:37",
          updatedAt: "2022-06-09 09:41:35",
          CandidateId: 11,
          SkillId: 11
        },
        {
          id: 12,
          mark: 3,
          createdAt: "2022-04-05 23:21:07",
          updatedAt: "2022-09-11 23:37:59",
          CandidateId: 12,
          SkillId: 12
        },
        {
          id: 13,
          mark: 4,
          createdAt: "2022-12-25 15:52:59",
          updatedAt: "2022-01-02 06:42:17",
          CandidateId: 13,
          SkillId: 13
        },
        {
          id: 14,
          mark: 10,
          createdAt: "2022-10-06 13:15:36",
          updatedAt: "2022-05-12 17:21:44",
          CandidateId: 14,
          SkillId: 14
        },
        {
          id: 15,
          mark: 7,
          createdAt: "2022-06-08 11:52:44",
          updatedAt: "2022-05-29 00:44:05",
          CandidateId: 15,
          SkillId: 15
        },
        {
          id: 16,
          mark: 3,
          createdAt: "2022-07-19 17:18:20",
          updatedAt: "2022-05-28 15:23:35",
          CandidateId: 16,
          SkillId: 16
        },
        {
          id: 17,
          mark: 9,
          createdAt: "2022-05-04 15:38:31",
          updatedAt: "2022-05-20 15:23:08",
          CandidateId: 17,
          SkillId: 17
        },
        {
          id: 18,
          mark: 3,
          createdAt: "2022-12-02 22:25:06",
          updatedAt: "2022-03-31 18:46:14",
          CandidateId: 18,
          SkillId: 18
        },
        {
          id: 19,
          mark: 8,
          createdAt: "2022-06-10 20:01:49",
          updatedAt: "2022-10-04 12:44:28",
          CandidateId: 19,
          SkillId: 19
        },
        {
          id: 20,
          mark: 9,
          createdAt: "2022-04-12 17:42:09",
          updatedAt: "2021-12-27 01:11:42",
          CandidateId: 20,
          SkillId: 20
        },
        {
          id: 21,
          mark: 1,
          createdAt: "2022-06-17 15:54:35",
          updatedAt: "2022-08-26 04:51:16",
          CandidateId: 21,
          SkillId: 21
        },
        {
          id: 22,
          mark: 3,
          createdAt: "2022-09-27 01:29:45",
          updatedAt: "2022-03-03 09:54:40",
          CandidateId: 22,
          SkillId: 22
        },
        {
          id: 23,
          mark: 7,
          createdAt: "2022-09-11 15:02:53",
          updatedAt: "2022-12-16 19:59:44",
          CandidateId: 23,
          SkillId: 23
        },
        {
          id: 24,
          mark: 6,
          createdAt: "2022-02-14 15:47:59",
          updatedAt: "2022-02-26 02:47:05",
          CandidateId: 24,
          SkillId: 24
        },
        {
          id: 25,
          mark: 6,
          createdAt: "2022-05-21 13:24:30",
          updatedAt: "2022-01-28 18:56:39",
          CandidateId: 25,
          SkillId: 25
        },
        {
          id: 26,
          mark: 8,
          createdAt: "2022-04-09 23:31:14",
          updatedAt: "2022-05-14 05:21:30",
          CandidateId: 26,
          SkillId: 26
        },
        {
          id: 27,
          mark: 2,
          createdAt: "2022-11-19 17:57:02",
          updatedAt: "2022-12-06 08:30:27",
          CandidateId: 27,
          SkillId: 27
        },
        {
          id: 28,
          mark: 5,
          createdAt: "2022-06-05 02:16:42",
          updatedAt: "2022-12-16 19:46:52",
          CandidateId: 28,
          SkillId: 28
        },
        {
          id: 29,
          mark: 8,
          createdAt: "2022-06-13 12:31:45",
          updatedAt: "2022-04-17 10:41:37",
          CandidateId: 29,
          SkillId: 29
        },
        {
          id: 30,
          mark: 6,
          createdAt: "2022-07-10 06:46:02",
          updatedAt: "2022-01-25 11:44:28",
          CandidateId: 30,
          SkillId: 30
        },
        {
          id: 31,
          mark: 10,
          createdAt: "2022-06-02 08:21:47",
          updatedAt: "2022-05-18 13:54:23",
          CandidateId: 31,
          SkillId: 31
        },
        {
          id: 32,
          mark: 2,
          createdAt: "2022-02-02 20:42:24",
          updatedAt: "2022-03-15 07:09:59",
          CandidateId: 32,
          SkillId: 32
        },
        {
          id: 33,
          mark: 10,
          createdAt: "2022-06-20 00:12:43",
          updatedAt: "2022-04-08 04:30:58",
          CandidateId: 33,
          SkillId: 33
        },
        {
          id: 34,
          mark: 4,
          createdAt: "2022-02-16 05:12:00",
          updatedAt: "2022-03-29 15:26:37",
          CandidateId: 34,
          SkillId: 34
        },
        {
          id: 35,
          mark: 8,
          createdAt: "2022-11-20 10:18:16",
          updatedAt: "2022-02-18 14:34:17",
          CandidateId: 35,
          SkillId: 35
        },
        {
          id: 36,
          mark: 7,
          createdAt: "2022-02-19 09:28:05",
          updatedAt: "2022-06-28 21:18:33",
          CandidateId: 36,
          SkillId: 36
        },
        {
          id: 37,
          mark: 4,
          createdAt: "2022-08-15 02:05:22",
          updatedAt: "2022-12-25 01:35:23",
          CandidateId: 37,
          SkillId: 37
        },
        {
          id: 38,
          mark: 8,
          createdAt: "2022-07-02 07:30:33",
          updatedAt: "2022-03-05 13:40:09",
          CandidateId: 38,
          SkillId: 38
        },
        {
          id: 39,
          mark: 9,
          createdAt: "2022-06-28 15:53:05",
          updatedAt: "2022-02-01 10:32:32",
          CandidateId: 39,
          SkillId: 39
        },
        {
          id: 40,
          mark: 7,
          createdAt: "2022-09-09 16:54:03",
          updatedAt: "2022-05-07 08:35:17",
          CandidateId: 40,
          SkillId: 40
        },
        {
          id: 41,
          mark: 4,
          createdAt: "2022-08-02 18:50:16",
          updatedAt: "2022-10-11 12:02:19",
          CandidateId: 41,
          SkillId: 41
        },
        {
          id: 42,
          mark: 1,
          createdAt: "2022-05-01 04:41:26",
          updatedAt: "2022-01-18 05:46:15",
          CandidateId: 42,
          SkillId: 42
        },
        {
          id: 43,
          mark: 9,
          createdAt: "2022-03-10 00:34:06",
          updatedAt: "2022-01-01 04:43:33",
          CandidateId: 43,
          SkillId: 43
        },
        {
          id: 44,
          mark: 8,
          createdAt: "2022-11-19 01:54:55",
          updatedAt: "2022-10-18 15:32:27",
          CandidateId: 44,
          SkillId: 44
        },
        {
          id: 45,
          mark: 6,
          createdAt: "2022-02-12 10:15:03",
          updatedAt: "2022-10-03 03:18:05",
          CandidateId: 45,
          SkillId: 45
        },
        {
          id: 46,
          mark: 3,
          createdAt: "2022-07-01 05:12:51",
          updatedAt: "2022-07-07 23:01:02",
          CandidateId: 46,
          SkillId: 46
        },
        {
          id: 47,
          mark: 4,
          createdAt: "2022-05-03 08:02:58",
          updatedAt: "2022-05-02 04:58:01",
          CandidateId: 47,
          SkillId: 47
        },
        {
          id: 48,
          mark: 6,
          createdAt: "2022-03-01 08:39:50",
          updatedAt: "2022-07-01 05:08:49",
          CandidateId: 48,
          SkillId: 48
        },
        {
          id: 49,
          mark: 9,
          createdAt: "2022-11-16 19:49:49",
          updatedAt: "2022-04-28 05:30:02",
          CandidateId: 49,
          SkillId: 49
        },
        {
          id: 50,
          mark: 4,
          createdAt: "2022-03-14 10:45:29",
          updatedAt: "2022-10-14 23:38:23",
          CandidateId: 50,
          SkillId: 50
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
