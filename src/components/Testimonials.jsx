const reviews = [
  {
    name: "Sarah Johnson",
    role: "Fitness Model",
    text: "FitModel Operating Service transformed my portfolio and helped me land my first agency.",
  },
  {
    name: "Akogu David",
    role: "Coach",
    text: "The dashboard is unlike anything I've used before.",
  },
  {
    name: "Aisha Bello",
    role: "Brand Ambassador",
    text: "Clean. Fast. Premium. Recruiters loved my profile.",
  },
  {
    name: "Michael Lee",
    role: "Athlete",
    text: "Everything feels like Apple designed it.",
  },
  {
    name: "Sophia Adams",
    role: "Personal Trainer",
    text: "The features are simply amazing and incredible.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials reveal">
      <p className="section-tag">SUCCESS STORIES</p>

      <h2>Trusted By Professionals</h2>

      <div className="slider">
        <div className="slide-track">
          {[...reviews, ...reviews].map((review, index) => (
            <div className="review-card" key={index}>
              <div className="stars">⭐⭐⭐⭐⭐</div>

              <p>"{review.text}"</p>

              <div className="review-user">
                <div className="avatar-circle">{review.name.charAt(0)}</div>

                <div>
                  <h4>{review.name}</h4>
                  <span>{review.role} ✔️</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
