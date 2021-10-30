import { Request, Response } from 'express';
import { FileProps, FilesPropsToReturn } from '../interfaces/files';
import deleteFile from '../utils/deleteFile';
import deleteOriginalFiles from '../utils/deleteOriginals';
import getFile from '../utils/getFinalFile';
import getOutputFromExiftoolCommand from '../utils/getOutput';
import removeMetadata from '../utils/removeMetadata';

export default function files(request:Request, response:Response){
    const {files}:any = request;

    if(files.length <= 0){ return response.status(400).send({message:"insert a file!"}); }

    const filesToMap = files.map((file:FileProps) => ({path:file.path, filename:file.originalname}))

    const results = filesToMap.map((file:FilesPropsToReturn) =>
        (
        {
            status: getOutputFromExiftoolCommand(removeMetadata(file.path)), 
            filename: file.filename,
            file: getFile(file.path)
        }
        )
    );

    deleteOriginalFiles();

    filesToMap.forEach((file:FilesPropsToReturn) => {deleteFile(file.path);})
    
    return response.status(200).send(results);
}