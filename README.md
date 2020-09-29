# Simple-Imaging

**simple-imaging** is a Python library for simple imaging processing tasks, made as part of the assignment for the Digital Imaging Processing class taken in 2020.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install simple-imaging.

```bash
pip install simple-imaging
```

## Usage

A simple example of the usage can be found below.
```python
from simple_imaging import image

img = image.read_file('sample.ppm')
img.negative()
```

### Developer reference
>WIP

### Running tests
This project has unit tests, and PRs have to pass in all tests to be merged.

>WIP

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
