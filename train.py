import yfinance as yf
from fastai.text.all import *

# Fetch stock data for SPY from 2019 to the current date
stock_data = yf.download('SPY', start='2019-01-01', end='2023-12-28')

print(stock_data)