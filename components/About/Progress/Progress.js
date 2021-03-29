import useScrollPosition from "@hooks/useScrollPosition.js"
import BoxEmpty from "./Items/BoxEmpty"
import BoxFilled from "./Items/BoxFilled"

function Progress() {
  const scrollPos = useScrollPosition()
  if (scrollPos < 900) {
    return (
      <div className="fixed hidden xl:flex flex-col justify-between items-center w-6 h-36 right-[5%] top-1/2 ">
        <div>
          <a href="/about#hero">
            <BoxFilled />
          </a>
        </div>
        <div>
          <a href="/about#hobbys">
            <BoxEmpty />
          </a>
        </div>
        <div>
          <a href="/about#work">
            <BoxEmpty />
          </a>
        </div>
        <div>
          <a href="/about#education">
            <BoxEmpty />
          </a>
        </div>
      </div>
    )
  }
  if (scrollPos >= 900 && scrollPos < 1800) {
    return (
      <div className="fixed hidden xl:flex flex-col justify-between items-center w-6 h-36 right-[5%] top-1/2 ">
        <div>
          <a href="/about#hero">
            <BoxFilled />
          </a>
        </div>
        <div>
          <a href="/about#hobbys">
            <BoxFilled />
          </a>
        </div>
        <div>
          <a href="/about#work">
            <BoxEmpty />
          </a>
        </div>
        <div>
          <a href="/about#education">
            <BoxEmpty />
          </a>
        </div>
      </div>
    )
  }

  if (scrollPos >= 1800 && scrollPos < 2500) {
    return (
      <div className="fixed hidden xl:flex  flex-col justify-between items-center w-6 h-36 right-[5%] top-1/2 ">
        <div>
          <a href="/about#hero">
            <BoxFilled />
          </a>
        </div>
        <div>
          <a href="/about#hobbys">
            <BoxFilled />
          </a>
        </div>
        <div>
          <a href="/about#work">
            <BoxFilled />
          </a>
        </div>
        <div>
          <a href="/about#education">
            <BoxEmpty />
          </a>
        </div>
      </div>
    )
  }

  if (scrollPos >= 2500) {
    return (
      <div className="fixed hidden xl:flex  flex-col justify-between items-center w-6 h-36 right-[5%] top-1/2 ">
        <div>
          <a href="/about#hero">
            <BoxFilled />
          </a>
        </div>
        <div>
          <a href="/about#hobbys">
            <BoxFilled />
          </a>
        </div>
        <div>
          <a href="/about#work">
            <BoxFilled />
          </a>
        </div>
        <div>
          <a href="/about#education">
            <BoxFilled />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed hidden xl:flex  flex-col justify-between items-center w-6 h-36 right-[5%] top-1/2 ">
      <div>
        <a href="/about#hero">
          <BoxFilled />
        </a>
      </div>
      <div>
        <a href="/about#hobbys">
          <BoxEmpty />
        </a>
      </div>
      <div>
        <a href="/about#work">
          <BoxEmpty />
        </a>
      </div>
      <div>
        <a href="/about#education">
          <BoxEmpty />
        </a>
      </div>
    </div>
  )
}

export default Progress
