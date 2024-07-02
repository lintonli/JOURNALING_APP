import { Request,RequestHandler,Response } from "express";
import {v4 as uid} from 'uuid'
import { DbHelper } from "../helpers/databaseHelper";
import { CategoryRequest, Icategory } from "../models/category";

const databaseInstance = new DbHelper();
export const addCategory= async(req:CategoryRequest, res:Response)=>{
    try {
        const id = uid();
        const{CNAME}=req.body
        await databaseInstance.exec("addCategory",{
            ID:id,
            NAME:CNAME
        })
        return res.status(201).json({message:"Category created successfully"})
    } catch (error) {
       return res.status(500).json(error) 
    }
}
export const getCategories:RequestHandler= async(req,res)=>{
   try {
    const categories = (await databaseInstance.exec("getCategories", {}))
      .recordset as Icategory[];
    return res.status(200).json(categories);
   } catch (error) {
    return res.status(500).json(error)
   }
}
export const getCategory= async(req:Request<{id:string}>, res:Response)=>{
    try {
        const category = (await databaseInstance.exec("getCategory",{ID:req.params.id})).recordset[0] as Icategory
        if(category && category.ID){
            return res.status(200).json(category)
        }
        return res.status(404).json({message:"Category not found"})
    } catch (error) {
        return res.status(500).json(error)
    }
}