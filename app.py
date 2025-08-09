from flask import Flask, render_template, send_from_directory
from DLL.route.DLL_Route import DLL_app
import os

app = Flask('RMB', static_folder="static", template_folder="templates", static_url_path="/static")
    
app.register_blueprint(DLL_app, url_prefix='/DLL/v1')

# Landing page
@app.route('/')
def index():
    return render_template('index.html')

# Serve the built LinkedList React app under /linkedlist
_LINKEDLIST_BUILD_DIR = os.path.join(os.path.dirname(__file__), 'linkedlist', 'build')

@app.route('/linkedlist')
def serve_linkedlist_index():
    return send_from_directory(_LINKEDLIST_BUILD_DIR, 'index.html')

@app.route('/linkedlist/<path:filename>')
def serve_linkedlist_static(filename):
    file_path = os.path.join(_LINKEDLIST_BUILD_DIR, filename)
    if os.path.isfile(file_path):
        return send_from_directory(_LINKEDLIST_BUILD_DIR, filename)
    # Fallback for SPA routes
    return send_from_directory(_LINKEDLIST_BUILD_DIR, 'index.html')

if __name__ == '__main__':
    app.run(debug=False)