// App.jsx
import React, { useState } from "react";
import heroImage from "./assets/launchpad-hero.jpg"; // add your image here

const COLORS = {
  darkBg: "#0B0B0F",
  lightBg: "#F6F2EA",
  darkText: "#101114",
  lightText: "#F9F9FB",
  blue: "#2D5BFF",
  neon: "#C7FF00",
};

const FONT = {
  family: "'Inter', sans-serif",
  heading: 800,
  subheading: 700,
  body: 400,
};

const editorialAccent = {
  border: `1.5px solid ${COLORS.blue}`,
  borderRadius: "8px",
  boxShadow: `0 0 0 1.5px ${COLORS.blue} inset`,
};

function SectionHero({ onCTAClick }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 900;

  return (
    <section
      style={{
        background: COLORS.darkBg,
        color: COLORS.lightText,
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
        gap: isMobile ? "1.5rem" : "2rem",
        alignItems: "center",
        padding: isMobile ? "4rem 1rem 2rem" : "5rem 1.5rem 3rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 32,
          left: "10vw",
          width: 48,
          height: 2,
          background: COLORS.blue,
        }}
      />

      {/* Left content */}
      <div
        style={{
          maxWidth: 620,
          margin: "0 auto",
          width: "100%",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h1
          style={{
            fontFamily: FONT.family,
            fontWeight: FONT.heading,
            fontSize: "clamp(2.2rem, 5vw, 4.3rem)",
            letterSpacing: "-0.03em",
            margin: 0,
            lineHeight: 1.02,
          }}
        >
          Launchpad Inc.
        </h1>

        <p
          style={{
            fontFamily: FONT.family,
            fontWeight: FONT.body,
            fontSize: "1.15rem",
            maxWidth: 560,
            margin: "1.2rem auto 1.8rem",
            color: COLORS.lightText,
            lineHeight: 1.5,
          }}
        >
          A student founder community helping students turn ideas into action —
          with mindset, strategy, and AI-powered execution.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.9rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <button
            onClick={onCTAClick}
            style={{
              fontFamily: FONT.family,
              fontWeight: FONT.subheading,
              fontSize: "1rem",
              background: COLORS.neon,
              color: COLORS.darkText,
              border: "none",
              borderRadius: 8,
              padding: "0.95rem 1.4rem",
              cursor: "pointer",
              boxShadow: "0 2px 16px 0 rgba(199,255,0,0.15)",
            }}
          >
            Join Launchpad
          </button>

          <a
            href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: FONT.family,
              fontWeight: FONT.subheading,
              fontSize: "1rem",
              color: COLORS.lightText,
              textDecoration: "none",
              border: `1.5px solid ${COLORS.blue}`,
              borderRadius: 8,
              padding: "0.95rem 1.2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            Instagram
          </a>
        </div>

        <div
          style={{
            fontFamily: FONT.family,
            fontWeight: FONT.body,
            fontSize: "0.95rem",
            color: COLORS.blue,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Student founder community
        </div>
      </div>

      {/* Right image */}
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          justifySelf: "center",
          order: isMobile ? -1 : 0,
        }}
      >
        <div
          style={{
            ...editorialAccent,
            padding: "0.7rem",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <img
            src={heroImage}
            alt="Launchpad Inc visual"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: 6,
              objectFit: "cover",
              aspectRatio: "4 / 5",
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 32,
          right: "10vw",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: COLORS.blue,
          opacity: 0.7,
        }}
      />
    </section>
  );
}

function SectionWhy() {
  return (
    <section
      style={{
        background: COLORS.lightBg,
        color: COLORS.darkText,
        padding: "4rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: `1.5px solid ${COLORS.blue}`,
      }}
    >
      <h2
        style={{
          fontFamily: FONT.family,
          fontWeight: FONT.subheading,
          fontSize: "2rem",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
          textAlign: "center",
        }}
      >
        Why Launchpad?
      </h2>
      <ul
        style={{
          fontFamily: FONT.family,
          fontWeight: FONT.body,
          fontSize: "1.15rem",
          maxWidth: 540,
          lineHeight: 1.6,
          listStyle: "none",
          padding: 0,
          margin: 0,
          textAlign: "center",
        }}
      >
        <li>Shift from job-only to builder mindset.</li>
        <li>Go from confused to clear on your next step.</li>
        <li>Make execution easier with AI tools.</li>
        <li>Build with the right people, not alone.</li>
      </ul>
    </section>
  );
}

function SectionWho() {
  const items = [
    "Students who want to build something",
    "Students with ideas but no clarity",
    "Students who want a founder mindset",
    "Students who want to learn execution, design, business strategy, and product thinking",
    "Students who want to be around growth-minded people",
  ];

  return (
    <section
      style={{
        background: COLORS.darkBg,
        color: COLORS.lightText,
        padding: "4rem 1.5rem",
        borderBottom: `1.5px solid ${COLORS.blue}`,
      }}
    >
      <h2
        style={{
          fontFamily: FONT.family,
          fontWeight: FONT.subheading,
          fontSize: "2rem",
          marginBottom: "2rem",
          letterSpacing: "-0.01em",
          textAlign: "center",
        }}
      >
        Who It’s For
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.25rem",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              ...editorialAccent,
              background: "rgba(255,255,255,0.02)",
              padding: "1.25rem 1rem",
              fontFamily: FONT.family,
              fontWeight: FONT.body,
              fontSize: "1.05rem",
              color: COLORS.lightText,
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              lineHeight: 1.4,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: COLORS.blue,
                flexShrink: 0,
              }}
            />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionWhat() {
  const items = [
    "Founder mindset shift",
    "Idea generation & validation",
    "AI tools for faster execution",
    "Product/design/business perspective",
    "Community + accountability",
    "Collaboration with multidisciplinary teams",
  ];

  return (
    <section
      style={{
        background: COLORS.lightBg,
        color: COLORS.darkText,
        padding: "4rem 1.5rem",
        borderBottom: `1.5px solid ${COLORS.blue}`,
      }}
    >
      <h2
        style={{
          fontFamily: FONT.family,
          fontWeight: FONT.subheading,
          fontSize: "2rem",
          marginBottom: "2rem",
          letterSpacing: "-0.01em",
          textAlign: "center",
        }}
      >
        What You’ll Get
      </h2>

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
          maxWidth: 900,
          margin: "0 auto",
          listStyle: "none",
          padding: 0,
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              ...editorialAccent,
              background: "#fff",
              color: COLORS.darkText,
              padding: "1rem",
              fontFamily: FONT.family,
              fontWeight: FONT.body,
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              minHeight: 68,
              lineHeight: 1.35,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 16,
                height: 16,
                border: `2px solid ${COLORS.blue}`,
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function FieldLabel({ children, required = false }) {
  return (
    <label
      style={{
        display: "block",
        fontFamily: FONT.family,
        fontWeight: 600,
        marginBottom: 8,
        color: COLORS.lightText,
        fontSize: "0.95rem",
      }}
    >
      {children} {required && <span style={{ color: COLORS.neon }}>*</span>}
    </label>
  );
}

function inputStyle(hasError) {
  return {
    width: "100%",
    padding: "0.95rem 1rem",
    borderRadius: 8,
    border: `1.5px solid ${hasError ? "#ff5a5a" : "rgba(255,255,255,0.14)"}`,
    background: "rgba(255,255,255,0.03)",
    color: COLORS.lightText,
    fontFamily: FONT.family,
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
  };
}

function errorText(msg) {
  if (!msg) return null;
  return (
    <div
      style={{
        marginTop: 6,
        color: "#ff7b7b",
        fontSize: "0.85rem",
        fontFamily: FONT.family,
      }}
    >
      {msg}
    </div>
  );
}

function SectionSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    university: "",
    degree: "",
    semester: "",
    city: "",
    linkedin: "",
    interests: [],
    builtBefore: "",
    currentStatus: "",
    ideas: "",
    why: "",
    serious: false,
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(f) {
    const e = {};
    if (!f.name.trim()) e.name = "Required";
    if (!f.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Invalid email";
    if (!f.university.trim()) e.university = "Required";
    if (!f.degree.trim()) e.degree = "Required";
    if (!f.semester.trim()) e.semester = "Required";
    if (!f.city.trim()) e.city = "Required";
    if (!f.interests.length) e.interests = "Select at least one";
    if (!f.builtBefore) e.builtBefore = "Required";
    if (!f.currentStatus) e.currentStatus = "Required";
    if (!f.ideas.trim()) e.ideas = "Required";
    if (!f.why.trim()) e.why = "Required";
    if (!f.serious) e.serious = "Please confirm";
    return e;
  }

  const errors = validate(form);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "interests") {
      setForm((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((v) => v !== value),
      }));
      setTouched((t) => ({ ...t, interests: true }));
      return;
    }

    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    setTouched((t) => ({ ...t, [name]: true }));
  }

  function handleBlur(e) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const allTouched = {
      name: true,
      email: true,
      university: true,
      degree: true,
      semester: true,
      city: true,
      interests: true,
      builtBefore: true,
      currentStatus: true,
      ideas: true,
      why: true,
      serious: true,
    };
    setTouched(allTouched);

    const currentErrors = validate(form);
    if (Object.keys(currentErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", form); // mock submit
    }
  }

  const interestOptions = [
    "Startup ideas",
    "Building a product",
    "AI tools",
    "Design",
    "Business strategy",
    "Marketing/content",
    "Networking",
    "Team collaboration",
  ];

  const builtBeforeOptions = [
    "No, but I want to start",
    "Yes, small projects",
    "Yes, I’ve worked on a startup/product",
  ];

  const currentStatusOptions = [
    "I have no idea where to start",
    "I have ideas but no execution",
    "I started but I’m inconsistent",
    "I’m already building and want community",
  ];

  if (submitted) {
    return (
      <section
        id="signup"
        style={{
          background: COLORS.darkBg,
          color: COLORS.lightText,
          padding: "5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: 420,
          borderTop: `1.5px solid ${COLORS.blue}`,
        }}
      >
        <div
          style={{
            ...editorialAccent,
            background: "rgba(255,255,255,0.04)",
            padding: "2.5rem 2rem",
            maxWidth: 520,
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: FONT.family,
              fontWeight: FONT.subheading,
              fontSize: "1.6rem",
              marginBottom: "0.75rem",
            }}
          >
            Application received.
          </h3>
          <p
            style={{
              fontFamily: FONT.family,
              fontWeight: FONT.body,
              fontSize: "1.05rem",
              marginBottom: "1.5rem",
              lineHeight: 1.5,
              color: "#d8dbeb",
            }}
          >
            You’ve taken the first step from idea to action. We’ll reach out soon.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: COLORS.neon,
              color: COLORS.darkText,
              border: "none",
              borderRadius: 8,
              padding: "0.85rem 1.25rem",
              fontWeight: 700,
              fontFamily: FONT.family,
              cursor: "pointer",
            }}
          >
            Back to top
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="signup"
      style={{
        background: COLORS.darkBg,
        color: COLORS.lightText,
        padding: "4rem 1.5rem 5rem",
      }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <div
            style={{
              color: COLORS.blue,
              fontFamily: FONT.family,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              marginBottom: "0.5rem",
            }}
          >
            Join the first wave
          </div>
          <h2
            style={{
              fontFamily: FONT.family,
              fontWeight: FONT.heading,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            Apply to Join Launchpad
          </h2>
          <p
            style={{
              fontFamily: FONT.family,
              fontSize: "1rem",
              color: "#c6cadb",
              marginTop: "0.9rem",
            }}
          >
            Simple form. Serious builders.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            ...editorialAccent,
            background: "rgba(255,255,255,0.03)",
            padding: "1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            <div>
              <FieldLabel required>Full Name</FieldLabel>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle(touched.name && errors.name)}
                placeholder="Your name"
              />
              {touched.name && errorText(errors.name)}
            </div>

            <div>
              <FieldLabel required>Email Address</FieldLabel>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle(touched.email && errors.email)}
                placeholder="you@example.com"
              />
              {touched.email && errorText(errors.email)}
            </div>

            <div>
              <FieldLabel required>University / College Name</FieldLabel>
              <input
                name="university"
                value={form.university}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle(touched.university && errors.university)}
                placeholder="University name"
              />
              {touched.university && errorText(errors.university)}
            </div>

            <div>
              <FieldLabel required>Degree Program / Department</FieldLabel>
              <input
                name="degree"
                value={form.degree}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle(touched.degree && errors.degree)}
                placeholder="CS, Engineering, BBA..."
              />
              {touched.degree && errorText(errors.degree)}
            </div>

            <div>
              <FieldLabel required>Current Semester / Year</FieldLabel>
              <input
                name="semester"
                value={form.semester}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle(touched.semester && errors.semester)}
                placeholder="Semester 4 / Year 2"
              />
              {touched.semester && errorText(errors.semester)}
            </div>

            <div>
              <FieldLabel required>City / Country</FieldLabel>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle(touched.city && errors.city)}
                placeholder="Lahore, Pakistan"
              />
              {touched.city && errorText(errors.city)}
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <FieldLabel>LinkedIn Profile (optional)</FieldLabel>
              <input
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle(false)}
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            <div>
              <FieldLabel required>Have you built anything before?</FieldLabel>
              <select
                name="builtBefore"
                value={form.builtBefore}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle(touched.builtBefore && errors.builtBefore)}
              >
                <option value="">Select an option</option>
                {builtBeforeOptions.map((opt) => (
                  <option key={opt} value={opt} style={{ color: "#000" }}>
                    {opt}
                  </option>
                ))}
              </select>
              {touched.builtBefore && errorText(errors.builtBefore)}
            </div>

            <div>
              <FieldLabel required>What best describes you right now?</FieldLabel>
              <select
                name="currentStatus"
                value={form.currentStatus}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle(touched.currentStatus && errors.currentStatus)}
              >
                <option value="">Select an option</option>
                {currentStatusOptions.map((opt) => (
                  <option key={opt} value={opt} style={{ color: "#000" }}>
                    {opt}
                  </option>
                ))}
              </select>
              {touched.currentStatus && errorText(errors.currentStatus)}
            </div>
          </div>

          <div style={{ marginTop: "1.25rem" }}>
            <FieldLabel required>What are you interested in?</FieldLabel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.75rem",
                ...editorialAccent,
                padding: "0.9rem",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {interestOptions.map((opt) => (
                <label
                  key={opt}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: FONT.family,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="interests"
                    value={opt}
                    checked={form.interests.includes(opt)}
                    onChange={handleChange}
                    style={{ accentColor: COLORS.neon }}
                  />
                  {opt}
                </label>
              ))}
            </div>
            {touched.interests && errorText(errors.interests)}
          </div>

          <div
            style={{
              marginTop: "1.25rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
            }}
          >
            <div>
              <FieldLabel required>What kind of ideas/products excite you?</FieldLabel>
              <textarea
                name="ideas"
                value={form.ideas}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                style={{
                  ...inputStyle(touched.ideas && errors.ideas),
                  resize: "vertical",
                }}
                placeholder="Tell us what you want to build..."
              />
              {touched.ideas && errorText(errors.ideas)}
            </div>

            <div>
              <FieldLabel required>Why do you want to join Launchpad?</FieldLabel>
              <textarea
                name="why"
                value={form.why}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                style={{
                  ...inputStyle(touched.why && errors.why),
                  resize: "vertical",
                }}
                placeholder="What are you hoping to learn/build?"
              />
              {touched.why && errorText(errors.why)}
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: FONT.family,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                name="serious"
                checked={form.serious}
                onChange={handleChange}
                style={{ accentColor: COLORS.neon }}
              />
              I’m serious about learning and building
            </label>
            {touched.serious && errorText(errors.serious)}
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontFamily: FONT.family,
                fontSize: "0.9rem",
                color: "#B8BDD1",
              }}
            >
              We’ll use this to understand your goals and onboard the right people.
            </div>

            <button
              type="submit"
              style={{
                background: COLORS.neon,
                color: COLORS.darkText,
                border: "none",
                borderRadius: 8,
                padding: "0.95rem 1.5rem",
                fontFamily: FONT.family,
                fontWeight: 800,
                fontSize: "1rem",
                cursor: "pointer",
                minWidth: 170,
              }}
            >
              Apply to Join
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: COLORS.lightBg,
        color: COLORS.darkText,
        borderTop: `1.5px solid ${COLORS.blue}`,
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
          fontFamily: FONT.family,
        }}
      >
        <div>
          <div style={{ fontWeight: 800 }}>Launchpad Inc.</div>
          <div style={{ color: COLORS.blue, fontSize: "0.95rem" }}>
            Student → Founder
          </div>
        </div>

        <div
          style={{
            fontSize: "0.9rem",
            opacity: 0.9,
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://instagram.com/launchpad.founders"
            target="_blank"
            rel="noreferrer"
            style={{ color: COLORS.darkText, textDecoration: "none", fontWeight: 600 }}
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: COLORS.darkText, textDecoration: "none", fontWeight: 600 }}
          >
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const scrollToSignup = () => {
    const el = document.getElementById("signup");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: FONT.family,
        background: COLORS.lightBg,
        margin: 0,
      }}
    >
      <SectionHero onCTAClick={scrollToSignup} />
      <SectionWhy />
      <SectionWho />
      <SectionWhat />
      <SectionSignup />
      <Footer />
    </div>
  );
}