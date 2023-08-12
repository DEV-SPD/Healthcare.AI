import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV, cross_val_predict
from sklearn.preprocessing import StandardScaler, LabelEncoder
from xgboost import XGBClassifier
from sklearn.metrics import classification_report

# Load the dataset
data = pd.read_csv('D:/diagnosis_model/data.csv')

# Convert categorical features to numerical using LabelEncoder
label_encoder = LabelEncoder()
data['gender'] = label_encoder.fit_transform(data['gender'])
data['cholesterol'] = label_encoder.fit_transform(data['cholesterol'])
data['gluc'] = label_encoder.fit_transform(data['gluc'])

# Feature engineering
data['bmi'] = data['weight'] / ((data['height'] / 100) ** 2)
data['ap_diff'] = data['ap_hi'] - data['ap_lo']

# Split data into features (X) and target (y)
X = data.drop(['cardio', 'weight', 'height'], axis=1)
y = data['cardio']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Feature scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# XGBoost Classifier with hyperparameter tuning
param_grid_xgb = {
    'n_estimators': [100, 200],
    'learning_rate': [0.01, 0.1, 0.3],
    'max_depth': [3, 5, 7],
    'subsample': [0.8, 1.0],
    'colsample_bytree': [0.8, 1.0],
}

grid_search_xgb = GridSearchCV(
    XGBClassifier(random_state=42),
    param_grid_xgb,
    cv=3,
    verbose=2
)

grid_search_xgb.fit(X_train_scaled, y_train)
xgb_model = grid_search_xgb.best_estimator_

# Cross-validation predictions
cv_predictions = cross_val_predict(xgb_model, X_train_scaled, y_train, cv=5)

# Print classification report for cross-validation
cv_report = classification_report(y_train, cv_predictions)
print("Cross-Validation Classification Report:\n", cv_report)

# Make predictions on the test data
y_pred_xgb = xgb_model.predict(X_test_scaled)

# Print classification report for XGBoost model on the test data
print("XGBoost Classification Report:\n", classification_report(y_test, y_pred_xgb))

import pickle

# Save the XGBoost model using pickle
model_filename = "cardiovascular_disease_predictor.pkl"
with open(model_filename, 'wb') as model_file:
    pickle.dump(xgb_model, model_file)