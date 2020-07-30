#!/bin/sh
./dispatcher/start_webapp_server.sh
./frontend/start_client.sh
celery -A inference-workers worker -l info
