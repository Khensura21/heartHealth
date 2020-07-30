from __future__ import absolute_import, unicode_literals

from celery import Celery


# Replace broker with environment variable
app = Celery(
    "heart-health",
    broker="redis://localhost:6379/0",
    include=["inference-workers.tasks"]
)


if __name__ == "__main__":
    app.start()
