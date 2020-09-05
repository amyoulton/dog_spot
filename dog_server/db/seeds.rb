DogTrait.delete_all
Trait.delete_all
DogActivity.delete_all
Activity.delete_all
Review.delete_all
Dog.delete_all
User.delete_all


PASSWORD = 'coffee'
created_at = Faker::Date.backward(days: 365 * 5)


Trait.create(name: 'Low Energy',)
Trait.create(name: 'High Energy')
Trait.create(name: 'Playful')
Trait.create(name: 'Rough')
Trait.create(name: 'Submissive')
Trait.create(name: 'Hyper')
Trait.create(name: 'Human Friendly')
Trait.create(name: 'Dog Friendly')
Trait.create(name: 'Small Dog Friendly')
Trait.create(name: 'Large Dog Friendly')
Trait.create(name: 'Prey Driven')
Trait.create(name: 'Sky')
Trait.create(name: 'Kid Friendly')
Trait.create(name: 'Affectionate')
Trait.create(name: 'Gentle')
Trait.create(name: 'Rough')

Activity.create(name:'Swimming')
Activity.create(name:'Hiking')
Activity.create(name:'Trail Walks')
Activity.create(name:'Dog Parks')
Activity.create(name:'Fetch')
Activity.create(name:'Chase')
Activity.create(name:'Camping')

traits = Trait.all
activities = Activity.all

amy = User.create(
    first_name: 'Amy',
    last_name: 'Oulton',
    bio: 'Hi, my name is Amy Oulton. I am 28 years old and I live in Surrey, BC. I have two active Boxers who really enjoy hiking and playing with other dogs. Some of my favourite places to hike are Golden Ears, Lighthouse Park and Minnekhada! My dogs do wonderful off leash, and I am looking for other people who might enjoy taking their dog on some offleash trail walks!',
    email: 'amyeoulton@gmail.com',
    password: PASSWORD,
    created_at: created_at,
    updated_at: created_at
)

amy.avatar.attach(
    io: File.open('./public/avatars/amy.jpg'),
    filename: 'amy.jpg',
    content_type:'application/jpg'
)

christie = User.create(
    first_name: 'Christie',
    last_name: 'Smith',
    bio: "Hello! I'm Christie and I live in Burnaby, BC. I love everything outdoors! I am interested in meeting new people and finding new activities I've never done before! Me and my partner Jim currently have one dog named Bowser who is a absolute nerd but e love him so much. We're hoping to find some new people who enjoy spending time in the outdoors so we can make some friends for ourselves and for Bowser!",
    email: 'csmith@gmail.com',
    password: PASSWORD,
    created_at: created_at,
    updated_at: created_at
)

christie.avatar.attach(
    io: File.open('./public/avatars/christie.jpg'),
    filename: 'christie.jpg',
    content_type:'application/jpg'
)

jen = User.create(
    first_name: 'Jen',
    last_name: 'Bate',
    bio: "Hey everyone. My name is Jen and I live in Langley, BC. While I'm mostly a cat lady I really am interested in starting to do some outdoor activities with my dog Riley! I don't have a ton of experience with going to different places so I'm very open to going anywhere and hope to meet some wonderful people and their pets!",
    email: 'jbate@gmail.com',
    password: PASSWORD,
    created_at: created_at,
    updated_at: created_at
)

jen.avatar.attach(
    io: File.open('./public/avatars/jen.jpg'),
    filename: 'jen.jpg',
    content_type:'application/jpg'
)

steph = User.create(
    first_name: 'Steph',
    last_name: 'Mitchell',
    bio: "Hey! My husband Mitchell and I are interested in meeting some people who like camping and exploring with their pets. We currently live in Vancouver, BC and we have a husky mix who is very active and very vocal, so we definitely are interested in finding someone who has a dog that will work well with him! We can't wait to hear from you and hope we can find someone who has a lot of mutual interests!",
    email: 'smitch@gmail.com',
    password: PASSWORD,
    created_at: created_at,
    updated_at: created_at
)

steph.avatar.attach(
    io: File.open('./public/avatars/steph.jpg'),
    filename: 'steph.jpg',
    content_type:'application/jpg'
)

