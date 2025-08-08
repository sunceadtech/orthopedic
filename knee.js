const questions = [
      {
        en: "Does your knee cause you constant pain?",
        hi: "क्या आपके घुटनो में लगातार दर्द रहता है ?"
      },
      {
        en: "Are you developing knee deformity like knock-knees or bow-legs?",
        hi: "क्या आपके घुटने टेढ़े होने शुरू हो गए हैं ?"
      },
      {
        en: "Can you no longer fully straighten your knee joint without pain?",
        hi: "क्या अब आप अपने घुटने के जोड़ को पूरी तरह सीधा नहीं कर पाते बिना दर्द के ?"
      },
      {
        en: "Does anti-inflammatory medication no longer work?",
        hi: "क्या दर्द की दवा अब काम नहीं करती?"
      },
      {
        en: "Is the distance you can walk getting shorter?",
        hi: "क्या आप अब पहले से कम दूर चल पाते हैं ?"
      },
      {
        en: "Does your social/personal life is significantly affected by knee pain?",
        hi: "क्या आपकी व्यक्तिगत /सामाजिक गतिविधि घुटने का दर्द की वजह से काफी कम हो गई है?"
      }
    ];

    const accordion = document.getElementById('accordion');

    // Create accordion items
    questions.forEach(q => {
      const item = document.createElement('div');
      item.className = 'accordion-item';

      const header = document.createElement('div');
      header.className = 'accordion-header';
      header.textContent = q.en;

      const content = document.createElement('div');
      content.className = 'accordion-content';
      content.textContent = q.hi;

      header.addEventListener('click', () => {
        header.classList.toggle('active');
        content.classList.toggle('open');
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "24px";
        }
      });

      item.appendChild(header);
      item.appendChild(content);
      accordion.appendChild(item);
    });