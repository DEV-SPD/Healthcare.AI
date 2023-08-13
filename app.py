from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
import pickle
import bz2
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OneHotEncoder
# import asyncio

app = Flask(__name__, static_folder="frontend/build", static_url_path='')
CORS(app)

with open('diabetes', 'rb') as f:
    diabetes_model = pickle.load(f)

with open('Chronic_kidney_disease.unknown', 'rb') as g:
    kidney_disease = pickle.load(g)

with bz2.BZ2File('Liver_Disease_Prediction-2', 'rb') as h:
    Liver_disease = pickle.load(h)

with open('HEART_DISEASE', 'rb') as f:
    heart_disease = pickle.load(f)


encoder = LabelEncoder()
encoder1 = OneHotEncoder()
1


@app.route("/api/diabetes", methods=['POST'])
def post_diabetes_data():
    Pregnancies = int(request.json.get('preg'))
    Glucose = int(request.json.get('glu'))
    BloodPressure = int(request.json.get('bp'))
    SkinThickness = int(request.json.get('st'))
    Insulin = int(request.json.get('ins'))
    BMI = float(request.json.get('bmi'))
    DiabetesPedigreeFunction = float(request.json.get('dpf'))
    Age = int(request.json.get('age'))

    res = diabetes_model.predict(
        [[Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age]])

    if (res[0] == 0):
        return jsonify({'result': 0})
    else:
        return jsonify({'result': 1})


@app.route("/api/liver", methods=['POST'])
def post_liver_data():
    Age = int(request.json.get('Age'))
    print(Age)
    Gender = request.json.get('Gender')
    Total_Bilirubin = float(request.json.get('Total_Bilirubin'))
    Direct_Bilirubin = float(request.json.get('Direct_Bilirubin'))
    AAP = int(request.json.get('AAP'))
    SAA_1 = int(request.json.get('SAA_1'))
    SAA_2 = int(request.json.get('SAA_2'))
    Total_Protein = float(request.json.get('Total_Protein'))
    ALB_Albumin = float(request.json.get('ALB_Albumin'))
    AG_RATIO = float(request.json.get('AG_RATIO'))
    print(Age)
    df3 = pd.DataFrame(
        {
            'Age': [Age],
            'Gender': [Gender],
            'Total_Bilirubin': [Total_Bilirubin],
            'Direct_Bilirubin': [Direct_Bilirubin],
            'AAP': [AAP],
            'SAA_1': [SAA_1],
            'SAA_2': [SAA_2],
            'Total_Protein': [Total_Protein],
            'ALB_Albumin': [ALB_Albumin],
            'AG_RATIO': [AG_RATIO],
            'Result': [0],
        }
    )
    print(df3)
    df3['Gender'] = encoder.fit_transform(df3['Gender'])
    print(df3)
    res_4 = Liver_disease.predict(df3)
    treatment_recommendations = []

    # Age considerations
    if Age < 18:
        treatment_recommendations.append(
            "Consult a pediatric hepatologist for appropriate treatment.")
    elif Age > 65:
        treatment_recommendations.append(
            "Careful monitoring and age-specific treatment recommended.")

        # Gender and bilirubin levels
    if Gender == "female" and Total_Bilirubin > 1.0:
        treatment_recommendations.append(
            "Further investigation and consultation with a hepatologist is     recommended.")
    elif Total_Bilirubin > 2.5 or Direct_Bilirubin > 1.0:
        treatment_recommendations.append(
            "Elevated bilirubin levels require further evaluation and management.  ")

    # Liver enzyme levels
    if AAP > 150 or SAA_1 > 40 or SAA_2 > 35:
        treatment_recommendations.append(
            "Elevated liver enzymes suggest liver inflammation; consult a hepatologist.")

    # Protein levels and albumin-to-globulin ratio
    if Total_Protein < 6.0 or ALB_Albumin < 3.5 or AG_RATIO < 1.0:
        treatment_recommendations.append(
            "Low protein levels may indicate liver dysfunction; consult a doctor.")

    # Construct the final treatment recommendation
    if treatment_recommendations:
        final_recommendation = treatment_recommendations
    else:
        final_recommendation = [
            "Based on the provided values, no specific treatment recommendation."]

    print("Treatment Recommendations:\n", final_recommendation)

    if (res_4[0] == 0):
        return jsonify({'result': 0, 'treat': final_recommendation})
    else:
        return jsonify({'result': 1, 'treat': final_recommendation})