tim = User.create(
    first_name: 'Tim',
    last_name: 'Maycock',
    bio: "My name is Tim and my wife's name is Joanne. We are currently residing on Vancouver Island but we get around to the mainland quite a bit and are happy to arrange to meet up with people there! We love all diferent activities and are very outdoorsy people, and are hoping to find people to go exploring with whose dog(s) will get along with our own. Contact me for more information!",
    email: 'tm@gmail.com',
    password: PASSWORD,
    created_at: created_at,
    updated_at: created_at
)

tim.avatar.attach(
    io: File.open('./public/avatars/tim.jpg'),
    filename: 'tim.jpg',
    content_type:'application/jpg'
)


river = Dog.create(
    name: 'River',
    breed: 'Boxer',
    sex: 'Female',
    age: 'Adult', 
    fixed: true,
    bio: "River is a wonderfully unique and friendly dog. She is incredibly happy, and loves people more than anything in the world. River gets along with dogs of any size and age, but since she is a boxer, she plays very rough. Any playmate of River is going to have to be tolerants of 'boxer punches' haha. River has had a knee surgery so while we do enjoy going for trails walks and hikes, it can't be anything too long distance. She also will go in water but she won't swim, so swimming is not really her forte! She's basically your classic boxer.",
    size: 'Medium',
    user: amy,
    created_at: created_at,
    updated_at: created_at
)


river.activities = activities.shuffle.slice(0, rand(activities.count))
river.traits = traits.shuffle.slice(0, rand(traits.count))

river.profile.attach(
    io: File.open('./public/image/river.jpg'),
    filename: 'river.jpg',
    content_type:'application/jpg'
)

dawson = Dog.create(
    name: 'Dawson',
    breed: 'Boxer',
    sex: 'Male',
    age: 'Senior', 
    fixed: true,
    bio: "Dawson is your classic goofy people. He loves people a lot of does really well with small dogs. He is an intense player when he gets going, as per his true boxer nature! While he is an older boy, you would never know it, because he can still go forever without getting tired! Dawson tends to have some issues with large male dogs, so we usually tend to avoid meeting up with them (sorru guys!). All in all, Dawson is a pretty loveable boy. He likes going to the park and hates water more than anything else in the entire world. He has an intense prey drive and will chase anything that moves. He has good recall though, so we are happy to go to offleash areas!",
    size: 'Medium',
    user: amy,
    created_at: created_at,
    updated_at: created_at
)

dawson.activities = activities.shuffle.slice(0, rand(activities.count))
dawson.traits = traits.shuffle.slice(0, rand(traits.count))

dawson.profile.attach(
    io: File.open('./public/image/dawson.jpg'),
    filename: 'dawson.jpg',
    content_type:'application/jpg'
)

bowser = Dog.create(
    name: 'Bowser',
    breed: 'Olde English Bulldog',
    sex: 'Male',
    age: 'Adult', 
    fixed: true,
    bio: "Bowser is an absolutely loveable boy! He's young and full of energy and some of his favourite activities include hiking and playing fetch. From all the experiences that we have had so far, Bowser has gotten along with all the other dogs he has been introduced to, and absolutely loves people as well! Bowser is hoping to meet some new friends that he can play ball with!",
    size: 'Medium',
    user: christie,
    created_at: created_at,
    updated_at: created_at
)

bowser.activities = activities.shuffle.slice(0, rand(activities.count))
bowser.traits = traits.shuffle.slice(0, rand(traits.count))

bowser.profile.attach(
    io: File.open('./public/image/bowser.jpg'),
    filename: 'bowser.jpg',
    content_type:'application/jpg'
)

bruno = Dog.create(
    name: 'Bruno',
    breed: 'Pitbull Mix',
    sex: 'Male',
    age: 'Adult', 
    fixed: true,
    bio: "Bruno is a super chill guy who just likes to have fun. He enjoys most outdoor activities, especially if they involve a good swim at the end. Bruno really likes going to the beach and will try to get pets from everyone he meets. Bruno also loves all other dogs, and they really bring out his crazy side. He's a big and active boy, so he needs playmates that can hold their own up to his rough play!",
    size: 'Large',
    user: tim,
    created_at: created_at,
    updated_at: created_at
)

bruno.activities = activities.shuffle.slice(0, rand(activities.count))
bruno.traits = traits.shuffle.slice(0, rand(traits.count))

