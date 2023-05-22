export default function DishCard({ dishes }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img
        className="h-1/2 w-full flex-shrink-0"
        src={dishes.imageUrl}
        alt={dishes.imageAlt}
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {dishes.title}
        </h3>

        <p className="text-gray-600">${dishes.price}</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm"
          >
            {dishes.description}
          </a>
        </div>
      </div>
    </div>
  );
}
