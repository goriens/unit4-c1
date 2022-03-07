const express = require("express");
const app = express();
//console.log(app)
app.use(logger);
app.use(checkPermission);
app.get("/books", (req, res) => {
    return res.send({ route: "/books" });
});
app.get("/libraries", (req, res) => {
    return res.send({ route: "/libraries", permission: req.role });
});
app.get("/authors", (req, res) => {
    return res.send({ route: "/authors", permission: req.role });
})

function logger(req, res, next) {
    console.log(req.path);
    next();
}
function checkPermission(req, res, next) {
    if (req.path === "/libraries") {
        req.role = true;
    }
    else if (req.path === "/authors") {
        req.role = true;
    }
    next();
}

app.listen(5000, () => {
    console.log("Listening on port 5000");
});