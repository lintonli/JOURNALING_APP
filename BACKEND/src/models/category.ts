import { Request } from "express";

export interface Icategory{
    ID:string;
    CNAME:string
}
interface addCategory{
    CNAME:string
}

export interface CategoryRequest extends Request{
    body:addCategory
}