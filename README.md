[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/NerbitCl/encryptor">
    <img src="https://github.com/NerbitCl/encryptor/blob/master/img/nerbit.png" alt="Logo" width="216">
  </a>

  <h3 align="center">Encryptor</h3>

  <p align="center">
    Custom encryption and decryption.
    <br />
    <br />
    <a href="https://github.com/NerbitCl/encryptor/issues">Report Bug</a>
    ·
    <a href="https://github.com/NerbitCl/encryptor/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

A utility library for encryption and decryption using AES-256-CBC made with [nestjs](https://nestjs.com/).

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Ensure you have the following prerequisites installed:

* **Node.js**: Version 14.21.3 or later

You can download and install Node.js from the [official website](https://nodejs.org/).

### Installation

To install the library, you can use npm, yarn, or pnpm:

#### Using npm
```
npm i --save nerbit-encryptor
```

#### Using yarn
```
yarn add nerbit-encryptor
```

#### Using pnpm
```
pnpm add nerbit-encryptor
```

<!-- USAGE EXAMPLES -->
## Usage

```typescript
import { EncryptorService } from 'nerbit-encryptor';

const secretKey = '12345678901234567890123456789012'; // 32 bytes key for AES-256
const service = new EncryptorService();

const plainText = 'Hello, World!';
const encryptedText = service.encrypt(plainText, secretKey);
console.log('Encrypted:', encryptedText);

const decryptedText = service.decrypt(encryptedText, secretKey);
console.log('Decrypted:', decryptedText);
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/NerbitCl/encryptor/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Email: ricardo.palma@nerbit.cl

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/NerbitCl/encryptor.svg?style=for-the-badge
[contributors-url]: https://github.com/NerbitCl/encryptor/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/NerbitCl/encryptor.svg?style=for-the-badge
[forks-url]: https://github.com/NerbitCl/encryptor/network/members
[stars-shield]: https://img.shields.io/github/stars/NerbitCl/encryptor.svg?style=for-the-badge
[stars-url]: https://github.com/NerbitCl/encryptor/stargazers
[issues-shield]: https://img.shields.io/github/issues/NerbitCl/encryptor.svg?style=for-the-badge
[issues-url]: https://github.com/NerbitCl/encryptor/issues
[license-shield]: https://img.shields.io/github/license/NerbitCl/encryptor.svg?style=for-the-badge
[license-url]: https://github.com/NerbitCl/encryptor/blob/master/LICENSE
