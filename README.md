# 📦 QR Code Generator CLI App

This is a simple and interactive Command Line Interface (CLI) application built using **Node.js** that generates QR codes from user input and saves them as image files.

## 🚀 Features

- Prompt user input directly from the terminal using `inquirer`
- Generate a QR code using `qr-image`
- Save the QR code as a PNG using Node.js's built-in `fs` module
- Colorful terminal output with `chalk`

## 📸 Demo

When you run the app, it will:
1. Ask for a URL or any text input
2. Generate a QR code
3. Save it as `qr_img.png` in your project directory

## 🛠️ Tech Stack

- **Node.js**
- [`inquirer`](https://www.npmjs.com/package/inquirer)
- [`qr-image`](https://www.npmjs.com/package/qr-image)
- [`chalk`](https://www.npmjs.com/package/chalk)
- Built-in [`fs`](https://nodejs.org/api/fs.html)

## 📂 How to Run

1. Clone the repository:

```bash
git clone https://github.com/yourusername/qr-code-generator-cli.git
cd qr-code-generator-cli
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
node index.js
✅ Example Output
bash
Copy
Edit
? Enter the URL or text for the QR code: https://github.com/
✔ QR code saved successfully as qr_img.png
📁 Output
The generated QR code image (qr_img.png) will be saved in your project root directory.

📚 Learning Resource
This project was created as part of Angela Yu's Complete Web Development Bootcamp on Udemy.

🙋‍♂️ Author
Faraz Bin Tariq
📍 Noida, India
📧 usama.tariq131@gmail.com
🔗 LinkedIn Profile

