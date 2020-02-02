exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .del()
    .then(function() {
      return knex("users").insert([
        {
          user_id: 1,
          firstName: "michelle",
          lastName: "obama",
          email: "email.com",
          username: "username1",
          password: "testpassword"
        },
        {
          user_id: 2,
          firstName: "paul",
          lastName: "simon",
          email: "email.com",
          username: "username2",
          password: "testpassword"
        },
        {
          user_id: 3,
          firstName: "leonardo",
          lastName: "davinci",
          email: "email.com",
          username: "username3",
          password: "testpassword"
        }
      ]);
    });
};