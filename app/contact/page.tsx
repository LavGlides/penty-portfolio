"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "penty.joseph@example.com",
    description: "Send me an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 123 456 7890",
    description: "Call for immediate assistance",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lagos, Nigeria",
    description: "Available for on-site training",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "Quick response guaranteed",
  },
];

const consultationPackages = [
  {
    id: "basic",
    name: "Basic Consultation",
    duration: "30 minutes",
    price: 5000,
    description: "Perfect for initial discussions and quick questions",
    features: [
      "30-minute video call",
      "Basic assessment",
      "Action plan outline",
      "Follow-up email",
    ],
  },
  {
    id: "standard",
    name: "Standard Consultation",
    duration: "60 minutes",
    price: 8000,
    description: "Comprehensive consultation for detailed planning",
    features: [
      "60-minute video call",
      "Detailed assessment",
      "Custom action plan",
      "Resource recommendations",
      "Follow-up session",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Consultation",
    duration: "90 minutes",
    price: 12000,
    description: "In-depth consultation with ongoing support",
    features: [
      "90-minute video call",
      "Complete analysis",
      "Detailed roadmap",
      "Resource package",
      "30-day email support",
    ],
  },
];

export default function ContactPage() {
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("message");
  const { toast } = useToast();

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for your message. I'll get back to you within 24 hours.",
    });

    setMessageForm({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    toast({
      title: "Booking Confirmed!",
      description:
        "Your consultation has been booked. Payment confirmation will be sent to your email.",
    });

    setBookingForm({
      name: "",
      email: "",
      phone: "",
      package: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Ready to transform your skills or organization? Let's discuss
                how we can work together to achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Forms */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-muted p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab("message")}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeTab === "message"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Send Message
                </button>
                <button
                  onClick={() => setActiveTab("booking")}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeTab === "booking"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Book Consultation
                </button>
              </div>
            </div>

            {activeTab === "message" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Send a Message</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleMessageSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={messageForm.name}
                            onChange={(e) =>
                              setMessageForm({
                                ...messageForm,
                                name: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={messageForm.email}
                            onChange={(e) =>
                              setMessageForm({
                                ...messageForm,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={messageForm.subject}
                          onChange={(e) =>
                            setMessageForm({
                              ...messageForm,
                              subject: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={6}
                          value={messageForm.message}
                          onChange={(e) =>
                            setMessageForm({
                              ...messageForm,
                              message: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeTab === "booking" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Consultation Packages */}
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-2xl font-bold mb-6">
                      Choose Your Consultation Package
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {consultationPackages.map((pkg) => (
                        <Card
                          key={pkg.id}
                          className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
                            bookingForm.package === pkg.id
                              ? "ring-2 ring-primary"
                              : ""
                          } ${pkg.popular ? "border-primary" : ""}`}
                          onClick={() =>
                            setBookingForm({ ...bookingForm, package: pkg.id })
                          }
                        >
                          {pkg.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                Most Popular
                              </span>
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle className="text-lg">
                              {pkg.name}
                            </CardTitle>
                            <div className="text-2xl font-bold text-primary">
                              GHC{pkg.price.toLocaleString()}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {pkg.duration}
                            </p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm mb-4">{pkg.description}</p>
                            <ul className="space-y-2">
                              {pkg.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-center space-x-2 text-sm"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Booking Form */}
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5" />
                          <span>Book Your Session</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form
                          onSubmit={handleBookingSubmit}
                          className="space-y-4"
                        >
                          <div className="space-y-2">
                            <Label htmlFor="booking-name">Full Name</Label>
                            <Input
                              id="booking-name"
                              value={bookingForm.name}
                              onChange={(e) =>
                                setBookingForm({
                                  ...bookingForm,
                                  name: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="booking-email">Email</Label>
                            <Input
                              id="booking-email"
                              type="email"
                              value={bookingForm.email}
                              onChange={(e) =>
                                setBookingForm({
                                  ...bookingForm,
                                  email: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="booking-phone">Phone</Label>
                            <Input
                              id="booking-phone"
                              type="tel"
                              value={bookingForm.phone}
                              onChange={(e) =>
                                setBookingForm({
                                  ...bookingForm,
                                  phone: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="preferred-date">
                              Preferred Date
                            </Label>
                            <Input
                              id="preferred-date"
                              type="date"
                              value={bookingForm.preferredDate}
                              onChange={(e) =>
                                setBookingForm({
                                  ...bookingForm,
                                  preferredDate: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="preferred-time">
                              Preferred Time
                            </Label>
                            <Select
                              value={bookingForm.preferredTime}
                              onValueChange={(value) =>
                                setBookingForm({
                                  ...bookingForm,
                                  preferredTime: value,
                                })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="09:00">9:00 AM</SelectItem>
                                <SelectItem value="10:00">10:00 AM</SelectItem>
                                <SelectItem value="11:00">11:00 AM</SelectItem>
                                <SelectItem value="14:00">2:00 PM</SelectItem>
                                <SelectItem value="15:00">3:00 PM</SelectItem>
                                <SelectItem value="16:00">4:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="notes">Additional Notes</Label>
                            <Textarea
                              id="notes"
                              rows={3}
                              value={bookingForm.notes}
                              onChange={(e) =>
                                setBookingForm({
                                  ...bookingForm,
                                  notes: e.target.value,
                                })
                              }
                              placeholder="Tell me about your goals or specific areas you'd like to focus on..."
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting || !bookingForm.package}
                          >
                            {isSubmitting ? (
                              "Processing Payment..."
                            ) : (
                              <>
                                <CreditCard className="w-4 h-4 mr-2" />
                                Book & Pay with Paystack
                              </>
                            )}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
