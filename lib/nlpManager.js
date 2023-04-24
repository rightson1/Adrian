export function model(manager) {
  // Greetings

  const trainingData = [
    {
      prompt: "What are some healthy breakfast options",
      completion:
        " oatmeal\nwhole grain toast\nyogurt with fruit\nsmoothie,scrambled eggs with vegetables",
    },
    {
      prompt: "How can I incorporate more vegetables into my diet",
      completion:
        " add vegetables to salads,include them in smoothies,prepare vegetable stir-fry,snack on raw veggies,add vegetables to pasta dishes",
    },
    {
      prompt: "What foods should I avoid to maintain a balanced diet?",
      completion:
        " sugary drinks,processed foods,refined grains,trans fats,excessive sodium",
    },
    {
      prompt: "How can I make a nutritious smoothie",
      completion:
        " use a base of milk or yogurt,add fruits like banana or berries,include vegetables like spinach or kale,add protein powder or nut butter,add chia or flax seeds",
    },
    {
      prompt: "What are some low-calorie snack ideas",
      completion:
        " air-popped popcorn,rice cakes,vegetable sticks with hummus,fruit salad,yogurt with berries",
    },
    {
      prompt: "Hi",
      completion: "Hello!,how can I help you?",
    },
    {
      prompt: "How are you?",
      completion:
        "I'm doing well, thank you!,I'm great, how about you?,I'm feeling good today!,I'm doing fine, how about yourself?,I'm doing well, how about you?",
    },
    {
      prompt: "What's your name?",
      completion:
        "My name is ChatBot.,I'm ChatBot.,I'm an AI assistant called ChatBot.,You can call me ChatBot.,I'm a language model named ChatBot.",
    },
    {
      prompt: "What can you do?",
      completion:
        "I can help you with various tasks like answering questions, providing information, and engaging in conversations.,I'm capable of handling tasks such as answering questions and providing information.,I'm here to assist you with tasks like answering questions and engaging in conversations.,I'm designed to be an AI assistant that can help you with different tasks.,I'm a language model programmed to assist you with tasks like answering questions and providing information.",
    },
    {
      prompt: "Tell me a joke",
      completion:
        "Why don't scientists trust atoms? Because they make up everything!,Why couldn't the bicycle find its way home? It lost its bearings!,Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears!,Why did the tomato turn red? Because it saw the salad dressing!,Why was the math book sad? Because it had too many problems!",
    },
    {
      prompt: "What are some types of cardiovascular exercises?",
      completion:
        "running,swimming,biking,dancing,jumping rope,treadmill workouts,elliptical workouts,aerobic classes,hiking,rowing",
    },
    {
      prompt: "Tell me about different types of strength training exercises.",
      completion:
        "weight lifting,bodyweight exercises,resistance band exercises,kettlebell exercises,barbell exercises,machines exercises,dumbbell exercises,functional training exercises,powerlifting exercises,plyometric exercises",
    },
    {
      prompt: "What are some examples of flexibility exercises?",
      completion:
        "stretching,yoga,Pilates,Tai Chi,dynamic stretching,static stretching,foam rolling,mobility exercises,balance exercises,warm-up and cool-down exercises",
    },
    {
      prompt: "What are some popular types of group fitness classes?",
      completion:
        "Zumba,Kickboxing,Spinning,Pilates,Yoga,Bootcamp,HIIT,Aerobics,Barre,CrossFit",
    },
    {
      prompt: "What are some types of outdoor exercises?",
      completion:
        "running,hiking,biking,dog walking,gardening,rock climbing,golfing,kayaking,beach volleyball,tennis",
    },
    {
      prompt: "Tell me about different types of mind-body exercises.",
      completion:
        "yoga,Pilates,Tai Chi,meditation,Qi Gong,breathing exercises,progressive muscle relaxation,mindfulness exercises,visualization,body scan",
    },
    {
      prompt: "What are some types of cardiovascular exercises?",
      completion:
        "running, swimming, biking, dancing, jumping rope, treadmill workouts, elliptical workouts, aerobic classes, hiking, rowing",
    },
    {
      prompt: "Tell me about different types of strength training exercises.",
      completion:
        "weight lifting, bodyweight exercises, resistance band exercises, kettlebell exercises, barbell exercises, machines exercises, dumbbell exercises, functional training exercises, powerlifting exercises, plyometric exercises",
    },
    {
      prompt: "What are some examples of flexibility exercises?",
      completion:
        "stretching, yoga, Pilates, Tai Chi, dynamic stretching, static stretching, foam rolling, mobility exercises, balance exercises, warm-up and cool-down exercises",
    },
    {
      prompt: "What are some popular types of group fitness classes?",
      completion:
        "Zumba, Kickboxing, Spinning, Pilates, Yoga, Bootcamp, HIIT, Aerobics, Barre, CrossFit",
    },
    {
      prompt: "What are some types of outdoor exercises?",
      completion:
        "running, hiking, biking, dog walking, gardening, rock climbing, golfing, kayaking, beach volleyball, tennis",
    },
    {
      prompt: "Tell me about different types of mind-body exercises.",
      completion:
        "yoga, Pilates, Tai Chi, meditation, Qi Gong, breathing exercises, progressive muscle relaxation, mindfulness exercises, visualization, body scan",
    },
    {
      prompt: "What are some common misconceptions about disabilities?",
      completion:
        "People with disabilities are not helpless or incapable.,Disabilities are not always visible.,People with disabilities are not a burden to society.,People with disabilities have diverse abilities and talents.",
    },
    {
      prompt:
        "How can we make our environment more inclusive for people with disabilities?",
      completion:
        "Ensure physical accessibility with ramps, elevators, wider doorways.,Provide alternative formats for information, such as Braille, large print, or audio.,Ensure digital accessibility in websites and technology.,Provide inclusive and diverse representation in media and advertising.,Promote inclusive language and avoid ableist language.",
    },
    {
      prompt: "What are some challenges faced by people with disabilities",
      completion:
        "Accessibility barriers in the physical environment.,Lack of equal opportunities in education and employment.,Social stigma, discrimination, and prejudice.,Limited access to healthcare and support services.,Challenges with transportation and mobility.",
    },
    {
      prompt: "How can we support and empower people with disabilities?",
      completion:
        "Advocate for policies and laws that protect the rights of people with disabilities.,Promote inclusive education and employment opportunities.,Create awareness and promote positive attitudes towards people with disabilities.,Offer support and resources for independent living.,Ensure equal access to healthcare and social services.",
    },
    {
      prompt:
        "What are some assistive technologies used by people with disabilities?",
      completion:
        "Screen readers for visually impaired individuals.,Hearing aids for people with hearing loss.,Wheelchairs, walkers, and mobility scooters for individuals with mobility impairments.,Augmentative and alternative communication (AAC) devices for individuals with speech and language disabilities.,Prosthetics and orthotics for individuals with limb differences.",
    },
    {
      prompt:
        "What language should I use when talking to a person with a disability?",
      completion:
        "Use person-first language (e.g., person with a disability) instead of defining a person by their disability (e.g., disabled person).,Avoid using derogatory terms or slurs.,Ask the person if they have a preferred way of communicating or if they need any accommodations.,Respect the person's privacy and do not ask invasive or personal questions about their disability unless they choose to share.",
    },
    {
      prompt:
        "How can we promote inclusivity and diversity in relation to disabilities?",
      completion:
        "Highlight diverse stories and experiences of people with disabilities in media and representation.,Promote equal opportunities for employment and education for people with disabilities.,Include people with disabilities in decision-making processes and policies that affect them.,Raise awareness about different types of disabilities and advocate for inclusivity in all aspects of society.,Foster a culture of acceptance, respect, and empathy towards people with disabilities.",
    },
    {
      prompt: "What are some effective exercises for abdominal muscles?",
      completion:
        "Crunches,Planks,Leg raises,Russian twists,Bicycle crunches,Reverse crunches,Hanging leg raises,Ab rollouts",
    },
    {
      prompt: "What are some exercises to target the abductor muscles?",
      completion:
        "Side-lying leg raises,Clamshells,Fire hydrants,Standing leg abductions,Hip abductor machine exercises,Resistance band lateral walks,Pilates side-lying leg press",
    },
    {
      prompt: "What are some exercises to target the adductor muscles?",
      completion:
        "Inner thigh squeezes,Sumo squats,Cable adductor exercises,Seated leg adduction machine exercises,Pilates inner thigh lifts,Side lunges with resistance bands,Medial ball squeeze",
    },
    {
      prompt: "What are some exercises to target the biceps muscles?",
      completion:
        "Bicep curls,Hammer curls,Preacher curls,Concentration curls,Pull-ups or chin-ups,Barbell curls,Dumbbell curls,Cable curls",
    },
    {
      prompt: "What are some exercises to target the calves?",
      completion:
        "Calf raises,Seated calf raises,Donkey calf raises,Standing calf raises,Farmer's walks,Jump rope,Box jumps,Stair climbing",
    },
    {
      prompt: "What are some exercises to target the chest muscles?",
      completion:
        "Bench press,Push-ups,Chest flyes,Incline bench press,Decline bench press,Dips,Chest press machine,Cable crossovers",
    },
    {
      prompt: "What are some exercises to target the forearms?",
      completion:
        "Wrist curls,Reverse wrist curls,Farmer's walks,Grip squeezes,Plate pinches,Forearm curls with dumbbells,Hammer curls,Barbell wrist curls",
    },
    {
      prompt: "What are some exercises to target the glutes?",
      completion:
        "Squats,Deadlifts,Lunges,Hip thrusts,Bridges,Step-ups,Kickbacks,Clamshells",
    },
    {
      prompt: "What are some exercises to target the hamstrings?",
      completion:
        "Deadlifts,Leg curls,Romanian deadlifts,Glute bridges,Lunges,Hamstring curls,Good mornings,Swiss ball curls",
    },
    {
      prompt: "What are some exercises to target the lats?",
      completion:
        "Pull-ups,Lat pulldowns,Rows,Chin-ups,T-bar rows,Dumbbell rows,Seated cable rows,Pullover",
    },
    {
      prompt: "What are some exercises to target the lower back",
      completion:
        "Deadlifts,Good mornings,Supermans,Back extensions,Bird dogs,Reverse hyperextensions,Seated row,Rack pulls",
    },
    {
      prompt: "What are some exercises to target the middle back?",
      completion:
        "Rows,Pull-ups,Lat pulldowns,T-bar rows,Seated cable rows,Close grip pulldowns,Dumbbell rows,Chest supported rows",
    },
    {
      prompt: "What are some exercises to target the neck muscles?",
      completion:
        "Neck flexion,Neck extension,Neck lateral flexion,Neck rotation,Shrugs with dumbbells,Shrugs with barbell,Plate neck resistance,Neck harness exercises",
    },
    {
      prompt: "What are some exercises to target the quadriceps",
      completion:
        "Squats,Leg press,Lunges,Step-ups,Hack squats,Front squats,Leg extensions,Wall sits",
    },
    {
      prompt: "What are some exercises to target the traps?",
      completion:
        "Shrugs,Upright rows,Deadlifts,Farmer's walks,Barbell shrugs,Dumbbell shrugs,Power cleans,High pulls",
    },
    {
      prompt: "What are some exercises to target the triceps?",
      completion:
        "Tricep dips,Close grip bench press,Tricep pushdowns,Skull crushers,Overhead tricep extension,Tricep kickbacks,Dips,Dumbbell tricep extensions",
    },
    {
      prompt: "What are some tips for healthy eating?",
      completion:
        "Eat a balanced diet with a variety of food groups,Include plenty of fruits and vegetables,Choose whole grains over refined grains,Limit added sugars and saturated fats,Reduce sodium intake,Drink plenty of water,Practice portion control,Eat mindfully and avoid emotional eating,Cook meals at home using fresh ingredients,Limit processed and fast foods",
    },
    {
      prompt: "What are some examples of healthy breakfast options?",
      completion:
        "Oatmeal with berries and nuts,Greek yogurt with fruit and granola,Whole grain toast with avocado and eggs,Smoothie with spinach, banana, and almond milk,Cottage cheese with mixed fruit,Whole grain cereal with milk and sliced fruit,Quinoa porridge with berries and almonds,Whole grain waffles with peanut butter and banana",
    },
    {
      prompt: "What are some tips for making healthy choices when eating out?",
      completion:
        "Choose grilled or roasted meats instead of fried,Opt for whole grain options for bread, pasta, and rice,Select dishes with plenty of vegetables,Ask for dressings and sauces on the side,Limit sugary beverages and opt for water, unsweetened tea, or sparkling water,Share large portions or take leftovers home,Choose fruit or yogurt for dessert instead of high-sugar options,Avoid ordering appetizers, fried foods, and desserts as the main course",
    },
    {
      prompt: "What are some examples of healthy snacks?",
      completion:
        "Apple slices with almond butter,Greek yogurt with mixed berries,Baby carrots with hummus,Trail mix with nuts and dried fruits,Hard-boiled eggs,Edamame,Whole grain crackers with cheese,Fresh fruit salad,Mixed nuts,Homemade smoothie with vegetables and fruits",
    },
    {
      prompt: "What are some tips for grocery shopping for healthy foods?",
      completion:
        "Make a list before going to the store,Shop the perimeter of the store where fresh produce, meats, and dairy are located,Choose whole grains for bread, rice, and pasta,Select lean meats and poultry,Buy plenty of fresh fruits and vegetables,Avoid sugary beverages and snacks,Read food labels for added sugars, sodium, and saturated fats,Limit processed and packaged foods,Shop for seasonal and local produce when possible",
    },
    {
      prompt: "What are some examples of healthy dinner options?",
      completion:
        "Grilled chicken breast with roasted vegetables and quinoa,Baked salmon with steamed broccoli and brown rice,Vegetarian stir-fry with tofu, mixed vegetables, and brown rice,Grilled shrimp with roasted sweet potatoes and green beans,Turkey chili with beans, tomatoes, and vegetables,Veggie burger with whole grain bun, lettuce, tomato, and avocado,Roasted vegetables with chickpeas and couscous,Homemade vegetable and bean soup with whole grain bread",
    },
    {
      prompt: "What are some tips for portion control during meals?",
      completion:
        "Use smaller plates and bowls,Pay attention to hunger cues and stop eating when full\nAvoid eating straight from the package\nServe appropriate portion sizes for different food groups\nAvoid eating while distracted, such as watching TV or working\nShare a meal or take leftovers home from restaurants\nUse measuring cups or a food scale to portion out foods\nAvoid second helpings unless genuinely hungry\nPractice mindful eating and savor each bite",
    },
    {
      prompt: "What is a balanced diet?",
      completion:
        "A balanced diet is one that contains a variety of foods from all food groups, including fruits, vegetables, whole grains, lean proteins, and healthy fats in the right proportions.",
    },
    {
      prompt: "What are some examples of healthy fats?",
      completion:
        "Healthy fats include avocado, nuts and seeds, olive oil, and fatty fish like salmon.",
    },
    {
      prompt: "How can I eat more fruits and vegetables?",
      completion:
        "Try to include fruits and vegetables in every meal and snack. You can also try adding them to smoothies, salads, or soups.",
    },
    {
      prompt: "What are some healthy snack options?",
      completion:
        "Some healthy snack options include fruits, vegetables with hummus, nuts and seeds, or yogurt with berries.",
    },
    {
      prompt: "What are some examples of whole grains?",
      completion:
        "Whole grains include oats, quinoa, brown rice, whole wheat bread, and whole wheat pasta.",
    },
    {
      prompt: "How can I reduce my sugar intake?",
      completion:
        "Try to avoid sugary drinks and processed foods, and choose whole foods instead. You can also try using natural sweeteners like honey or maple syrup in moderation.",
    },
    {
      prompt: "What are some healthy protein sources",
      completion:
        "Healthy protein sources include lean meats like chicken or turkey, fish, beans and legumes, tofu, and Greek yogurt.",
    },
    {
      prompt: "How can I make a healthy meal plan",
      completion:
        "Start by choosing a variety of foods from each food group and planning your meals and snacks ahead of time. You can also try using an online meal planning tool or working with a registered dietitian for personalized guidance.",
    },
  ];

  // Train the NLP.js model with the sample dataset
  trainingData.forEach(({ prompt, completion }) => {
    manager.addDocument("en", completion, prompt);
    manager.addAnswer("en", prompt, completion);
  });

  //   // Train the NLP.js model with the sample dataset
  //   trainingData.forEach(({ prompt, completion }) => {
  //     manager.addDocument("en", prompt, completion);
  //   });
}
