# 📦 QR Code Generator CLI App

A command-line tool that generates QR codes from user input and saves them as PNG files. Built as part of Angela Yu's Web Development Bootcamp to gain hands-on experience with Node.js and npm packages.

![QR Code Generator Demo](https://via.placeholder.com/800x400.png?text=QR+Code+Generator+CLI+Demo) 
*(Replace with actual screenshot/gif)*

## 🚀 Features

- 📝 Accepts user input (URL/text) via terminal
- 🔲 Generates QR codes using `qr-image`
- 💾 Saves QR code as `qr_img.png` using `fs` module
- � Styled terminal output with `chalk`
- 🧠 Interactive prompts using `inquirer`

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)
- **inquirer** 🗂️
- **qr-image** 🔳
- **chalk** 🎨
- **fs** (Node.js built-in) 📁

## 📥 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/qr-code-generator-cli.git

# Navigate to project directory
cd qr-code-generator-cli

# Install dependencies
npm install
```
## 🖥️ Usage
```bash
node index.js
```
## Example terminal session:
```bash
? Enter the URL or text for the QR code: https://github.com/
✔ QR code saved successfully as qr_img.png
```
The generated QR image will be saved in your project's root directory.

📚 Learning Outcomes
Through building this project, I gained experience with:

Building CLI applications with Node.js

Working with external npm modules

File system operations using fs module

Generating dynamic QR codes from terminal input

Enhancing CLI UX with terminal styling

## 👨💻 Author
## Faraz Bin Tariq
📍 Noida, India
📧 usama.tariq131@gmail.com
📞 +91 70113 70264
🔗 [LinkedIn Profile](https://www.linkedin.com/in/faraz-bin-tariq-316590218/)

## 🤝 Contributing
Contributions are welcome! Please feel free to:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request
## 📜 License
This project is open-source and available under the MIT License.
