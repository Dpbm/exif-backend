import {execSync} from 'child_process';

export default function deleteOriginalFiles(){
    try{
      execSync('rm -f tmp/*.*_original');
    }catch(error){
      console.error('error on delete original files --> ', error);
    }
}