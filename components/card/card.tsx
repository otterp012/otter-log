import Image from "next/future/image";

// components
import { CustomLink, Tags } from "components";

// styles
import { CardStyles } from "./styles";
import { wordBreak } from "styles/extraStyle";

export type Props = {
  title: string;
  description: string;
  publishedAt?: string;
  thumbnailImg: string;
  slug: string;
  isFeatured?: boolean;
  tags?: string[];
  cardType: "verticalCard" | "featuredCard";
};

const Card: React.FC<Props> = ({
  title,
  publishedAt,
  description,
  thumbnailImg,
  slug,
  tags,
  cardType,
}) => {
  const style = CardStyles[cardType];
  const isVerticalCard = cardType === "verticalCard";

  return (
    <section className={style.section}>
      <CustomLink href={slug}>
        <Image
          src={thumbnailImg}
          alt={title}
          width={1000}
          height={1000}
          className={style.image}
          placeholder={isVerticalCard ? "blur" : undefined}
          blurDataURL={
            isVerticalCard
              ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDPT/DwAD3gHy5v4ozQAAAABJRU5ErkJggg=="
              : undefined
          }
          loading={isVerticalCard ? "lazy" : "eager"}
        />
      </CustomLink>
      <div className={style.textWrapper}>
        <div className={style.textUpperWrapper}>
          <time className='text-xs font-bold text-gray-400'>{publishedAt}</time>
          <CustomLink href={slug}>
            {isVerticalCard ? (
              <h3 className={style.title} style={wordBreak}>
                {title}
              </h3>
            ) : (
              <h2 className={style.title} style={wordBreak}>
                {title}
              </h2>
            )}
          </CustomLink>
          {isVerticalCard && tags && <Tags tags={tags} />}
        </div>
        <p className={style.description} style={wordBreak}>
          {description}
        </p>
      </div>
    </section>
  );
};

export default Card;
