import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'Spicy Grilled Cheese Sandwich',
        title: 'Spicy Grilled Cheese Sandwich',
        description: 'Grilled cheese with onions, tomatoes and jalapenos-- tastier than the original!',
        ingredients: [
          '2 tablespoons butter or margarine',
          '4 slices white bread',
          '2 slices American cheese',
          '1 roma (plum) tomato, thinly sliced',
          '1/4 small onion, chopped',
          '1 jalapeno pepper, chopped'
        ],
        method: [
          'Heat a large skillet over low heat. Spread butter or margarine onto one side of two slices of bread. Place both pieces buttered side down in the skillet. Lay a slice of cheese on each one, and top with slices of tomato, onion and jalapeno. Butter one side of the remaining slices of bread, and place on top buttered side up. When the bottom of the sandwiches are toasted, flip and fry until brown on the other side.'
        ]
      },
      {
        slug: 'Grilled Chicken Salad Sandwich',
        title: 'Grilled Chicken Salad Sandwich',
        description: 'This is a great way to use leftover grilled chicken breasts from dinner the night before.',
        ingredients: [
          '1 cup mayonnaise',
          '1/8 teaspoon ground black pepper',
          '1/8 teaspoon garlic powder',
          '1/8 teaspoon celery salt',
          '4 cups chopped leftover grilled chicken',
          '2 celery stalks, sliced',
          '1/2 cup sweetened dried cranberries',
          '2/3 cup salted cashews',
          '8 slices bread, toasted',
          '4 tablespoons mayonnaise',
          '4 large red leaf lettuce leaves',
          '1 ripe tomato, sliced'
        ],
        method: [
          'Whisk together 1 cup of mayonnaise, pepper, garlic powder, and celery salt until combined. Combine the chicken, celery, cranberries, and cashews in a large bowl. Pour the mayonnaise mixture over the chicken mixture and stir until evenly combined.',
          'Spread 1/2 tablespoon of mayonnaise on each slice of toasted bread. Divide the chicken salad between four of the slices of toast; top each with a lettuce leaf and a slice of tomato. Complete each sandwich with the remaining toast slices.'
        ]
      }
    ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  }
})
