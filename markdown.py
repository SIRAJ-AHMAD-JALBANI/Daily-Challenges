import re

def convert_list_item(markdown):
    match = re.match(r"\s*\d+\.\s+(.+)", markdown)
    
    if not match:
        return "Invalid format"
    return f"<li>{match.group(1)}</li>"
