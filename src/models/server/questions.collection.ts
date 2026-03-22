import { Permission } from "node-appwrite";
import {db, questionCollection} from  "../name"
import {databases} from "./config"

export default async function createQuestionnCollection() {
  await databases.createCollection( 
    db,
    questionCollection,
    questionCollection,
    [
        Permission.read("any"),
        Permission.create("any"),
        Permission.update("users"),
        Permission.delete("users")
    ]);

    console.log("Question collcetion is created");


    await Promise.all([
        databases.createStringAttribute(db,questionCollection,"title",100,true),
        databases.createStringAttribute(db,questionCollection,"content",1000,true),
        databases.createStringAttribute(db,questionCollection,"authorID",50,true),
        databases.createStringAttribute(db,questionCollection,"tags",500,true,undefined,true),
        databases.createStringAttribute(db,questionCollection,"attachmentID",50,false)


    ]);

    console.log("attributes created");
    
    
}

