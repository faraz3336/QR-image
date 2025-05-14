# 📦 QR Code Generator CLI App using Node.js

A practical command-line tool that generates QR codes from user input and saves them as PNG files. This project was built as part of **Angela Yu’s Web Development Bootcamp** to gain hands-on experience with Node.js and popular npm packages.

---

## 🚀 Features

- 📝 Accepts user input (URL or text) via terminal
- 🔲 Generates a QR code using `qr-image`
- 💾 Saves the QR code as `qr_img.png` using Node's `fs` module
- 🎨 Displays styled terminal output using `chalk`
- 🧠 Uses `inquirer` for interactive command-line prompts

---

## 🛠️ Tech Stack

- **Node.js**
- [inquirer](https://www.npmjs.com/package/inquirer)
- [qr-image](https://www.npmjs.com/package/qr-image)
- [chalk](https://www.npmjs.com/package/chalk)
- Node.js built-in [`fs`](https://nodejs.org/api/fs.html) module

---

## 📸 Demo

### Running the App:
```bash
node index.js

Example:
? Enter the URL or text for the QR code: https://github.com/
✔ QR code saved successfully as qr_img.png

➡️ You’ll find the generated QR image saved in your project’s root directory.
'''
💻 How to Us
# Step 1: Clone the repository
git clone https://github.com/yourusername/qr-code-generator-cli.git

# Step 2: Navigate to the project folder
cd qr-code-generator-cli

# Step 3: Install dependencies
npm install

# Step 4: Run the application
node index.js
'''

📚 What I Learned
Building CLI apps using Node.js

Working with external npm modules

Handling file creation with the fs module

Generating dynamic QR codes from terminal input

Improving UX with terminal styling

👨‍💻 Author
Faraz Bin Tariq
📍 Noida, India
📧 usama.tariq131@gmail.com
📞 +91 70113 70264
🔗 LinkedIn Profile

