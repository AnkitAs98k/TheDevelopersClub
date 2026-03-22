import envProps from "@/app/env";

import { Client, Account,Databases,Avatars,Storage } from "node-appwrite";

let client = new Client();

client
    .setEndpoint(envProps.appwrite.endpoint) // Your API Endpoint
    .setProject(envProps.appwrite.projectId) // Your project ID
    .setKey(envProps.appwrite.apiKey) // Your secret API key
   
const databases = new Databases(client)
const avatar = new Avatars(client)
const storages = new Storage(client) 
const account = new Account(client);

export {databases,avatar,storages,account,client}