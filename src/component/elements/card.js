export default function DishCard({ dishes }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-gradient-to-b from-white from-60% to-gray-200 to-90% ring-1 ring-tmgrey ring-opacity-50 overflow-hidden pb-6">
      <img
        className="h-64 w-full sm:h-80 object-cover object-center align-middle"
        src={dishes.imageUrl}
        alt={dishes.imageAlt}
      />
      <div className="px-6 py-4 space-y-6 justify-center">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-800 font-merriweather">
            {dishes.title}
          </h3>
          <p className="text-lg text-tmgrey">${dishes.price}</p>
        </div>
        <div className="flex-row space-y-9 mx-auto font-merriweather">
          <div>
            <div className="text-tmgrey text-lg mt-4">
              {dishes.description}
            </div>
          </div>
          <div className="btn-secondary">Order a Delivery</div>
        </div>
      </div>
    </div>
  );
}
