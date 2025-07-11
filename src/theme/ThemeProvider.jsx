import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = {};

const ThemeProvider = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default ThemeProvider;
