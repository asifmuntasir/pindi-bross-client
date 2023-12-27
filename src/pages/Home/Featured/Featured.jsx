import SectionTitile from "../../SharedComponents/SectionTitile";
import featuredImage from '../../../assets/home/featured.jpg';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitile
                subHeading={"Check it out"}
                heading={"Featured Item"}
            ></SectionTitile>
            <div className="md:flex justify-center items-center
            bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Molestias sed nam perspiciatis
                        vero aspernatur voluptas
                        rerum, laboriosam corporis
                        magni, amet ut. Placeat ex
                        natus similique perferendis,
                        sapiente ab dolore sequi
                        dolorem fuga quidem nesciunt
                        hic possimus ipsam provident
                        nostrum vel id dolor quibusdam minima
                        maxime blanditiis et in voluptate? Pariatur.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