@app.route("/api/heart", methods=['POST'])
def post_heart_data():
    age = int(request.json.get('age'))
    sex = int(request.json.get('sex'))
    cp = int(request.json.get('cp'))
    trestbps = int(request.json.get('trestbps'))
    chol = int(request.json.get('chol'))
    fbs = float(request.json.get('fbs'))
    restecg = float(request.json.get('restecg'))
    thalach = int(request.json.get('thalach'))
    exang = int(request.json.get('exang'))
    oldpeak = int(request.json.get('oldpeak'))
    slope = int(request.json.get('slope'))
    ca = int(request.json.get('ca'))
    thal = int(request.json.get('thal'))

    df1 = pd.DataFrame(
        {
            'age': [age],
            'sex': [sex],
            'cp': [cp],
            'trestbps': [trestbps],
            'chol': [chol],
            'fbs': [fbs],
            'restecg': [restecg],
            'thalach': [thalach],
            'exang': [exang],
            'oldpeak': [oldpeak],
            'slope': [slope],
            'ca': [ca],
            'thal': [thal]
        }
    )

    df1['sex'] = encoder.fit_transform(df1['sex'])
    df1['cp'] = encoder.fit_transform(df1['cp'])

    res_2 = heart_disease.predict(df1)

    if (res_2[0] == 0):
        return jsonify({'result': 0})
    else:
        return jsonify({'result': 1})


