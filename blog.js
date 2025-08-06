
/*main blog page her*/
  const blogs = [
    {
      title: "Is Your Knee Pain Getting Worse? Here’s What to Know",
      date: "08-Aug-2024",
      image: "/images/blog1.webp",
      alt: "Person holding knee in pain",
      excerpt:
        "Knee pain shouldn't be ignored. Learn about common causes, early symptoms, and when it’s time to see an orthopedic specialist.",
      link: "/knee-replacement",
    },
    {
      title: "Top 5 Recovery Tips After Orthopedic Surgery",
      date: "18-Jul-2024",
      image: "/images/blog2.webp",
      alt: "Post-surgery recovery with physiotherapy",
      excerpt:
        "Recover faster and safer with these expert tips—covering physiotherapy, nutrition, rest, and follow-up care after joint surgery.",
      link: "/minimal-invasive-complex-trauma-surgery",
    },
    {
      title: "Preventing Sports Injuries: A Guide for Active Adults",
      date: "01-Jun-2024",
      image: "/images/blog3.webp",
      alt: "Athlete stretching before workout",
      excerpt:
        "Stay in the game longer! Discover how to protect your joints, strengthen muscles, and avoid common sports injuries at any age.",
      link: "/sports-injury",
    },
    {
      title: "Are Health Screenings Really That Important?",
      date: "27-May-2024",
      image: "/images/blog5.webp",
      alt: "Doctor discussing health reports with patient",
      excerpt:
        "Regular health screenings can detect issues early and save lives. Learn which ones matter most for your age and health goals.",
      link: "/about",
    },
    {
      title: "How Part-Time Physicians Are Changing Healthcare",
      date: "09-May-2024",
      image: "/images/blog6.webp",
      alt: "Smiling part-time doctor in clinic",
      excerpt:
        "The rise of part-time medical professionals is reshaping patient care, work-life balance, and accessibility in healthcare.",
      link: "/about",
    },
    {
      title: "Orthopedic Success Story: A Journey to Pain-Free Living",
      date: "15-Apr-2024",
      image: "/images/blog8.webp",
      alt: "Happy patient walking after joint recovery",
      excerpt:
        "Follow the inspiring recovery of a patient who overcame chronic joint pain through expert orthopedic care and rehabilitation.",
      link: "/arthritis",
    },
  ];

  const container = document.getElementById("blog-container");
  blogs.forEach((blog) => {
    const card = document.createElement("article");
    card.className = "blog-card";
    card.innerHTML = `
      <div class="relative">
        <img src="${blog.image}" alt="${blog.alt}" loading="lazy" />
        <time>${blog.date}</time>
      </div>
      <div class="blog-card-content">
        <p>${blog.excerpt}</p>
        <a href="${blog.link}.html">Explore more about "${blog.title}"</a>
      </div>
    `;
    container.appendChild(card);
  });