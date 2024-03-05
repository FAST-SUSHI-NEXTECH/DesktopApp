```mermaid
Deploy
    A[Git clone the repository]--> B [Run the command "npm i"]
    B --> C{Found Vulnerability ?}
    C -- Yes --> D[Run the command ""]
    C -- No ----> E[Just run the project with the command "npm start"]
    D ---->E