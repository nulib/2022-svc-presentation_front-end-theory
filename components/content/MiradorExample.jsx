import React, { useEffect, useState } from "react";
import Mirador from "mirador";

const MiradorExample = ({ manifestId }) => {
  const [miradorInstance, setMiradorInstance] = useState();

  const config = {
    id: "mirador-example",
    workspace: {
      showZoomControls: true,
    },
    workspaceControlPanel: {
      enabled: false,
    },
    window: {
      allowClose: false,
      allowMaximize: false,
      allowTopMenuButton: true,
      allowWindowSideBar: true,
      defaultSidebarPanelWidth: 300,
      forceDrawAnnotations: false,
      hideWindowTitle: false,
      sideBarOpen: false,
    },
    windows: [{ loadedManifest: manifestId }],
  };

  useEffect(() => {
    Mirador.viewer(config, {});
  }, []);

  return <div id={config.id} />;
};

export default MiradorExample;
