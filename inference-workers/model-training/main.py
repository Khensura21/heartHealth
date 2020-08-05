import numpy as np
import pandas as pd
from joblib import dump
from sklearn.linear_model import LogisticRegression

if __name__ == "__main__":
    # Read data and split into instances and target
    data_df = pd.read_csv("./data/heart.csv")
    instances = data_df.loc[:, data_df.columns != "target"]
    target = data_df.loc[:, data_df.columns == "target"]

    # Train a logistic regression classifier using age, sex, chest pain, resting
    # blood pressure and serum cholestoral
    clf = LogisticRegression()
    clf.fit(instances.values[:, :5], target.values.ravel())

    # After the model is trained, serialize it for later use
    dump(clf, "./serialized-model/heart-disease-classifier.joblib")

    # Inference to double check
    rand_features = np.random.rand(1, 5) * 100
    print(f"Random Prediction: {clf.predict(rand_features)}")

    print(f"Data Types: {instances.values[:, :5].dtype}")
