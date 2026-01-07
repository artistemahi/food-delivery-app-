import { useState } from "react";
import ItemListData from "./ItemListData";

interface ItemCard {
  card?: {
    info?: {
      id: string;
      name: string;
      price?: number;
      defaultPrice?: number;
      description?: string;
      imageId?: string;
    };
  };
}

interface Category {
  title?: string;
  index:number;
  itemCards?: ItemCard[];
  categories?: Category[];
}

const ItemList: React.FC<{ data: Category ; showItems: boolean; setShowIndex: () => void }> = ({ data, showItems, setShowIndex }) => {
  
  const handleClick = () => {
    setShowIndex();
  };
  const itemsCount = data?.itemCards?.length || data?.categories?.length || 0;

  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      {/* Header */}
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100"
        onClick={handleClick}
      >
        <p className=" w-full font-semibold text-lg shadow-md mb-3">
          {data?.title} ({itemsCount})
        </p>
        <span className="text-xl">{showItems ? "🔼" : "🔽"}</span>
      </div>

      {/* Body */}
      {showItems && data?.itemCards && (
        <div className="px-2">
          <ItemListData data={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default ItemList;
