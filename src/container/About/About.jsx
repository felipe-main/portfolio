import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { appearUp } from "../../utils";

const About = () => {
  const [abouts, setAbouts] = useState([])
  useEffect(() => {
    client.fetch('*[_type == "abouts"]').then((data)=>setAbouts(data))
  }
    , []
  )
  return (
    <>
      {
        <h2 className="head-text">
          {appearUp("I Know That", 0.5)} {appearUp(<span>Good Work</span>, 1)}{" "}
          <br />
          {appearUp("Means", 1.5)} {appearUp(<span>Good Business</span>, 1.8)}
        </h2>
      }

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={
              index % 2
                ? { x: [-100, 0], opacity: [0, 1] }
                : { x: [100, 0], opacity: [0, 1] }
            }
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <a href="#work">
              <img src={urlFor(about.imgUrl)} alt={about.title} title={about.title} />
            </a>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
