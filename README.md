# Word Counter Project

This project is a simple Node.js application that reads a list of file paths from a configuration file and processes each file asynchronously to count the number of words in each file.

## Table of Contents
- [Description](#description)
- [Setup](#setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [Features](#features)
- [License](#license)

## Description
The Word Counter Project processes text files specified in a configuration file (`config.json`) and counts the number of words in each file. It handles various scenarios, including empty files, files with special characters, and non-existent files.

## Setup
To set up the project, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/SD-0924/Batool-Shilleh-project1-Nodejs.git
   cd Batool-Shilleh-project1-Nodejs
   ```

2. Initialize the project:
   ```bash
   npm init -y
   ```

3. Create a `files` directory and add your text files for testing:
   ```bash
   mkdir files
   touch files/file1.txt files/file2.txt files/file3.txt
   ```

4. Create a `config.json` file in the project directory with the following content:
   ```json
   {
     "files": [
       "files/file1.txt",
       "files/file2.txt",
       "files/file3.txt"
     ]
   }
   ```

5. Install any necessary packages (if needed):
   ```bash
   npm install
   ```

## Usage
To run the program, use the following command:
```bash
node index.js
```
To run the program with `nodemon` (for automatic restarts on file changes):
```bash
npm run dev
```

## Testing
The application handles the following cases:
- Empty files return a count of 0 words.
- Files with special characters are processed correctly.
- Non-existent files return an appropriate error message.

## Features
- Asynchronous processing of files.
- Word count display for each file.
- Error handling for various scenarios.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
