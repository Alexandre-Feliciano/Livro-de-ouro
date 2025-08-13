FROM php:8.2-apache

COPY public/ /var/www/html/

RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    libssl-dev \
    ca-certificates \
    && docker-php-ext-install curl \
    && rm -rf /var/lib/apt/lists/*

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
