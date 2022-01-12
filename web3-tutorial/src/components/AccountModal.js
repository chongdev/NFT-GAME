import React from "react";

export default function AccountModal() {
    // const { account, deactivate } = useEthers();

    // function handleDeactivateAccount() {
    //     deactivate();
    //     onClose();
    // }

    return (
        <div className="content-panel">
        <div className="content-panel-title">
            <h1>INFORMATION</h1>
            <button className="btn-game btn-red" style={{top: '20px !important'}}><span>LOG OUT</span></button>
        </div>
        <div className="content-panel-body">
            <div className="account-info-row">
            <span>Address:</span>
            <span className="account-info-text" />
            </div>
            <div className="account-info-row">
            <span>Balance:</span>
            <span className="account-info-text" />
            </div>
        </div>
        </div>

    );
}