

import { Client, Account,Databases,Avatars,Storage } from "appwrite";
import envProps from "@/app/env";

const client = new Client()
    .setEndpoint(envProps.appwrite.endpoint) // Your API Endpoint
    .setProject(envProps.appwrite.projectId)// Your project ID


const database = new Databases(client)
const avatar = new Avatars(client)
const storages = new Storage(client) 
const account = new Account(client);

export {database,avatar,storages,account,client}