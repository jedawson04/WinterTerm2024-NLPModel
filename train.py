from fastai.text.all import *

dls = TextDataLoaders.from_folder(untar_data(URLs.IMDB), valid='test')

learn = text_classifier_learner(dls, AWD_LSTM, drop_mult=0.5, metrics=accuracy)

learn.fit_one_cycle(1, 2e-2)

learn.save('sentiment_model')

learn.predict("I really loved that movie, it was awesome!")