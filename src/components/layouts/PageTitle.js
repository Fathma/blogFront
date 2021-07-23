import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ TITLE, LOGO }) => {
  return (
    <Helmet>
      <link rel='shortcut icon' href={LOGO} />
      <title>{TITLE}</title>
    </Helmet>
  );
};

export default PageTitle;
