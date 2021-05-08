"""
A minimal Flask application.
"""

from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    """Return Hello, World!"""
    return "Hello, World!"
