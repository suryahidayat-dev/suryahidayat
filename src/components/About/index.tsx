import Pill from "../ui/Pill";

const About: React.FC = () => {
  const skillGroups = [
    {
      title: "Frontend & Mobile",
      color: "bg-blue-100 text-blue-800",
      skills: ["JSF(PrimeFaces)", "React(JS/TS)", "Flutter(Android/IOS)"],
    },
    {
      title: "Backend & Languages",
      color: "bg-green-100 text-green-800",
      skills: [
        "Java(Core/Spring Boot/Quarkus)",
        "Node.js(Express)",
        "Kotlin",
        "Go(Gin)",
      ],
    },
    {
      title: "Data & Infrastructure",
      color: "bg-purple-100 text-purple-800",
      skills: [
        "RDB(PostgreSQL/MySQL)",
        "NoSQL(Apache Solr)",
        "Cache(Redis/Memcached)",
        "Message Broker(Apache Kafka, RabbitMQ)",
        "Docker",
        "Linux",
      ],
    },
  ];

  return (
    <section id="about" className="mb-20">
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">
        I love bridging the gap between design and engineering. When I'm not
        coding, you can find me travelling.
      </p>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Pill key={skill} text={skill} className={group.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
