import "../styles/Features.css";

const features = [
  {
    title: "Performance Engineering",
    text: "High-output engines, precision tuning, and aerodynamic design built for maximum speed and control in any environment."
  },
  {
    title: "Next-Gen Innovation",
    text: "We integrate modern materials, smart electronics, and advanced suspension systems to redefine riding performance."
  },
  {
    title: "Rider Safety Systems",
    text: "Advanced braking systems, stability control, and frame engineering designed to keep riders confident at every speed."
  },
  {
    title: "Global Rider Community",
    text: "Join a worldwide network of Apex Moto riders who share a passion for freedom, adventure, and performance riding."
  }
];

export default function Features() {
  return (
    <section className="features">
      {features.map((f, i) => (
        <div key={i} className="feature-card">
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </section>
  );
}