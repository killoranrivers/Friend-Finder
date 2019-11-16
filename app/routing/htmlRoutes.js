const path = require("path");

module.exports = function (app) {
    app.get("/", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/html/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/survey.html"));
    });
};