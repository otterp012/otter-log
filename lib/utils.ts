import https from "https";
const gifFrames = require("gif-frames");

export const downloadImageToBase64 = (url: string) => {
  return new Promise((resolve, reject) => {
    const req = https.request(url, (response) => {
      const chunks: any[] = [];

      response.on("data", function (chunk) {
        chunks.push(chunk);
      });

      response.on("end", function () {
        const result = Buffer.concat(chunks);
        resolve(result.toString("base64"));
      });
    });
    req.on("error", reject);
    req.end();
  });
};

export const downloadGifToBase64 = async (url: string) => {
  const response = await gifFrames({
    url: url,
    frames: "0",
  });

  const image = await response[0].getImage();
  const base64 = await image.read().toString("base64");

  return base64;
};

export const linkHandler = (
  e: React.MouseEvent<HTMLAnchorElement>,
  slug: string,
) => {
  e.preventDefault();
  document &&
    document.getElementById(slug)?.scrollIntoView({
      behavior: "smooth",
    });
};

export const scrollTopHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
