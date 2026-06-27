export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h2>FitModel Operating Service</h2>
          <p>
            The all-in-one platform for fitness models, athletes and creators.
          </p>
        </div>

        <div>
          <h4>Product</h4>
          <a href="#">Documentation</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <h4>Newsletter</h4>
          <input type="email" placeholder="Enter your email" />

          <button className="btn-primary">Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">© 2026 FitModel OS•</div>
    </footer>
  );
}
