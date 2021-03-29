function Image() {
  return (
    <div className="px-5 my-5 tablet:my-0 md:px-12">
      <img
        src="/me.jpg"
        className="relative z-10 w-[260px]  md:w-[260px] h-[630px] md:h-[630px]"
        alt="Me"
      />
    </div>
  )
}

export default Image
