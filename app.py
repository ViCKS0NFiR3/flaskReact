from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from mongoDb import user_list, product_list, transaction_list
from werkzeug.security import check_password_hash, generate_password_hash
from mongoengine.queryset.visitor import Q
from os import environ
from flask_cors import CORS
from bson import json_util
import json


app = Flask(__name__)
api = Api(app)
CORS(app)

class HelloWorld(Resource):
    def get(self):
        return {'about':'Hello World!'}
    def post(self):
        some_json = request.get_json()
        return {'you sent': some_json}, 201

class Multi(Resource):
    def get(self, num):
        return {'result': num*10}

class Users(Resource):
    def get(self):
        userListArray = []
        userList = user_list.objects
        for user in userList:
            json_data = user.to_json()
            userListArray.append(json.loads(json_data))
        return userListArray, 201

class UserAdd(Resource):
    def post(self):
        #try:
        user_info = request.get_json()
        print(user_info)
        user = user_list()
        user.firstName = user_info["firstName"]
        user.lastName = user_info["lastName"]
        user.userName = user_info["userName"]
        user.passWord = user_info["passWord"]
        user.address = user_info["address"]
        user.contactNo = user_info["contactNo"]
        user.email = user_info["email"]
        user.age = user_info["age"]
        user.profilePic = user_info["profilePic"]
        user.save()
        return "User added successfully"
        #except Exception:
        #    return Exception

class UserDetails(Resource):
    def get(self,userId):
        userListArray = []
        user = user_list.objects(id=userId)
        for detail in user:
            print(detail)
            json_data = detail.to_json()
            userListArray.append(json.loads(json_data))
        return userListArray, 201

class Login(Resource):
    def post(self):
        token = 'Login'
        user_cred_json = request.get_json()
        currentUser = user_list.objects(userName=user_cred_json["username"])
        #print(currentUser)
        if currentUser:
            for user in currentUser:
                password = user.passWord
                print(password)
            if check_password_hash(password,user_cred_json["password"]):
                token = "Login Successfully"
                print(user.firstName)
                return {"token":token,"firstName":user.firstName}, 201
            else:
                token = "Invalid Username or password"
        else:
            token = "Invalid Username or password"
        return {"token":token}, 404

api.add_resource(HelloWorld,'/')
api.add_resource(Multi,'/multi/<int:num>')
api.add_resource(Login,'/login')
api.add_resource(Users,'/users')
api.add_resource(UserAdd,'/users/add')
api.add_resource(UserDetails,'/users/view/<userId>')

if __name__ == '__main__':
    app.run(debug=True)