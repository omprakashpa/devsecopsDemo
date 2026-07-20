####################################################
# DevSecOps Vulnerable Demo Dockerfile

####################################################

# Older base image Sets up the starting environment OS.
FROM node:16-buster

# Working directory
WORKDIR /app
 
# Copy application source
COPY . .

# Install dependencies
RUN npm install

# Install additional packages
#RUN apt-get update && \
    #apt-get install -y curl vim wget && \
    #rm -rf /var/lib/apt/lists/*

# Expose application port gateway
EXPOSE 3000


# Start application
CMD ["npm", "start"]
