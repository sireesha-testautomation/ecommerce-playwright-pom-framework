
#  Ecommerce Playwright POM Framework

A scalable End-to-End UI Test Automation Framework built using **Playwright (JavaScript)** implementing the **Page Object Model (POM)** design pattern.

This framework is designed following industry best practices to ensure maintainability, scalability, and reliability for E-commerce web application testing.

---

## 🚀 Tech Stack

* Playwright
* JavaScript (Node.js)
* Page Object Model (POM)
* Playwright Test Runner
* Git
* Cross-browser Testing (Chromium, Firefox, WebKit)

---

## 📂 Project Structure

```
ecommerce-playwright-pom-framework/
│
├── pages/                         # Page Object classes (POM Layer)
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── CategoryPage.js
│   ├── ProductPage.js
│   ├── CheckoutPage.js
│   ├── AccountPage.js
│   └── AffiliatePage.js
│
├── tests/                         # Test Specifications (Business Flows)
│   ├── TC01_LaunchApplicationTest.spec.js
│   ├── TC02_LoginTest.spec.js
│   ├── TC03_AddToCartTest.spec.js
│   ├── TC04_CompletePurchaseTest.spec.js
│   ├── TC05_AddToWishListTest.spec.js
│   └── TC06_AddAffiliateTest.spec.js
│
├── test-data/                     # Externalized Test Data (JSON files)
├── utils/                         # Reusable utilities & helper functions
├── playwright.config.js           # Central configuration file
└── package.json
```

---

## 🧱 Framework Design Highlights

* ✔️ Page Object Model (POM) implementation
* ✔️ Reusable page methods for better maintainability
* ✔️ Test data separation (data-driven testing approach)
* ✔️ Cross-browser execution support
* ✔️ Parallel test execution
* ✔️ Clean folder structure for scalability
* ✔️ Centralized configuration using `playwright.config.js`

---

## 🧪 Test Scenarios Covered

* User Login
* Product Search & Filters
* Add to Cart
* Cart Validation
* Checkout Flow Validation
* UI Assertions and Element Visibility Checks

---

## ▶️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-playwright-pom-framework.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run specific test file

```bash
npx playwright test tests/login.spec.js
```

### Run in headed mode

```bash
npx playwright test --headed
```

### Run specific browser

```bash
npx playwright test --project=chromium
```

---

## 📊 Reports

To view HTML reports after execution:

```bash
npx playwright show-report
```

---

## Debugging & Failure Analysis Strategy

This framework is configured to capture rich debugging artifacts to support faster root cause analysis and improve test reliability.
* Screenshot Strategy
* Video Recording
* Trace Viewer Integration

screenshot: 'only-on-failure',
video: 'retain-on-failure',
trace: 'retain-on-failure'

## 🔄 CI/CD Ready

This framework can be integrated with:

* GitHub Actions
* Jenkins
* Azure DevOps
* Any CI pipeline supporting Node.js

---

## 🎯 Why This Framework?

This project demonstrates:

* Strong understanding of Playwright
* Practical implementation of POM
* Real-world E-commerce automation scenarios
* Clean and maintainable automation architecture
* Industry-standard testing practices

---

## 👩‍💻 Author

**Sireesha Gumireddy**
QA Automation Engineer
Passionate about building scalable and maintainable test automation frameworks.
