####################################################
# DevSecOps Vulnerable Demo Dockerfile

####################################################

# Older base image (training/demo only)
FROM node:16-buster

# Working directory
WORKDIR /app
 
# Copy application source
COPY . .

# Install dependencies
RUN npm install

# Install additional packages (intentionally increases attack surface)
#RUN apt-get update && \
    #apt-get install -y curl vim wget && \
    #rm -rf /var/lib/apt/lists/*

# Expose application port
EXPOSE 3000


# Start application
CMD ["npm", "start"]
