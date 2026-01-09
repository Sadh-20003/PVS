'use client';

export default function Home() {
  return (
    <>



      {/* ===== NAVBAR (NO EXTRA HEIGHT) ===== */}
      {/* ================= NAVBAR ================= */}
      <header className="advice-navbar">
        <div className="nav-inner">

          {/* LOGO */}
          <div className="logo">
            <span className="logo-icon">⌂</span>
            <span className="logo-text">PVS</span>
          </div>

          {/* MENU */}
          <input type="checkbox" id="nav-toggle" />
          <nav className="nav-links">
            <a className="active" href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Blog</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
          </nav>

          {/* RIGHT */}
          <div className="nav-right">

            <label htmlFor="nav-toggle" className="hamburger">
              ☰
            </label>
          </div>

        </div>
      </header>

      {/* ================= NAVBAR END ================= */}

      {/* ================= HERO SECTION ================= */}

      <section className="simple-hero">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <h1>
            We providing best <br />
            business coaching and <br />
            consultations.
          </h1>

          <p>
            Over 10 years of experience find comprehensive solutions.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary-custom">Read More</button>
            <button className="btn-outline-custom">Meet Experts</button>
          </div>
        </div>
      </section>



      {/* ================= HERO SECTION END ================= */}

      {/* ================= ABOUT US SECTION  ================= */}

      <section className="about-section">
        <div className="container about-grid">

          {/* LEFT – IMAGE */}
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="About Us"
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div className="about-content">
            <div className="section-heading-center">
              <span className="section-pill">About us</span>

              <h2 className="section-title">
                Trusted Advisors Helping
                Businesses Grow With Confidence
              </h2>
            </div>


            <p>
              We are a professional consulting firm dedicated to helping
              businesses make smarter decisions, improve operational efficiency,
              and achieve sustainable growth.
            </p>

            <p>
              With a client-first mindset and deep industry experience, we work
              closely with organizations to turn complex challenges into clear,
              actionable solutions.
            </p>

            <div className="about-points">
              <div>✔ Experienced Industry Professionals</div>
              <div>✔ Practical & Result-Driven Approach</div>
              <div>✔ Long-Term Business Partnerships</div>
            </div>

            <button className="about-btn">
              Learn More About Us
            </button>
          </div>

        </div>
      </section>

      {/* ================= ABOUT US SECTION END ================= */}




      {/* ================= SERVICES SECTION  ================= */}

      <section className="service-modern">
        <div className="service-container">

          <div className="section-heading-center">
            <span className="section-pill">Our Services</span>

            <h2 className="section-title">
              Empower your business <br />
              with our services.
            </h2>
          </div>


          <div className="service-grid py-5">

            {/* CARD 1 */}
            <div className="service-card">
              <div className="service-icon">🧠</div>
              <h3>MSME CERTIFICATE</h3>
              <p>
                Get your MSME Certificate to enjoy government benefits and business growth opportunities.
              </p>
              <div className="service-footer">
                <span className="service-num">01</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>FSSAI REGISTRATION</h3>
              <p>
                Obtain your FSSAI Registration to legally start and grow your food business.
              </p>
              <div className="service-footer">
                <span className="service-num">02</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="service-card">
              <div className="service-icon">🧩</div>
              <h3>COMPANY INCORPORATION</h3>
              <p>
                Obtain your FSSAI Registration to legally start and grow your food business.
              </p>
              <div className="service-footer">
                <span className="service-num">03</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>COMPANY YEAR END COMPILANCE</h3>
              <p>
                Company Incorporation helps you start strong with credibility and compliance.
              </p>
              <div className="service-footer">
                <span className="service-num">04</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

          </div>


          <div className="service-grid py-5">

            {/* CARD 1 */}
            <div className="service-card">
              <div className="service-icon">🧠</div>
              <h3>FIRM REGISTRATION</h3>
              <p>
                Firm Registration gives your business official recognition and credibility.
              </p>
              <div className="service-footer">
                <span className="service-num">05</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>TRUST, SOCIETY, ASSOCIATION REGIST</h3>
              <p>
                Register your Trust, Society, or Association to gain legal recognition and credibility.
              </p>
              <div className="service-footer">
                <span className="service-num">06</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="service-card">
              <div className="service-icon">🧩</div>
              <h3>TRUST 80G, 12AA, CERTIFICATE</h3>
              <p>
                Get 80G & 12AA certificates to help your Trust or NGO avail tax benefits and attract donations.
              </p>
              <div className="service-footer">
                <span className="service-num">07</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>DIGITAL SIGNATURE CERTIFICATE</h3>
              <p>
                Complete statutory compliance, filings,
                and documentation handled by experts.
              </p>
              <div className="service-footer">
                <span className="service-num">08</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

          </div>


          <div className="service-grid py-5">

            {/* CARD 1 */}
            <div className="service-card">
              <div className="service-icon">🧠</div>
              <h3>INCOME TAX FILLING</h3>
              <p>
                File your Income Tax accurately and on time with our expert assistance.
              </p>
              <div className="service-footer">
                <span className="service-num">09</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>GST REGISTRATION</h3>
              <p>
                Expand your business with hassle-free GST Registration services.
              </p>
              <div className="service-footer">
                <span className="service-num">10</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="service-card">
              <div className="service-icon">🧩</div>
              <h3>LOAN PROJECTION</h3>
              <p>
                Get accurate loan projections to secure funding for your business growth.
              </p>
              <div className="service-footer">
                <span className="service-num">11</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>PF & ESI CLAIM</h3>
              <p>
                Get hassle-free support for PF withdrawals and ESI benefits.
              </p>
              <div className="service-footer">
                <span className="service-num">12</span>
                <button className="arrow-btn">↗</button>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ================= SERVICES SECTION END ================= */}



      {/* ================= WHY CHOOSE US SECTION  ================= */}

      <section className="why-section">
        <div className="why-container">

          <span className="why-badge">Why Choose Us</span>

          <h2 className="why-title">
            We deliver expertise you can trust <br />
            with proven results
          </h2>

          <div className="why-grid">

            {/* LEFT */}
            <div className="why-col">
              <div className="why-card">
                <div className="why-icon">🧩</div>
                <h4>All-in-One</h4>
                <p>
                  From GST to business registration,
                  we manage everything in one place.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">💸</div>
                <h4>Friendly Plans</h4>
                <p>
                  Affordable pricing with expert-led
                  service execution.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">🤝</div>
                <h4>Client First</h4>
                <p>
                  Tailored support with a high
                  client retention rate.
                </p>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="why-image">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Why Choose Us"
              />
            </div>

            {/* RIGHT */}
            <div className="why-col">
              <div className="why-card">
                <div className="why-icon">⏱️</div>
                <h4>On-Time</h4>
                <p>
                  99% of services delivered
                  on time, every time.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">📜</div>
                <h4>Compliance Assurance</h4>
                <p>
                  99.9% statutory filings
                  before due dates.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">🎓</div>
                <h4>Expert Guidance</h4>
                <p>
                  Certified professionals across
                  all industries.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US SECTION END ================= */}


      {/* ================= PRICING SECTION  ================= */}

      <section className="pricing-section">
        <div className="container">

          <span className="pricing-tag">Pricing</span>
          <h2 className="pricing-title">
            Simple & Transparent Pricing Plans
          </h2>
          <p className="pricing-subtitle">
            Choose the right plan for your business compliance and growth needs.
          </p>

          <div className="pricing-grid">

            {/* BASIC */}
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="price">₹4,999</p>
              <p className="price-note">One-time</p>

              <ul>
                <li>Business Registration</li>
                <li>Basic GST Setup</li>
                <li>Email Support</li>
              </ul>

              <button className="pricing-btn">Get Started</button>
            </div>

            {/* POPULAR */}
            <div className="pricing-card featured">
              <span className="badge">Most Popular</span>

              <h3>Growth</h3>
              <p className="price">₹9,999</p>
              <p className="price-note">Per Year</p>

              <ul>
                <li>GST Filing (Annual)</li>
                <li>Income Tax Filing</li>
                <li>Compliance Monitoring</li>
                <li>Priority Support</li>
              </ul>

              <button className="pricing-btn primary">Choose Plan</button>
            </div>

            {/* PREMIUM */}
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <p className="price">₹19,999</p>
              <p className="price-note">Per Year</p>

              <ul>
                <li>All Compliance Services</li>
                <li>Dedicated Consultant</li>
                <li>Monthly Reporting</li>
                <li>24/7 Support</li>
              </ul>

              <button className="pricing-btn">Contact Us</button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION END ================= */}

      {/* ================= LEAD FORM SECTION  ================= */}
      <section className="lead-form-section">

        <div className="lead-form-heading">
          <h2>Talk to Our Experts</h2>
          <p>
            Fill in your details and our team will contact you shortly.
          </p>
        </div>
        <div className="lead-form-card">

          <form className="lead-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />

            <select required>
              <option value="">Select Service</option>
              <option>Business Registration</option>
              <option>GST Filing</option>
              <option>Income Tax</option>
              <option>Compliance Services</option>
            </select>

            <textarea
              rows={4}
              placeholder="Briefly describe your requirement"
            ></textarea>

            <button type="submit">Submit Request</button>
          </form>

        </div>
      </section>

      {/* ================= LEAD FORM SECTION END ================= */}







      {/* ================= MODERN FOOTER ================= */}

      <footer className="modern-footer">
        <div className="footer-wrap">

          {/* BRAND */}
          <div className="footer-brand">
            <h2>PVS</h2>
            <p>
              Smart business consulting for compliance,
              growth, and long-term success.
            </p>

            <div className="footer-social">
              <span>🌐</span>
              <span>💼</span>
              <span>📸</span>
              <span>🐦</span>
            </div>
          </div>

          {/* LINKS */}
          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Why Choose Us</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <a href="#">Business Registration</a>
            <a href="#">GST & Tax Filing</a>
            <a href="#">Compliance</a>
            <a href="#">Advisory</a>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get business tips & updates directly to your inbox.</p>

            <div className="newsletter-box">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom-modern">
          © {new Date().getFullYear()} PVS Consulting. All rights reserved.
        </div>
      </footer>

      {/* ================= MODERN FOOTER END ================= */}









    </>

  );
}
