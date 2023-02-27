export const Loading = () => {
  return (
    <div className='flex h-[20vh] items-center justify-center'>
      <div className='lds-ellipsis translate-x-[-39px]'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
