import DashboardLayout from "../layouts/DashboardLayout";
import "./Wallet.css";

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
        {/* ================= HEADER ================= */}
        <div className="wallet-header">
          <div>
            <span className="wallet-badge">FITMODEL PAY</span>
            <h1>💳 Wallet</h1>
            <p>
              Manage your earnings, withdrawals and campaign payments in one
              place.
            </p>
          </div>

          <div className="wallet-actions">
            <button className="btn-secondary">＋ Add Bank</button>
            <button className="btn-primary">Withdraw Funds</button>
          </div>
        </div>

        {/* ================= MAIN BALANCE ================= */}

        <div className="wallet-balance-card">
          <div>
            <small>Total Balance</small>
            <h1>$5,150.00</h1>
            <p>+$450 earned this month</p>
          </div>

          <div className="wallet-balance-right">
            <div className="wallet-chip">FITMODEL</div>
            <span>•••• 4721</span>
          </div>
        </div>

        {/* ================= QUICK STATS ================= */}
        <div className="wallet-stats">
          <div className="wallet-stat-card">
            <small>Available</small>
            <h2>$4,200</h2>
          </div>

          <div className="wallet-stat-card">
            <small>Pending</small>
            <h2>$950</h2>
          </div>

          <div className="wallet-stat-card">
            <small>Withdrawn</small>
            <h2>$21.4k</h2>
          </div>

          <div className="wallet-stat-card">
            <small>Campaigns</small>
            <h2>18</h2>
          </div>
        </div>

        {/* ================= EARNINGS CHART ================= */}

        <div className="wallet-chart">
          <div className="section-title">
            <h2>📈 Earnings Overview</h2>
            <span>Last 6 Months</span>
          </div>

          <div className="chart-placeholder">
            <div className="bar one"></div>
            <div className="bar two"></div>
            <div className="bar three"></div>
            <div className="bar four"></div>
            <div className="bar five"></div>
            <div className="bar six"></div>
          </div>
        </div>

        {/* ================= TRANSACTIONS ================= */}
        <div className="wallet-section">
          <div className="section-title">
            <h2>💰 Recent Transactions</h2>

            <button className="btn-secondary">View All</button>
          </div>
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

        {/* ================= BOTTOM GRID ================= */}

        <div className="wallet-bottom-grid">
          {/* Payment Methods */}
          <div className="wallet-panel">
            <h2>💳 Payment Methods</h2>

            <div className="payment-method">
              <strong>Visa •••• 4721</strong>
              <small>Primary Card</small>
            </div>
            <div className="payment-method">
              <strong>Flutterwave</strong>
              <small>Connected</small>
            </div>

            <div className="payment-method">
              <strong>PayPal</strong>
              <small>Verified</small>
            </div>
          </div>

          {/* Upcoming Payout */}
          <div className="wallet-panel">
            <h2>🚀 Upcoming Payout</h2>
            <h1>$950</h1>
            <p>Expected on July 30</p>

            <span className="processing">Processing</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
