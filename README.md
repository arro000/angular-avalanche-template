 # ANGULAR AVALANCHE JS TEMPLATE PROJECT #
 
 ***this is an example of angular project using the avalanche js library***

 For init it use this commands
    
    > git clone 
    > npm install
    
Several fix was made in the project for get work the avalanche js library

    - added global variable to polyfills.ts
    - added avalanche to allowedCommonJsDependencies in angular.json

if you get an UnhandledPromiseRejectionWarning at start make the .steampath file in your home

    > touch /home/user/.steampath

Start the project with 

    > ng serve

or

    > ng serve --host 0.0.0.0
    
    
Edit the config variables in environments/environment.ts

  ```javascript
  
  export const environment = {
    production: false,
    myNetworkID : 0xa869, //default is 3, we want to override that for our local network
    myBlockchainID : "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm", // The X-Chain blockchainID on this network
    nodeHost:"192.168.1.74",
    nodePort:9650,
    nodeProtocol:"http"
  };
  ```
    
