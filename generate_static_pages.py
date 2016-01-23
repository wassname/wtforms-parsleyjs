from wtformsparsleyjs.sample.sample import app
from flask_frozen import Freezer
import shutil
from os.path import join
freezer = Freezer(app)

if __name__ == '__main__':

    # rebuild static files using flask_frozen
    freezer.freeze()

    # copy result to index.html
    shutil.copy( join('wtformsparsleyjs', 'sample', 'build', 'parsley_testform'), 'index.html')
    shutil.copytree( join('wtformsparsleyjs', 'sample', 'build', 'static'), 'static')