@app.route("/api/kidney", methods=['POST'])
def post_kidney_data():
    age = int(request.json.get('age'))
    bp = int(request.json.get('bp'))
    sg = float(request.json.get('sg'))
    al = int(request.json.get('al'))
    su = int(request.json.get('su'))
    rbc = request.json.get('rbc')
    pc = request.json.get('pc')
    pcc = request.json.get('pcc')
    ba = request.json.get('ba')
    bgr = int(request.json.get('bgr'))
    bu = int(request.json.get('bu'))
    sc = float(request.json.get('sc'))
    sod = int(request.json.get('sod'))
    pot = float(request.json.get('pot'))
    hemo = float(request.json.get('hemo'))
    pcv = int(request.json.get('pcv'))
    wc = int(request.json.get('wc'))
    rc = float(request.json.get('rc'))
    htn = request.json.get('htn')
    dm = request.json.get('dm')
    cad = request.json.get('cad')
    appet = request.json.get('appet')
    pe = request.json.get('pe')
    ane = request.json.get('ane')

    df2 = pd.DataFrame(
        {
            'age': [age],
            'bp': [bp],
            'sg': [sg],
            'al': [al],
            'su': [su],
            'rbc': [rbc],
            'pc': [pc],
            'pcc': [pcc],
            'ba': [ba],
            'bgr': [bgr],
            'bu': [bu],
            'sc': [sc],
            'sod': [sod],
            'pot': [pot],
            'hemo': [hemo],
            'pcv': [pcv],
            'wc': [wc],
            'rc': [rc],
            'htn': [htn],
            'dm': [dm],
            'cad': [cad],
            'appet': [appet],
            'pe': [pe],
            'ane': [ane],

        }
    )

    df2['rbc'] = encoder.fit_transform(df2['rbc'])
    df2['pc'] = encoder.fit_transform(df2['pc'])
    df2['pcc'] = encoder.fit_transform(df2['pcc'])
    df2['ba'] = encoder.fit_transform(df2['ba'])
    df2['htn'] = encoder.fit_transform(df2['htn'])
    df2['dm'] = encoder.fit_transform(df2['dm'])
    df2['cad'] = encoder.fit_transform(df2['cad'])
    df2['appet'] = encoder.fit_transform(df2['appet'])
    df2['pe'] = encoder.fit_transform(df2['pe'])
    df2['ane'] = encoder.fit_transform(df2['ane'])

    res_3 = kidney_disease.predict(df2)

    def suggest_kidney_health_advice_and_medication_by_age(age, has_kidney_disease):
        advice_and_medication = []

        if has_kidney_disease:
            if age >= 20 and age <= 30:
                advice_and_medication.append(
                    "For individuals in their 20s and 30s with kidney disease:")
                advice_and_medication.append(
                    "- Follow a renal-friendly diet: Limit salt, potassium, and phosphorus intake to support kidney function.")
                advice_and_medication.append(
                    "- Take prescribed medications: Depending on your condition, medications like phosphate binders and blood pressure drugs may be necessary.")
                advice_and_medication.append(
                    "- Regular check-ups: Stay in touch with your healthcare provider for monitoring and adjustments.")
                advice_and_medication.append(
                    "- Vitamin D supplements: If recommended, to address potential deficiency.")
                advice_and_medication.append(
                    "- Calcium supplements: As advised by your doctor for bone health.")

            elif age >= 30 and age <= 60:
                advice_and_medication.append(
                    "For individuals in their 40s and 50s with kidney disease:")
                advice_and_medication.append(
                    "- Manage blood pressure and blood sugar: Follow your doctor's recommendations and take prescribed medications.")
                advice_and_medication.append(
                    "- Dietary adjustments: Control phosphorus intake and maintain a balanced diet for kidney health.")
                advice_and_medication.append(
                    "- Medications: Depending on your specific condition, ESA, ACE inhibitors, ARBs, and phosphate binders might be recommended.")
                advice_and_medication.append(
                    "- Iron supplements: If needed, to address anemia.")
                advice_and_medication.append(
                    "- Cholesterol-lowering medications: As recommended by your doctor for cardiovascular health.")
            elif age >= 60:
                advice_and_medication.append(
                    "For individuals aged 60 and above with kidney disease:")
                advice_and_medication.append(
                    "- Medication adherence: Take prescribed blood pressure medications, ESA, and phosphate binders as directed.")
                advice_and_medication.append(
                    "- Nutritional guidance: Maintain a kidney-friendly diet with appropriate fluid, potassium, and protein intake.")
                advice_and_medication.append(
                    "- Regular appointments: Visit your healthcare provider for comprehensive kidney health monitoring.")
                advice_and_medication.append(
                    "- Diuretics: If necessary, to manage fluid balance.")
                advice_and_medication.append(
                    "- Statins: If recommended by your doctor for cardiovascular risk reduction.")

            else:
                advice_and_medication.append(
                    "For personalized advice related to kidney disease and your specific age group, please consult a healthcare professional.")

        else:
            advice_and_medication.append(
                "For individuals without kidney disease, the general advice mentioned earlier can be followed.")

        return advice_and_medication

    if (res_3[0] == 0):
        has_kidney_disease = False
    else:
        has_kidney_disease = True

    advice_and_medication = suggest_kidney_health_advice_and_medication_by_age(
        age, has_kidney_disease)

    if (res_3[0] == 0):
        return jsonify({'result': 0, 'treat': advice_and_medication})
    else:
        return jsonify({'result': 1, 'treat': advice_and_medication})


@app.route("/")
def hello_world():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/works")
def works():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/liver")
def liver():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/kidney")
def kidney():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/heart")
def heart():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/diabetes")
def diabetes():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/about")
def about():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/offer")
def offer():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/tech")
def tech():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/result")
def result():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)
