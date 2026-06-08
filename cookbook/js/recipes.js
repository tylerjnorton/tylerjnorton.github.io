const RECIPES = [
  {
    title: "Mom's Chicken Soup",
    emoji: "🍲",
    desc: "A from-scratch chicken soup with carrots and egg noodles — Nan's touch of tomato sauce for a little zing.",
    tags: ["dinner", "lunch", "savory", "soup"],
    person: "Jeanette",
    prep: "15 min", cook: "1 hr", serves: "6",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "3 or 4 chicken breasts",
      "1 small onion diced",
      "2 T. minced garlic",
      "4 or 5 carrots = peeled and cut into bite size pieces",
      "1 cup of egg noodles or rice",
      "4 cans of chicken broth",
      "Salt",
      "Pepper to taste (about 1 T)",
      "(about 2 T) Parsley as a garnish"
    ],
    steps: [
      "Put chicken with onion, garlic, salt and pepper. Add water to cover. Boil until chicken is done, about 20 minutes.",
      "Let cool. Remove chicken from water and dice or pull apart into small bite size pieces. Add back into water.",
      "Add carrots and cook ~ (1/2 hour) until carrots are soft.",
      "Add egg noodles or rice and cook until soft.",
      "Add chicken broth and parsley. Salt and pepper to taste.",
      "For a little zing add a little bit of tomato sauce. (Nan's touch)"
    ],
    notes: "Enjoy! — Jeanette"
  },
  {
    title: "Baked Macaroni and Cheese",
    emoji: "🧀",
    desc: "A classic baked mac and cheese with Velveeta and assorted cheese ends, golden and bubbling.",
    tags: ["dinner", "savory", "vegetarian", "pasta"],
    person: "Nan",
    prep: "15 min", cook: "30 min", serves: "10",
    guesses: ["prep", "cook"],
    ingredients: [
      "1 lb. pasta (Rigatoni or Ziti)",
      "1/2 lb. Velveeta Cheese",
      "1/2 lb. assorted cheese ends",
      "2 T. butter",
      "2 T. flour",
      "1 c. milk"
    ],
    steps: [
      "While the pasta is cooking. Melt butter in large saucepan. Add flour a little at a time stirring constantly.",
      "Add milk and stir until smooth.",
      "Cut all the cheese into small pieces and slowly add to milk mixture until completely melted. Stir to keep the cheese from sticking and scorching on the bottom of the pan.",
      "Drain the pasta and pour into a buttered 13 X 9 baking pan.",
      "Pour cheese over pasta and mix in until pasta is completely coated.",
      "Bake @ 350 until golden brown on top. Cheese should be bubbling."
    ],
    notes: "Cool slightly and serve. Serves 10. — Jeanette"
  },
  {
    title: "Mom's Beef Stew",
    emoji: "🥩",
    desc: "A hearty beef stew with carrots, potatoes, and a rich thickened gravy. Serve with hot rolls or bread.",
    tags: ["dinner", "savory", "soup"],
    person: "Jeanette",
    prep: "20 min", cook: "1 hr 10 min", serves: "8",
    guesses: ["prep"],
    ingredients: [
      "2 PKGS. Adolph's or McCormack's Beef Stew Seasoning",
      "2 lbs. lean beef round cut in cubes (beef round for beef stew)",
      "6 carrots peeled and cut into 1/4 inch rounds",
      "4 to 6 potatoes peeled and cut into bite sized cubes",
      "1 small onion – peeled and quartered",
      "3 cloves of garlic – minced or 2 tsp of minced garlic from a jar",
      "Lots of ground black pepper – about 10 to 12 turns on the pepper mill",
      "1 tsp. of salt",
      "1 tsp of gravy master",
      "2 Tablespoons flour",
      "1 cup water"
    ],
    steps: [
      "Empty the seasoning packets into a large sauce pan (dutch oven).",
      "Cut beef into bite size pieces. Add to pan and stir to coat meat with seasoning.",
      "Add vegetables and stir to coat. Cover with water and bring to a boil for about 30 minutes.",
      "Turn down to medium low and cover an additional 1/2 hour.",
      "Add gravy master and stir.",
      "Combine the flour with 1 cup of water and mix until smooth. Add to stew to thicken. Simmer about 10 minutes.",
      "Add more salt and pepper to taste."
    ],
    notes: "Makes about 8 servings. Serve with hot rolls or bread. — Jeanette"
  },
  {
    title: "American Chop Suey",
    emoji: "🍝",
    desc: "Ground beef, pasta shells, and tomato soup all in one pot — even better on day two!",
    tags: ["dinner", "savory", "pasta"],
    person: "Jeanette",
    prep: "10 min", cook: "30 min", serves: "8",
    guesses: ["prep", "cook"],
    ingredients: [
      "1 to 1 1/2 lbs ground beef",
      "2 tsp. minced garlic",
      "1 small onion diced",
      "Garlic powder",
      "Palm full of Italian seasoning",
      "1 can diced tomatoes",
      "2 cans Campbell's Tomato Soup",
      "1 lb of medium pasta shells or elbows",
      "Salt (couple of pinches)",
      "Pepper (7 or 8 twist of the mill)"
    ],
    steps: [
      "Brown the meat in large skillet with garlic, onion and seasonings. Drain off the grease.",
      "Add the canned tomatoes, and soup (without water), salt and pepper. Cover and simmer for 20 minutes.",
      "Cook pasta and drain.",
      "Pour meat mixture over pasta and stir in."
    ],
    notes: "Makes enough for about 6 to 8. Serve with warm garlic bread or rolls. Even better on day Two!!!!!!!! YUMMY! — Jeanette"
  },
  {
    title: "Pot Roast Dinner",
    emoji: "🍖",
    desc: "A seared bottom round roast slow-cooked tender, with a from-scratch pan gravy. A huge family favorite!",
    tags: ["dinner", "savory"],
    person: "Jeanette",
    prep: "10 min", cook: "1 hr 30 min", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "5 or 6 lb Bottom Round Roast.",
      "Salt",
      "Pepper",
      "Garlic Salt",
      "Vegetable Oil"
    ],
    steps: [
      "Cover the bottom of a dutch oven with vegetable oil. Generously sprinkle all surfaces of the meat with salt, pepper and garlic salt.",
      "On high heat, sear all sides of the roast until dark.",
      "Place the fat side of the meat down and reduce heat to medium. Cover the meat with water (to within an inch of the top of the roast.) and cook covered for about 1 1/2 hours.",
      "To Make the Gravy. Remove the roast, turn up heat to medium high. In a separate container, mix 2 T. flour with water until smooth.",
      "Slowly add to the pan, stirring to prevent lumps. Add more salt, pepper and garlic salt to intensify the favor to suit your taste. Bring to a slow boil."
    ],
    notes: "Serve with mashed potatoes, peas, squash and cole slaw. Huge family favorite! — Jeanette"
  },
  {
    title: "New England Boiled Dinner",
    emoji: "🥩",
    desc: "Corned beef brisket boiled with turnip, carrots, cabbage and potatoes — the Norton Clan's #1 Sunday dinner.",
    tags: ["dinner", "savory"],
    person: "Nan",
    prep: "20 min", cook: "2 hr", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 flat end Grey Corned Beef Brisket",
      "5 lbs. potatoes peeled and to equal size",
      "2 lbs carrots – peeled (cut large ones in half lengthwise. Try keeping them nearly same size",
      "1 med head cabbage – quartered (outer leaves removed)",
      "1 sm. Purple turnip – peeled and sliced"
    ],
    steps: [
      "Boil corned beef in large stock pot. Add turnip slices.",
      "After 1 hour add carrots.",
      "Add cabbage 1/2 hour later.",
      "Add potatoes for the last 1/2 hour. Keep pot at slow boil always.",
      "When potatoes can be pierced with fork easily, dinner is ready.",
      "Serve hot. With butter, pepper and apple cider vinegar, (if desired)."
    ],
    notes: "#1 dinner for the Norton Clan. Reminds you of those great Sunday dinners at Nan's, and that huge pot! Please note: You can also use a smoked shoulder for this meal. I sometimes substitute a Butt End Ham too."
  },
  {
    title: "Chuck's Chicken Cutlet",
    emoji: "🍗",
    desc: "Thinly pounded breaded chicken cutlets, pan-fried golden. Serve with rice pilaf for Britt or in marinara for Tyler.",
    tags: ["dinner", "savory"],
    person: "Carlene",
    prep: "15 min", cook: "15 min", serves: "4",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "1-2 pounds boneless chicken breasts",
      "seasoned bread crumbs",
      "milk",
      "olive oil (NOT extra virgin)"
    ],
    steps: [
      "De-schmeg, slice thinly and pound chicken.",
      "Dip into milk, then breadcrumbs.",
      "Place into heated oil in skillet. Flip so that they brown lightly.",
      "Place on paper towel on plate to soak up excess oil.",
      "Serve with rice pilaf and salad for Britt.",
      "Serve in marinara sauce with pasta for Tyler."
    ],
    notes: "IT IS IMPORTANT TO NOTE THAT ALL RECIPES SUBMITTED ARE MADE IN HOOKSETT, NH. IF ONE SHOULD NEED TO EAT LUNCH; SUBS CAN BE ORDERED FROM THE GAS STATION DOWN THE STREET."
  },
  {
    title: "Cole Slaw",
    emoji: "🥗",
    desc: "Simple finely chopped cabbage slaw — keep tasting until it tastes like Nan's.",
    tags: ["lunch", "savory", "side", "vegetarian"],
    person: "Nan",
    prep: "10 min", cook: "0 min", serves: "6",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 medium head of hard green cabbage.",
      "Mayonnaise",
      "Garlic powder",
      "Salt and pepper."
    ],
    steps: [
      "Finely chop cabbage.",
      "Mix in a couple of big spoonfuls of mayonnaise. If not moist enough, add more mayonnaise a little at a time.",
      "Sprinkle salt, pepper and garlic powder. Mix."
    ],
    notes: "Keep tasting until it tastes like Nan's."
  },
  {
    title: "Butternut Squash",
    emoji: "🎃",
    desc: "Boiled butternut squash mashed with butter, brown sugar and a dash of cinnamon.",
    tags: ["side", "savory", "sweet", "vegetarian"],
    person: "Nan",
    prep: "10 min", cook: "20 min", serves: "4",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "1 large Butternut Squash",
      "Salt",
      "1 T. Brown sugar",
      "Dash of cinnamon",
      "2 T butter"
    ],
    steps: [
      "Slice 1 large butternut squash into 1 inch rounds, peel and cut into large chunks.",
      "Place in large saucepan. Add water to cover squash. Boil until soft.",
      "Drain liquid in a colander, making sure all liquid has drained off.",
      "Add butter, salt, cinnamon and brown sugar."
    ]
  },
  {
    title: "Mashed Potatoes",
    emoji: "🥔",
    desc: "Classic whipped mashed potatoes — smooth and fluffy with no lumps.",
    tags: ["side", "savory", "vegetarian"],
    person: "Nan",
    prep: "15 min", cook: "20 min", serves: "8",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "5 lbs. potatoes",
      "Milk",
      "Butter",
      "Salt",
      "Pepper",
      "Garlic powder (optional)"
    ],
    steps: [
      "Peel, and cut potatoes into same size pieces.",
      "Boil until fork can easily cut into potatoes. Drain.",
      "Add butter, milk salt and pepper.",
      "Mash or whip with electric beater until smooth and fluffy. (No Lumps)"
    ]
  },
  {
    title: "Chicken and Gravy",
    emoji: "🍗",
    desc: "Shredded chicken in a seasoned homemade gravy — a Nan favorite. Serve over mashed potatoes.",
    tags: ["dinner", "savory"],
    person: "Jeanette",
    prep: "10 min", cook: "1 hr", serves: "4",
    guesses: ["prep", "serves"],
    ingredients: [
      "3 to 4 boneless chicken breasts. (more depending on how many you are feeding)",
      "Salt",
      "Pepper",
      "Garlic salt.",
      "2 T. flour",
      "1 cup water"
    ],
    steps: [
      "In large saucepan, cover chicken with water, salt pepper and garlic salt. Be generous with the seasoning, especially the pepper and garlic salt.",
      "Bring to a boil and cook for about 1/2 hour.",
      "Cool entire pan. Remove chicken and shred into bite pieces. Set aside.",
      "To thicken the water mixture: Mix flour and water together until smooth. Add to the pan, and stir until smooth.",
      "Bring to a boil, then add chicken back into gravy. Lower heat and simmer another 1/2 hour.",
      "Take a taste test to assure the proper amount of pepper and garlic salt has been added.",
      "Serve with mashed potatoes, peas, etc."
    ],
    notes: "This is a Nan favorite! — Jeanette"
  },
  {
    title: "Spaghetti & Meatballs with Sausage",
    emoji: "🍝",
    desc: "A from-scratch Sunday sauce simmered for hours with homemade meatballs and Italian sausage. Feeds a whole family.",
    tags: ["dinner", "savory", "pasta"],
    person: "Nan",
    prep: "30 min", cook: "2 hr", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "— Sauce: —",
      "Olive oil",
      "1 small onion chopped finely",
      "2 T minced garlic",
      "1 T Italian seasoning",
      "1 tsp. oregano",
      "1 tsp thyme",
      "1 tsp rosemary",
      "1 tsp basil",
      "2 bay leaves",
      "Dash crushed red pepper",
      "1/2 cup grated parmesan cheese",
      "1 32 oz. can crushed tomatoes",
      "2 can tomato paste",
      "— Meatballs: —",
      "1 lb ground beef",
      "2 eggs - beaten",
      "1 small onion minced",
      "2 T minced garlic",
      "A palm full of Italian seasoning",
      "1 cup flavored bread crumbs",
      "1/2 cup parmesan cheese",
      "Dash of cinnamon",
      "Garlic Salt",
      "Salt & Pepper",
      "A dash of crushed red pepper",
      "1 pkg. Italian sausages"
    ],
    steps: [
      "Sauce: Coat bottom of large pot with oil. Saute onions, garlic and seasoning until onions are soft. Be careful not to burn.",
      "Slowly add the crushed tomatoes. Add the parmesan cheese and crushed red pepper. Cook for 10 minutes.",
      "Add the contents of both cans of tomato paste. Add 4 cans (tomato paste cans) of water and stir.",
      "Add sausages and stir to cover them with sauce. Simmer slowly for at least a couple of hours. Sauce should be simmering in a large pot while mixing meatballs.",
      "Meatballs: Mix all the meatball ingredients until all is incorporated evenly. Add a little milk if mixtures seems to dry.",
      "Roll a handful of the mixture into a ball. Add to a large pot of simmering sauce. Stir gently to completely cover the meatballs with sauce.",
      "Cook on low heat for a couple of hours, until all the flavors meld together.",
      "Just before turning off the sauce, boil your choice of pasta, drain when done. Serve together with Italian bread or garlic bread."
    ],
    notes: "Feeds a whole family. P.S. I never measure any of my spices, so taste test while cooking and add whatever you think you need"
  },
  {
    title: "Stuffing",
    emoji: "🍞",
    desc: "A bread-and-Stove-Top stuffing with mushrooms, onion and celery, baked moist under foil.",
    tags: ["dinner", "side", "savory"],
    person: "Stefanie",
    prep: "20 min", cook: "1 hr", serves: "8",
    guesses: ["prep", "serves"],
    ingredients: [
      "1 loaf white bread + you'll need 8 or 10 slices, 5 or 6 for smaller batch",
      "1 lg onion",
      "2 stalks celery, diced",
      "1/4 cup butter",
      "1 can mushroom pieces and liquid",
      "1 box Stove Top stuffing",
      "2 cups water, or chicken broth",
      "Chicken broth (to moisten)"
    ],
    steps: [
      "Cut bread, dry, cut in cubes.",
      "Dice onion and celery, cook in 1/4 cup butter.",
      "Slice 1 can mushroom pieces and liquid. Sprinkle all over top of cubed, dry bread.",
      "1 box Stove Top stuffing — use 2 cups water, or chicken broth and maybe 2 cups water. Then add to your dry mix.",
      "Start to add a little chicken broth at a time just to it's moist. You may be using a baking dish.",
      "Put mixture in pan, cover with foil. Heat 350 for an hour.",
      "Check halfway for moisture, watch so it doesn't get too brown on bottom."
    ]
  },
  {
    title: "Chocolate Chip Cookies",
    emoji: "🍪",
    desc: "A simple cream-and-fold chocolate chip cookie with a touch of cornstarch, baked at 410°.",
    tags: ["dessert", "sweet"],
    person: "Michelle",
    prep: "15 min", cook: "10 min", serves: "24 cookies",
    guesses: ["prep", "cook", "serves"],
    ingredients: [
      "3 c. All purpose flour",
      "3/4 t soda",
      "1 cup butter cold",
      "1 c brown sugar",
      "1 t vanilla",
      "1/2 c. gran sugar",
      "2 eggs",
      "1 t. cornstarch",
      "3/4 t salt",
      "2 c. chips"
    ],
    steps: [
      "Cream butter, brown sugar, sugar.",
      "Add eggs + vanilla.",
      "Add dry ingredients.",
      "Fold in chips.",
      "Bake at 410°."
    ]
  }
];
