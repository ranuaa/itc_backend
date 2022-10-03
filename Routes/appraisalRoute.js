import express from 'express'
import { addNewAppraisal, deleteAppraisal, editAppraisal, getAllAppraisal, getSingleAppraisal } from '../Controllers/AppraisalController.js';

const router = express.Router();

router.get('/', getAllAppraisal)
router.get('/:id', getSingleAppraisal)
router.post('/', addNewAppraisal)
router.put('/:id', editAppraisal)
router.delete('/:id', deleteAppraisal)

export default router