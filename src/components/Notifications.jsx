export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Workout Completed 💪",
      time: "5 mins ago",
    },
    {
      id: 2,
      title: "Protein Goal Reached 🥩",
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "Coach Advice Available 🤖",
      time: "Today",
    },
  ];

  return (
    <div className="notification-card">
      <h3>🔔 Notifications</h3>

      {notifications.map((item) => (
        <div key={item.id} className="notification-item">
          <p>{item.title}</p>
          <small>{item.time}</small>
        </div>
      ))}
    </div>
  );
}
