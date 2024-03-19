# Webpack starter
Webpack with bootstrap and semantic HTML validation

## Get started
Run the command ```npm i``` and then ```npm run build```   
```npm start``` starts a dev server with livereload running at [http://localhost:8080/](http://localhost:8080)   

## Bootstrap
This project is configured for importing only the parts of Bootstrap that are needed. Some bits have been brought in already. Add more to **src/scss/styles.scss**

To import specific Bootstrap JavaScript plugins, add them to **src/js/main.js** ```import <PluginName> from '~bootstrap/js/dist/<plugin-name>;```

To import all of them, add 
```import * as bootstrap from '~bootstrap';```    


## Testing
Semantic HTML validation executed with [vnu-jar](https://github.com/validator/validator#readme)   
Run with command ```npm run test```
