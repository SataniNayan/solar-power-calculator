const companyList = document.getElementById("companyList");
let selectedCompany = "";

// Load companies from backend
fetch("http://localhost:5000/companies")
  .then(res => res.json())
  .then(companies => {
    companies.forEach(company => {
      const div = document.createElement("div");
      div.className = "company-card";

      div.innerHTML = `
        <img src="${company.image}" alt="${company.name}">
        <div class="company-info">
          <h3>${company.name}</h3>
          <p>📍 ${company.city}, ${company.state}</p>
          <button onclick="openForm('${company.name}')">Send Inquiry</button>
        </div>
      `;

      companyList.appendChild(div);
    });
  });

function openForm(company) {
  selectedCompany = company;
  document.getElementById("companyName").innerText = company;
  document.getElementById("modal").style.display = "block";
}

function closeForm() {
  document.getElementById("modal").style.display = "none";
}

function sendInquiry() {
  const data = {
    company: selectedCompany,
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value
  };

  fetch("http://localhost:5000/send-inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    alert("Inquiry sent successfully");
    closeForm();
  });
}
