export function model(manager) {
  const ex = [
    {
      prompt: "Exercises for abdominals",
      completion:
        "Abdominal exercises are important for strengthening the core and can include exercises like crunches, leg raises, planks, Russian twists, and bicycle crunches.",
    },
    {
      prompt: "Exercises for abductors",
      completion:
        "To work on abductors, which are the muscles responsible for moving the legs away from the midline, you can do exercises like side leg raises, lateral lunges, cable hip abductions, and clamshells.",
    },
    {
      prompt: "Exercises for adductors",
      completion:
        "For adductors, which are the muscles responsible for moving the legs towards the midline, you can try exercises like inner thigh squeezes, seated leg adductions, sumo squats, and side lunges.",
    },
    {
      prompt: "Exercises for biceps",
      completion:
        "Biceps are the muscles in the upper arm and can be targeted with exercises like bicep curls, hammer curls, chin-ups, preacher curls, and cable curls.",
    },
    {
      prompt: "Exercises for calves",
      completion:
        "Calves are the muscles in the lower leg and can be worked on with exercises like calf raises, standing calf raises, seated calf raises, and calf stretches.",
    },
    {
      prompt: "Exercises for chest",
      completion:
        "Chest exercises are important for developing the pectoral muscles and can include bench press, push-ups, chest flies, dumbbell pullovers, and chest press machine.",
    },
    {
      prompt: "Exercises for forearms",
      completion:
        "Forearm exercises are important for grip strength and can include wrist curls, reverse curls, hammer curls, farmer's walks, and forearm plank.",
    },
    {
      prompt: "Exercises for glutes",
      completion:
        "To target your glutes, which are the muscles in the buttocks, you can do exercises like squats, lunges, hip thrusts, glute bridges, and deadlifts.",
    },
    {
      prompt: "Exercises for hamstrings",
      completion:
        "Hamstring exercises are important for the back of the thighs and can include deadlifts, leg curls, glute ham raises, Romanian deadlifts, and stiff-legged deadlifts.",
    },
    {
      prompt: "Exercises for lats",
      completion:
        "To work on your lats, which are the muscles in the back, you can do exercises like pull-ups, lat pull-downs, rows, chin-ups, and straight-arm pull-downs.",
    },
    {
      prompt: "Exercises for lower back",
      completion:
        "Some exercises for lower back are important for strengthening the muscles in the lower back and can include deadlifts, hyperextensions, back extensions, seated rows, and supermans.",
    },
    {
      prompt: "Exercises for middle back",
      completion:
        "Middle back exercises are important for the muscles in the mid-back region and can include rows, pull-ups, lat pull-downs, T-bar rows, and seated cable rows.",
    },
    {
      prompt: "Exercises for neck",
      completion:
        "Exercises for the neck can help improve neck strength and flexibility and can include neck stretches, neck rotations, neck tilts, and neck nods.",
    },
    {
      prompt: "Exercises for quadriceps",
      completion:
        "Quadriceps exercises are important for the muscles in the front of the thighs and can include squats, lunges, leg press, leg extensions, and step-ups.",
    },

    {
      prompt: "Exercises for abdominals",
      completion:
        "Some exercises for abdominals are crunches, leg raises, planks, Russian twists, and bicycle crunches.",
    },
    {
      prompt: "Exercises for abductors",
      completion:
        "To work on abductors, you can do exercises like side leg raises, lateral lunges, cable hip abductions, and clamshells.",
    },
    {
      prompt: "Exercises for adductors",
      completion:
        "For adductors, you can try exercises like inner thigh squeezes, seated leg adductions, sumo squats, and side lunges.",
    },
    {
      prompt: "Exercises for biceps",
      completion:
        "Biceps can be targeted with exercises like bicep curls, hammer curls, chin-ups, preacher curls, and cable curls.",
    },
    {
      prompt: "Exercises for calves",
      completion:
        "To work on your calves, you can do exercises like calf raises, standing calf raises, seated calf raises, and calf stretches.",
    },
    {
      prompt: "Exercises for chest",
      completion:
        "Chest exercises include bench press, push-ups, chest flies, dumbbell pullovers, and chest press machine.",
    },
    {
      prompt: "Exercises for forearms",
      completion:
        "Forearm exercises include wrist curls, reverse curls, hammer curls, farmer's walks, and forearm plank.",
    },
    {
      prompt: "Exercises for glutes",
      completion:
        "To target your glutes, you can do exercises like squats, lunges, hip thrusts, glute bridges, and deadlifts.",
    },
    {
      prompt: "Exercises for hamstrings",
      completion:
        "Hamstring exercises include deadlifts, leg curls, glute ham raises, Romanian deadlifts, and stiff-legged deadlifts.",
    },
    {
      prompt: "Exercises for lats",
      completion:
        "To work on your lats, you can do exercises like pull-ups, lat pull-downs, rows, chin-ups, and straight-arm pull-downs.",
    },
    {
      prompt: "Exercises for lower back",
      completion:
        "Some exercises for lower back are deadlifts, hyperextensions, back extensions, seated rows, and supermans.",
    },
    {
      prompt: "Exercises for middle back",
      completion:
        "Middle back exercises include rows, pull-ups, lat pull-downs, T-bar rows, and seated cable rows.",
    },
    {
      prompt: "Exercises for neck",
      completion:
        "Exercises for neck are neck stretches, neck rotations, neck tilts, and neck nods.",
    },
    {
      prompt: "Exercises for quadriceps",
      completion:
        "Quadriceps exercises include squats, lunges, leg press, leg extensions, and step-ups.",
    },
    {
      prompt: "Exercises for traps",
      completion:
        "To target your traps, you can do exercises like shrugs, upright rows, farmer's walks, and face pulls.",
    },
    {
      prompt: "Exercises for triceps",
      completion:
        "Triceps can be worked on with exercises like tricep dips, tricep push-downs, skull crushers, close-grip bench press, and dips.",
    },
  ];
  const health = [
    {
      prompt: "Healthy breakfast options",
      completion:
        "Some healthy breakfast options are oatmeal, whole grain toast, yogurt with fruit, smoothie, and scrambled eggs with vegetables.",
    },
    {
      prompt: "Incorporating vegetables in diet",
      completion:
        "You can incorporate more vegetables in your diet by adding them to salads, including them in smoothies, preparing vegetable stir-fry, snacking on raw veggies, or adding them to pasta dishes.",
    },
    {
      prompt: "Foods to avoid for balanced diet",
      completion:
        "It's  to avoid sugary drinks, processed foods, refined grains, trans fats, and excessive sodium for a balanced diet.",
    },
    {
      prompt: "Making a nutritious smoothie",
      completion:
        "To make a nutritious smoothie, you can use milk or yogurt as a base, add fruits like banana or berries, include vegetables like spinach or kale, add protein powder or nut butter, and sprinkle in some chia or flax seeds.",
    },
    {
      prompt: "Low-calorie snack ideas",
      completion:
        "If you're looking for low-calorie snack ideas, you can try air-popped popcorn, rice cakes, vegetable sticks with hummus, fruit salad, or yogurt with berries.",
    },
    {
      prompt: "Benefits of drinking water",
      completion:
        "Drinking water has many benefits, including hydrating the body, aiding digestion, helping with weight management, promoting healthy skin, and supporting overall health.",
    },
    {
      prompt: "Healthy protein sources",
      completion:
        "Some healthy protein sources include lean meats like chicken or fish, beans and legumes, nuts and seeds, tofu or tempeh, and Greek yogurt or cottage cheese.",
    },
    {
      prompt: "Healthy fats for the body",
      completion:
        "Including healthy fats in your diet can be beneficial. Examples of healthy fats are avocado, nuts and seeds, olive oil, fatty fish like salmon or trout, and chia seeds or flax seeds.",
    },
    {
      prompt: "Importance of portion control",
      completion:
        "Practicing portion control is important as it helps prevent overeating, maintains a healthy weight, promotes a balanced diet, prevents digestive discomfort, and supports overall health.",
    },
    {
      prompt: "Benefits of eating fruits and vegetables",
      completion:
        "Eating fruits and vegetables is beneficial as they are rich in vitamins, minerals, and antioxidants, high in fiber, help with weight management, support heart health, and boost the immune system.",
    },
    {
      prompt: "a balanced diet",
      completion:
        "A balanced diet is a diet that includes a variety of foods from different food groups in the right proportions, providing all the necessary nutrients for optimal health and well-being.",
    },
    {
      prompt: "importance of balanced diet",
      completion:
        "A balanced diet is important because it ensures that the body gets the right amount of nutrients it needs to function properly, supports overall health, helps maintain a healthy weight, and reduces the risk of chronic diseases.",
    },
    {
      prompt: "key components of a balanced diet",
      completion:
        "A balanced diet typically includes a variety of foods from all the major food groups, such as fruits, vegetables, whole grains, lean proteins, dairy or dairy alternatives, and healthy fats in the right proportions.",
    },
    {
      prompt: "examples of healthy carbohydrates",
      completion:
        "Healthy carbohydrates for a balanced diet include whole grains, such as brown rice, quinoa, whole wheat bread, and oatmeal, as well as fruits, vegetables, and legumes.",
    },
    {
      prompt: "of lean proteins for a balanced",
      completion:
        "Lean proteins for a balanced diet include poultry, fish, lean cuts of meat, eggs, beans, lentils, tofu, tempeh, and Greek yogurt.",
    },
    {
      prompt: "examples of healthy fats",
      completion:
        "Healthy fats for a balanced diet include nuts, seeds, avocados, olive oil, flaxseeds, chia seeds, fatty fish like salmon, and natural peanut or almond butter.",
    },
    {
      prompt: "examples of fruits and vegetables for a balanced diet",
      completion:
        "Fruits and vegetables for a balanced diet include a wide variety of options such as leafy greens, berries, citrus fruits, cruciferous vegetables, sweet potatoes, carrots, bell peppers, and tomatoes.",
    },
    {
      prompt: "How much water should be consumed as part of a balanced diet",
      completion:
        "It is recommended to drink at least 8 cups (64 ounces) of water per day as part of a balanced diet to stay hydrated and support overall health.",
    },
    {
      prompt: " some tips for maintaining a balanced diet",
      completion:
        "Some tips for maintaining a balanced diet include eating a variety of foods, watching portion sizes, limiting added sugars and saturated fats, incorporating fruits and vegetables, and staying hydrated with water.",
    },
    {
      prompt: " common misconceptions about a balanced diet",
      completion:
        "Some common misconceptions about a balanced diet include that it requires eliminating certain food groups, that it's only for weight loss, or that it's too expensive. In reality, a balanced diet can be flexible, enjoyable, and affordable.",
    },
  ];
  const equipments = [
    {
      prompt: "Tell me about treadmills.",
      completion:
        "Treadmills are popular gym equipment used for cardiovascular exercise. They allow users to walk, jog, or run indoors on a moving belt, providing a good workout for the legs and cardiovascular system.",
    },
    {
      prompt: "stationary bike",
      completion:
        "A stationary bike, also known as an exercise bike, is a versatile gym equipment that provides a low-impact cardiovascular workout while also strengthening the lower body muscles, including the quads, hamstrings, and calves.",
    },
    {
      prompt: "benefits of using an elliptical machine",
      completion:
        "Elliptical machines, also known as cross-trainers, offer a low-impact, full-body workout. They can help improve cardiovascular health, tone muscles in the arms, legs, and core, and provide an effective calorie-burning workout.",
    },
    {
      prompt: "exercises can you do with dumbbells",
      completion:
        "Dumbbells are versatile gym equipment that can be used for a wide range of exercises, including bicep curls, tricep extensions, shoulder presses, chest presses, rows, squats, lunges, and more. They are great for strengthening and toning various muscle groups.",
    },
    {
      prompt: "weight bench used for",
      completion:
        "A weight bench is a versatile piece of gym equipment that is used for a variety of exercises, including bench presses, dumbbell flyes, shoulder presses, and more. It provides stability and support while performing weightlifting exercises to target different muscle groups.",
    },
    {
      prompt: "Tell me about resistance bands.",
      completion:
        "Resistance bands are stretchy bands that provide resistance when pulled, making them ideal for strength training exercises. They are portable, versatile, and can be used to target various muscle groups, such as arms, legs, shoulders, and glutes.",
    },
    {
      prompt: "exercises you can do with an exercise ball",
      completion:
        "Exercise balls, also known as stability balls or Swiss balls, can be used for a wide range of exercises, including core exercises like crunches, planks, and bridges, as well as exercises for improving balance, flexibility, and posture. They can also be used as a replacement for a weight bench or chair for added instability and challenge during workouts.",
    },
  ];

  const disabilityData = [
    {
      prompt: "visual impairment",
      completion:
        "Living with visual impairment can present unique challenges, such as navigating the environment using alternative senses, accessing visual information, and adapting to daily tasks without full sight. However, many individuals with visual impairment lead fulfilling lives and utilize various tools and techniques to overcome these challenges.",
    },
    {
      prompt: "hearing loss",
      completion:
        "Hearing loss can impact communication, social interactions, and daily activities that heavily rely on sound. Individuals with hearing loss may use hearing aids, assistive listening devices, or sign language to communicate and navigate their environment.",
    },
    {
      prompt: "mobility limitations",
      completion:
        "Mobility limitations can affect an individual's physical abilities, such as walking, standing, or using limbs. These limitations may require the use of mobility aids like wheelchairs, crutches, or walkers, as well as adaptations in the living environment to improve accessibility and independence.",
    },
    {
      prompt: "challenges individuals with cognitive disabilities may face",
      completion:
        "Cognitive disabilities can affect an individual's thinking, learning, memory, or problem-solving abilities. These challenges may require tailored support, accommodations, or strategies to enhance independence, communication, and daily functioning.",
    },
    {
      prompt: "impact of speech or language disabilities",
      completion:
        "Speech or language disabilities can affect an individual's ability to articulate, understand, or express themselves verbally. These disabilities may require alternative forms of communication, such as sign language, augmentative and alternative communication (AAC) devices, or speech therapy for improved communication skills.",
    },
    {
      prompt: "neurodevelopmental disability",
      completion:
        "Neurodevelopmental disabilities, such as autism spectrum disorder, attention deficit hyperactivity disorder (ADHD), or intellectual disability, can impact an individual's cognitive, social, and behavioral functioning. These disabilities may require tailored interventions, support, and accommodations to enhance quality of life and participation in various activities.",
    },
    // Add more prompts and completions as needed
  ];
  const exercisesData = [
    {
      prompt: "Exercise: Push-ups",
      completion:
        "Description: A classic upper body exercise that targets the chest, triceps, and shoulders.\nReps: 3 sets of 10 reps\nEquipment: None (bodyweight exercise)\nLevel: Beginner\nImage: https://example.com/push-ups.jpg",
    },
    {
      prompt: "Exercise: Squats",
      completion:
        "Description: A compound lower body exercise that targets the quadriceps, hamstrings, and glutes.\nReps: 3 sets of 12 reps\nEquipment: None (bodyweight exercise)\nLevel: Intermediate\nImage: https://example.com/squats.jpg",
    },
    {
      prompt: "Exercise: Plank",
      completion:
        "Description: A core strengthening exercise that targets the abdominal muscles and lower back.\nDuration: 30 seconds\nEquipment: None (bodyweight exercise)\nLevel: Beginner\nImage: https://example.com/plank.jpg",
    },
    {
      prompt: "Exercise: Burpees",
      completion:
        "Description: A full-body exercise that combines a squat, push-up, and jump, providing a cardio and strength workout.\nReps: 3 sets of 8 reps\nEquipment: None (bodyweight exercise)\nLevel: Advanced\nImage: https://example.com/burpees.jpg",
    },
    {
      prompt: "Exercise: Dumbbell Rows",
      completion:
        "Description: A unilateral back exercise that targets the lats and upper back using dumbbells.\nReps: 3 sets of 10 reps (each arm)\nEquipment: Dumbbells\nLevel: Intermediate\nImage: https://example.com/dumbbell-rows.jpg",
    },
  ];

  //movie data
  const moviesData = [
    {
      prompt: "Tell me about the latest action movie releases.",
      completion:
        "Some of the latest action movies are 'The Matrix Resurrections', 'No Time to Die', and 'Black Widow'.",
    },
    {
      prompt: "popular comedy movies that recently came out",
      completion:
        "Some popular comedy movies that recently came out are 'Free Guy', 'The French Dispatch', and 'Don't Look Up'.",
    },
    {
      prompt: "I'm in the mood for a horror movie",
      completion:
        "Certainly! Some recent horror movies you might enjoy are 'A Quiet Place Part II', 'Malignant', and 'Halloween Kills'.",
    },
    {
      prompt: "drama movies that are getting good reviews.",
      completion:
        "Some of the latest drama movies that are receiving positive reviews are 'The Power of the Dog', 'Belfast', and 'King Richard'.",
    },
    {
      prompt: "popular animated movies",
      completion:
        "Some popular animated movies that have been released recently are 'Encanto', 'Sing 2', and 'The Addams Family 2'.",
    },
    {
      prompt:
        "I'm in the mood for a romantic movie. Can you recommend any recent ones",
      completion:
        "Sure! Some recent romantic movies you might enjoy are 'Last Night in Soho', 'The French Dispatch', and 'Annette'.",
    },
    {
      prompt: "healthy breakfast options",
      completion:
        " oatmeal\nwhole grain toast\nyogurt with fruit\nsmoothie,scrambled eggs with vegetables",
    },
    {
      prompt: "incorporate more vegetables into my diet",
      completion:
        " add vegetables to salads,include them in smoothies,prepare vegetable stir-fry,snack on raw veggies,add vegetables to pasta dishes",
    },
    {
      prompt: "should I avoid to maintain a balanced diet",
      completion:
        " sugary drinks,processed foods,refined grains,trans fats,excessive sodium",
    },
    {
      prompt: "make a nutritious smoothie",
      completion:
        " use a base of milk or yogurt,add fruits like banana or berries,include vegetables like spinach or kale,add protein powder or nut butter,add chia or flax seeds",
    },
    {
      prompt: "low-calorie snack ideas",
      completion:
        " air-popped popcorn,rice cakes,vegetable sticks with hummus,fruit salad,yogurt with berries",
    },
  ];
  //kenya

  const carData = [
    {
      prompt: "Tell me about the latest car models on the market.",
      completion:
        "Some of the latest car models on the market include the Tesla Model S Plaid, Ford Mustang Mach-E, Chevrolet Corvette Stingray, Porsche Taycan, and Toyota GR 86. These cars are known for their advanced technology, performance, and design features.",
    },
    {
      prompt: "luxury car brands",
      completion:
        "Some popular luxury car brands include Mercedes-Benz, BMW, Audi, Lexus, and Jaguar. These brands are known for producing high-end vehicles with luxurious features, advanced technology, and premium performance.",
    },
    {
      prompt: "Tell me about electric cars and their benefits.",
      completion:
        "Electric cars are vehicles powered by electric motors and rechargeable batteries, producing zero tailpipe emissions. They are known for their environmental benefits, including reduced greenhouse gas emissions, lower operating costs, and potential savings on fuel. Some popular electric car models include the Tesla Model 3, Nissan Leaf, Chevrolet Bolt EV, and Hyundai Kona Electric.",
    },
    {
      prompt: "sports cars",
      completion:
        "Some popular sports cars include the Chevrolet Corvette, Ford Mustang, Porsche 911, Audi R8, and Nissan GT-R. These cars are known for their high performance, speed, and sleek designs, making them popular choices among car enthusiasts and performance-oriented drivers.",
    },
    {
      prompt: "Tell me about classic cars and their appeal.",
      completion:
        "Classic cars are vintage or antique vehicles that are typically older than 20-25 years and are often considered collectible or valuable. They are known for their unique designs, historical significance, and nostalgic appeal. Some popular classic car models include the Ford Mustang, Chevrolet Camaro, Porsche 911, Volkswagen Beetle, and Chevrolet Corvette.",
    },
  ];
  //chatbots

  const chatbotData = [
    {
      prompt: "chatbots",
      completion:
        "Chatbots are computer programs or AI systems designed to simulate human-like conversations. They can interact with users through text or voice-based interfaces and are used for various purposes, such as customer service, virtual assistants, and messaging applications.",
    },
    {
      prompt: "chatbots work",
      completion:
        "Chatbots work using natural language processing (NLP) and machine learning algorithms to understand and respond to user input. They can be rule-based, following predefined scripts, or AI-powered, using machine learning models to generate responses based on context and data.",
    },
    {
      prompt: "benefits of using chatbots",
      completion:
        "Some benefits of using chatbots include 24/7 availability, quick response times, scalability, cost-effectiveness, and automation of repetitive tasks. Chatbots can also improve customer engagement, provide personalized experiences, and streamline communication in various industries, such as e-commerce, customer support, and healthcare.",
    },
  ];

  const famousDisabledPeopleData = [
    {
      prompt: "Tell me about famous people who are disabled.",
      completion:
        "There are many famous individuals who have achieved success in their respective fields despite living with disabilities. Some examples include Stephen Hawking, a renowned physicist with motor neurone disease; Frida Kahlo, a famous Mexican artist who lived with physical disabilities due to a bus accident; Marlee Matlin, an acclaimed actress who is deaf; Stevie Wonder, a Grammy-winning musician who is blind; and Helen Keller, a prominent author, and political activist who was deaf-blind.",
    },
    {
      prompt: "Who are some notable figures in history who were disabled",
      completion:
        "There are several notable figures in history who were known to have disabilities. For instance, Franklin D. Roosevelt, the 32nd President of the United States, had polio and used a wheelchair; Ludwig van Beethoven, a renowned composer, was deaf; Vincent van Gogh, a famous Dutch artist, had mental health challenges; and Sir Winston Churchill, a prominent British statesman, had a speech impediment.",
    },
    {
      prompt:
        "How have famous disabled people overcome challenges to achieve success",
      completion:
        "Famous disabled people have often overcome challenges through determination, resilience, and talent. Many have had to adapt to their disabilities, find alternative ways of doing things, and persevere in the face of obstacles. They have used their unique perspectives, strengths, and talents to achieve success in their fields, break barriers, and inspire others.",
    },
    {
      prompt: "What contributions have famous disabled people made to society",
      completion:
        "Famous disabled people have made significant contributions to various fields and have left a lasting impact on society. They have excelled in areas such as science, arts, literature, music, politics, and advocacy. Their achievements have helped raise awareness about disability rights, promote inclusivity, and inspire others to overcome challenges and pursue their passions.",
    },
    {
      prompt: "How can famous disabled people serve as role models for others",
      completion:
        "Famous disabled people can serve as role models by demonstrating that disability does not have to be a barrier to success. They can inspire others by showcasing their achievements, resilience, and determination, and by challenging societal stereotypes and misconceptions about disabilities. They can also serve as advocates for disability rights, promote inclusivity, and create opportunities for individuals with disabilities.",
    },
  ];
  const talkData = [
    {
      prompt: "Talk about your favorite movie.",
      completion:
        "One of my favorite movies is 'The Shawshank Redemption'. It's a classic!",
    },
    {
      prompt: "Share something interesting you learned recently.",
      completion:
        "I recently learned about the benefits of practicing mindfulness. It's fascinating!",
    },
    {
      prompt: "Tell me about your hobbies and interests.",
      completion: "I enjoy traveling, photography, and reading. How about you?",
    },
    {
      prompt: "Talk about a memorable experience you had recently.",
      completion:
        "I had a memorable experience hiking to the top of a mountain and witnessing a stunning sunrise!",
    },
  ];
  const socialActivitiesData = [
    {
      prompt:
        "Discuss your favorite social media platform and why you like it.",
      completion:
        "I enjoy using Instagram because I love sharing and exploring photos of people, places, and things!",
    },
    {
      prompt: "Talk about a recent social event or gathering you attended.",
      completion:
        "I went to a friend's birthday party last weekend. It was a blast with good food, music, and fun games!",
    },
    {
      prompt:
        "Share your thoughts on volunteering and giving back to the community.",
      completion:
        "I believe in the importance of giving back to the community and have volunteered at local food banks and animal shelters.",
    },
    {
      prompt: "Discuss your favorite outdoor social activity.",
      completion:
        "I love going on picnics with friends or playing frisbee at the park. It's a great way to socialize and enjoy nature!",
    },
    {
      prompt:
        "Talk about your favorite social activity to do during the weekends.",
      completion:
        "I enjoy going out for brunch with friends, catching a movie, or just relaxing and having good conversations.",
    },
  ];

  const greetings = [
    {
      prompt: "Hi, how are you",
      completion: "I'm good, thanks! How about you",
    },
    {
      prompt: "Good morning!",
      completion: "Good morning to you too!",
    },
    {
      prompt: "Hey there!",
      completion: "Hey! How's it going",
    },
    {
      prompt: "Howdy!",
      completion: "Howdy! How are you doing",
    },
    {
      prompt: "Hello!",
      completion: "Hello! How can I help you today",
    },
    {
      prompt: "What's happening",
      completion: "Not much, just relaxing. How about you",
    },
    {
      prompt: "See you later!",
      completion: "See you later! Have a great day!",
    },
    {
      prompt: "What's up",
      completion: "Not much, just chilling. How about you",
    },
    {
      prompt: "Nice to meet you!",
      completion: "Nice to meet you too!",
    },
    {
      prompt: "Goodbye!",
      completion: "Bye bye, it was nice talking to you",
    },
    {
      prompt: "Hi, how's it going",
      completion: "Hi,I'm doing well, thanks for asking. How about you",
    },
    {
      prompt: "Good morning!",
      completion: "Good morning to you too!",
    },
    {
      prompt: "Hey there, what's up",
      completion: "Not much, just hanging out. How about you",
    },
    {
      prompt: "Nice to meet you!",
      completion: "Nice to meet you too!",
    },
    {
      prompt: "What's cracking",
      completion: "Not much, just chilling. How about you",
    },
    {
      prompt: "Greetings, how may I assist you today",
      completion: "You need help with a technical issue, can you assist you",
    },
    {
      prompt: "Yo, what's good",
      completion: "Not much, just hanging out. How about you",
    },
  ];
  const trainingData = [
    //Healthcare
    ...health,
    ...socialActivitiesData,
    ...ex,
    ...equipments,
    ...disabilityData,
    ...exercisesData,
    ...moviesData,
    ...talkData,
    ...greetings,
    // ...nairobiData,
    ...carData,
    ...chatbotData,
    ...famousDisabledPeopleData,
  ];

  trainingData.forEach(({ prompt, completion }) => {
    manager.addDocument("en", `${completion} ${prompt}`, prompt);
    manager.addAnswer("en", prompt, `${completion}`);
  });
}
