import json
from setuptools import setup, find_packages

# Load package.json contents
with open("package.json") as f:
    package = json.load(f)

# Load README contents
with open("README.md", encoding="utf-8") as f:
    long_description = f.read()

setup(
    name="mkdocs-gds",
    version=package["version"],
    url="https://github.com/uktrade/gds-technical-documentation-template",
    license=package["license"],
    description=package["description"],
    long_description=long_description,
    long_description_content_type="text/markdown",
    author=package["author"]["name"],
    author_email=package["author"]["email"],
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        "mkdocs.themes": [
            "gds = mkdocs_gds",
        ]
    },
    zip_safe=False,
)
