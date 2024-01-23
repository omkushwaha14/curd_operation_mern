import express from "express"
import {postRegisters, getRegisters, deleteRegisters, updateRegisters} from "../controllers/registerController.js";

const router= express.Router();

router.route("/registers").post(postRegisters);

router.route("/getregister").get(getRegisters);

router.route("/deleteregister/:id").delete(deleteRegisters);

router.route("/updateregister/:id").put(updateRegisters);

export default router;