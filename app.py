from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    information = get_main_database()
    return render_template('index.html', grid_elements=information)


@app.route('/city')
def city_page():
    _id = request.args['id']
    city_db = get_city_database(int(_id))
    main_db = get_main_database()
    return render_template('city-template.html', city_params=city_db, grid_elements=main_db)


@app.route('/new-world')
def new_world():
    _id = request.args['id']
    params = get_before_after_pictures(_id)
    return render_template('newWorld.html', prms = params)


@app.route('/admin-panel')
def admin_panel():
    return render_template('adminPanel.html')


@app.route('/donate')
def donate_page():
    information = get_main_database()
    return render_template('donate.html', grid_elements=information)


def get_main_database():
    db = [{'image': 'static/DB/Images/1.jpg', 'name': 'Sveta', 'date': '26.03.2022', 'city': 'Bucha',
           'text': 'The story of Bucha'},
          {'image': 'static/DB/Images/2.jpg', 'name': 'Vova', 'date': '02.04.2022', 'city': 'Irpin',
           'text': 'The story of Irpin'},
          {'image': 'static/DB/Images/3.jpg', 'name': 'Kirill', 'date': '27.03.2022', 'city': 'Kharkiv',
           'text': 'The story of Kharkiv'},
          {'image': 'static/DB/Images/4.jpg', 'name': 'Danya', 'date': '29.03.2022', 'city': 'Mariupol',
           'text': 'The story of Mariupol'},
          {'image': 'static/DB/Images/5.jpg', 'name': 'Kira', 'date': '31.04.2022', 'city': 'Bila Tserkva',
           'text': 'The story of Bila Tserkva'},
          {'image': 'static/DB/Images/6.jpg', 'name': 'Dmitri', 'date': '22.03.2022', 'city': 'Izum',
           'text': 'The story of Izum'},
          {'image': 'static/DB/Images/1.jpg', 'name': 'Nona', 'date': '22.03.2022', 'city': 'Mikolaiv',
           'text': 'None'},
          ]
    return db


def get_city_database(_index):
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eget justo diam sit diam malesuada dignissim. " \
           "Volutpat, facilisis posuere at quis eleifend facilisi porttitor. Leo laoreet ipsum vitae nulla dolor nec " \
           "blandit metus. Nulla in enim nibh turpis quis ut. Mattis tincidunt volutpat sagittis ultricies vitae " \
           "feugiat vulputate sit. Ipsum dolor netus praesent tincidunt. Aliquam quis nec, risus amet. Rhoncus " \
           "pharetra arcu mattis sit auctor et in. Velit mattis ipsum turpis pellentesque. Libero commodo at arcu " \
           "vivamus at pretium, malesuada. Etiam urna eget dui varius eu nec interdum elementum ac. Turpis sit ipsum " \
           "amet, sed adipiscing quis. Egestas a nec, nec enim. Vitae sodales nec nisi quis ac eu ipsum. " \
           "Euismod aliquam faucibus euismod mauris enim mi sapien tellus. Tincidunt a, cursus est diam orci. Vitae " \
           "adipiscing consectetur tempus viverra pretium cursus scelerisque metus. Massa sit amet quis egestas " \
           "mauris malesuada turpis purus. Convallis consectetur odio aliquet tortor placerat elementum. Urna aliquam " \
           "lacus metus mauris, lobortis ornare sed ornare. Lorem ultricies ac dignissim lorem a, a. Velit urna, " \
           "consectetur adipiscing lacus posuere egestas. Tincidunt gravida vestibulum suspendisse leo a, " \
           "turpis feugiat gravida amet. "
    return {'id': _index,
            'city': 'Kharkiv',
            'images': ["static/DB/wide.jpg", "static/DB/Images/7.jpg", "static/DB/Images/4.jpg",
                       "static/DB/Images/6.jpg", "static/DB/Images/5.jpg"],
            'texts': [text, text+'a', text+'b', text+'c', text+'d', text+'e']}


def get_before_after_pictures(_index):
    pictures = {'id': _index, 'before': 'static/DB/4/before.jpg', 'after': 'static/DB/5/before.jpg'}
    return pictures


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=False)
