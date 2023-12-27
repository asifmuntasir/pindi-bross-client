import SectionTitile from "../../SharedComponents/SectionTitile";
import featuredImage from '../../../assets/home/featured.jpg';


const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitile
                subHeading={"Check it out"}
                heading={"Featured Item"}
            ></SectionTitile>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
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
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
