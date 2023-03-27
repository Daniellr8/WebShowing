import React, { useState } from "react";
import "./ScrollButton.css";
import IconButton from '@material-ui/core/IconButton';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    
    <label className="buttonScroll" onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }}>
    <IconButton color="primary" aria-label="upload picture" component="span">
          <ArrowUpward />
        </IconButton>
    </label>
  );
};

export default ScrollButton;
