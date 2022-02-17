/* eslint-disable no-nested-ternary */
import { useWeb3React } from "@web3-react/core";

export const Account = function Account() {
  const { account } = useWeb3React();

  return (
    <button className="btn btn btn-light me-2 px-2 btn-sm disabled">
    {/* <div className="btn btn-ghost btn-sm rounded-btn"> */}
      <span>Account</span>
      <span>
        {account === null
          ? "-"
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ""}
      </span>
    </button>
  );
};

export default Account;
