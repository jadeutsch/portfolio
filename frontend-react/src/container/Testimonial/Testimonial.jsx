import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = "*[_type == 'testimonials']";
    const brandsQuery = "*[_type == 'brands']";

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const testimony = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="item flex">
            <img src={urlFor(testimony.imgurl)} alt="testimonial" />
            <div className="content">
              <p className="pText">{testimony.feedback}</p>
              <div>
                <h4 className="boldText">{testimony.name}</h4>
                <h5 className="pText">{testimony.company}</h5>
              </div>
            </div>
          </div>
          <div className="buttons flex">
            <div
              className="flex"
              onClick={() =>
                handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="flex"
              onClick={() =>
                handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="brands flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Testimonial, "testimonial"), "testimonial", "primaryBg");
