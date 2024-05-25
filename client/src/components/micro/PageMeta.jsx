import React from "react";
import { Helmet } from "react-helmet";

const PageMeta = ({ title, description, imageUrl }) => (
  <Helmet>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl || "/news/2.jpeg"} />
  </Helmet>
);

export default PageMeta;
