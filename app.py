from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
import pickle
import bz2
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__, static_folder="frontend/build", static_url_path='')
CORS(app)

with open('diabetes', 'rb') as f:
    diabetes_model = pickle.load(f)

with open('Chronic_kidney_disease', 'rb') as g:
    kidney_disease = pickle.load(g)

with bz2.BZ2File('Liver_Disease_Prediction-2', 'rb') as h:
    Liver_disease = pickle.load(h)


encoder = LabelEncoder()


@app.route("/api/diabetes", methods=['POST'])
def post__diabetes_data():
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


@app.route("/api/kidney", methods=['POST'])
def post_kidney_data():
    age = int(request.json.get('age'))
    bp = int(request.json.get('bp'))
    sg = int(request.json.get('sg'))
    al = int(request.json.get('al'))
    su = int(request.json.get('su'))
    rbc = float(request.json.get('rbc'))
    pc = float(request.json.get('pc'))
    pcc = int(request.json.get('pcc'))
    ba = int(request.json.get('ba'))
    bgr = int(request.json.get('bgr'))
    bu = int(request.json.get('bu'))
    sc = int(request.json.get('sc'))
    sod = int(request.json.get('sod'))
    pot = int(request.json.get('pot'))
    hemo = int(request.json.get('hemo'))
    pcv = int(request.json.get('pcv'))
    wc = int(request.json.get('wc'))
    rc = int(request.json.get('rc'))
    htn = int(request.json.get('htn'))
    dm = int(request.json.get('dm'))
    cad = int(request.json.get('cad'))
    appet = int(request.json.get('appet'))
    pe = int(request.json.get('pe'))
    ane = int(request.json.get('ane'))

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

    res_2 = kidney_disease.predict(df2)

    if (res_2[0] == 0):
        return jsonify({'result': 0})
    else:
        return jsonify({'result': 1})


@app.route("/api/liver", methods=['POST'])
def post_liver_data():
    Age = int(request.json.get('Age'))
    Gender = int(request.json.get('Gender'))
    Total_Bilirubin = int(request.json.get('Total_Bilirubin'))
    Direct_Bilirubin = int(request.json.get('Direct_Bilirubin'))
    AAP = int(request.json.get('AAP'))
    SAA_1 = float(request.json.get('SAA_1'))
    SAA_2 = float(request.json.get('SAA_2'))
    Total_Protein = int(request.json.get('Total_Protein'))
    ALB_Albumin = int(request.json.get('ALB_Albumin'))
    AG_RATIO = int(request.json.get('AG_RATIO'))

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
        }
    )

    df3['Gender'] = encoder.fit_transform(df3['Gender'])

    res_3 = Liver_disease.predict(df3)

    if (res_3[0] == 0):
        return jsonify({'result': 0})
    else:
        return jsonify({'result': 1})


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


@app.route("/tech")
def result():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)
