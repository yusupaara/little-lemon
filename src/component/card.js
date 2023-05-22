export default function DishCard({ dishes }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-gray-200 shadow-lg overflow-hidden font-merriweather pb-6">
      <img
        className="h-64 w-full sm:h-80 object-cover object-center align-middle"
        src={dishes.imageUrl}
        alt={dishes.imageAlt}
      />
      <div className="px-6 py-4 space-y-6 justify-center">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            {dishes.title}
          </h3>
          <p className="text-lg text-tmgrey">${dishes.price}</p>
        </div>
        <div className="flex-row space-y-9 mx-auto">
          <div>
            <a href="#" className="text-tmgrey text-lg mt-4">
              {dishes.description}
            </a>
          </div>
          <div className="btn-secondary">Order a Delivery</div>
        </div>
      </div>
    </div>
  );
}
