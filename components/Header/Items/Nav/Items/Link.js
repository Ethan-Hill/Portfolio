function Link({ name, link }) {
  return (
    <li className="mb-1">
      <a
        className="transition border-b-2 border-transparent dark:text-white duration-350 hover:border-black dark:hover:border-white"
        href={link}
      >
        {name}
      </a>
    </li>
  )
}

export default Link
