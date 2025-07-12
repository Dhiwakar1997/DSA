__author__ = "Dhiwakar"

from flask import make_response, jsonify, g, request, Blueprint
from DLL.service.DLL_Service import DoublyLinkedList

DLL_app = Blueprint('DLL', __name__)

def create_list():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    return jsonify({"message": "OK","list":DLL_obj.get_list()}), 200

def append():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    DLL_obj.append(data['value'])
    return jsonify({"message": "OK","list":DLL_obj.get_list()}), 200

def prepend():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    DLL_obj.prepend(data['value'])
    return jsonify({"message": "OK","list":DLL_obj.get_list()}), 200

def pop():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    poppedItem = DLL_obj.pop()
    if poppedItem:
        return jsonify({"message": "OK","list":DLL_obj.get_list(), 'poppedItem':poppedItem.value}), 200
    else:
        return jsonify({}),401

def pop_first():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    poppedItem = DLL_obj.pop_first()
    if poppedItem:
        return jsonify({"message": "OK","list":DLL_obj.get_list(), 'poppedItem':poppedItem.value}), 200
    else:
        return jsonify({}),401

def insert():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    DLL_obj.insert(data['index'],data['value'])
    return jsonify({"message": "OK","list":DLL_obj.get_list()}), 200

def remove():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    DLL_obj.remove(data['index'])
    return jsonify({"message": "OK","list":DLL_obj.get_list()}), 200

def reverse():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    DLL_obj.reverse()
    return jsonify({"message": "OK","list":DLL_obj.get_list()}), 200

def set_value():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    DLL_obj.set_value(data['index'],data['value'])
    return jsonify({"message": "OK","list":DLL_obj.get_list()}), 200

def get_value():
    data = request.get_json()
    DLL_obj = DoublyLinkedList(data['list'])
    val = DLL_obj.get(data['index'])
    return jsonify({"message": "OK","list":DLL_obj.get_list(),"get_item":val.value}), 200

DLL_app.add_url_rule("/create", endpoint='create-dll', view_func=create_list, methods=['POST'])

DLL_app.add_url_rule("/append", endpoint='append-dll', view_func=append, methods=['POST'])

DLL_app.add_url_rule("/prepend", endpoint='prepend-dll', view_func=prepend, methods=['POST'])

DLL_app.add_url_rule("/pop", endpoint='pop-dll', view_func=pop, methods=['POST'])

DLL_app.add_url_rule("/pop_first", endpoint='pop-first-dll', view_func=pop_first, methods=['POST'])

DLL_app.add_url_rule("/insert", endpoint='insert-dll', view_func=insert, methods=['POST'])

DLL_app.add_url_rule("/remove", endpoint='remove-dll', view_func=remove, methods=['POST'])

DLL_app.add_url_rule("/reverse", endpoint='reverse-dll', view_func=reverse, methods=['POST'])

DLL_app.add_url_rule("/set", endpoint='set-dll', view_func=set_value, methods=['POST'])

DLL_app.add_url_rule("/get", endpoint='get-dll', view_func=get_value, methods=['POST'])
