# 📦 QR Code Generator CLI App

This is a simple and interactive Command Line Interface (CLI) application built using **Node.js** that generates QR codes from user input and saves them as image files.

## 🚀 Features

- Takes user input from the terminal using `inquirer`
- Generates a QR code using `qr-image`
- Saves the QR code as a PNG image using Node.js `fs` module
- Stylized terminal output with `chalk`

## 📸 Demo

When you run the app, it asks for a URL or text input, then creates a QR code PNG file in your project directory.

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [`inquirer`](https://www.npmjs.com/package/inquirer)
- [`qr-image`](https://www.npmjs.com/package/qr-image)
- [`fs`](https://nodejs.org/api/fs.html) (built-in)
- [`chalk`](https://www.npmjs.com/package/chalk)

## 📂 Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/qr-code-generator-cli.git
cd qr-code-generator-cli
Install dependencies:
```bash
npm install
Run the app:
```bash
node index.js
Example
```bash
? Enter the URL or text for the QR code: https://github.com/
✔ QR code saved as qr_img.png
📁 Output
The QR code will be saved in the same directory as qr_img.png.

📚 Learning Source
Built while following Angela Yu's Complete Web Development Bootcamp.

📬 Contact
Created by Faraz Bin Tariq
📧 Email: usama.tariq131@gmail.com
📍 Location: Noida, India

