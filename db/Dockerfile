FROM postgres:18

# używamy root, żeby ustawić prawa do klucza
USER root

# kopiujemy certyfikaty do obrazu
COPY certs/server.crt /certs/server.crt
COPY certs/server.key /certs/server.key
COPY certs/root.crt /certs/root.crt

# ustawiamy prawa do klucza (już w obrazie)
RUN chown postgres:postgres /certs/server.key && chmod 600 /certs/server.key

USER postgres

# uruchamiamy Postgresa z SSL
CMD ["postgres", "-c", "ssl=on", "-c", "ssl_cert_file=/certs/server.crt", "-c", "ssl_key_file=/certs/server.key"]
