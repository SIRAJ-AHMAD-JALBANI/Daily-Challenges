import re

def to_screaming_snake_case(variable_name):
    words = re.findall(r'[A-Z]?[a-z]+|[A-Z]+(?=[A-Z]|$)', variable_name)
    return '_'.join(word.upper() for word in words)
