# **My App**

A demo app to test out things and make a better boilerplate for react native project.

### App directory structure
> **Note:** Use short lowercase names for the top-level files and folders

``` 
    .
    ├── android                     
    ├── ios                         
    ├── src                         
    │   ├── config                           
    │   ├── constant                
    │   ├── context                 
    │   ├── lib                     
    │   ├── nav                     
    │   ├── page                    
    │   ├── ui           
    │   ├── util                    
    │   └── index.ts                
    ├── storybook                   
    ├── app.json
    ├── App.tsx                     
    ├── babel.config.js
    ├── index.js
    ├── metro.config.js                    
    ├── package.json
    ├── README.md 
    └── tsconfig.json

```

### Source/src directory structure
> Each directory has a `index.ts` file to export whatever the files in directory is going exports.
> 
```
    src                         
    ├── config                  
    │   ├── ...   
    │   └── index.ts            
    ├── constant                
    │   ├── ...                 
    │   └── index.ts            
    ├── context                 
    │   ├── ...                 
    │   └── index.ts            
    ├── lib                     
    │   ├── ...                 
    │   └── index.ts            
    ├── navigator                     
    │   ├── ...                 
    │   └── index.ts            
    ├── page                    
    │   ├── ...                 
    │   ├── login              
    │   │   ├── login.tsx      
    │   │   ├── login.test.ts  
    │   │   └── index.ts        
    │   └── index.ts            
    ├── ui                      
    │   ├── atom                
    │   │   ├── ...             
    │   │   ├── button          
    │   │   │   ├── button.tsx  
    │   │   │   ├── button.test.ts 
    │   │   │   ├── default.ts 
    │   │   │   └── index.ts                
    │   │   └── index.ts        
    │   ├── molecule
    │   │   ├── ...             
    │   │   └── index.ts       
    │   ├── organism
    │   │   ├── ...             
    │   │   └── index.ts       
    │   ├── template
    │   │   ├── ...             
    │   │   └── index.ts                           
    │   └── index.ts            
    ├── util                    
    │   ├── ...                 
    │   └── index.ts            
    └── index.ts
```    

The actual source files of a software project are usually stored inside the
`src` folder. Alternatively, you can put them into the `app` folder.

### Running Project
   1) install app dependencies using `npm install` or `yarn`
   2) run app on ios - `npx react-native run-ios`
   3) run app on android - `npx react-native run-android`

### 3rd party libraries
    react-native-reanimated    (^1.4.0)
    react-native-screens       (^1.0.0-alpha.23)
    react-navigation           (^4.0.10)
    react-navigation-stack     (^1.10.3)
    
### License information

If you want to share your work with others, please consider choosing an open
source license and include the text of the license into your project.
The text of a license is usually stored in the `LICENSE` (or `LICENSE.txt`,
`LICENSE.md`) file in the root of the project.

> You’re under no obligation to choose a license and it’s your right not to
> include one with your code or project. But please note that opting out of
> open source licenses doesn’t mean you’re opting out of copyright law.
>
> You’ll have to check with your own legal counsel regarding your particular
> project, but generally speaking, the absence of a license means that default
> copyright laws apply. This means that you retain all rights to your source
> code and that nobody else may reproduce, distribute, or create derivative
> works from your work. This might not be what you intend.
>
> Even in the absence of a license file, you may grant some rights in cases
> where you publish your source code to a site that requires accepting terms
> of service. For example, if you publish your source code in a public
> repository on GitHub, you have accepted the [Terms of Service](https://help.github.com/articles/github-terms-of-service)
> which do allow other GitHub users some rights. Specifically, you allow others
> to view and fork your repository.

For more info on how to choose a license for an open source project, please
refer to http://choosealicense.com
