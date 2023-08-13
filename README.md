# Concepts and Technologies used
Typescript
Mui
Frontend 
Api integration
Deployment


# Objective: The objective of this React Assignment is to create a React application that implements the following functionality:

Task 1: Application Configuration
React application using Typescript and Vite.
If you are unfamiliar with Vite, please refer to the following link for more information: https://vitejs.dev/guide/
Configuring the application with MUI, ensuring that all components within the application (e.g. buttons, text fields, dialogs) use MUI components.

Task 2: First Page of the Application
a form to collect the following information from the user:
Name
Phone number
Email
Upon completion, saving the user details in localstorage and routing the user to the second page.
If the user attempts to access the second page without providing the necessary information, redirect them back to the first page with a message indicating that they must enter their details before accessing the page.

Task 3: Second Page of the Application[Component 1]
Fetching a list of JSON details from an API https://jsonplaceholder.typicode.com/posts
Converting the retrieved JSON data into a model/interface in Typescript. 
Displaying the data in a table using the following package: https://mui.com/x/react-data-grid/

Task 4: Second Page of the Application[Component 2]
Creating another component below the table.
You can hardcode the given json in your application
The component will be the list of department and each department has sub departments
Sub departments can be expanded and collapsed by the user

Users can select department or sub departments.
If user select a department then all of the sub departments get selected in the UI
If user select all sub departments of a department then the parent department get selected as well in the UI

Note:
The focus of this assignment is on the quality and robustness of the code, not the aesthetics of the UI.
This contain Clean code and proper file structure.

Task 4: Deployment
Deployed the completed application to a hosting provider(Vercel). 


# deployed url of this application is 
intern-assignment-dd0gm83am-yashsharma127.vercel.app


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
