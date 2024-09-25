const express = require("express");
const router = express.Router();

const {
  getAll,
  getCod,
  getId,
  getSobre,
} = require("../controllers/candidatosControllers.js");

router.get("/", getAll);
router.get("/sobre", getSobre);
router.get("/:cod", getCod);
router.get("/editar/:id", getId);

module.exports = router;
