
import { Link } from 'react-router'

export default function CardMenu({ image, title, description, path }) {
  return (
    <Link to={path} className="no-underline text-inherit">
      <div className="w-[250px] border-2 border-gray-300 rounded-2xl flex flex-col items-center p-5 gap-2 cursor-pointer hover:shadow-lg transition">
        <img src={image} alt={title} className="w-[100px]" />
        <p className="font-bold font-kanit">
          {title}
        </p>
        <p className="font-itim text-sm text-gray-500 text-center">
          {description}
        </p>
      </div>
    </Link>
  )
}
