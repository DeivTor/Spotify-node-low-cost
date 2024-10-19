import express from "express";
const router = express.Router();

router.get("/inicio", (req, res) => {
    res.render("inicio");
});

router.get("/reproductor", (req, res) => {
    res.render("pages/reproductor");
});

export default router;