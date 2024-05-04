from flask import render_template
from agro_ml import app

import pickle
@app.route('/')
@app.route('/locust_prevention')


def locust_prevention():
    with open('crop_prediction.pkl','rb') as f:
        model = pickle.load(f)
        value = "".join(model.predict([[100,100,100]]))
    # url = 'http://node-server-url:port/data'

    # try:
    #     response = requests.get(url)

    #     if response.status_code == 200:
    #         data = response.json()
    #         return data
    #     else:
    #         print(f"Failed to fetch data from the Node.js server. Status code: {response.status_code}")
    #         return None
    # except requests.exceptions.RequestException as e:
    #     print(f"An error occurred: {e}")
    #     return None

    # if data:
    #     print("Data fetched from the Node.js server:")
    #     print(data)
    # else:
    #     print("Failed to fetch data from the Node.js server.")

    return render_template('locust.html',value=value)


@app.route('/leaf_detection')
def leaf_detection():
    return render_template('leaf.html')

@app.route('/fruit_quality')
def fruit_detection():
    return render_template('fruit.html')
