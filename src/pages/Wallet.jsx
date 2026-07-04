import DashboardLayout from "../layouts/DashboardLayout";

const transactions = [
  {
    id: 1,
    brand: "Nike",
    amount: "+$2,500",
    status: "Paid",
  },
  {
    id: 2,
    brand: "Gymshark",
    amount: "+$1,200",
    status: "Pending",
  },
  {
    id: 3,
    brand: "MyProtein",
    amount: "+$850",
    status: "Paid",
  },
  {
    id: 4,
    brand: "Puma",
    amount: "+$600",
    status: "Processing",
  },
];

export default function Wallet() {
  return (
    <DashboardLayout>
      <div className="wallet-page">
        <div className="wallet-card">
          <small>Total Earnings</small>
          <h1>$5,150</h1>

          <div className="wallet-buttons">
            <button className="btn-primary">Withdraw</button>
            <button className="btn-secondary">History</button>
          </div>
        </div>

        <h2>Recent Transactions</h2>

        <div className="transactions">
          {transactions.map((item) => (
            <div className="transaction-card" key={item.id}>
              <div>
                <h3>{item.brand}</h3>
                <small>{item.status}</small>
              </div>

              <h2>{item.amount}</h2>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
