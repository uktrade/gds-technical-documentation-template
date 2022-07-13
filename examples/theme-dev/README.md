# Theme development

## Set up your environment - python native

- Create virtualenv with tool of choice and activate it `python -m venv venv`
- Install requirements `pip install -r requirements.txt`
- Run mkdocs `mkdocs serve --watch-theme`

## Commands

- `npm run build` will build all the css and copy files
- `npm run build:css` just builds the css to the `src` folder **this is most useful for front end dev**

## Packaging the theme

```shell
# prereqs
pip install -U pip
pip install build
pip install twine

# Build the package
python -m build
# ... time passes

# Test upload 
python3 -m twine upload --repository testpypi dist/*

# Upload to PyPI
python3 -m twine upload dist/*

```