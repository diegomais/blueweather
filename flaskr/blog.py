from flask import Blueprint, flash, g, redirect, render_template, request, url_for
from werkzeug.exceptions import abort

from flaskr.auth import login_required
from flaskr.db import get_db

bp = Blueprint("blog", __name__)


@bp.route("/")
def index():
    db = get_db()
    posts = db.execute(
        "SELECT p.id, title, body, created_at, author_id, username"
        " FROM posts p JOIN users u ON p.author_id = u.id"
        " ORDER BY created_at DESC"
    ).fetchall()
    return render_template("blog/index.html", posts=posts)


@login_required
@bp.route("/create", methods=("GET", "POST"))
def create():
    if request.method == "POST":
        title = request.form.get("title", False)
        body = request.form.get("body", False)
        error = None

        if not title:
            error = "Title is required."

        if error is not None:
            flash(error)
        else:
            db = get_db()
            db.execute(
                "INSERT INTO posts (title, body, author_id)" " VALUES (?, ?, ?)",
                (title, body, g.user["id"]),
            )
            db.commit()
            return redirect(url_for("blog.index"))

    return render_template("blog/create.html")


def get_post(id, check_author=True):
    post = (
        get_db()
        .execute(
            "SELECT p.id, title, body, created_at, author_id, username"
            " FROM posts p JOIN users u ON p.author_id = u.id"
            " WHERE p.id = ?",
            (id,),
        )
        .fetchone()
    )

    if post is None:
        abort(404, "Post id {0} does not exist.".format(id))

    if check_author and post["author_id"] != g.user["id"]:
        abort(403)

    return post


@login_required
@bp.route("/<int:id>/update", methods=("GET", "POST"))
def update(id):
    post = get_post(id)

    if request.method == "POST":
        title = request.form.get("title", False)
        body = request.form.get("body", False)
        error = None

        if not title:
            error = "Title is required."

        if error is not None:
            flash(error)
        else:
            db = get_db()
            db.execute(
                "UPDATE posts SET title = ?, body = ?" " WHERE id = ?",
                (title, body, id),
            )
            db.commit()
            return redirect(url_for("blog.index"))

    return render_template("blog/update.html", post=post)


@login_required
@bp.route("/<int:id>/delete", methods=("GET", "POST"))
def delete(id):
    get_post(id)
    db = get_db()
    db.execute("DELETE FROM posts where id = ?", (id,))
    db.commit()
    return redirect(url_for("blog.index"))