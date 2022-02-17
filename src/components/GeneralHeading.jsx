import React from 'react';
import '../styles/components/GeneralHeading.css'

function GeneralHeading() {
  let generalHeading = (
    <div className="generalHeading">
        <h2 className="generalHeading__title">Latest Stories</h2>
        <p className="generalHeading__dek">
          <a
            className="generalHeading__link"
            href="https://www.nationalgeographic.com/subscribe/magazines?cmpid=int_org=ngp::int_mc=website::int_src=ngp::int_cmp=subscribelateststories::int_add=subscribelateststories"
          >Subscribe</a>{' '}
          for full access to read stories from National Geographic
        </p>
        <div className="generalHeading__line"></div>
    </div>
  );

  return generalHeading;
}

export default GeneralHeading;
