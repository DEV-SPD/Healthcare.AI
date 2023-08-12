import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import GridSearchCV

# Load the dataset
data = pd.read_csv("D:\\diagnosis_model\\heart.csv")

# Split the data into features (X) and target labels (y)
X = data.drop("target", axis=1)
y = data["target"]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a Random Forest classifier
clf = RandomForestClassifier(random_state=42)

# Define hyperparameters for tuning
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [None, 10, 20],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

# Use GridSearchCV to find best hyperparameters
grid_search = GridSearchCV(clf, param_grid, cv=5)
grid_search.fit(X_train, y_train)

# Get the best model from GridSearchCV
best_clf = grid_search.best_estimator_

# Perform cross-validation to evaluate the model
cv_scores = cross_val_score(best_clf, X_train, y_train, cv=5)
print("Cross-Validation Scores:", cv_scores)
print("Mean CV Score:", cv_scores.mean())

# Train the best model on the entire training data
best_clf.fit(X_train, y_train)

# Predict the target labels on the test data
y_pred = best_clf.predict(X_test)

# Calculate the accuracy of the model
accuracy = accuracy_score(y_test, y_pred)
print("Test Accuracy:", accuracy)

# Generate a classification report for detailed metrics
classification_rep = classification_report(y_test, y_pred)
print("Classification Report:\n", classification_rep)

# Create a DataFrame to hold the predictions
predictions_df = pd.DataFrame({"Actual": y_test, "Predicted": y_pred})

# Save the predictions to a CSV file
predictions_df.to_csv("D:\\diagnosis_model\\predictions.csv", index=False)

import pickle

# Save the model using pickle
model_filename = "heart_disease_model.pkl"
with open(model_filename, 'wb') as model_file:
    pickle.dump(best_clf, model_file)

