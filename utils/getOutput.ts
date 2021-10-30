export default function getOutputFromExiftoolCommand(output:string){
    if(output.includes('unchanged')){ return 'nothing to do, your file is clean!' }
    else if(output.includes('updated')){ return 'file clean' }
    else if(output.includes('file is not supported')){ return 'file is not supported!' }
    else if(output.includes('Error')){ return 'Error' }
    else { return ':|' }
}