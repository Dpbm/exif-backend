import * as fs from 'fs';

export default function getFile(path:string){
    try{
      return fs.readFileSync(path, {encoding: 'base64'});
    }catch(error){
      return 'Error'
    }
}