# APIE-Minimum-Website

## Configuration Instructions

### Nginx Configuration
1. In `nginx/docker-compose.yml`, specify the domain name.
2. In `nginx/nginx.conf`, specify the domain name.
(e.g., ${DOMAIN} => example.asia).

### Traefik Configuration
1. In `traefik/traefik.yml`, specify an email address (any valid email address will work).

## docker compose up
This project includes two services: `nginx` and `traefik`.  
Run `docker-compose up -d` in each directory to start them.
