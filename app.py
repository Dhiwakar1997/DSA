from flask import Flask
from DLL.route.DLL_Route import DLL_app
app = Flask('RMB', static_folder="../static")
    
app.register_blueprint(DLL_app, url_prefix='/DLL/v1')

if __name__ == '__main__':
    app.run(debug=False)