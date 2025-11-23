import React from "react";
import Logo from "./Logo"; // replace your logo with the new AeroSutra logo

const Footer = () => {
  return (
    <footer className="w-full px-3 md:px-4 py-5">
      <div className="w-full max-w-none mx-auto rounded-[20px] border border-border bg-card p-4 md:p-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
          {/* Newsletter */}
          <div className="md:col-span-2 space-y-2">
            <h3 className="text-foreground text-lg font-medium">Stay Updated</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Get real-time updates on air quality trends, alerts, and AQI monitoring improvements.
            </p>
            <form className="mt-1" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-stretch gap-2 rounded-xl border border-border bg-background/60 p-1">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
                  aria-label="Your email"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              You can unsubscribe anytime. See our{" "}
              <a className="underline hover:text-foreground" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">About</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Research & Sensors
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Data & Monitoring */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Monitoring</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Live AQI Map
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pollutant Database
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Historical Data
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sensor Calibration
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Regional Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Research Forum
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-5 pt-3 border-t border-border flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between md:items-center text-muted-foreground text-sm">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-medium text-foreground">AeroSutra</span>
          </div>

          <div className="text-center md:text-left">
            © 2025 AeroSutra Environmental Systems.
          </div>

          <div className="flex gap-4 md:mt-0 justify-center md:justify-end">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Data Usage
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
