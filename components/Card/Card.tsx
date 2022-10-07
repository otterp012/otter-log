import Image from "next/future/image";

// component
import { CustomLink } from "components/CustomLink";
import { Tags } from "components/Tags";

// style
import { CardStyles } from "./styles";

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
          <time className='text-gray-400 text-xs font-bold'>{publishedAt}</time>
          <CustomLink href={slug}>
            {isVerticalCard ? (
              <h3 className={style.title}>{title}</h3>
            ) : (
              <h2 className={style.title}>{title}</h2>
            )}
          </CustomLink>
          {isVerticalCard && tags && <Tags tags={tags} />}
        </div>
        <p className={style.description}>{description}</p>
      </div>
    </section>
  );
};

export default Card;
