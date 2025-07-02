"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Calendar,
  Trash2,
  Eye,
  Download,
  Filter,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  MoreHorizontal,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Mock data for admin dashboard
const dashboardStats = [
  {
    title: "Total Messages",
    value: "47",
    icon: MessageSquare,
    change: "+12%",
    trend: "up",
    description: "New inquiries this month",
  },
  {
    title: "Bookings This Month",
    value: "23",
    icon: Calendar,
    change: "+8%",
    trend: "up",
    description: "Consultation bookings",
  },
  {
    title: "Revenue This Month",
    value: "GHC575K",
    icon: TrendingUp,
    change: "+15%",
    trend: "up",
    description: "Total earnings",
  },
  {
    title: "Response Rate",
    value: "98%",
    icon: Clock,
    change: "+2%",
    trend: "up",
    description: "Within 24 hours",
  },
];

const recentMessages = [
  {
    id: 1,
    name: "Kwame Asante",
    email: "kwame@techcorp.com",
    subject: "AWS Solutions Architect Training Inquiry",
    message:
      "Hi Penty, I'm interested in your AWS Solutions Architect training program. Could you provide more details about the curriculum, duration, and pricing? I'm particularly interested in hands-on labs and certification preparation. Looking forward to hearing from you.",
    date: "2024-12-15T10:30:00Z",
    status: "unread",
    priority: "high",
    phone: "+233 24 123 4567",
    company: "TechCorp Ghana",
  },
  {
    id: 2,
    name: "Ama Osei",
    email: "ama@amalitech.com",
    subject: "Collaboration Opportunity",
    message:
      "Hello Penty, I hope this message finds you well. I'm reaching out regarding a potential collaboration opportunity for our upcoming AWS workshop series. Would you be available for a brief call this week to discuss the details?",
    date: "2024-12-14T14:20:00Z",
    status: "read",
    priority: "medium",
    phone: "+233 20 987 6543",
    company: "AmaliTech",
  },
  {
    id: 3,
    name: "Kofi Mensah",
    email: "kofi@cloudtech.com",
    subject: "Cloud Migration Consulting",
    message:
      "We're planning to migrate our infrastructure to AWS and would like to engage your consulting services. Our current setup includes 50+ servers and multiple databases. Can we schedule a consultation to discuss our requirements?",
    date: "2024-12-13T09:15:00Z",
    status: "replied",
    priority: "high",
    phone: "+233 26 555 7890",
    company: "CloudTech Solutions",
  },
  {
    id: 4,
    name: "Akosua Darko",
    email: "akosua@startup.com",
    subject: "Individual Training Request",
    message:
      "Hi, I'm a junior developer looking to transition into cloud computing. I've watched your YouTube tutorials and they're amazing! I'd like to book one-on-one mentoring sessions. What are your rates and availability?",
    date: "2024-12-12T16:45:00Z",
    status: "unread",
    priority: "low",
    phone: "+233 23 444 5678",
    company: "StartupTech Ghana",
  },
  {
    id: 5,
    name: "Yaw Boateng",
    email: "yaw@fintech.com",
    subject: "Enterprise Training Program",
    message:
      "Good day Penty, we're looking to upskill our entire IT team (25 people) in AWS cloud technologies. Could you design a custom training program for us? We're particularly interested in security and compliance aspects.",
    date: "2024-12-11T11:30:00Z",
    status: "read",
    priority: "high",
    phone: "+233 24 777 8899",
    company: "FinTech Ghana",
  },
];

