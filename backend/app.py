from flask import Flask
from flask_cors import CORS
from DLL.route.DLL_Route import DLL_app

app = Flask('DSA_Portfolio_Backend')
CORS(app)  # Enable CORS for React frontend

app.register_blueprint(DLL_app, url_prefix='/DLL/v1')

@app.route('/')
def home():
    return {
        'message': 'DSA Portfolio Backend API',
        'status': 'running',
        'available_endpoints': [
            '/DLL/v1/ - Doubly Linked List operations'
        ]
    }

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)