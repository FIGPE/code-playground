import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChartIcon, BrainIcon, ChevronLeftIcon, ChevronRightIcon, HandIcon, LockIcon } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

// Main App Component
const Homepage = () => {
  const sectionsRef = {
    home: useRef(null),
    howItWorks: useRef(null),
    traders: useRef(null),
    pricing: useRef(null),
    faq: useRef(null),
  };

  type SectionRefs = {
    [key: string]: React.RefObject<HTMLElement | null>;
  };

  const scrollToSection = (sectionId: string) => {
    (sectionsRef as SectionRefs)[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-inter antialiased text-foreground bg-background">
      {/* Header */}
      <header ref={sectionsRef.home} className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">TradeFlow</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a onClick={() => scrollToSection('home')} className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('howItWorks')} className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">How It Works</a>
            <a onClick={() => scrollToSection('traders')} className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Traders</a>
            <a onClick={() => scrollToSection('pricing')} className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Pricing</a>
            <a onClick={() => scrollToSection('faq')} className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">FAQ</a>
            <Button variant="ghost" className="text-sm font-medium">Sign In</Button>
            <Button>Sign Up</Button>
          </nav>
          <Button className="md:hidden">Sign Up</Button> {/* Mobile CTA */}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 text-center rounded-b-3xl shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Trade Smarter, Not Harder
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Automatically copy trades from verified top traders. Start building your portfolio—no trading experience needed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                Start Copying Now
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-2 border-primary hover:bg-primary/10 transition-colors duration-300">
                View Top Traders
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section ref={sectionsRef.howItWorks} className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <CardTitle className="text-xl font-semibold">Step 1 – Pick a Top Trader</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Browse our performance leaderboard and filter by strategy, risk level, or return. See full trader stats and history.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M22 12H2"/><path d="M7 12V6"/><path d="M17 6v6"/></svg>
                  </div>
                  <CardTitle className="text-xl font-semibold">Step 2 – Click ‘Copy’</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect your account and start mirroring their trades in real-time. You’re in control—follow one or multiple traders.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v-5h10v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M14 9V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7"/><path d="M14 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/></svg>
                  </div>
                  <CardTitle className="text-xl font-semibold">Step 3 – Watch Your Portfolio Grow</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sit back while your account reflects the same trades as your chosen expert. Track your returns in real-time.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Traders Section (Placeholder) */}
        <section ref={sectionsRef.traders} className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Featured Traders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Trader Card 1 */}
              <Card className="p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex-row items-center space-x-4 p-0 pb-4">
                  <img src="https://placehold.co/60x60/ADD8E6/000000?text=JD" alt="Trader John Doe" className="rounded-full w-16 h-16 object-cover" />
                  <div>
                    <CardTitle className="text-xl">John Doe</CardTitle>
                    <CardDescription>ROI: +125%</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-0 pb-4">
                  <p className="text-sm text-gray-600 mb-2">Strategy: Swing Trading</p>
                  <p className="text-sm text-gray-600 mb-4">Risk Level: Moderate</p>
                  <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Performance Chart Placeholder
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button className="w-full">Follow</Button>
                </CardFooter>
              </Card>

              {/* Trader Card 2 */}
              <Card className="p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex-row items-center space-x-4 p-0 pb-4">
                  <img src="https://placehold.co/60x60/FFB6C1/000000?text=AS" alt="Trader Alice Smith" className="rounded-full w-16 h-16 object-cover" />
                  <div>
                    <CardTitle className="text-xl">Alice Smith</CardTitle>
                    <CardDescription>ROI: +88%</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-0 pb-4">
                  <p className="text-sm text-gray-600 mb-2">Strategy: Scalping</p>
                  <p className="text-sm text-gray-600 mb-4">Risk Level: High</p>
                  <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Performance Chart Placeholder
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button className="w-full">Follow</Button>
                </CardFooter>
              </Card>

              {/* Trader Card 3 */}
              <Card className="p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex-row items-center space-x-4 p-0 pb-4">
                  <img src="https://placehold.co/60x60/B0E0E6/000000?text=MS" alt="Trader Mark Stone" className="rounded-full w-16 h-16 object-cover" />
                  <div>
                    <CardTitle className="text-xl">Mark Stone</CardTitle>
                    <CardDescription>ROI: +150%</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-0 pb-4">
                  <p className="text-sm text-gray-600 mb-2">Strategy: Long-term Growth</p>
                  <p className="text-sm text-gray-600 mb-4">Risk Level: Low</p>
                  <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Performance Chart Placeholder
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button className="w-full">Follow</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Use Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Why Copy Trade With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <BarChartIcon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Verified Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Every trader on our platform is ranked by real returns and trade history.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <BrainIcon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">No Experience Needed</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    You don’t need to analyze charts or watch the market—we do the hard work.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <LockIcon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Full Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    View every trade, fee, and result. Nothing hidden.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <HandIcon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Control at Every Step</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Pause, adjust, or stop copying at any time.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* User Testimonials */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">What Our Users Say</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Live Stats */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground rounded-t-3xl shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Live Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl sm:text-5xl font-bold">4,523</p>
                <p className="text-lg sm:text-xl">Active Traders</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold">2.1M+</p>
                <p className="text-lg sm:text-xl">Total Trades Copied</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold">8.3%</p>
                <p className="text-lg sm:text-xl">Average Monthly ROI</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold">$12.4M</p>
                <p className="text-lg sm:text-xl">Total Payouts</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={sectionsRef.faq} className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does copy trading work?</AccordionTrigger>
                <AccordionContent>
                  You browse our platform, choose a top-performing trader to follow, and then your account automatically mirrors their trades in real-time. When they open a trade, your account opens the same trade proportionally to your investment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is my money safe?</AccordionTrigger>
                <AccordionContent>
                  Yes, your funds are held with regulated brokers, not on our platform. We use advanced security measures and encryption to protect your data and ensure transparent operations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I stop copying a trader anytime?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. You have full control over your investments. You can pause or stop copying a trader at any time through your dashboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What are the fees?</AccordionTrigger>
                <AccordionContent>
                  We offer a transparent fee structure, typically a small percentage of the profits generated. There are no hidden charges. Detailed pricing is available on our pricing page.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-blue-100 text-center rounded-t-3xl shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Copy a Top Trader?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Sign up and start earning like a pro in minutes.
            </p>
            <Button size="lg" className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              Join Now – It’s Free
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <span className="text-2xl font-bold text-primary-foreground">TradeFlow</span>
            <p className="text-sm mt-4">Invest smarter, not harder. Copy top-performing traders automatically.</p>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Privacy</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Support Center</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-17 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.4-.7 2.8-1.3 4-1.7z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} TradeFlow. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "I knew nothing about trading, but I’m now up 26% in 4 months. Just copied a pro and watched it grow.",
      name: "Jason M.",
      location: "NYC",
      returns: "+26%",
      image: "https://placehold.co/60x60/87CEEB/000000?text=JM",
    },
    {
      quote: "It’s like having a private portfolio manager without the cost. Super intuitive.",
      name: "Emily R.",
      location: "UK",
      returns: "N/A", // Example, if returns aren't always available
      image: "https://placehold.co/60x60/FFD700/000000?text=ER",
    },
    {
      quote: "The transparency is incredible. I can see every trade and feel confident in my investments.",
      name: "David S.",
      location: "CA",
      returns: "+18%",
      image: "https://placehold.co/60x60/98FB98/000000?text=DS",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 bg-white p-8 sm:p-10 text-center">
              <p className="text-lg sm:text-xl italic text-gray-800 mb-6">"{testimonial.quote}"</p>
              <div className="flex flex-col items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mb-3" />
                <p className="font-semibold text-gray-900">{testimonial.name}, {testimonial.location}</p>
                {testimonial.returns !== "N/A" && <p className="text-sm text-gray-600">Returns: {testimonial.returns}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrev}
        className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md hidden md:flex"
        aria-label="Previous testimonial"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md hidden md:flex"
        aria-label="Next testimonial"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </Button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;

