import datetime
from mongoengine import connect, Document, StringField, DateTimeField, IntField, FloatField, SequenceField
connect('userDb', host='localhost', port=27017)
#connect('userDb', host='localhost', port=27017)

class user_list(Document):
    firstName = StringField(required=True, max_length=30)
    lastName = StringField(required=True, max_length=30)
    userName = StringField(required=True, max_length=30, unique=True)
    passWord = StringField(required=True, max_length=200)
    dateCreated = DateTimeField(default=datetime.datetime.now)
    address = StringField(required=True, max_length=100)
    contactNo = StringField(max_length=13)
    email = StringField(max_length=100, unique=True)
    age = IntField(max_length=2)
    profilePic = StringField(max_length=50, unique=True)

class product_list(Document):
    product_name = StringField(required=True, max_length=30, unique=True)
    product_price = FloatField(max_length=7)
    product_gtin = IntField(max_length=13, unique=True)
    dateCreated = DateTimeField(default=datetime.datetime.now)

class transaction_list(Document):
    total_price = FloatField()
