import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export const HeroSection = () => (
  <section
    id="home"
    className="relative h-screen flex items-center justify-center text-center overflow-hidden"
  >
    <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
    <div className="relative z-10 space-y-6">
      <h1 className="text-5xl md:text-7xl font-bold gradient-text">
        Penty Joseph
      </h1>
      <p className="text-xl md:text-2xl text-foreground/80">
        AWS Cloud Trainer | Solutions Architect | DevOps Enthusiast
      </p>
      <div className="flex justify-center space-x-4">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className={`text-2xl ${link.color}`}
            >
              <link.icon />
            </Button>
          </Link>
        ))}
      </div>
      <div className="pt-4">
        <Link href="#projects">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View My Work
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
