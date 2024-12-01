import { Request, Response, NextFunction } from "express";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import imageService from "../services/image-service";
import { CustomError } from "../utils/error";
import {
  AWS_S3_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
} from "../config";

const s3Client = new S3Client({
  region: AWS_S3_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID as string,
    secretAccessKey: AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function uploadImage(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  // try {
  //   let result;

  //   if (req.file) {
  //     result = await imageService.uploadGoogleCloud(req.file);
  //   } else {
  //     throw new CustomError(40067);
  //   }

  //   res.status(201).send(result);
  // } catch (err) {
  //   next(err);
  // }

  try {
    if (!req.file) {
      throw new CustomError(40067);
    }

    const file = req.file;
    const bucketName = process.env.AWS_S3_BUCKET_NAME;

    if (!bucketName) {
      throw new CustomError(50000);
    }

    const uploadParams = {
      Bucket: bucketName,
      Key: `${Date.now()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const result = await s3Client.send(new PutObjectCommand(uploadParams));
    const uploadedImageUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${uploadParams.Key}`;

    res.status(201).send({
      message: "Image uploaded successfully",
      url: uploadedImageUrl,
      s3Result: result,
    });
  } catch (err) {
    next(err);
  }
}

export default { uploadImage };
