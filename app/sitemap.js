export default function sitemap() {
  const baseUrl = "https://buildroonix.com";
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/portfolio",
    "/portfolio/library-management-system",
    "/portfolio/gym-management-software",
    "/portfolio/lithophane-3d-lamps",
    "/portfolio/custom-3d-figurines",
    "/portfolio/student-iot-embedded-projects",
    "/portfolio/upcoming-saas-roadmap",
    "/services/software-development",
    "/privacy",
    "/terms",
    "/refund-policy",
    "/shipping-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/portfolio/") ? 0.8 : 0.6,
  }));
}

