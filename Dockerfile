FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package.json ./

# Install dependencies (including devDependencies)
RUN npm install

# Copy rest of the code
COPY . .

# Build the app
RUN npm run build

# Expose Vite preview port (optional)
EXPOSE 5173

# Run dev server (or preview)
CMD ["npm","run","dev"]
