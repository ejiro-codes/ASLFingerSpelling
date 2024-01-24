from flask import Flask,request,jsonify
import requests
from PIL import Image
from flask_cors import CORS
import numpy as np
import tensorflow as tf
import io,base64


app = Flask(__name__)
CORS(app)

# saving class names
classNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
               'H', 'I', 'J', 'K', 'L', 'M',
             'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
               'V', 'W', 'X', 'Y', 'Z', 'del', 'nothing', 'space']


final_model =  tf.keras.models.load_model('finalized_CNN_model.h5')

#classify converted image and return prediction
def classifier(img):
    img = img.resize((64, 64))
    img = np.array(img).astype(np.float32) #convert image type
    img = np.expand_dims(img, axis=0) #extending the dimensions of the img

    prediction = final_model.predict(img)
    m = np.argmax(prediction[0])
    return classNames[m]

@app.route("/", methods=['POST'])
def classify():
    json_dict = request.get_json()
    img = json_dict['img']
    img = img.split("base64,")[1]

    new_img = Image.open(io.BytesIO(base64.decodebytes(bytes(img, "utf-8"))))
    # with open("img.jpg", "wb") as fh:
    #     fh.write(base64.decodebytes(bytes(img, "utf-8")))
    # new_img = Image.open("img.jpg")
    #print(new_img + " IS THIS ITTT")
    prediction = classifier(new_img)
    return jsonify(prediction)


if __name__ == "__main__":
    app.run(debug=True, port=8080)