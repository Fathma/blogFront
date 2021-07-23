import React from "react";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const Loader = ({ loader }) => {
  return (
    <div>
      {loader && (
        <div className='loader-area'>
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loader: state.settings.loader,
});

export default connect(mapStateToProps, {})(Loader);
