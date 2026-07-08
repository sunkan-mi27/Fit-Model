import "./Notifications.css";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      icon: "💪",
      title: "Workout Completed",
      text: "Chest & Triceps session finished.",
      time: "5 mins ago",
      type: "success",
    },
    {
      id: 2,
      icon: "🥩",
      title: "Protein Goal Reached",
      text: "You've consumed 180g today.",
      time: "1 hour ago",
      type: "nutrition",
    },
    {
      id: 3,
      icon: "🤖",
      title: "AI Coach",
      text: "Recovery score is 91%. Great job!",
      time: "Today",
      type: "ai",
    },
    {
      id: 4,
      icon: "🏆",
      title: "Achievement",
      text: "7-Day Workout Streak!",
      time: "Today",
      type: "reward",
    },
  ];

  return (
    <div className="notification-card">
      <h3>🔔 Notifications</h3>

      {notifications.map((item) => (
        <div key={item.id} className={`notification-item ${item.type}`}>
          <div className="notification-icon">{item.icon} </div>

          <div className="notification-content">
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            <small>{item.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
