import { Router } from "express";
import { addJournal, deleteJournal, getJournal, getJournalbyCategory, getJournals, updateJournal } from "../controllers/journalcontroller";
import { verifyTokens } from "../middlewares";
const journalRoute=Router()

journalRoute.post("", verifyTokens, addJournal)
journalRoute.get("", verifyTokens, getJournals);
journalRoute.get("/:id", verifyTokens, getJournal);
journalRoute.get("/category/:id", verifyTokens, getJournalbyCategory);
journalRoute.patch("/:id", verifyTokens, updateJournal);
journalRoute.delete("/:id", verifyTokens, deleteJournal);
export default journalRoute