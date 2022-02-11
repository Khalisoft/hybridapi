import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
@Injectable()

export class CloudinaryService {
  
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    
    return new Promise((resolve, reject) => {
        const options = {
            folder:process.env.CLOUDFOLDER,
            width: 240, crop: "scale"
        }
      const upload = v2.uploader.upload_stream(options, ( error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    
      toStream(file.buffer).pipe(upload,{

      });
    });
  }
  
  async uploadBook(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    
    return new Promise((resolve, reject) => {
        const options = {
            folder:process.env.CLOUDBOOKSFOLDER,
        }
      const upload = v2.uploader.upload_stream(options, ( error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    
        toStream(file.buffer).pipe(upload,{

      });
    });
  }
  
  async uploadImageToPdf(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    
    return new Promise((resolve, reject) => {
        const options = {
            folder:process.env.CLOUDFOLDER,
            width: 240, crop: "scale"
        }
      const upload = v2.uploader.upload_stream(options, ( error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    
      toStream(file.buffer).pipe(upload,{

      });
    });
  }
}