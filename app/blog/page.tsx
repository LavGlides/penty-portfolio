"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Calendar, Clock, Tag, Search } from "lucide-react"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Mock blog posts data (in real app, this would come from Medium API)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Professional Training: Embracing Digital Transformation",
    excerpt:
      "Exploring how digital technologies are revolutionizing the way we approach professional development and training in the modern workplace.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2023-12-15",
    readTime: "8 min read",
    tags: ["Digital Transformation", "Training", "Technology"],
    mediumUrl: "https://medium.com/@penty-joseph/future-professional-training",
  },
  {
    id: 2,
    title: "Building High-Performance Teams: Lessons from 500+ Training Sessions",
    excerpt:
      "Key insights and strategies I've learned from training over 500 professionals across different industries and organizational levels.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2023-12-01",
    readTime: "12 min read",
    tags: ["Team Building", "Leadership", "Performance"],
    mediumUrl: "https://medium.com/@penty-joseph/building-high-performance-teams",
  },
  {
    id: 3,
    title: "The Psychology of Learning: Why Traditional Training Methods Fall Short",
    excerpt:
      "Understanding the cognitive science behind effective learning and how to design training programs that actually stick.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2023-11-20",
    readTime: "10 min read",
    tags: ["Psychology", "Learning", "Training Design"],
    mediumUrl: "https://medium.com/@penty-joseph/psychology-of-learning",
  },
  {
    id: 4,
    title: "Remote Work Revolution: Adapting Training for Distributed Teams",
    excerpt:
      "Strategies and best practices for delivering effective training to remote and hybrid teams in the post-pandemic world.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2023-11-05",
    readTime: "7 min read",
    tags: ["Remote Work", "Virtual Training", "Team Management"],
    mediumUrl: "https://medium.com/@penty-joseph/remote-work-training",
  },
  {
    id: 5,
    title: "Measuring Training ROI: Beyond the Kirkpatrick Model",
    excerpt:
      "Advanced methods for measuring the real impact of training programs on business outcomes and employee performance.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2023-10-22",
    readTime: "15 min read",
    tags: ["ROI", "Training Evaluation", "Business Impact"],
    mediumUrl: "https://medium.com/@penty-joseph/measuring-training-roi",
  },
  {
    id: 6,
    title: "The Art of Facilitation: Creating Engaging Learning Experiences",
    excerpt:
      "Techniques and strategies for facilitating workshops and training sessions that keep participants engaged and motivated.",
    image: "/placeholder.svg?height=300&width=500",
    publishedAt: "2023-10-08",
    readTime: "9 min read",
    tags: ["Facilitation", "Engagement", "Workshop Design"],
    mediumUrl: "https://medium.com/@penty-joseph/art-of-facilitation",
  },
]

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  useEffect(() => {
    let filtered = blogPosts

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag))
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedTag])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional <span className="gradient-text">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore my thoughts on professional development, training methodologies, leadership, and the future of
                workplace learning.
              </p>
              <div className="flex justify-center">
                <Badge variant="secondary" className="text-sm">
                  Published on Medium
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Tags Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTag === "" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag("")}
                >
                  All Topics
                </Button>
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>

              {/* Results Count */}
              <p className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedTag("")
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs bg-white/20 text-white">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>

                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                          <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
                            Read on Medium
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Follow me on Medium to get notified when I publish new articles about professional development and
                training.
              </p>
              <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
                <a href="https://medium.com/@penty-joseph" target="_blank" rel="noopener noreferrer">
                  Follow on Medium
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
