'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Positions', 
      [
        {
          id: 1,
          title: "Research Assistant II",
          description: "Accounting",
          createdAt: "2022-07-14 13:13:12",
          updatedAt: "2022-12-22 05:58:26",
          HRUserId: 1
        },
        {
          id: 2,
          title: "Account Coordinator",
          description: "Product Management",
          createdAt: "2022-06-12 03:19:01",
          updatedAt: "2022-08-24 21:28:38",
          HRUserId: 2
        },
        {
          id: 3,
          title: "Librarian",
          description: "Training",
          createdAt: "2022-10-14 22:39:34",
          updatedAt: "2022-10-21 14:31:16",
          HRUserId: 3
        },
        {
          id: 4,
          title: "Research Assistant IV",
          description: "Accounting",
          createdAt: "2022-08-19 18:51:23",
          updatedAt: "2022-03-03 18:40:08",
          HRUserId: 4
        },
        {
          id: 5,
          title: "Nuclear Power Engineer",
          description: "Services",
          createdAt: "2022-10-23 16:08:44",
          updatedAt: "2022-10-14 14:54:42",
          HRUserId: 5
        },
        {
          id: 6,
          title: "Information Systems Manager",
          description: "Human Resources",
          createdAt: "2022-12-25 13:14:00",
          updatedAt: "2022-11-05 17:50:12",
          HRUserId: 6
        },
        {
          id: 7,
          title: "Sales Associate",
          description: "Legal",
          createdAt: "2022-06-26 03:12:30",
          updatedAt: "2022-11-15 17:08:55",
          HRUserId: 7
        },
        {
          id: 8,
          title: "Professor",
          description: "Training",
          createdAt: "2022-10-17 08:38:36",
          updatedAt: "2022-09-06 00:57:12",
          HRUserId: 8
        },
        {
          id: 9,
          title: "Assistant Professor",
          description: "Legal",
          createdAt: "2022-05-06 03:32:13",
          updatedAt: "2022-05-15 06:19:48",
          HRUserId: 9
        },
        {
          id: 10,
          title: "Systems Administrator II",
          description: "Accounting",
          createdAt: "2022-12-02 23:59:24",
          updatedAt: "2022-07-01 21:11:53",
          HRUserId: 10
        },
        {
          id: 11,
          title: "Data Coordiator",
          description: "Support",
          createdAt: "2022-10-10 09:44:20",
          updatedAt: "2022-10-30 09:59:37",
          HRUserId: 11
        },
        {
          id: 12,
          title: "Research Associate",
          description: "Services",
          createdAt: "2022-01-08 22:53:32",
          updatedAt: "2022-06-23 15:45:53",
          HRUserId: 12
        },
        {
          id: 13,
          title: "Human Resources Assistant III",
          description: "Legal",
          createdAt: "2022-10-16 04:19:01",
          updatedAt: "2022-11-30 13:55:48",
          HRUserId: 13
        },
        {
          id: 14,
          title: "Quality Engineer",
          description: "Marketing",
          createdAt: "2022-05-03 01:50:06",
          updatedAt: "2022-11-23 04:28:59",
          HRUserId: 14
        },
        {
          id: 15,
          title: "Business Systems Development Analyst",
          description: "Accounting",
          createdAt: "2022-09-13 03:37:35",
          updatedAt: "2022-06-03 02:49:14",
          HRUserId: 15
        },
        {
          id: 16,
          title: "Senior Sales Associate",
          description: "Marketing",
          createdAt: "2022-04-27 07:23:49",
          updatedAt: "2022-08-05 19:04:10",
          HRUserId: 16
        },
        {
          id: 17,
          title: "Administrative Officer",
          description: "Training",
          createdAt: "2022-07-07 05:13:45",
          updatedAt: "2022-01-02 23:41:51",
          HRUserId: 17
        },
        {
          id: 18,
          title: "Software Engineer III",
          description: "Services",
          createdAt: "2022-12-04 16:33:25",
          updatedAt: "2022-10-22 05:43:26",
          HRUserId: 18
        },
        {
          id: 19,
          title: "Registered Nurse",
          description: "Product Management",
          createdAt: "2022-06-16 13:51:52",
          updatedAt: "2022-12-16 06:45:32",
          HRUserId: 19
        },
        {
          id: 20,
          title: "Associate Professor",
          description: "Sales",
          createdAt: "2022-03-01 23:13:10",
          updatedAt: "2022-06-15 14:41:35",
          HRUserId: 20
        },
        {
          id: 21,
          title: "Human Resources Manager",
          description: "Research and Development",
          createdAt: "2022-08-14 20:12:18",
          updatedAt: "2022-07-23 10:24:34",
          HRUserId: 21
        },
        {
          id: 22,
          title: "Human Resources Manager",
          description: "Accounting",
          createdAt: "2022-06-28 06:13:54",
          updatedAt: "2022-11-22 10:34:53",
          HRUserId: 22
        },
        {
          id: 23,
          title: "Engineer IV",
          description: "Product Management",
          createdAt: "2022-08-03 00:53:06",
          updatedAt: "2022-12-01 02:46:42",
          HRUserId: 23
        },
        {
          id: 24,
          title: "Mechanical Systems Engineer",
          description: "Marketing",
          createdAt: "2022-11-13 15:30:20",
          updatedAt: "2022-08-15 18:49:14",
          HRUserId: 24
        },
        {
          id: 25,
          title: "Payment Adjustment Coordinator",
          description: "Human Resources",
          createdAt: "2022-09-06 04:33:22",
          updatedAt: "2022-04-13 00:19:26",
          HRUserId: 25
        },
        {
          id: 26,
          title: "Food Chemist",
          description: "Services",
          createdAt: "2022-07-11 04:22:03",
          updatedAt: "2022-08-10 00:11:01",
          HRUserId: 26
        },
        {
          id: 27,
          title: "Registered Nurse",
          description: "Accounting",
          createdAt: "2022-11-24 05:58:26",
          updatedAt: "2022-08-21 05:03:36",
          HRUserId: 27
        },
        {
          id: 28,
          title: "Research Assistant II",
          description: "Accounting",
          createdAt: "2022-09-22 10:45:59",
          updatedAt: "2022-09-05 20:07:13",
          HRUserId: 28
        },
        {
          id: 29,
          title: "Executive Secretary",
          description: "Legal",
          createdAt: "2022-09-04 01:48:24",
          updatedAt: "2022-04-22 10:44:28",
          HRUserId: 29
        },
        {
          id: 30,
          title: "Design Engineer",
          description: "Training",
          createdAt: "2022-08-10 12:57:45",
          updatedAt: "2022-07-23 12:40:26",
          HRUserId: 30
        },
        {
          id: 31,
          title: "Account Coordinator",
          description: "Legal",
          createdAt: "2022-10-07 18:01:17",
          updatedAt: "2022-08-06 13:55:56",
          HRUserId: 31
        },
        {
          id: 32,
          title: "Biostatistician II",
          description: "Engineering",
          createdAt: "2022-06-14 15:09:27",
          updatedAt: "2022-11-25 01:44:22",
          HRUserId: 32
        },
        {
          id: 33,
          title: "Safety Technician I",
          description: "Training",
          createdAt: "2022-05-11 01:54:36",
          updatedAt: "2022-10-21 23:38:12",
          HRUserId: 33
        },
        {
          id: 34,
          title: "Staff Accountant II",
          description: "Training",
          createdAt: "2022-01-30 09:47:22",
          updatedAt: "2022-06-04 13:12:55",
          HRUserId: 34
        },
        {
          id: 35,
          title: "GIS Technical Architect",
          description: "Training",
          createdAt: "2022-11-01 18:46:49",
          updatedAt: "2022-04-17 03:22:28",
          HRUserId: 35
        },
        {
          id: 36,
          title: "Teacher",
          description: "Accounting",
          createdAt: "2022-05-23 07:43:13",
          updatedAt: "2022-01-25 20:45:16",
          HRUserId: 36
        },
        {
          id: 37,
          title: "Nurse",
          description: "Support",
          createdAt: "2022-01-10 11:34:03",
          updatedAt: "2022-11-08 06:30:17",
          HRUserId: 37
        },
        {
          id: 38,
          title: "Analyst Programmer",
          description: "Training",
          createdAt: "2022-02-21 09:00:04",
          updatedAt: "2022-07-17 03:46:30",
          HRUserId: 38
        },
        {
          id: 39,
          title: "Geologist I",
          description: "Product Management",
          createdAt: "2022-03-10 17:43:07",
          updatedAt: "2022-08-16 08:35:55",
          HRUserId: 39
        },
        {
          id: 40,
          title: "Software Test Engineer IV",
          description: "Sales",
          createdAt: "2022-03-05 23:20:14",
          updatedAt: "2022-06-22 23:59:12",
          HRUserId: 40
        },
        {
          id: 41,
          title: "Environmental Specialist",
          description: "Human Resources",
          createdAt: "2022-02-13 06:19:12",
          updatedAt: "2022-07-10 13:42:12",
          HRUserId: 41
        },
        {
          id: 42,
          title: "Pharmacist",
          description: "Business Development",
          createdAt: "2022-12-05 12:01:19",
          updatedAt: "2022-11-14 13:32:27",
          HRUserId: 42
        },
        {
          id: 43,
          title: "Senior Sales Associate",
          description: "Research and Development",
          createdAt: "2022-06-02 23:20:20",
          updatedAt: "2022-10-15 04:16:41",
          HRUserId: 43
        },
        {
          id: 44,
          title: "Environmental Tech",
          description: "Business Development",
          createdAt: "2022-02-17 12:42:27",
          updatedAt: "2021-12-27 11:06:06",
          HRUserId: 44
        },
        {
          id: 45,
          title: "Design Engineer",
          description: "Marketing",
          createdAt: "2022-08-18 11:06:47",
          updatedAt: "2022-11-20 19:37:21",
          HRUserId: 45
        },
        {
          id: 46,
          title: "Marketing Assistant",
          description: "Business Development",
          createdAt: "2022-02-22 06:19:47",
          updatedAt: "2022-10-14 12:55:10",
          HRUserId: 46
        },
        {
          id: 47,
          title: "General Manager",
          description: "Support",
          createdAt: "2022-09-10 15:55:57",
          updatedAt: "2022-11-18 07:57:21",
          HRUserId: 47
        },
        {
          id: 48,
          title: "Sales Representative",
          description: "Research and Development",
          createdAt: "2021-12-26 09:28:25",
          updatedAt: "2022-09-21 08:43:23",
          HRUserId: 48
        },
        {
          id: 49,
          title: "Research Assistant II",
          description: "Business Development",
          createdAt: "2022-08-17 01:10:33",
          updatedAt: "2022-03-09 00:46:56",
          HRUserId: 49
        },
        {
          id: 50,
          title: "Statistician II",
          description: "Training",
          createdAt: "2022-08-29 16:20:51",
          updatedAt: "2022-07-24 07:02:32",
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
