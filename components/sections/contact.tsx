"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import { contactInfo, consultationPackages } from "@/lib/data";
import { Mail, Send, Calendar, CreditCard, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
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
    <section
      id="contact"
      className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/20 dark:to-blue-950/20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to advance your AWS skills or transform your organization's
            cloud infrastructure? Let's discuss how we can work together.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
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

        {/* Contact Forms */}
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("message")}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "message"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab("booking")}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
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
              className="max-w-xl mx-auto"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Send a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleMessageSubmit} className="space-y-4">
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
                        rows={5}
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
              className="space-y-8"
            >
              <div className="grid md:grid-cols-3 gap-4">
                {consultationPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`h-full ${
                        pkg.popular ? "border-primary shadow-lg" : ""
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{pkg.name}</CardTitle>
                          {pkg.popular && (
                            <Badge className="bg-primary text-primary-foreground">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary font-semibold text-sm">
                          {pkg.duration}
                        </p>
                        <p className="text-primary font-bold text-lg">
                          GHC {pkg.price.toLocaleString()}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {pkg.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {pkg.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Book a Consultation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="booking-name">Full Name</Label>
                        <Input
                          id="booking-name"
                          value={bookingForm.name}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setBookingForm({
                              ...bookingForm,
                              name: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="booking-email">Email Address</Label>
                        <Input
                          id="booking-email"
                          type="email"
                          value={bookingForm.email}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setBookingForm({
                              ...bookingForm,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="booking-phone">Phone Number</Label>
                        <Input
                          id="booking-phone"
                          type="tel"
                          value={bookingForm.phone}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setBookingForm({
                              ...bookingForm,
                              phone: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="booking-package">
                          Consultation Package
                        </Label>
                        <Select
                          value={bookingForm.package}
                          onValueChange={(value: string) =>
                            setBookingForm({ ...bookingForm, package: value })
                          }
                          required
                        >
                          <SelectTrigger id="booking-package">
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                          <SelectContent>
                            {consultationPackages.map((pkg) => (
                              <SelectItem key={pkg.id} value={pkg.id}>
                                {pkg.name} ({pkg.duration})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="booking-date">Preferred Date</Label>
                        <Input
                          id="booking-date"
                          type="date"
                          value={bookingForm.preferredDate}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setBookingForm({
                              ...bookingForm,
                              preferredDate: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="booking-time">Preferred Time</Label>
                        <Input
                          id="booking-time"
                          type="time"
                          value={bookingForm.preferredTime}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setBookingForm({
                              ...bookingForm,
                              preferredTime: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="booking-notes">Additional Notes</Label>
                      <Textarea
                        id="booking-notes"
                        rows={4}
                        value={bookingForm.notes}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          setBookingForm({
                            ...bookingForm,
                            notes: e.target.value,
                          })
                        }
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Booking..."
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4 mr-2" />
                          Book Now
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