const recentBookings = [
  {
    id: 1,
    name: "Emily Rodriguez",
    email: "emily@healthfirst.com",
    phone: "+233 24 111 2222",
    package: "Standard Consultation",
    packagePrice: 25000,
    date: "2024-12-20",
    time: "10:00 AM",
    status: "confirmed",
    paymentStatus: "paid",
    notes:
      "Interested in AWS migration for healthcare data. HIPAA compliance is crucial.",
    createdAt: "2024-12-15T08:30:00Z",
  },
  {
    id: 2,
    name: "James Wilson",
    email: "james@buildright.com",
    phone: "+233 20 333 4444",
    package: "Premium Consultation",
    packagePrice: 40000,
    date: "2024-12-18",
    time: "2:00 PM",
    status: "pending",
    paymentStatus: "pending",
    notes:
      "Construction company looking to implement IoT solutions on AWS. Need guidance on architecture design.",
    createdAt: "2024-12-14T15:20:00Z",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah@edutech.com",
    phone: "+233 26 555 6666",
    package: "Basic Consultation",
    packagePrice: 15000,
    date: "2024-12-22",
    time: "11:00 AM",
    status: "confirmed",
    paymentStatus: "paid",
    notes:
      "EdTech startup needs advice on scalable architecture for online learning platform.",
    createdAt: "2024-12-13T12:10:00Z",
  },
  {
    id: 4,
    name: "Michael Chen",
    email: "michael@innovate.com",
    phone: "+233 23 777 8888",
    package: "Standard Consultation",
    packagePrice: 25000,
    date: "2024-12-19",
    time: "3:00 PM",
    status: "cancelled",
    paymentStatus: "refunded",
    notes: "Had to reschedule due to emergency. Will book again next month.",
    createdAt: "2024-12-12T09:45:00Z",
  },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const { toast } = useToast();

  // Filter messages based on search
  const filteredMessages = recentMessages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter bookings based on search
  const filteredBookings = recentBookings.filter(
    (booking) =>
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.package.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "read":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "replied":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "cancelled":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const handleReply = async () => {
    if (!replyMessage.trim()) return;

    // Simulate sending reply
    toast({
      title: "Reply Sent!",
      description: `Your reply to ${selectedMessage?.name} has been sent successfully.`,
    });

    setReplyMessage("");
    setSelectedMessage(null);
  };

  const markAsRead = (messageId: number) => {
    // In a real app, this would update the database
    toast({
      title: "Message Updated",
      description: "Message marked as read.",
    });
  };

  const updateBookingStatus = (bookingId: number, newStatus: string) => {
    // In a real app, this would update the database
    toast({
      title: "Booking Updated",
      description: `Booking status changed to ${newStatus}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your portfolio and client interactions
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button asChild>
                <a href="/">
                  <Eye className="w-4 h-4 mr-2" />
                  View Site
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {stat.title}
                          </p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p
                            className={`text-xs ${
                              stat.trend === "up"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {stat.change} from last month
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Messages</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveTab("messages")}
                  >
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMessages.slice(0, 3).map((message) => (
                      <div
                        key={message.id}
                        className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>
                            {message.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium truncate">
                              {message.name}
                            </h4>
                            <Badge
                              className={`text-xs ${getStatusColor(
                                message.status
                              )}`}
                            >
                              {message.status}
                            </Badge>
                            <Badge
                              className={`text-xs ${getPriorityColor(
                                message.priority
                              )}`}
                            >
                              {message.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">
                            {message.subject}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(message.date)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Upcoming Bookings</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveTab("bookings")}
                  >
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings
                      .filter((b) => b.status !== "cancelled")
                      .slice(0, 3)
                      .map((booking) => (
                        <div
                          key={booking.id}
                          className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Avatar className="w-10 h-10">
                            <AvatarFallback>
                              {booking.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-medium truncate">
                                {booking.name}
                              </h4>
                              <Badge
                                className={`text-xs ${getStatusColor(
                                  booking.status
                                )}`}
                              >
                                {booking.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {booking.package}
                            </p>
                            <p className="text-sm font-medium text-primary">
                              {booking.date} at {booking.time}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              GHC{booking.packagePrice.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">Messages</h2>
                <p className="text-muted-foreground">
                  Manage client inquiries and communications
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Contact</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMessages.map((message) => (
                      <TableRow key={message.id} className="hover:bg-muted/50">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs">
                                {message.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{message.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {message.email}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {message.company}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-xs">
                            <div className="font-medium truncate">
                              {message.subject}
                            </div>
                            <div className="text-sm text-muted-foreground truncate">
                              {message.message}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={`${getPriorityColor(message.priority)}`}
                          >
                            {message.priority}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">
                          {formatDate(message.date)}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={`${getStatusColor(message.status)}`}
                          >
                            {message.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setSelectedMessage(message)}
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Message Details</DialogTitle>
                                </DialogHeader>
                                {selectedMessage && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-sm font-medium">
                                          From
                                        </Label>
                                        <p className="text-sm">
                                          {selectedMessage.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                          {selectedMessage.email}
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">
                                          Company
                                        </Label>
                                        <p className="text-sm">
                                          {selectedMessage.company}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                          {selectedMessage.phone}
                                        </p>
                                      </div>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">
                                        Subject
                                      </Label>
                                      <p className="text-sm">
                                        {selectedMessage.subject}
                                      </p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">
                                        Message
                                      </Label>
                                      <p className="text-sm bg-muted p-3 rounded-lg">
                                        {selectedMessage.message}
                                      </p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">
                                        Reply
                                      </Label>
                                      <Textarea
                                        placeholder="Type your reply here..."
                                        value={replyMessage}
                                        onChange={(e) =>
                                          setReplyMessage(e.target.value)
                                        }
                                        rows={4}
                                      />
                                    </div>
                                    <div className="flex justify-end space-x-2">
                                      <Button
                                        variant="outline"
                                        onClick={() => setSelectedMessage(null)}
                                      >
                                        Cancel
                                      </Button>
                                      <Button onClick={handleReply}>
                                        <Mail className="w-4 h-4 mr-2" />
                                        Send Reply
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem
                                  onClick={() => markAsRead(message.id)}
                                >
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Mark as Read
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <AlertCircle className="w-4 h-4 mr-2" />
                                  Mark as Priority
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">Consultation Bookings</h2>
                <p className="text-muted-foreground">
                  Manage client consultation appointments
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search bookings..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Package</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking) => (
                      <TableRow key={booking.id} className="hover:bg-muted/50">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs">
                                {booking.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{booking.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {booking.email}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {booking.phone}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{booking.package}</div>
                            <div className="text-sm text-muted-foreground">
                              Booked {formatDate(booking.createdAt)}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{booking.date}</div>
                            <div className="text-sm text-muted-foreground">
                              {booking.time}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          GHC{booking.packagePrice.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={`${getStatusColor(booking.status)}`}
                          >
                            {booking.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              booking.paymentStatus === "paid"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {booking.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setSelectedBooking(booking)}
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Booking Details</DialogTitle>
                                </DialogHeader>
                                {selectedBooking && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-sm font-medium">
                                          Client
                                        </Label>
                                        <p className="text-sm">
                                          {selectedBooking.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                          {selectedBooking.email}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                          {selectedBooking.phone}
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">
                                          Package
                                        </Label>
                                        <p className="text-sm">
                                          {selectedBooking.package}
                                        </p>
                                        <p className="text-sm text-primary font-medium">
                                          GHC
                                          {selectedBooking.packagePrice.toLocaleString()}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-sm font-medium">
                                          Date & Time
                                        </Label>
                                        <p className="text-sm">
                                          {selectedBooking.date} at{" "}
                                          {selectedBooking.time}
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">
                                          Status
                                        </Label>
                                        <div className="flex items-center space-x-2">
                                          <Badge
                                            className={`${getStatusColor(
                                              selectedBooking.status
                                            )}`}
                                          >
                                            {selectedBooking.status}
                                          </Badge>
                                          <Badge
                                            variant={
                                              selectedBooking.paymentStatus ===
                                              "paid"
                                                ? "default"
                                                : "secondary"
                                            }
                                          >
                                            {selectedBooking.paymentStatus}
                                          </Badge>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">
                                        Notes
                                      </Label>
                                      <p className="text-sm bg-muted p-3 rounded-lg">
                                        {selectedBooking.notes}
                                      </p>
                                    </div>
                                    <div className="flex justify-end space-x-2">
                                      <Button
                                        variant="outline"
                                        onClick={() => setSelectedBooking(null)}
                                      >
                                        Close
                                      </Button>
                                      <Button
                                        onClick={() =>
                                          updateBookingStatus(
                                            selectedBooking.id,
                                            "confirmed"
                                          )
                                        }
                                      >
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        Confirm Booking
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem
                                  onClick={() =>
                                    updateBookingStatus(booking.id, "confirmed")
                                  }
                                >
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Confirm
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Calendar className="w-4 h-4 mr-2" />
                                  Reschedule
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Cancel
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Analytics & Reports</h2>
              <p className="text-muted-foreground">
                Track your business performance and growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    GHC575,000
                  </div>
                  <p className="text-sm text-green-600">+15% from last month</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Basic Consultations</span>
                      <span>GHC1,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Standard Consultations</span>
                      <span>GHC2,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Premium Consultations</span>
                      <span>GHC1,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Client Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">4.9/5</div>
                  <p className="text-sm text-green-600">Based on 47 reviews</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>5 stars</span>
                      <span>89%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>4 stars</span>
                      <span>9%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>3 stars</span>
                      <span>2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AWS Training</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cloud Consulting</span>
                        <span>30%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Workshops</span>
                        <span>25%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Settings</h2>
              <p className="text-muted-foreground">
                Manage your account and preferences
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue="Penty Joseph" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="penty.joseph@amalitech.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input defaultValue="+233 24 123 4567" />
                  </div>
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input defaultValue="AmaliTech" />
                  </div>
                  <Button>Update Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">
                        Email notifications for new messages
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Get notified when you receive new inquiries
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">
                        SMS notifications for bookings
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Get SMS alerts for new consultation bookings
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekly analytics report</p>
                      <p className="text-sm text-muted-foreground">
                        Receive weekly performance summaries
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Disabled
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
