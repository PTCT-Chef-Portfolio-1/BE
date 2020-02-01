exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex("users").insert([
    {
      id: 1,
      firstName: "michelle",
      lastName: "obama",
      email: "email.com",
      username: "username1",
      password: "testpassword"
    },
    {
      id: 2,
      firstName: "paul",
      lastName: "simon",
      email: "email.com",
      username: "username2",
      password: "testpassword"
    },
    {
      id: 3,
      firstName: "leonardo",
      lastName: "davinci",
      email: "email.com",
      username: "username3",
      password: "testpassword"
    }
  ]);
};
