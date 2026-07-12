import "./Pricing.css";

const plans = [
  {
    title: "Starter",
    price: "$0",
    badge: "",
    features: ["Portfolio", "Workout Tracker", "Dashboard", "Community Access"],
  },

  {
    title: "PRO",
    price: "$19",
    badge: "MOST POPULAR",
    features: [
      "Everything in Starter",
      "AI Coach",
      "Analytics",
      "Unlimited Portfolio",
      "Priority Support",
    ],
  },

  {
    title: "ELITE",
    price: "$49",
    badge: "AGENCY READY",
    features: [
      "Everything in PRO",
      "Verified Badge",
      "Agency Access",
      "Private Coach",
      "Early Features",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing reveal">
      <p className="section-tag">PRICING</p>

      <h2>Choose Your Plan</h2>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            className={`price-card ${plan.title === "PRO" ? "featured" : ""}`}
            key={plan.title}
          >
            {plan.badge && <div className="price-badge">{plan.badge}</div>}

            <h3>{plan.title}</h3>

            <h1>
              {plan.price}
              <span>/mo</span>
            </h1>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>✅ {feature}</li>
              ))}
            </ul>

            <button className="btn-primary">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}
