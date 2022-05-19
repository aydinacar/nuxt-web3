export const useEthers = () => {
  const { $web3Modal, $provider } = useNuxtApp();
  const connect = async () => {
    await $web3Modal.clearCachedProvider();
    await $web3Modal.connect();
    const accounts = await $provider.send("eth_requestAccounts", []);
    return accounts[0];
  };
  return {
    connect,
  };
};
