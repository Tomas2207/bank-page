const history = [
  {
    account: 'Primary',
    alias: 'APPLE.GREEN.TEA',
    amount: '350.96',
  },
  {
    account: 'Secondary',
    alias: 'WHEEL.HAT.SOAP',
    amount: '1250.50',
  },
  {
    account: 'Secondary',
    alias: 'LOVE.BLUE.GUITAR',
    amount: '950.00',
  },
  {
    account: 'Primary',
    alias: 'LAKE.NAME.OPERA',
    amount: '280.25',
  },
  {
    account: 'Primary',
    alias: 'APPLE.GREEN.TEA',
    amount: '1500.00',
  },
  {
    account: 'Primary',
    alias: 'APPLE.GREEN.TEA',
    amount: '125.80',
  },
];

const TransferHistory = (props) => {
  const H = props.history;
  console.log(props);
  return (
    <div className="transfer-history">
      <div className="transfer-div transfer-title">
        <div>ACCOUNT</div>
        <div>ALIAS</div>
        <div>AMOUNT</div>
      </div>
      {H.map((transfer, idx) => {
        return (
          <div key={idx} className="transfer-div">
            <div>{transfer.account}</div>
            <div>{transfer.alias}</div>
            <div>${transfer.amount}</div>
          </div>
        );
      }).reverse()}
    </div>
  );
};

export { TransferHistory, history };