bruno.profile.attach(
    io: File.open('./public/image/bruno.jpeg'),
    filename: 'bruno.jpeg',
    content_type:'application/jpeg'
)

percy = Dog.create(
    name: 'Percy',
    breed: 'Pug',
    sex: 'Male',
    age: 'Adult', 
    fixed: true,
    bio: "Percy is a classic sassy pug. He's a little tyrant and will try to boss everyone around, even though he is super small. His big brother Bruno lets him get away with everything so that's no help! Percy might be small in size, but he's big in heart and activity. He absolutely loves going for walks and can get up things his much larger brother struggles with. Because of Percy's sassy attitude he typically does well with more submissive dogs that can tolerate (or ignore) him when he decides enough is enough.",
    size: 'Small',
    user: tim,
    created_at: created_at,
    updated_at: created_at
)

percy.activities = activities.shuffle.slice(0, rand(activities.count))
percy.traits = traits.shuffle.slice(0, rand(traits.count))

percy.profile.attach(
    io: File.open('./public/image/percy.jpeg'),
    filename: 'percy.jpeg',
    content_type:'application/jpeg'
)

riley = Dog.create(
    name: 'Riley',
    breed: 'Shepherd Mix',
    sex: 'Female',
    age: 'Senior', 
    fixed: true,
    bio: "Riley is an older girl, but shes super sweet and loves all people. She can't do big hikes anymore, but does enjoy going for park walks and meeting new friends. We're looking for someone is also maybe a bit older and has a calmer energy, since she's past her prime for playing. But she still surprises us all so if you think your pup could be a good fit shoot me a message!",
    size: 'Large',
    user: jen,
    created_at: created_at,
    updated_at: created_at
)

riley.activities = activities.shuffle.slice(0, rand(activities.count))
riley.traits = traits.shuffle.slice(0, rand(traits.count))

riley.profile.attach(
    io: File.open('./public/image/riley.jpg'),
    filename: 'riley.jpg',
    content_type:'application/jpg'
)

skylar = Dog.create(
    name: 'Skylar',
    breed: 'Husky Mix',
    sex: 'Male',
    age: 'Senior', 
    fixed: true,
    bio: "Skylar is huge fan of swimming and being outside. He especially loves camping and is most at his element when he's somewhere in the woods. He's a bit of a troublemaker, as are most huskies, so he needs someone who can keep up with his troublesome nature! He tends to get along with most dogs and is really good with kids. The only weird thing about Skye is that he doesn't care at all about playing fetch, so if your dog is a ball dog, they'll be able to keep it all to themselves.",
    size: 'Large',
    user: steph,
    created_at: created_at,
    updated_at: created_at
)

skylar.activities = activities.shuffle.slice(0, rand(activities.count))
skylar.traits = traits.shuffle.slice(0, rand(traits.count))

skylar.profile.attach(
    io: File.open('./public/image/skye.jpg'),
    filename: 'skye.jpg',
    content_type:'application/jpg'
)

tucker = Dog.create(
    name: 'Tucker',
    breed: 'Nova Scotia Duck Toller',
    sex: 'Female',
    age: 'Young Adult', 
    fixed: true,
    bio: "Tucker is our newest edition and is just a year old. She is an absolute hamm and super loves swimming more than anything in the whole world. It's a lot of work to try to keep this dog out of water! Needless to say, she's a very high energy dog and would need some high energy counterparts to keep up with her. We're still working on her recall, so we prefer not to go to places with too many offleash dogs, and stick to more hidden trails and lakes!",
    size: 'Medium',
    user: steph,
    created_at: created_at,
    updated_at: created_at
)

tucker.activities = activities.shuffle.slice(0, rand(activities.count))
tucker.traits = traits.shuffle.slice(0, rand(traits.count))

tucker.profile.attach(
    io: File.open('./public/image/tucker.jpeg'),
    filename: 'tucker.jpeg',
    content_type:'application/jpeg'
)

users = User.all
dogs = Dog.all

puts Cowsay.say("Generated #{users.count} users", :ghostbusters)
puts Cowsay.say("Generated #{dogs.count} dogs", :kitty)
puts Cowsay.say("Generated #{traits.count} traits", :frogs)
puts Cowsay.say("Generated #{activities.count} activities", :tux)