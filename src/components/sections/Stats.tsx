export default function Stats() {
  const stats = [
    {
      number: "96%",
      label: "OF STUDENTS COMPLETE",
      description: "Higher levels of participation yield high levels of self-discipline"
    },
    {
      number: "6000+",
      label: "ACADEMY GRADUATED",
      description: "Build your high-performance network with successful graduates"
    },
    {
      number: "107",
      label: "COUNTRIES WORLDWIDE",
      description: "Join our diverse community of wealth builders globally"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-bold mb-2">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}