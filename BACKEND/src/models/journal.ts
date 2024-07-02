import { Request } from "express";

export interface Ijournal {
  ID: string;
 JNAME: string;
  JCONTENT : string;
  JDATE: string;
  CATEGORYID: string;
}
interface addJournal {
  JNAME: string;
  JCONTENT: string;
  JDATE: string;
  CATEGORYID: string;
}
export interface JournalRequest extends Request{
    body:addJournal
}