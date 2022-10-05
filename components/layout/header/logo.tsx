import Link from "next/link";

const Logo = () => {
  return (
    <h1 aria-label='otter-log'>
      <Link href='/'>
        <a className='text-3xl font-extrabold italic'>OTTER-LOG</a>
      </Link>
    </h1>
  );
};

export default Logo;
