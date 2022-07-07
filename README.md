# gds-technical-documentation-template
 
> A GDS inspired theme for DDAT documentation


### Thoughts and decisions while developing

`mkdocs serve` doesn't reload when you edit a custom theme.

Workaround 
```shell
# from project root
npx nodemon -w demo/gds -x "cd demo && mkdocs build"
# separate tab / window / pane / whatevs
python -m http.server --directory demo/site 

```

