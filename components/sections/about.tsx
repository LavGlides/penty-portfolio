import { stats, values } from "@/lib/data";

export const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-foreground/80 mb-6">
            I am a passionate and results-oriented AWS Cloud Trainer and
            Solutions Architect with over 5 years of experience in designing,
            deploying, and managing scalable, secure, and cost-effective cloud
            infrastructures. My mission is to empower individuals and
            organizations to leverage the full potential of AWS through
            comprehensive training and expert consulting.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card p-4 rounded-lg text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {values.map((value) => (
            <div key={value.title} className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
