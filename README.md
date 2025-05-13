
# ZenduitProject

This is an Angular 17+ project built with Angular Material, featuring a Submissions page with a Map/List toggle, mock data, Google Maps integration, and a date picker. The UI is based on a provided Figma design and themed using a custom Azure/Blue palette.

---

## 🚀 Features

- List and Map toggle view for submissions
- Interactive Google Map with markers
- Export button for data
- Angular Material date picker
- Themed with Angular Material's theming system

---

## 🛠️ Project Setup (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/zenduit-project.git
cd zenduit-project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the development server
```bash
ng serve
```

## ⚙️ Environment Configuration 

### Need to add the API key in src/environments/environment.ts
```bash
export const environment = {
  production: false,
  googleMapsAPIKey: 'YOUR GOOGLE MAP API KEY ' 
};
```

### Need API key in src/environments/environment.prod.ts
```bash
export const environment = {
  production: true,
  googleMapsAPIKey: 'YOUR GOOGLE MAP API KEY ' 
};
```

## 📦 Build for production 

### To build the application for production 
```bash
ng build --configuration=production
```

## 🧪 Liniting 

### Runs ESLint to catch issues
```bash
ng lint
```

## Author

**Samarth Goyal**
