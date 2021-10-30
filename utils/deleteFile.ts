import {execSync} from 'child_process';

export default function deleteFile(path:string){
    try{
      execSync(`rm -f ${path}`);
    }catch(error){
      console.error('error on delete file --> ', error, ' path --> ', path);
    }
}