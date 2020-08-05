from __future__ import absolute_import, unicode_literals

import json

import numpy as np
from joblib import load

from .celery import app

clf = load("./inference-workers/model-training/serialized-model/heart-disease-classifier.joblib")

def converter(val):
    converted_val = val
    try:
        converted_val = int(val)
    except:
        converted_val = 1 if val == "F" else 0
    return converted_val

@app.task
def heart_disease_prediction(features):
    # print(f"Features: {features}")
    features = np.array([ converter(feature) for feature in features ])
    # print(f"Features: {features}")
    features = features.reshape(1, 5)
    return int(clf.predict(features)[0])
    #return json.loads({
    #    "data": clf.predict(features)[0]
    #})
#what does this shape look like
# How does do we know the target value we are looking for isin the first row & classifier know that the target value
