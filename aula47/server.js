const app = require("./cmd/app")
const port = 3000;
app.listen(port, () => {
    console.log(`Order API listening at http://localhost:${port}`);
  });