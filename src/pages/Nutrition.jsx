import DashboardLayout from "../layouts/DashboardLayout";

export default function Nutrition() {
  return (
    <DashboardLayout>
      <h1 className="dashboard-title">🥗 Nutrition Center</h1>

      <div className="dashboard-grid">
        <div className="dash-card">
          <h3>Calories</h3>

          <h1>2,420</h1>

          <p>Goal: 2,700 kcal</p>
        </div>

        <div className="dash-card">
          <h3>Protein</h3>

          <h1>182g</h1>

          <p>Target achieved ✔️</p>
        </div>

        <div className="dash-card">
          <h3>Carbs</h3>
          <h1>210g</h1>
          <p>Balanced Intake</p>
        </div>

        <div className="dash-card">
          <h3>Water</h3>

          <div className="water-bar">
            <div className="water-fill"></div>
          </div>
          <p>3.5L / 4L</p>
        </div>

        <div className="chart-card">
          <h3>Nutrition Score</h3>

          <div className="circle-progress">
            <div className="circle-value">96%</div>
          </div>
        </div>

        <div className="ai-card">
          <h3>🍎 Nutrition Coach</h3>
          <p>
            Excellent protein intake today.
            <br />
            Add one fruit after lunch and increase water intake by 500ml.
          </p>

          <button className="btn-primary">View Meal Plan</button>
        </div>

        <div className="chart-card">
          <h3>Today's Meal Plan</h3>
          <div className="meal-list">
            <div className="meal-item">
              🍳Breakfast<span>Oats • Egg • Banana</span>
            </div>

            <div className="meal-item">
              🍗Lunch<span>Chicken • Rice • Yam</span>
            </div>

            <div className="meal-item">
              🥜Snack<span>Greek Yogurt • Almonds</span>
            </div>

            <div className="meal-item">
              🥩Dinner<span>Steak • Sweet Potato • Salad</span>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>🤖Meal Planner</h3>

          <div className="meal-suggestions">
            <div className="meal-box">
              <h4>🥣 Breakfast</h4>
              <p>High Protein Oats + Eggs + Banana</p>
              <span>642 kcal • 42g Protein</span>
            </div>

            <div className="meal-box">
              <h4>🍗 Lunch</h4>
              <p>Chicken Breast, Rice & Broccoli</p>
              <span>731 kcal • 58g Protein</span>
            </div>

            <div className="meal-box">
              <h4>🥜 Snack</h4>
              <p>Greek Yogurt, Almonds & Honey</p>
              <span>318 kcal • 25g Protein</span>
            </div>

            <div className="meal-box">
              <h4>🥩 Dinner</h4>
              <p>Salmon, Sweet Potato & Vegetables</p>
              <span>654 kcal • 48g Protein</span>
            </div>
          </div>

          <button className="btn-primary">Generate New Meal Plan</button>
        </div>

        <div className="chart-card">
          <h3>Nutrition Insights</h3>

          <div className="nutrition-insights">
            <div className="insight-card">
              🔥
              <h2>2,345</h2>
              <p>Calories Consumed</p>
            </div>

            <div className="insight-card">
              💪
              <h2>171g</h2>
              <p>Protein</p>
            </div>

            <div className="insight-card">
              💧
              <h2>4.0L</h2>
              <p>Water</p>
            </div>

            <div className="insight-card">
              ⚡<h2>96%</h2>
              <p>Nutrition Score</p>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>🛒 Smart Grocery List</h3>

          <div className="grocery-grid">
            <div className="grocery-item">
              <span>🥚 Eggs</span>
              <small>12 pcs</small>
            </div>

            <div className="grocery-item">
              <span>🍗 Chicken Breast</span>
              <small>2 kg</small>
            </div>

            <div className="grocery-item">
              <span>🥦 Broccoli</span>
              <small>3 Heads</small>
            </div>

            <div className="grocery-item">
              <span>🍌 Bananas</span>
              <small>8 pcs</small>
            </div>

            <div className="grocery-item">
              <span>🥜 Almonds</span>
              <small>500 g</small>
            </div>

            <div className="grocery-item">
              <span>🥛 Greek Yogurt</span>
              <small>4 Cups</small>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>📦 Pantry Manager</h3>

          <div className="pantry-list">
            <div className="pantry-row">
              <span>Protein Powder</span>

              <div className="stock-bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="pantry-row">
              <span>Rice</span>

              <div className="stock-bar">
                <div style={{ width: "65%" }}></div>
              </div>
            </div>

            <div className="pantry-row">
              <span>Oats</span>

              <div className="stock-bar">
                <div style={{ width: "45%" }}></div>
              </div>
            </div>

            <div className="pantry-row">
              <span>Olive Oil</span>

              <div className="stock-bar">
                <div style={{ width: "82%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>📷 AI Food Scanner</h3>

          <div className="food-scanner">
            <div className="scanner-box">
              <div className="scanner-icon">📸</div>

              <h2>Scan Your Meal</h2>

              <p>
                Upload a photo and let AI estimate calories, protein, carbs and
                fats instantly.
              </p>

              <button className="btn-primary">Upload Meal</button>
            </div>

            <div className="scanner-results">
              <div className="scan-result">
                <span>🔥 Calories</span>
                <h2>642 kcal</h2>
              </div>

              <div className="scan-result">
                <span>💪 Protein</span>
                <h2>48g</h2>
              </div>

              <div className="scan-result">
                <span>🍚 Carbs</span>
                <h2>52g</h2>
              </div>

              <div className="scan-result">
                <span>🥑 Fats</span>
                <h2>18g</h2>
              </div>

              <div className="scan-result">
                <span>⭐ Nutrition Score</span>
                <h2>94%</h2>
              </div>

              <div className="scan-result">
                <span>🤖 AI Verdict</span>
                <p>Excellent muscle-building meal.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>🧠 Health Command Center</h3>

          <div className="health-grid">
            <div className="health-card">
              ❤️
              <h2>72 BPM</h2>
              <p>Heart Rate</p>
            </div>

            <div className="health-card">
              😴
              <h2>8h 18m</h2>
              <p>Sleep Quality</p>
            </div>

            <div className="health-card">
              💧
              <h2>96%</h2>
              <p>Hydration</p>
            </div>

            <div className="health-card">
              👣
              <h2>12,486</h2>
              <p>Daily Steps</p>
            </div>

            <div className="health-card">
              ⚖️
              <h2>78kg</h2>
              <p>Current Weight</p>
            </div>

            <div className="health-card">
              🔥
              <h2>11%</h2>
              <p>Body Fat</p>
            </div>

            <div className="health-card">
              ⚡<h2>94%</h2>
              <p>Recovery Score</p>
            </div>

            <div className="health-card ai-summary">
              <h3>🤖 AI Health Summary</h3>

              <p>
                Your recovery is excellent. Muscle growth potential is high.
                Maintain hydration and increase healthy fats slightly for
                optimal recovery.
              </p>

              <button className="btn-primary">Full Health Report</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
