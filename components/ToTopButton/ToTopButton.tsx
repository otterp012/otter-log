const ToTopButton = () => {
  return (
    <div className='mt-20 text-center'>
      <a
        className='cursor-pointer px-3 py-5 italic hover:text-yellow-300 '
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        맨 위로가기 ⬆️⬆️
      </a>
    </div>
  );
};

export default ToTopButton;
