import FoodCard from "../SharedComponents/FoodCard";


const OrderTab = ({ items }) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 my-12'>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
}

export default OrderTab;
