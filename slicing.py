def parse_image(markdown):
    # get alt text
    alt_text = markdown[markdown.index("[") + 1 : markdown.index("]")]
    
    # get image url
    image_url = markdown[markdown.index("(") + 1 : markdown.index(")")]
    
    # return html img tag
    return f'<img src="{image_url}" alt="{alt_text}">'
