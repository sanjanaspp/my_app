document.addEventListener("DOMContentLoaded", () => {
  const features = [
    "✅ Continuous Integration",
    "✅ Continuous Deployment",
    "✅ Dockerized App",
    "✅ Automated Testing",
    "✅ Jenkins Pipeline"
  ];

  // Add features dynamically
  const featureList = document.getElementById("feature-list");
  features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featureList.appendChild(li);
  });

  // Show random dynamic message
  const messages = [
    "🚀 Deployment successful!",
    "⚡ CI/CD at work!",
    "✅ Build passed with flying colors!",
    "🔥 Hot reload deployed!",
    "🌍 Running in Docker container!"
  ];
  document.getElementById("message").textContent =
    messages[Math.floor(Math.random() * messages.length)];

  // Show deployment time
  document.getElementById("time").textContent =
    new Date().toLocaleString();
});
