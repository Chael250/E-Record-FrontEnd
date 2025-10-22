'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight,
  TrendingUp,
  DollarSign,
  BarChart3,
  Users,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      title: 'Finance Made Easier',
      description: 'Track School expenses how student pay their school fees and track who and how bills are paid at your school through using our system',
      icon: <DollarSign size={32} />
    },
    {
      title: 'Powerful Reports',
      description: 'Have your school\'s financial reports in our one in one app which offers all these! from res to modernises the financial system in schools',
      icon: <BarChart3 size={32} />
    },
    {
      title: 'Multi-School Management',
      description: 'Not only working for only one school starts in but working for different schools in fina nda and modernising the system',
      icon: <Users size={32} />
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Serving 15+ reports in system' },
    { number: '50+', label: '50+ Partnered Schools trust e-record' },
    { number: '3,000+', label: '3K+ Successful documents modernised for schools' }
  ];

  const testimonials = [
    {
      text: 'E-record helped us to make our financial reports like a whole week doing something but now its becoming simple and easier through using e-record modern system which is also making our staff payments easier and faster',
      name: 'Niyigena Papias',
      role: 'Rwanda coding academy Headmaster',
      avatar: '👤'
    },
    {
      text: 'E-record helped us to make our financial reports like a whole week doing something but now its becoming simple and easier through using e-record modern system which is also making our staff payments easier and faster',
      name: 'Niyigena Papias',
      role: 'Rwanda coding academy Headmaster',
      avatar: '👤'
    },
    {
      text: 'E-record helped us to make our financial reports like a whole week doing something but now its becoming simple and easier through using e-record modern system which is also making our staff payments easier and faster',
      name: 'Niyigena Papias',
      role: 'Rwanda coding academy Headmaster',
      avatar: '👤'
    }
  ];

  const faqs = [
    {
      question: 'Exactly which problem did e-record come to solve',
      answer: 'E-record was created to modernize and simplify school financial management, making it easier to track fees, expenses, and generate reports.'
    },
    {
      question: 'Exactly which problem did e-record come to solve',
      answer: 'E-record was created to modernize and simplify school financial management, making it easier to track fees, expenses, and generate reports.'
    },
    {
      question: 'Exactly which problem did e-record come to solve',
      answer: 'E-record was created to modernize and simplify school financial management, making it easier to track fees, expenses, and generate reports.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              E-Record
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600">How it works</a>
              <a href="#features" className="text-gray-700 hover:text-purple-600">Features</a>
              <a href="#contacts" className="text-gray-700 hover:text-purple-600">Contacts</a>
              <Link 
                href="/auth/register"
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-purple-600 mb-4">The leading software for school financial management</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Monitor your school financial Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              All in one system making schools financial management easier and modern
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link 
                href="/auth/register"
                className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-medium"
              >
                Get Started
              </Link>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 font-medium">
                See how it works
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Welcome to our platform John</h3>
                <p className="text-sm text-gray-600">2025 - First Term</p>
              </div>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Total School Fees</span>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="text-purple-600" size={16} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">1000000 Rwf</div>
                <div className="flex items-center gap-1 mt-2 text-sm text-blue-600">
                  <TrendingUp size={14} />
                  <span>1.5%</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Staff Payments</span>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="text-green-600" size={16} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">1000000 Rwf</div>
                <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                  <TrendingUp size={14} />
                  <span>1.5%</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Term Expenses</span>
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="text-red-600" size={16} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">1000000 Rwf</div>
                <div className="flex items-center gap-1 mt-2 text-sm text-red-600">
                  <TrendingUp size={14} />
                  <span>1.5%</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Total Budget Usage</span>
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="text-orange-600" size={16} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Table */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">School Fees Management</h4>
                <button className="px-4 py-2 bg-purple-600 text-white text-sm rounded-md">View All</button>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm text-gray-900">Dushimire Aine</span>
                    <span className="text-sm text-gray-600">Senior 1 B</span>
                    <span className="text-sm text-gray-900">850000</span>
                    <span className="text-sm text-gray-600">10/5/2025</span>
                    <span className="text-sm text-blue-600">Paid</span>
                    <span className="text-sm text-gray-600">Bank Account</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Features</h2>
            <p className="text-xl text-gray-600">Get to know what we offer to those who use our system</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <button className="flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all">
                  Learn more <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join a large number of schools who are started using our system
            </h3>
            <p className="text-gray-600">This is a large number of schools who are working and using our system</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-4">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">What Different schools say about us</h3>
              <p className="text-gray-600">Stories from different schools who started using our system for modernizing their financial records</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-gray-600">We have put together some commonly asked questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`text-gray-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-linear-to-br from-purple-600 to-purple-800 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-12">Get in touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email us</div>
                    <div className="text-purple-100">e-record@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Phone number</div>
                    <div className="text-purple-100">+250788-888-888</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Location</div>
                    <div className="text-purple-100">Gasabo, KG 2314, Kigali Rwanda</div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="font-medium mb-4">Connect with us:</div>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-12">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjects</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                  <input
                    type="text"
                    placeholder="School Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium flex items-center justify-center gap-2">
                  Send Message <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">E-Record</h3>
              <p className="text-sm text-gray-600 mb-4">Connect with us:</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">How it works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Contacts</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">User guide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Contact us</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Subscribe to our newsletter</h4>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            Copyright © 2025 . All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
