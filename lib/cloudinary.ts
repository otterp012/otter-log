import { v2 as cloudinary } from "cloudinary";

export const uploadImage = async (encoded: string, options: any) => {
  let url;
  try {
    const response = await cloudinary.uploader.upload(encoded, options);
    url = response.url;
  } catch (error) {
    console.error(error);
    url = "";
  } finally {
    return url;
  }
};

export const connectCloudinary = () => {
  const NAME = process.env.CLOUDINARY_NAME;
  const KEY = process.env.CLOUDINARY_KEY;
  const SECRET = process.env.CLOUDINARY_SECRET;

  cloudinary.config({
    cloud_name: NAME,
    api_key: KEY,
    api_secret: SECRET,
  });
};
