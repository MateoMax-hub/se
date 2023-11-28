import express from "express";
import { getRequestsLists, postNewReq, patchCount } from "../controllers/requests.js";

const router = express.Router()

router.get('/requests', getRequestsLists)
router.post('/requests', postNewReq)
router.patch('/requests/:reqId', patchCount)

export default router;
