import React from "react";
import { BaseURL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";
interface ItemInfo {
  id: string;
  name: string;
  price?: number;
  defaultPrice?: number;
  description?: string;
  imageId?: string;
}

interface Item {
  card?: {
    info?: ItemInfo;
  };
}

const ItemListData: React.FC<{ data: Item[] }> = ({ data }) => {
  // always use the hooks inside the component
    const dispatch = useDispatch();
  
  const handleAddItem = (item:any) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4">
      {data.map((item) => {
        const info = item.card?.info;
        if (!info) return null;

        const price = (info.price ?? info.defaultPrice ?? 0) / 100;

        return (
          <div
            key={info.id}
            className="flex justify-between items-start p-4 border-b relative"
          >
            <div className="w-11/12">
              <h3 className="font-semibold text-lg">{info.name}</h3>

              <p className="text-sm font-medium text-gray-800 mt-1">
                ₹{price.toFixed(2)}
              </p>

              {info.description && (
                <p className="text-sm text-gray-500 mt-2">{info.description}</p>
              )}
            </div>

            <div className="w-1/12 flex flex-col items-center">
              {info.imageId && (
                <img
                  className="w-28 h-24 object-cover rounded-lg"
                  src={BaseURL + info.imageId}
                  alt={info.name}
                />
              )}

              {/* Add Button */}
              <button
                onClick={()=>handleAddItem(item)}
                className="mt-2 bg-black text-white w-15  rounded-md 
                           text-sm font-semibold hover:bg-green-600 hover:cursor-grab
                            transition absolute "
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListData;
function dispatch(arg0: { payload: any; type: "cart/addItem" }) {
  throw new Error("Function not implemented.");
}
