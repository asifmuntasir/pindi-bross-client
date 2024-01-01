import { Link } from "react-router-dom";
import Cover from "../../SharedComponents/Cover";
import MenuItem from '../../SharedComponents/MenuItem';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8 text-center">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item.id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-xs btn-info text-white sm:btn-sm md:btn-md lg:btn-lg">Order Now</button>
            </Link>
        </div>
    );
}

export default MenuCategory;
