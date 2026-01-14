// src/components/LandingPage.tsx
import React, { useEffect, useState } from 'react';
import { Sun, Moon, Type, Image, Calendar, Table, Globe, Github, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';


const LandingPage: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage or system preference on mount
    if (localStorage.theme === 'dark') return true;
    if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-inter">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(prev => !prev)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <Sun className="h-6 w-6" />
        ) : (
          <Moon className="h-6 w-6" />
        )}
      </button>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Edit PDFs <span className="text-orange-500">Effortlessly</span><br />
            with <span className="font-noto-devanagari text-orange-500">मराठी & हिंदी</span> Support
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
            Free, browser-based PDF editor built for India. Perfect Marathi & Hindi fonts, no limits, no sign-up.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/designer"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition shadow-lg"
            >
              Start Editing Now →
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              See Features
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Powerful Features for Everyone
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* PDF-मी */}
            <FeatureCard
              icon={<div className="h-12 w-12 text-4xl md:text-5xl  text-orange-500">मी</div>}
              title="PDF-मी (Marathi & Hindi)"
              description={
                <>
                  Full <span className="font-noto-devanagari text-lg">मराठी</span> &{' '}
                  <span className="font-noto-devanagari text-lg">हिंदी</span> support with Noto Sans Devanagari,
                  Mukta & Kruti Dev fonts.
                </>
              }
            />

            <FeatureCard
              icon={<Type className="h-12 w-12 text-orange-500" />}
              title="Rich Text & Shapes"
              description="Add text, multi-line text, lines, rectangles, ellipses — full control over style & rotation."
            />

            <FeatureCard
              icon={<Image className="h-12 w-12 text-orange-500" />}
              title="Images, SVG & Barcodes"
              description="Embed images, SVG, QR codes, barcodes — ideal for invoices & certificates."
            />

            <FeatureCard
              icon={<Calendar className="h-12 w-12 text-orange-500" />}
              title="Form Elements"
              description="Date/time, select dropdowns, radio groups, checkboxes — perfect for smart forms."
            />

            <FeatureCard
              icon={<Table className="h-12 w-12 text-orange-500" />}
              title="Tables & Layouts"
              description="Insert & customize tables to organize your data beautifully."
            />

            <FeatureCard
              icon={<Globe className="h-12 w-12 text-orange-500" />}
              title="100% Browser-Based"
              description="No install, no server uploads, privacy-first — works offline after load."
            />
          </div>
        </div>
      </section>

      {/** Appreciation Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
            Thank You, pdfme Team ❤️
          </h2>

        <div className="prose prose-lg dark:prose-invert mx-auto text-slate-700 dark:text-slate-300 max-w-none">
          <p className="mb-8">
            First and foremost — a big shoutout and huge thanks to the original{' '}
            <strong>pdfme</strong> developers.
          </p>
        </div>

        

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/pdfme/pdfme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
          >
            <Github className="h-5 w-5 mr-2" />
            PDFME On GitHub
          </a>

          {/* Optional: Add your own fork link if you want */}
          {/* <a
            href="https://github.com/rahulshahare/pdfme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Globe className="h-5 w-5 mr-2" />
            My Fork (PDF-मी)
          </a>  */}
        </div>

        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
          <h3 className="text-3xl font-bold text-primary mb-6">
            Want Support for More Languages?
          </h3>

          <a
            href="https://twitter.com/rahulshahare"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center px-6 py-3 text-lg font-medium rounded-xl bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition text-blue-700 dark:text-blue-300"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Contact me @rahulshahare
          </a>

        </div>

        
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Scan to Launch <span className="font-noto-devanagari text-orange-500">PDF-मी</span> Editor
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Quick access on your phone or tablet — open the editor instantly and start editing PDFs in Marathi & Hindi.
            <br />
            QR code links to:{' '}
            <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">
              https://rahulshahare.github.io/pdfme
            </code>
          </p>

          {/* Replace with your own generated QR code image */}
          <div className="max-w-xs mx-auto bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-orange-200 dark:border-orange-800">
            {/* Example placeholder - replace src with your real QR */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://rahulshahare.github.io/pdfme&color=000000&bgcolor=f97316"
              alt="QR Code - PDF-मी Editor"
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-6 text-lg font-medium text-orange-500">Scan with your phone camera</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 bg-orange-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Edit PDFs in <span className="font-noto-devanagari">मराठी</span> &{' '}
            <span className="font-noto-devanagari">हिंदी</span>?
          </h2>
          <Link
              to="designer"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-medium rounded-xl bg-white text-orange-500 hover:bg-orange-50 transition shadow-lg"
          >
            Launch PDF-मी Editor Now →
          </Link>
          <p className="mt-8 text-lg opacity-90">
            Made with ❤️ in Bharat • Open Source • By Oceangreen Technologies
          </p>
        </div>
      </footer>
    </div>
  );
};

// Reusable Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition flex flex-col items-center text-center">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-orange-500">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

export default LandingPage;