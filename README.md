# 😻 Concats - A Jira issue concatenator

**Concats** is a lightweight web tool designed to help Jira users quickly format lists of issue keys for use in JQL (Jira Query Language) queries. Built with HTML, CSS, and vanilla JavaScript, it streamlines the process of constructing `key IN (...)` clauses by automatically formatting pasted issue keys.

🔗 **Live Demo**: [https://davedonnellydev.github.io/concats/](https://davedonnellydev.github.io/concats/)

---

## ✨ Features

- **Smart Formatting**: Automatically wraps Jira issue keys in quotes and separates them with commas.
- **JQL-Ready Output**: Outputs the formatted list within a `key IN (...)` clause.
- **User-Friendly Interface**: Simple and intuitive design for ease of use.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## 🛠️ Tech Stack

- **HTML5**: Structure of the web page.
- **CSS3**: Styling and layout.
- **JavaScript (ES6+)**: Logic for processing and formatting input.

---

## 🚀 Getting Started

To run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/davedonnellydev/concats.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd concats
   ```

3. **Open `index.html` in your browser**:

   You can simply double-click the `index.html` file, or serve it using a local development server for a better experience.

   For example, using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code:

   - Install the Live Server extension.
   - Right-click on `index.html` and select **"Open with Live Server"**.

---

## 📁 Project Structure

```
concats/
├── index.html        # Main HTML file
├── normalize.css     # CSS reset for consistent styling
├── styles.css        # Custom styles
└── script.js         # JavaScript logic
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
