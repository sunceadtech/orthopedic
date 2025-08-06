
/*home paitentinfo end here logic */
 const info = [
      {
        title: "Knee Replacement",
        image: "/images/knee.webp",
        alt: "Total knee replacement surgery illustration",
        description:
          "Learn how total knee replacement can relieve chronic pain and improve mobility through modern orthopedic techniques.",
      },
      {
        title: "Hip Replacement",
        image: "/images/hip.webp",
        alt: "Hip joint replacement surgical procedure image",
        description:
          "Understand hip replacement surgery, its recovery process, and how it restores freedom of movement.",
      },
      {
        title: "ACL Reconstruction",
        image: "/images/aclpcl.webp",
        alt: "ACL reconstruction for sports knee injury recovery",
        description:
          "Find out how ACL reconstruction helps athletes and active individuals return to full function after injury.",
      },
      {
        title: "Shoulder Arthroscopy",
        image: "/images/paitent4.webp",
        alt: "Shoulder arthroscopy showing minimally invasive treatment",
        description:
          "Explore how minimally invasive shoulder arthroscopy treats rotator cuff tears and joint pain effectively.",
      },
    ];

    const grid = document.getElementById("infoGrid");

    info.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("aria-labelledby", `info-title-${index}`);
      card.innerHTML = `
        <img src="${item.image}" alt="${item.alt}" loading="lazy" width="320" height="240"/>
        <div class="content">
          <h3 id="info-title-${index}">${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `;
      grid.appendChild(card);
    });
/*paitentinfo end here*/
