import express from 'express';

import {
  getAllItems,
  getItemsByName,
  getItemsByQuantity,
  getSortedItems,
  getGroupedItems,
  getItemCount,
  createItem,
  patchItemById,
  updateItemById,
  deleteManyItems,
  deleteItemById,
} from '../controllers/itemController.js';

const router = express.Router();
router.get('/items', getAllItems);
router.get('/items/names', getItemsByName);
router.get('/items/quantity', getItemsByQuantity);
router.get('/items/sorted', getSortedItems);
router.get('/items/grouped', getGroupedItems);
router.get('/items/count', getItemCount);
router.post('/items', createItem);
router.patch('/items/:id', patchItemById);
router.put('/items/:id', updateItemById);
router.delete('/items/deletemany', deleteManyItems);
router.delete('/items/:id', deleteItemById);

export default router;
