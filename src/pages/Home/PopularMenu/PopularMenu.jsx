import { useEffect, useState } from "react";
import SectionTitile from "../../SharedComponents/SectionTitile";
import MenuItem from "../../SharedComponents/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('popularMenu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            })
    })

    return (
        <section className="mb-12">
            <SectionTitile
                subHeading={"Popular Items"}
                heading={"From Our Menu"}
            ></SectionTitile>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item.id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
}

export default PopularMenu;
