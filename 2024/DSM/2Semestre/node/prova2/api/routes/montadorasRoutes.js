const express = require("express");
const router = express.Router();

const {
  getAll,
  getId,
  montadoraHome,
} = require("../controllers/montadorasControllers");

router.get("/", getAll);
router.get("/editar/:id", getId);
router.get("/home", montadoraHome);

module.exports = router;
