"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Rooms", [
      {
        name: "Uzi hub",
        room_id: 45678,
        profile:
          "https://res.cloudinary.com/depljf8uc/image/upload/v1664959769/cld-sample.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "new hub",
        room_id: 36617526,
        profile:
          "https://res.cloudinary.com/depljf8uc/image/upload/v1668441359/pexels-olga-lioncat-7245333_mxqe6p.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "new tech",
        room_id: 1641546,
        profile:
          "https://res.cloudinary.com/depljf8uc/image/upload/v1668441509/pexels-elijah-o_donnell-7907351_fzergi.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Rooms", null, {});
  },
};
