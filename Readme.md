# e-Comics

## Description

This e-commerce site was built to exercise our MERN full stack skills as our final bootcamp project.  The web application enables users to create an account and share their comic book collections, ultimately selling them or purchasing more.

Built with a React front end, the app uses MongoDB and Mongoose ODM for the database, GraphQL with a Node.js and Express.js server and JWT authentication

## Table of Contents

- [Installation](#installation)
- [License](#license)
- [Usage](#usage)
- [Features](#features)
- [How To Contribute](#how-to-contribute)
- [Credits](#credits)

## Installation

Download the files from git: https://github.com/dmevola/e-comics/archive/refs/heads/main.zip

Once you have them on your server, be sure to install the NODE.js packages (dependencies) with the command: npm i

Package/Dependency installation will need to occur in both the SERVER directory and within the CLIENT directory.

Optional: Seed your database using the command: node seeds/seed.js

You will also need to start both the server and client separately.  Ideally using a split or additional terminal.  From within both directories, enter the command: npm start

The client React app will launch a browser automatically.  For the server, you can navigate to http://localhost:3003/graphql (or to http://yourdomainhere:3003/graphql) to access the Apollo client.


[Return to Table Of Contents](#table-of-contents)

## License

![License Image](https://img.shields.io/badge/license-MIT-green) https://opensource.org/licenses/MIT

[Return to Table Of Contents](#table-of-contents)

## Usage

Once users login, they can add their comics and purchase others.

[Return to Table Of Contents](#table-of-contents)


## Features

### Add a comic to your collection

![feature screenshot](/assets/images/add%20item.png)

### Purchase a comic

![feature screenshot](/assets/images/basket.png)
![feature screenshot](/assets/images/Paypal.png)

[Return to Table Of Contents](#table-of-contents)


## How to Contribute

Fork the repo, make changes, and submit a pull request.  All feedback, suggestions, and changes are appreciated!

[Return to Table Of Contents](#table-of-contents)


## Credits
AJ Ureel, Nima Memarzadeh, Cody Griffin, Nick Bentivolio, Dan Evola

[Thanks to our bootcamp instructors and mentors](https://bootcamp.msu.edu/coding/landing/?s=Google-Brand_RFull_&pkw=%2Bmsu%20%2Bdeveloper%20%2Bbootcamp&pcrid=534009557673&pmt=b&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CMICHIGAN-STATE-UNIVERSITY%7CSEM%7CCODING%7C-%7COFL%7C_RFull_%7CALL%7CBRD%7CBMM%7CEmployment%7CBootcamp&utm_term=%2Bmsu%20%2Bdeveloper%20%2Bbootcamp&s=google&k=%2Bmsu%20%2Bdeveloper%20%2Bbootcamp&utm_adgroupid=116234539132&utm_locationphysicalms=9016883&utm_matchtype=b&utm_network=g&utm_device=c&utm_content=534009557673&utm_placement=&gclid=CjwKCAjw9-KTBhBcEiwAr19ig-Xc-FH7H0xxfG5dMim4bFNlZk7c3FgftPUDGfGQpnz2SMqqbwYf7hoCOKMQAvD_BwE&gclsrc=aw.ds)

[Return to Table Of Contents](#table-of-contents)


(c) 2022 by AJ Ureel, Nima Memarzadeh, Griffin Cody, Nick Bentivolio, Dan Evola
