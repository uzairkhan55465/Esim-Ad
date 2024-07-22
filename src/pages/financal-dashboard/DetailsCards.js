const Card = ({
  size,
  profitMargin,
  profit,
  sellPrice,
  buyPrice,
  totalCost,
  refunds,
}) => (
  <div className="bg-white rounded-lg shadow-md p-4 m-4 w-64">
    <h2 className="text-lg font-semibold">{size}</h2>
    <div className="mt-2">
      <p className="text-gray-600">Profit Margin (%)</p>
      <p className="text-green-500 font-semibold">{profitMargin}</p>
    </div>
    <div className="mt-2">
      <p className="text-gray-600">Profit</p>
      <p className="text-green-500 font-semibold">{profit}</p>
    </div>
    <div className="mt-2">
      <p className="text-gray-600">Sell Price</p>
      <p>{sellPrice}</p>
    </div>
    <div className="mt-2">
      <p className="text-gray-600">Buy Price</p>
      <p>{buyPrice}</p>
    </div>
    <div className="mt-2">
      <p className="text-gray-600">Total Cost</p>
      <p>{totalCost}</p>
    </div>
    <div className="mt-2">
      <p className="text-gray-600">Refunds</p>
      <p className="text-red-500">{refunds}</p>
    </div>
  </div>
);

export default Card;
