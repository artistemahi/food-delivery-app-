import useRestaurantMenu from "../utils/useRestaurantMenu";
const ItemList: React.FC = () => {
  const MenuData = useRestaurantMenu();
  if (!MenuData) {
    return <div>Loading items...</div>;
  }
  const itemList =
    MenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(itemList);
  return (
    <>
      {itemList?.slice(2, 12)?.map((item: any, index: number) => (
        <li key={item?.card?.card?.categoryId ?? index}>
          <div className="flex justify-between">
            <p>
              {item?.card?.card?.title} (
              {item?.card?.card?.itemCards
                ? item.card.card.itemCards.length
                : item?.card?.card?.categories?.length}
              )
            </p>
            <span>🔻</span>
          </div>
        </li>
      ))}
    </>
  );
};
export default ItemList;
