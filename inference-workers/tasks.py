from __future__ import absolute_import, unicode_literals

import numpy as np

from joblib import load
from .celery import app


clf = load("./inference-workers/model-training/serialized-model/heart-disease-classifier.joblib")


@app.task
def heart_disease_prediction(features):
    features = np.array(features).reshape(1, 5)
    return clf.predict(features)[0]
#what does this shape look like
# How does do we know the target value we are looking for isin the first row & classifier know that the target value




