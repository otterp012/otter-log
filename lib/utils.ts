import https from "https";

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

export const parseHeading = (heading: string) => {
  const regexp = /[^ㄱ-ㅎ가-힣A-Za-z0-9\s]/g;
  // 공백과, 문자를 제외한 나머지 제거

  // trim을 통해 맨 앞 공백 제거
  return heading.replace(regexp, "").trim();
};

export const getRevisedImageUrl = ({
  src,
  cropping = "thumb",
  width = 600,
  height = 400,
  format = "webp",
}: {
  src: string;
  cropping?: string;
  width?: number | "auto";
  height?: number | "auto";
  format?: "webp" | "jpg" | "auto";
}) => {
  if (src.includes("s3.us-west-2.amazonaws")) return src;
  if (src.includes("gif")) return src;

  const prefixIndex = src.lastIndexOf("upload");
  const prefix = src.slice(0, prefixIndex);
  const restUrl = src.replace(prefix, "").replace("upload/", "");
  const resizedUrl =
    prefix +
    `upload/c_${cropping},h_${height},w_${width}/f_${format}/` +
    restUrl;
  return resizedUrl;
};
