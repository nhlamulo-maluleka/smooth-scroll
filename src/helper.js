const createSmoothScroll = () => {
  let top = 0;
  const dy = 1;
  let step = dy;

  //Used to get the target element's bounding box
  //Also will be reused!
  const getCurrentElem = (id) =>
    document.getElementById(id).getBoundingClientRect();

  return (duration = 0, offset = 20, elID) => {
    if (getCurrentElem(elID).top > 0) step = dy;
    else step = -dy;

    let startScroll = setInterval(() => {
      // If you want to scroll to page above
      if (step > 0 && getCurrentElem(elID).top - offset <= 0)
        clearInterval(startScroll);

      // If you want to scroll to page above
      if (step < 0 && getCurrentElem(elID).top + offset >= 0)
        clearInterval(startScroll);

      top += step;
      //Moving the scroll through js API scrollTo
      window.scrollTo(0, top);
    }, duration);
  };
};

export default createSmoothScroll();
