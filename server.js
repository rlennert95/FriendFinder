var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./routing/apiRoutes")(app); //saying it is not a function probably because it is not being called yet like htmlRoutes
require("./routing/htmlroutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
