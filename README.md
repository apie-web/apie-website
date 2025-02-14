# Project Setup

## Nginx Configuration
1. In `nginx/docker-compose.yml`, specify the domain name.
2. In `nginx/nginx.conf`, specify the domain name.
   - Example: Replace `${DOMAIN}` with `example.asia`.

## Traefik Configuration
1. In `traefik/traefik.yml`, specify an email address (any valid email address will work).

## Create Docker Network
```sh
docker network create apie_default
```

## Starting the Services
This project includes two services: `traefik` and `nginx`. (traefik first)
To start them, run the following command in each respective directory:

```sh
cd traefik && docker compose up -d
```

```sh
cd nginx && docker compose up -d
```

## Updating the Website
To update the website, add a new entry to `nginx/html/posts.json`. For example:

```json
{
    "id": "3",
    "title": "Day3",
    "date": "2025-02-12",
    "content": "DNS session ~"
}
```

Then, restart the Nginx service:

```sh
cd nginx && docker compose up -d
```

This will apply the changes and update the website accordingly.
