# Usa una imagen base adecuada para Node.js, por ejemplo:
    FROM node:latest

    # Define el directorio de trabajo dentro del contenedor
    WORKDIR /app
    
    # Copia los archivos necesarios para el contenedor
    COPY . .
    
    # Instala las dependencias del proyecto
    RUN npm install
    
    # Expone el puerto que utiliza tu aplicación Astro
    EXPOSE 80
    
    # Comando para iniciar tu aplicación cuando el contenedor se ejecute
    CMD ["npm", "run", "build"]
    