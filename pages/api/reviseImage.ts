import type { NextApiRequest, NextApiResponse } from "next";

import {
  getAllBlocksById,
  getPage,
  updateBlockImage,
  updateCoverImage,
} from "lib/notion";

import { uploadImage, connectCloudinary } from "lib/cloudinary";
import { downloadImageToBase64 } from "lib/utils";

type Block = {
  type: string;
  image: {
    type: string;
    file: {
      url: string;
    };
  };
  id: string;
};

const IMAGE_PASSWORD = process.env.IMAGE_PASSWORD;
const UPLOAD_IMAGE_PREFIX = `data:image/jpeg;base64,`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const inputPassword = req.headers["x-images-passcode"];
  const { slug } = req.body;

  if (!inputPassword || inputPassword !== IMAGE_PASSWORD) {
    return res.status(400).json({
      message: "유효한 비밀번호가 아닙니다.",
    });
  }

  const page = await getPage(slug);

  if (!page) return res.status(400).json({ error: "유효한 경로가 아닙니다." });

  // -- cover 이미지와 블록들 안에 있는 이미지들 모으기.
  const cover =
    page?.cover.type === "file"
      ? {
          id: page.id,
          coverUrl: page.cover.file.url,
          imgId: page.id.replace(/-/g, ""),
        }
      : null;

  const blocks = (await getAllBlocksById(page.id)) as Block[];

  const candidates = blocks
    .filter((block) => "type" in block && block.type === "image")
    .filter((block) => "image" in block && block.image.type === "file")
    .map((block) => {
      return {
        id: block.id,
        url: block.image.file.url,
        imgId: block.id.replace(/-/g, ""),
      };
    });

  if (!candidates.length && cover)
    return res.status(200).json({
      message: "수정할 이미지가 없습니다.",
    });

  // --------------------------------
  connectCloudinary();

  if (cover) {
    const { id, coverUrl, imgId } = cover;

    const base64 = downloadImageToBase64(coverUrl);

    const url = await uploadImage(UPLOAD_IMAGE_PREFIX + base64, {
      public_id: imgId,
      folder: `blog/${id}`,
    });

    await updateCoverImage(id, url);
  }

  for (const candidate of candidates) {
    const { id, url: candidateUrl, imgId } = candidate;

    const base64 = downloadImageToBase64(candidateUrl);

    const url = await uploadImage(UPLOAD_IMAGE_PREFIX + base64, {
      public_id: imgId,
      folder: `blog/${id}`,
    });

    await updateBlockImage(id, url);
  }

  return res.status(200).json({
    message: `${slug}의 이미지를 수정했습니다.`,
  });
}

// to-do 중복코드 수정
