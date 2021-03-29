function Image({ src, github }) {
  return (
    <a href={github} target="_blank">
      <img
        src={src}
        className="w-auto transition-all transform h-52 hover:scale-105"
      />
    </a>
  )
}

export default Image
