import { Request, RequestHandler, Response } from "express";
import { v4 as uid } from "uuid";
import { DbHelper } from "../helpers/databaseHelper";
import { Ijournal, JournalRequest } from "../models/journal";

const databaseInstance = new DbHelper();
 export const addJournal = async (req: JournalRequest, res: Response) => {
  try {
    const id = uid();
    const { JNAME, JCONTENT, JDATE, CATEGORYID } = req.body;
    await databaseInstance.exec("addJournal", {
      ID: id,
      NAME: JNAME,
      CONTENT: JCONTENT,
      JDATE: JDATE,
      CATEGORYID: CATEGORYID,
    });
    return res.status(201).json({ message: "Journal created successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const getJournals:RequestHandler = async(req, res)=>{
    try {
        const journals = (await databaseInstance.exec("getJournals",{})).recordset as Ijournal[]
        return res.status(200).json(journals)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getJournal=async (req:Request<{id:string}>, res:Response)=>{
    try {
        const journal= (await databaseInstance.exec("getJournal",{ID:req.params.id})).recordset[0] as Ijournal;
        if(journal && journal.ID){
            return res.status(200).json(journal)
        }
        return res.status(404).json({message:"Journal not found"})
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const getJournalbyCategory= async (req:Request<{id:string}>, res:Response) => {
    try {
        const journals = (await databaseInstance.exec("getJournalByCategory",{CATEGORYID:req.params.id})).recordset as Ijournal[];
        // if(journals && journals.CATEGORYID){
            return res.status(200).json(journals)
        // }
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const updateJournal = async(req:Request<{id:string}>, res:Response)=>{
    try {
        const journal = (await databaseInstance.exec("getJournal",{ID:req.params.id})).recordset[0] as Ijournal;
        if(journal && journal.ID){
            const{JNAME,JCONTENT,JDATE,CATEGORYID}=req.body
            await databaseInstance.exec("updateJournal",{
                ID:req.params.id,
                NAME:JNAME,
                CONTENT:JCONTENT,
                JDATE:JDATE,
                CATEGORYID:CATEGORYID
            })
            return res.status(200).json({message:"Journal updated successfully"})
        }
        return res.status(404).json({message:"Journal not found"})
    } catch (error) {
       return res.status(500).json(error) 
    }
}
export const deleteJournal= async (req:Request<{id:string}>, res:Response)=>{
    try {
        const journal= (await databaseInstance.exec("getJournal",{ID:req.params.id})).recordset[0] as Ijournal;
        if(journal && journal.ID){
            await databaseInstance.exec("deleteJournal",{ID:req.params.id});
            return res.status(200).json({message:"Journal deleted successfully"})
        }
        return res.status(404).json({message:"journal not found"})
    } catch (error) {
        return res.status(500).json(error)
    }
}