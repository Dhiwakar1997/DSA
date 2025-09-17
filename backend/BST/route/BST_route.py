__author__ = "Dhiwakar"

from flask import make_response, jsonify, g, request, Blueprint
from BST.service.BST_Service import BST

BST_app = Blueprint('BST', __name__)

def create_tree():
    data = request.get_json()
    BST_obj = BST(data['list'])
    return jsonify({"message": "OK","BFS":BST_obj.BFS(),"dfs_Pre_Order":BST_obj.dfs_Pre_Order(),"dfs_Post_Order":BST_obj.dfs_Post_Order(),"dfs_In_Order":BST_obj.dfs_In_Order()}), 200

def insert():
    data = request.get_json()
    BST_obj = BST(data['list'])
    BST_obj.insert(data['value'])
    return jsonify({"message": "OK","BFS":BST_obj.BFS(),"dfs_Pre_Order":BST_obj.dfs_Pre_Order(),"dfs_Post_Order":BST_obj.dfs_Post_Order(),"dfs_In_Order":BST_obj.dfs_In_Order()}), 200

def delete_node():
    data = request.get_json()
    BST_obj = BST(data['list'])
    BST_obj.delete_node(data['value'])
    return jsonify({"message": "OK","BFS":BST_obj.BFS(),"dfs_Pre_Order":BST_obj.dfs_Pre_Order(),"dfs_Post_Order":BST_obj.dfs_Post_Order(),"dfs_In_Order":BST_obj.dfs_In_Order()}), 200


def contains():
    data = request.get_json()
    BST_obj = BST(data['list'])
    contains_value = BST_obj.contains(data['value'])
    return jsonify({"message": "OK","BFS":BST_obj.BFS(),"dfs_Pre_Order":BST_obj.dfs_Pre_Order(),"dfs_Post_Order":BST_obj.dfs_Post_Order(),"dfs_In_Order":BST_obj.dfs_In_Order(),"contains":contains_value}), 200


BST_app.add_url_rule("/create", endpoint='create-bst', view_func=create_tree, methods=['POST'])

BST_app.add_url_rule("/insert", endpoint='insert-bst', view_func=insert, methods=['PUT'])

BST_app.add_url_rule("/remove", endpoint='remove-bst', view_func=delete_node, methods=['Delete'])

BST_app.add_url_rule("/contains", endpoint='contains-bst', view_func=contains, methods=['POST'])

