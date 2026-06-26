export default function Features() {
  const features = [
    {
      icon: "🏋️",
      title: "Workout Tracking",
      text: "Monitor every workout and visualize your performance.",
    },

    {
      icon: "📸",
      title: "Portfolio Builder",
      text: "Create a stunning portfolio ready for agencies.",
    },

    {
      icon: "📈",
      title: "Growth Analytics",
      text: "Watch your body and career grow with live analytics.",
    },

    {
      icon: "🥗",
      title: "Nutrition Planner",
      text: "Meal planning designed for fitness models.",
    },
  ];

  return (
    <section className="features reveal" id="features">
      <span className="section-tag">FEATURES</span>

      <h2>
        Everything you need.
        <br />
        Nothing you don't.
      </h2>

      <p>
        Build your body. Build your brand. Manage everything from one platform.
      </p>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
