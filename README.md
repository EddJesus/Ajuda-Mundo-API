<!--
repo name: Ajuda Mundo
description: Project developed to improve my skills and create portfolio
github name: EddJesus
link: https://github.com/EddJesus/Ajuda-Mundo-API
logo path: public/logo.png
screenshot: public/ss.png
twitter: https://twitter.com/EdJesuus
email: edusanto22@gmail.com
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/EddJesus/Ajuda-Mundo-API">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h2 align="center">
    Ajuda Mundo
  </h2>
    <p align="center">
      <a href="http://ajuda-mundo-elb-1410246969.us-east-1.elb.amazonaws.com/v1/health">View Demo</a>
      �
      <a href="https://github.com/EddJesus/Ajuda-Mundo-API/issues">Report Bug</a>
      �
      <a href="https://github.com/EddJesus/Ajuda-Mundo-API/issues">Request Feature</a>
    </p>

</p>


<!-- TABLE OF CONTENTS -->
# Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<br><br>

<!-- ABOUT THE PROJECT -->
# About The Project

Exist a lot of project that are made to serve great companies and a big amount of clients. Here we just want to create an POC to a system where NGOs can create some "issues" that will be solved by anyone who wants to

Here's why:
* This is a space where you, as a normal user, can help make the world a better place to live by contributing with NGOs
* This is also a space where you, as a NGO, can find help to solve minor questions you need to

This is designed to have an incentive to normal user wants to solve the tasks the NGOs puts there (besided making the world a better place). This incentive is points that are given to the user when they accomplish the taks. This points is defined by the NGO when they are creating the task.

<br><br>

# Built With

* [express](https://expressjs.com/pt-br/)
* [typescript](https://www.typescriptlang.org/)
* [postgres](https://www.postgresql.org/)
* [typeorm](https://typeorm.io/)
* [docker](https://www.docker.com/)
* [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

<br><br>

# Running at

[http://ajuda-mundo-elb-1410246969.us-east-1.elb.amazonaws.com/v1/health](http://ajuda-mundo-elb-1410246969.us-east-1.elb.amazonaws.com/v1/health)

<br><br>

<!-- GETTING STARTED -->
# Getting Started

## Prerequisites

- Have node and yarn on your machine
- Have docker or have postgres on your machine

## Installation

### 1. Run
```
git clone git@github.com:EddJesus/Ajuda-Mundo-API.git ajuda-mundo-api
```
<br>

### 2. Run
```
yarn install
```
<br>

### 3. create a ```.env``` using the ```.env.example``` and your own credentials

<br>

### 4. create a ```.env.db``` using the ```.env.db.example``` and your own credentials

<br>

### 5. create a ```.env.prod``` using the ```.env.prod.example``` and your own credentials

<br>

### 6. Run
```
yarn build
```

<br>

### 7. You can choose 7.1 or 7.2 way

7.1 run a postgres locally on your machine and then run:

```
yarn start
```

OR:

7.2 use docker:
 
```
sudo docker-compose up
```

<br>

<!-- USAGE EXAMPLES -->
## Usage

This project is very simples to use. We have:

- [x] A CRUD of ongs that's working
- [x] A CRUD of activities that's working
- [x] A complete authetication using middlewares and JWT strategy

Feel free to play!

<br>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<br>

<!-- CONTACT -->
## Contact

[LinkedIn](https://www.linkedin.com/in/dev-eduardo-jesus/)