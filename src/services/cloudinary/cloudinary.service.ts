import { Injectable, BadRequestException } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: 'dawd1afyx',
      api_key: '243522263953495',
      api_secret: 'SyGjMuaUlmLq22hRIai4tjDzVco',
    });
  }

  async uploadFile(
    file: Express.Multer.File,
  ): Promise<{ url: string; fileType: string }> {
    if (!file) throw new BadRequestException('No file uploaded');
    let fileType: string;
    if (file.mimetype.startsWith('image/')) {
      fileType = 'IMAGE';
    } else if (file.mimetype === 'application/pdf') {
      fileType = 'PDF';
    } else {
      throw new BadRequestException(
        'Invalid file type. Only images and PDFs are allowed',
      );
    }

    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: 'auto', folder: 'pass_questions' },
          (error, result: UploadApiResponse) => {
            if (error) return reject(error);
            resolve({ url: result.secure_url, fileType });
          },
        )
        .end(file.buffer);
    });
  }
}
