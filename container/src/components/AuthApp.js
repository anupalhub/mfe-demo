import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount } from "auth/AuthApp";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPath }) => {
        // Do not update history if url path is same
        if (nextPath !== history.location.pathname) {
          history.push(nextPath);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
};
