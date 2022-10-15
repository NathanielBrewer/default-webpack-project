# default-webpack-project
Webpack with bootstrap and semantic HTML validation

This project is configured for importing only the parts of Bootstrap that are needed. Some bits have been brought in already. Add more to **src/scss/styles.scss**

To import all of Bootstrap's JavaScript, add the following to **src/js/main.js**   
```import * as bootstrap from '~bootstrap';```    
Or, to import Bootstrap plugins individually, do    
```import <PluginName> from '~bootstrap/js/dist/<plugin-name>;```

Semantic HTML validation executed with [vnu-jar](https://github.com/validator/validator#readme)
