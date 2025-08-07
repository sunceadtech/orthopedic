
/*home paitentinfo end here logic */
const info = [
  {
    title: "Conservative Treatment of Osteoarthritis",
    image: "./images/paitentinfo1.jpg",
    alt: "Total knee replacement surgery illustration",
    description:
      "The American Academy of Orthopaedic Surgeons recently released a summary of recommendations for the treatment based on evidence based medical research that is controlled for bias, transparent and is reproducible. The characteristics of studies that make strong evidence include use of a placebo or control treatment, sucient numbers of subjects to determine if a true dierence exists, and use of appropriate reliable measurement tools",
    pdf: "https://dramitsharmaortho.com/img/Total_knee_replacement_new.pdf",
  },
  {
    title: "TOTAL KNEE REPLACEMENT",
    image: "./images/paitentinfo2.jpg",
    alt: "Hip joint replacement surgical procedure image",
    description:
      "With age and also with rheumatoid arthritis the weight bearing surfaces of the knee joint become worn away. They are no longer smooth and free running and this leads to stiness and pain. Eventually the joint wears away to such an extent that the bone of the femur grinds on the bone of the tibia. A total knee replacement replaces these surfaces with plastic and metal.",
    pdf: "https://dramitsharmaortho.com/img/Conservative%20Treatment%20of%20Osteoarthritis.pdf",
  },
  {
    title: "ACL INJURY AND RECONSTRUCTION",
    image: "./images/paitentinfo3.jpg",
    alt: "ACL reconstruction for sports knee injury recovery",
    description:
      "The anterior cruciate ligament (ACL) is a 38mm long band of fibrous tissue that connects the femur (thigh bone) to the tibia (shin bone). Its function is to control stability when performing twisting actions. The cruciate ligament is usually not required for normal daily living activities, however, it is essential in controlling the rotation forces developed during side stepping, pivoting and landing from a jump",
    pdf: "https://dramitsharmaortho.com/img/ACL%20INJURY_N_and_recounstruction.pdf",
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
      <a href="${item.pdf}" target="_blank" rel="noopener">
         PDF
      </a>
    </div>
  `;
  grid.appendChild(card);
});

/*paitentinfo end here*/
