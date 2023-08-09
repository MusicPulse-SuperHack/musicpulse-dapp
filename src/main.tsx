import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import { App } from "./App";
import { chains, config } from "./wagmi";
import { extendTheme } from "@chakra-ui/react";
import "./index.css";

const theme = extendTheme({
  colors: {
    strongBlack: "#000000",
    lightBlack: "#616161",
  },
  fonts: {
    body: "Inter, sans-serif",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  fontSizes: {
    "24px": "24px",
  },
  lineHeights: {
    "29.05px": "29.05px",
  },
});

/**
 * Root providers and initialization of app
 * @see https://reactjs.org/docs/strict-mode.html
 * @see https://wagmi.sh/react/WagmiConfig
 * @see https://www.rainbowkit.com/docs/installation
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  </React.StrictMode>,
);
