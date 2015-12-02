// see http://eslint.org/docs/rules/#ecmascript-6

module.exports = {
  'env': {
    'es6': true
  },
  'rules': {
    // Require parens in arrow function arguments
    'arrow-parens': [1, 'always'],
    // Require space before/after arrow function's arrow
    'arrow-spacing': [1, {before: true, after: true}],
    // Verify super() callings in constructors (off by default)
    'constructor-super': 2,
    // Enforce the spacing around the * in generator functions (off by default)
    'generator-star-spacing': [1, 'after'],
    // Disallow modifying variables of class declarations
    'no-class-assign': 1,
    // Disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // Disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // Disallow to use this/super before super() calling in constructors. (off by default)
    'no-this-before-super': 2,
    // Require let or const instead of var (off by default)
    'no-var': 2,
    // Require method and property shorthand syntax for object literals (off by default)
    'object-shorthand': [1, 'always'],
    // Suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // Suggest using of const declaration for variables that are never modified after declared (off by default)
    'prefer-const': 2,
    // Suggest using the spread operator instead of .apply()
    'prefer-spread': 2,
    // Suggest using Reflect methods where applicable
    'prefer-reflect': 0,
    // Suggest using template literals instead of strings concatenation
    'prefer-template': 1,
    // Disallow generator functions that do not have yield
    'require-yield': 2,
  }
};
