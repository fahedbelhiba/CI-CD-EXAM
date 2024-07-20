# CI/CD EXAM



#### 1-Créer un Repository GitHub

**Étapes** :

- Allez sur [GitHub](https://github.com) et connectez-vous.
- Créez un nouveau repository en cliquant sur le bouton "New repository".
- Donnez un nom à votre repository,
- Choisissez "Public"  selon votre préférence.
- Cliquez sur "Create repository". 

![](C:\Users\belhi\Desktop\cicd\step1.png)



![](C:\Users\belhi\Desktop\cicd\step 2.png)





### 2. Développer l'Application Web



##### - Structure de l'application 



```
simple-calculator-app/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── Dockerfile
├── .github/
│   └── workflows/
│       └── ci.yml
├── README.md
├── package.json
└── app.test.js
```



Pour cela, j'ai créé une calculatrice simple



> [!NOTE]
>
> Le code de l'application se trouve dans le dossier du projet ou sur mon GitHub [https://github.com/fahedbelhiba/CI-CD-EXAM/tree/main](ci/cd exam).



![](C:\Users\belhi\Desktop\cicd\cap7.png)



### 3. Écrire des Tests



Pour les tests, j'ai créé un fichier **app.test.js**



```

describe('Calculator', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(html, { runScripts: "dangerously" });
        document = dom.window.document;
    });

    test('should display numbers when buttons are clicked', () => {
        const button7 = document.querySelector('[data-value="7"]');
        const display = document.getElementById('display');
        
        button7.click();
        expect(display.value).toBe('7');
    });

    test('should calculate the correct result', () => {
        const button7 = document.querySelector('[data-value="7"]');
        const buttonPlus = document.querySelector('[data-value="+"]');
        const button3 = document.querySelector('[data-value="3"]');
        const buttonEquals = document.querySelector('[data-value="="]');
        const display = document.getElementById('display');

        button7.click();
        buttonPlus.click();
        button3.click();
        buttonEquals.click();
        expect(display.value).toBe('10');
    });

    test('should clear the display when clear button is clicked', () => {
        const button7 = document.querySelector('[data-value="7"]');
        const clearButton = document.getElementById('clear');
        const display = document.getElementById('display');

        button7.click();
        clearButton.click();
        expect(display.value).toBe('');
    });
});

```



j'ai créé un un serveur simple **server.js** pour server l'application

#### 4- Configurer Docker

Créer une image Docker de l'application 

```
# Utiliser une image de base officielle de Node.js
FROM node:14

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# Exposer le port sur lequel l'application tourne
EXPOSE 8080

# Démarrer l'application
CMD ["npm", "start"]

```

 

> [!TIP]
>
> utilisé **docker build -t simple-web-app .** pour Construisez l'image Docker	





### 5- Configurer GitHub Actions

pour Automatiser les tests j'ai créé une fichier **ci.yml** par la creation du github workflows

![](C:\Users\belhi\Desktop\cicd\Capture d'écran 2024-07-20 171113.png)
