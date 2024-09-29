from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('register.html')

@app.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    surname = request.form['surname']
    age = request.form['age']
    gender = request.form['gender']
    email = request.form['email']
    phone = request.form['phone']
    distance = request.form['distance']
    password = request.form['password']

    print(f"Registration: {name} {surname}, Age: {age}, Gender: {gender}, Email: {email}, Phone: {phone}, Distance: {distance} km")

    return jsonify({"status": "success", "message": "Registered successfully!"})

if __name__ == '__main__':
    app.run(debug=True)