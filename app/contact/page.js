"use client";

import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Section */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="font-poppins text-5xl font-bold bg-clip-text text-transparent bg-custom-gradient text-center mb-4">
              Contact Me
            </h1>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">I Want To Hear From You</h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. IST, Monday through Friday.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="h-14 w-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">Ahmedabad, India</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">hirenkhut92663@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 8160343272</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
                <div className="text-center">
                  {/* <button
                    type="submit"
                    className="bg-custom-gradient from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    Submit Now
                  </button> */}
                  <AnimatedButton
                    title='Submit Now'
                    svg=''
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      {/* <section className="w-full h-96 mt-16 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0272012964184!2d72.5713623150114!3d23.02250548494754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f3d9f5d3a5%3A0x57d83c501afdf0e1!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1652930661454!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Shastrinagar, Ahmedabad, Gujarat, India"
          aria-label="Location map"
        ></iframe>
      </section> */}
    </div>
  );
};

export default ContactPage;