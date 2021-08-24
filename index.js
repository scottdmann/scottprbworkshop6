  // importing express framework
    const express = require("express");

    const app = express();

    // Respond with "hello world" for requests that hit our root "/"
    app.get("/", function (req, res) {
     return res.send("Helloo World");
    });

    // listen to port 8000 by default
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running port 8000");
    });

    module.exports = app;