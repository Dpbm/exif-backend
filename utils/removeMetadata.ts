import { execSync } from 'child_process';

export default function removeMetadata(path:string){
    try{
      return execSync(`./exiftool/exiftool -all= ${path}`, { encoding: 'utf8' });
    }catch(error){
      return String(error);
    }
  } 
  