import { extendTheme } from "@chakra-ui/react";

import { theme as baseTheme } from "@saas-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {};

export const theme = extendTheme({ colors }, baseTheme);
