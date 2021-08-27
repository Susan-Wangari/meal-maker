  const menu = {
      _courses: {
          appetizers: [],
          mains: [],
          desserts: []
      },
      get appetizers() {

      },
      set appetizers (appetizers) {

      },

      get mains() {

      },
      set mains (mains) {

      },

      get desserts() {

      },
      set desserts(desserts) {

      },

      get courses () {
          return {
              appetizers:this.appetizers, 
              mains: this.mains,
              desserts: this.desserts,
            }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice 
        },
        this._courses[courseName].push(dish);
      },
      getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex]; 
      },
      generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const  main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');

        const totalPrice = appetizer.price + this.main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
      }
};  

//appetizers course
menu.addDishToCourse('appetizers', 'flame-grilled chicken wings', 400);
menu.addDishToCourse('appetizers', 'chips masala', 200);
menu.addDishToCourse('appetizers', 'wet fish fry', 400);

//mains course
menu.addDishToCourse('mains', 'chicken biryani', 600);
menu.addDishToCourse('mains', 'pilau', 500);
menu.addDishToCourse('mains', 'rice beef', 300);

//desserts course
menu.addDishToCourse('desserts', 'ice cream', 200);
menu.addDishToCourse('desserts', 'chocolate', 250);
menu.addDishToCourse('desserts', 'milk shake', 100);

const meal = menu.generateRandomMeal();
console.log(meal);

