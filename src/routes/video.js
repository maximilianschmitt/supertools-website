const docs = app => {
    app.get("/video", (req, res) => {
        res.render("video");
    });

    app.get("/video-2", (req, res) => {
        res.render("video-2");
    });
};

module.exports = docs;
