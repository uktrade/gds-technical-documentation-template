from setuptools import setup, find_packages

VERSION = '0.0.4'

setup(
    name="mkdocs-gds",
    version=VERSION,
    url='https://github.com/uktrade/gds-technical-documentation-template',
    license='MIT',
    description='GOV.UK design system inspired mkdocs theme',
    author='Mark Higham',
    author_email='mark.higham@digital.trade.gov.uk',
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'mkdocs.themes': [
            'gds = mkdocs_gds',
        ]
    },
    zip_safe=False
)
