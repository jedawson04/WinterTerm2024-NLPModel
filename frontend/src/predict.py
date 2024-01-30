# python file for predicting on the input data accessed through PyScript

# here we can load the models and predict on them

"""
might look something like this -- assuming the sentiment model and classification model are stored in a models folder

sentiment = load_learner(./Models/Sentiment)
class = load_learner(./Models/Classification)

sentiment.predict(data)
class.predict(data)

depending on how these outputs look we can do something with them and then send them back to the js file somehow
"""
