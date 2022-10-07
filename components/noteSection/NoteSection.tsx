// type
type Props = {
  data: {
    created_time: string;
    description: string;
    id?: string;
    title: string;
    url: string;
  }[];
};

const NoteSection: React.FC<Props> = ({ data }) => {
  return (
    <section className='grayed-border mt-5 border px-5 py-5'>
      <ul className='w-full space-y-3'>
        {data.map(({ id, url, title, description, created_time }) => (
          <li key={id}>
            <a
              target='_black'
              href={url}
              className='grayed-border hover:text-yellow-400 flex w-full items-center justify-between border-b'
            >
              <div className='keep-all min-w-[70%] md:min-w-[40%]'>{title}</div>
              <p className='hidden md:block md:min-w-[40%]'>{description}</p>
              <time className='min-w-[30%] text-right text-xs md:min-w-[15%]'>
                {new Date(created_time).toLocaleDateString("ko-kr", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </time>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default NoteSection;
