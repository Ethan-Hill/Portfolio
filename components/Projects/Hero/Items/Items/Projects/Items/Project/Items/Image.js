function Image({ src, website }) {
  return (
    <a href={website} target="_blank">
      <img
        src={src}
        className="w-auto transition-all transform h-52 hover:scale-105"
      />
    </a>
  )
}

export default Image
