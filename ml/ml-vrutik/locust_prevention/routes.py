from flask import render_template
from locust_prevention import app

@app.route('/')
@app.route('/locust_prevention')
def home():

    return render_template('home.html')

