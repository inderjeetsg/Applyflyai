import React, { useState } from 'react';
import './LandingPage.css';

/* ---- Inline SVG Icons ---- */
const LogoIcon = () => (
  <svg className="navbar-logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#4f46e5"/>
    <path d="M8 22 L16 8 L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 18 L21 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="10" r="3" fill="#06b6d4"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="7" cy="7" r="7" fill="#10b981"/>
    <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="7" cy="7" r="7" fill="#e5e7eb"/>
    <path d="M5 5l4 4M9 5l-4 4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* ---- Data ---- */
const FEATURES = [
  {
    icon: '🚀',
    bg: 'rgba(79,70,229,0.1)',
    title: 'Auto-Apply to Jobs',
    desc: 'Let our AI apply to hundreds of relevant job postings on your behalf — LinkedIn, Indeed, Greenhouse, and more.',
  },
  {
    icon: '📄',
    bg: 'rgba(16,185,129,0.1)',
    title: 'AI Resume Builder',
    desc: 'Generate a tailored, ATS-optimised resume for every role in seconds using your profile and the job description.',
  },
  {
    icon: '✉️',
    bg: 'rgba(245,158,11,0.1)',
    title: 'Smart Cover Letters',
    desc: 'Personalised cover letters crafted by AI that speak directly to what each employer is looking for.',
  },
  {
    icon: '📊',
    bg: 'rgba(6,182,212,0.1)',
    title: 'Application Tracker',
    desc: 'Track every application — status, interviews, follow-ups — all in one clean dashboard.',
  },
  {
    icon: '🎯',
    bg: 'rgba(239,68,68,0.1)',
    title: 'ATS Score Analyser',
    desc: "Instantly check your resume's ATS compatibility score and get specific suggestions to improve it.",
  },
  {
    icon: '🔔',
    bg: 'rgba(139,92,246,0.1)',
    title: 'Smart Job Alerts',
    desc: 'Receive real-time alerts for jobs that match your skills, preferences, and salary expectations.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'ApplyFlyAI cut my job search from 3 months to 3 weeks. I had 12 interviews lined up before I even noticed. Unreal.',
    name: 'Sarah M.',
    role: 'Software Engineer → Senior SWE at Stripe',
    color: '#4f46e5',
    initials: 'SM',
  },
  {
    quote: 'The AI resume builder nailed keywords I\'d never have thought to include. My ATS pass rate went from 20% to 78%.',
    name: 'James K.',
    role: 'Product Designer → Head of Design at Figma',
    color: '#10b981',
    initials: 'JK',
  },
  {
    quote: 'I applied to 200 jobs in 2 days. Previously that would have taken me a month. Landed my dream role in fintech.',
    name: 'Priya R.',
    role: 'Data Analyst → Data Scientist at Revolut',
    color: '#f59e0b',
    initials: 'PR',
  },
];

const PRICING = [
  {
    tier: 'Free',
    price: '$0',
    per: '',
    desc: 'Perfect for dipping your toes in.',
    popular: false,
    features: [
      { label: '10 auto-applications / month', included: true },
      { label: '3 AI resume exports', included: true },
      { label: 'Basic job tracking', included: true },
      { label: 'Cover letter generator', included: false },
      { label: 'ATS score analyser', included: false },
      { label: 'Priority support', included: false },
    ],
  },
  {
    tier: 'Pro',
    price: '$19',
    per: '/mo',
    desc: 'The full power of AI job search.',
    popular: true,
    features: [
      { label: 'Unlimited auto-applications', included: true },
      { label: 'Unlimited AI resume exports', included: true },
      { label: 'Full application tracker', included: true },
      { label: 'Cover letter generator', included: true },
      { label: 'ATS score analyser', included: true },
      { label: 'Priority support', included: false },
    ],
  },
  {
    tier: 'Growth',
    price: '$39',
    per: '/mo',
    desc: 'For serious job seekers & teams.',
    popular: false,
    features: [
      { label: 'Everything in Pro', included: true },
      { label: 'White-glove onboarding', included: true },
      { label: 'LinkedIn profile optimiser', included: true },
      { label: 'Interview prep AI', included: true },
      { label: 'Career coach sessions (2/mo)', included: true },
      { label: 'Priority 24/7 support', included: true },
    ],
  },
];

const FAQS = [
  {
    q: 'How does auto-apply work?',
    a: 'After you set up your profile, preferences, and upload your base resume, ApplyFlyAI scans thousands of job boards and automatically submits tailored applications on your behalf — no manual form-filling required.',
  },
  {
    q: 'Will employers know I used AI?',
    a: 'Our AI crafts applications that sound authentically human, reflecting your experience and voice. Every application is personalised to the role, so it reads naturally to hiring managers.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. We use industry-standard encryption for all data in transit and at rest. We never sell your personal information or share it with third parties without your consent.',
  },
  {
    q: 'Can I control which jobs I apply to?',
    a: 'Absolutely. You set filters for job type, location, salary range, and company size. You can also review and approve applications before they\'re sent, or switch to fully automatic mode.',
  },
  {
    q: 'What job boards do you support?',
    a: 'We currently support LinkedIn, Indeed, Glassdoor, Greenhouse, Lever, Workday, and 30+ other platforms. We\'re adding more every week.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes, you can cancel anytime from your account settings. There are no long-term contracts or cancellation fees.',
  },
];

/* ---- Sub-components ---- */
function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <a href="/" className="navbar-logo" aria-label="ApplyFlyAI home">
          <LogoIcon />
          ApplyFlyAI
        </a>
        <ul className="navbar-links" role="list">
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="navbar-cta">
          <a href="#pricing" className="btn-ghost">Sign in</a>
          <a href="#pricing" className="btn-primary">Get Started Free</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div>
          <div className="hero-badge">
            <span>✨</span> AI-Powered Job Search
          </div>
          <h1 className="hero-title" id="hero-title">
            Land your dream job <span className="highlight">10× faster</span> with AI
          </h1>
          <p className="hero-subtitle">
            ApplyFlyAI auto-applies to hundreds of matching jobs and builds a tailored,
            ATS-optimised resume for every role — all on autopilot.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn-primary">
              Start for Free →
            </a>
            <a href="#how-it-works" className="btn-outline">
              See how it works
            </a>
          </div>
          <div className="hero-social-proof">
            <div className="hero-avatars" aria-hidden="true">
              {[
                { bg: '#4f46e5', label: 'U1' },
                { bg: '#10b981', label: 'U2' },
                { bg: '#f59e0b', label: 'U3' },
                { bg: '#ec4899', label: 'U4' },
              ].map((a) => (
                <div key={a.label} className="hero-avatar" style={{ background: a.bg }} title={a.label} />
              ))}
            </div>
            <p className="hero-social-proof-text">
              Trusted by <strong>5,000+</strong> job seekers
            </p>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-dot" style={{ background: '#4f46e5' }} />
              <div>
                <div className="hero-card-title">Your Job Dashboard</div>
                <div className="hero-card-subtitle">Updated 2 minutes ago</div>
              </div>
            </div>
            <div className="hero-stat-grid">
              <div className="hero-stat">
                <div className="hero-stat-value">147</div>
                <div className="hero-stat-label">Applications sent</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">12</div>
                <div className="hero-stat-label">Interviews booked</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">84%</div>
                <div className="hero-stat-label">ATS pass rate</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">3</div>
                <div className="hero-stat-label">Offers received</div>
              </div>
            </div>
            <div>
              <div className="hero-progress-label">
                <span>Resume strength</span>
                <span>92%</span>
              </div>
              <div className="hero-progress-bar">
                <div className="hero-progress-fill" style={{ width: '92%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: '👤',
      title: 'Build your profile',
      desc: 'Tell us about your experience, skills, target roles, and job preferences. It takes less than 5 minutes.',
    },
    {
      number: '2',
      icon: '🤖',
      title: 'AI tailors your resume',
      desc: 'For every job, our AI generates a personalised resume and cover letter optimised for that specific role.',
    },
    {
      number: '3',
      icon: '🎉',
      title: 'Interviews roll in',
      desc: 'Sit back while ApplyFlyAI applies on your behalf. Track every application and respond to interview invites.',
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <span className="section-tag">Simple process</span>
        <h2 className="section-title" id="how-title">Get hired in 3 easy steps</h2>
        <p className="section-subtitle">From setup to offer letter — ApplyFlyAI handles the heavy lifting so you can focus on interview prep.</p>
        <div className="steps-grid">
          {steps.map((s) => (
            <div className="step-card" key={s.number}>
              <div className="step-number" aria-label={`Step ${s.number}`}>{s.number}</div>
              <div className="step-icon-wrap" aria-hidden="true">{s.icon}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="container">
        <span className="section-tag">Everything you need</span>
        <h2 className="section-title" id="features-title">Supercharge your job search</h2>
        <p className="section-subtitle">A complete AI toolkit built for modern job seekers — from first application to signed offer.</p>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-icon" style={{ background: f.bg }} aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
  const stats = [
    { value: '500K+', label: 'Applications sent' },
    { value: '12K+', label: 'Jobs landed' },
    { value: '84%', label: 'Avg. ATS pass rate' },
    { value: '3 weeks', label: 'Avg. time to offer' },
  ];

  return (
    <section className="stats-banner" aria-label="Platform statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-item-value">{s.value}</div>
              <div className="stat-item-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <span className="section-tag">Real stories</span>
        <h2 className="section-title" id="testimonials-title">Job seekers love ApplyFlyAI</h2>
        <p className="section-subtitle">Don't just take our word for it — here's what our users are saying.</p>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <blockquote className="testimonial-card" key={t.name}>
              <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <footer className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <span className="section-tag">Pricing</span>
        <h2 className="section-title" id="pricing-title">Simple, transparent pricing</h2>
        <p className="section-subtitle">Start free, upgrade when you're ready. No hidden fees, no long-term contracts.</p>
        <div className="pricing-grid">
          {PRICING.map((plan) => (
            <div
              key={plan.tier}
              className={`pricing-card${plan.popular ? ' popular' : ''}`}
            >
              {plan.popular && (
                <div className="pricing-popular-badge">Most Popular</div>
              )}
              <div className="pricing-tier">{plan.tier}</div>
              <div className="pricing-price">
                {plan.price}<span>{plan.per}</span>
              </div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-features" aria-label={`${plan.tier} plan features`}>
                {plan.features.map((f) => (
                  <li key={f.label}>
                    {f.included
                      ? <span className="pricing-check" aria-hidden="true"><CheckIcon /></span>
                      : <span className="pricing-x" aria-hidden="true"><XIcon /></span>
                    }
                    <span style={{ color: f.included ? 'inherit' : '#9ca3af' }}>{f.label}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={plan.popular ? 'btn-primary' : 'btn-outline'}
                style={{ width: '100%', justifyContent: 'center' }}
                aria-label={`Get started with ${plan.tier} plan`}
              >
                {plan.tier === 'Free' ? 'Start for Free' : `Get ${plan.tier}`}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq-inner">
        <span className="section-tag">FAQ</span>
        <h2 className="section-title" id="faq-title">Frequently asked questions</h2>
        <p className="section-subtitle">Everything you need to know about ApplyFlyAI.</p>
        <dl className="faq-list">
          {FAQS.map((item, i) => (
            <div
              key={item.q}
              className={`faq-item${openIndex === i ? ' open' : ''}`}
            >
              <dt>
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  {item.q}
                  <span className="faq-chevron" aria-hidden="true">▾</span>
                </button>
              </dt>
              <dd
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
              >
                <div className="faq-answer-inner">{item.a}</div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="final-cta-title" id="cta-title">
          Ready to fly through your job search?
        </h2>
        <p className="final-cta-subtitle">
          Join thousands of job seekers who found their dream role faster with ApplyFlyAI. Start free today.
        </p>
        <a href="#pricing" className="btn-white">
          Get Started for Free →
        </a>
        <p className="final-cta-note">No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="navbar-logo" aria-label="ApplyFlyAI home">
              <LogoIcon />
              ApplyFlyAI
            </a>
            <p className="footer-brand-desc">
              Auto-apply to jobs and build AI-powered resumes. The smartest way to land your next role.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} ApplyFlyAI. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---- Main LandingPage export ---- */
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <StatsBanner />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
