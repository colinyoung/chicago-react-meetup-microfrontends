import clsx from "clsx";

import { classnamePrefix } from "../constants";

export const safeClassnames = (...args: any[]) => {
  return clsx(...args).replace(/^([A-z]+)/g, `${classnamePrefix}$1`);
};
