const server = require("./app");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

//console.log(process);

const port = process.env.PORT;

server.listen(port, "127.0.0.1", () => {
  console.log(`Server is running on port ${port}`);
});
