const express = require("express");
const router = express.Router();

const {
  getAll,
  getCod,
  getId,
  getEdit,
  getDelete,
  getSobre,
} = require("../controllers/alunosControllers.js");

router.get("/", getAll);
router.get("/edit", getEdit);
router.get("/sobre", getSobre);
router.get("/:cod", getCod);
router.get("/editar/:cod", getId);
router.get("/delete/:cod", getDelete);

module.exports = router;
