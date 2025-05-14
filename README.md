# 📦 QR Code Generator CLI App using Node.js

A fun and practical command-line tool that generates QR codes from user input and saves them as image files — built using **Node.js** as part of [Angela Yu's Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/).

## 🚀 What It Does

- ✅ Takes user input (URL or text) via terminal
- ✅ Generates a QR code using `qr-image`
- ✅ Saves the QR code as a `.png` file using Node's `fs` module
- ✅ Styled terminal output with `chalk`
- ✅ Interactive prompts using `inquirer`

## 🛠 Tech Stack

- **Node.js**
- [`inquirer`](https://www.npmjs.com/package/inquirer) – for user prompts
- [`qr-image`](https://www.npmjs.com/package/qr-image) – for QR code generation
- [`chalk`](https://www.npmjs.com/package/chalk) – for styling CLI output
- Built-in [`fs`](https://nodejs.org/api/fs.html) – to save files

## 📸 Demo (How It Works)

1. Run the app using `node index.js`
2. Enter a URL or text when prompted
3. The app will:
   - Display a success message
   - Save the QR code image in your root folder as `qr_img.png`

## 💻 How to Run

```bash
# Clone this repo
git clone https://github.com/yourusername/qr-code-generator-cli.git
cd qr-code-generator-cli

# Install dependencies
npm install

# Start the app
node index.js
📂 Example Output
? Enter the URL or text for the QR code: https://github.com/
✔ QR code saved successfully as qr_img.png
The file qr_img.png will be located in the root of your project directory.

📚 Learnings
This project helped me:

Understand CLI app creation using Node.js

Work with third-party npm packages

Handle file saving using the fs module

Build terminal-based tools

👨‍💻 Author
Faraz Bin Tariq
📍 Noida, India
📧 usama.tariq131@gmail.com
📞 7011370264
🔗 LinkedIn
