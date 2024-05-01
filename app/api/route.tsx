import path from "path";
import { cwd } from "process";
import fs from "fs"



export async function GET(request: Request){


    const filePath = path.join(cwd(),'data','products.json');

    const jsonData =  fs.readFileSync(filePath,'utf-8');

    const extracktedData = JSON.parse(jsonData);

    return new Response(JSON.stringify(extracktedData)) ;
        
}