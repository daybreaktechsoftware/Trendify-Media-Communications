import React from "react";
import { IconBaseProps } from "react-icons";

// Simple wrapper to fix TypeScript issues with react-icons
export const Icon: React.FC<{
  icon: React.ComponentType<IconBaseProps>;
  props?: IconBaseProps;
}> = ({ icon: IconComponent, props }) => {
  return <IconComponent {...props} />;
};

export default Icon;
