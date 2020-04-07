import React from "react";

export default () => (WrappedComponent) => (props) =>
  props.isLoading ? <div>Loading</div> : <WrappedComponent {...props} />;
