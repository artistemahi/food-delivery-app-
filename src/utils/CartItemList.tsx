import { BaseURL } from "../utils/constants";

const CartItemList = ({ items }: any) => {
  return (
    <div className="mt-6 space-y-4">
      {items.map((item: any) => {
        const info = item.card?.info;
        if (!info) return null;

        const price = (info.price ?? info.defaultPrice ?? 0) / 100;

        return (
          <div
            key={info.id}
            className="flex justify-between items-start p-4 border rounded-md"
          >
            <div className="w-9/12 text-left">
              <h3 className="font-semibold">{info.name}</h3>
              <p className="text-sm text-gray-600">₹{price}</p>
            </div>

            {info.imageId && (
              <img
                className="w-20 h-20 object-cover rounded"
                src={BaseURL + info.imageId}
                alt={info.name}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CartItemList;
