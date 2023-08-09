import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Navbar from "./components/layout/Navbar";
import CreateMusicNft from "./pages/CreateMusicNft";
import "./index.css";

import { Attestooooooor } from "./components";
import { HashRouter, Route, Routes } from "react-router-dom";

export function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  //
  // <Switch>
  //   <Route path="/" component={CreateMusicNFT} />
  //   <Route path="/about" component={About} />
  //   <Route path="/contact" component={Contact} />
  // </Switch>

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateMusicNft />} />
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
      </Routes>
      {/* Footer */}
    </HashRouter>
  );
}
