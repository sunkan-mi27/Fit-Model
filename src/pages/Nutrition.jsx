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
      </div>
    </DashboardLayout>
  );
}
