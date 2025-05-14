let questionsData = [];
let currentPage = 1;

fetch("questions.json")
  .then(res => res.json())
  .then(data => {
    questionsData = data;
    renderPagination();
    renderQuestions(currentPage);
  });

function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= questionsData.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === currentPage ? "active" : "";
    btn.onclick = () => {
      currentPage = i;
      renderQuestions(currentPage);
      renderPagination();
    };
    pagination.appendChild(btn);
  }
}

function renderQuestions(page) {
  const container = document.getElementById("questions-container");
  container.innerHTML = "";
  const pageData = questionsData.find(p => p.page === page);

  if (!pageData) {
    container.innerHTML = "<p>Нет данных для этой страницы.</p>";
    return;
  }

  pageData.questions.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const questionEl = document.createElement("h3");
    questionEl.textContent = `${index + 1}. ${q.question}`;

    const optionsEl = document.createElement("div");
    optionsEl.className = "options";

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        const buttons = optionsEl.querySelectorAll("button");
        buttons.forEach(b => b.disabled = true);
        if (i === q.correct) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("incorrect");
          buttons[q.correct].classList.add("correct");
        }
      };
      optionsEl.appendChild(btn);
    });

    card.appendChild(questionEl);
    card.appendChild(optionsEl);
    container.appendChild(card);
  });
}
