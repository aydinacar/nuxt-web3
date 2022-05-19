import { ethers } from "ethers/dist/ethers.umd.min.js";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";
import QRCodeModal from "@walletconnect/qrcode-modal/dist/umd/index.min.js";
export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        56: "https://bsc-dataseed.binance.org",
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      }, // required
    },
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  },
};

const web3Modal = new Web3Modal({
  cacheProvider: false, // optional
  providerOptions, // required
  theme: "dark",
  disableInjectedProvider: false,
});

export default defineNuxtPlugin(() => {
  const ethereum = window.ethereum;
  return {
    provide: {
      web3Modal,
      provider: ethereum ? new ethers.providers.Web3Provider(ethereum) : null,
    },
  };
});
