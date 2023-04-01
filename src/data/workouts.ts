
export type Set = {
  exerciseId: number;
  alternates?: number[];
  setCountMin?: number;
  setCountMax?: number;
  repCountMin: number;
  repCountMax: number;
}

export type Session = {
  name: string;
  sets: Set[];
}

export type Workout = {
  id: number;
  name: string;
  frequency: string;
  time: string;
  description: string
  sessions: Session[];
  isCircuit: boolean;
}

export const workouts: Workout[] = [
  {
    id: 1,
    name: "20 Minute Better Body Workout",
    frequency: "3 Days Per Week (M-W-F)",
    time: "About 20 Minutes",
    description: "Start by performing one set of each exercise. Warm up with a light resistance that you can perform easily for 5 -10 reps without fatiguing. Focus on practicing and learning your technique before increasing the resistance. Then move to a more challenging resistance that you can perform no less than 10 reps and no more than 15 reps without your form deteriorating. As you become stronger, you can advance to two sets for each exercise. Complete all sets of each exercise before moving on to the next one. Rest 30 to 45 seconds between sets. Move slowly on each rep. Use a pace that would allow you to stop the movement instantly at any point in the rep. Count three seconds up and three seconds down and work to fatigue during each set.",
    isCircuit: false,
    sessions: [
      {
        name: "",
        sets: [
          {
            exerciseId: 1,
            alternates: [3, 4],
            setCountMin: 1,
            setCountMax: 2,
            repCountMin: 10,
            repCountMax: 15
          },
          {
            exerciseId: 31,
            alternates: [32],
            setCountMin: 1,
            setCountMax: 2,
            repCountMin: 10,
            repCountMax: 15
          },
          {
            exerciseId: 9,
            alternates: [10],
            setCountMin: 1,
            setCountMax: 2,
            repCountMin: 10,
            repCountMax: 15
          },
          {
            exerciseId: 52,
            alternates: [53, 54, 55, 57, 59],
            setCountMin: 1,
            setCountMax: 2,
            repCountMin: 10,
            repCountMax: 15
          },
          {
            exerciseId: 41,
            alternates: [42, 43],
            setCountMin: 1,
            setCountMax: 2,
            repCountMin: 10,
            repCountMax: 15
          },
          {
            exerciseId: 68,
            setCountMin: 1,
            setCountMax: 2,
            repCountMin: 10,
            repCountMax: 15
          },
          {
            exerciseId: 24,
            setCountMin: 1,
            setCountMax: 2,
            repCountMin: 10,
            repCountMax: 15
          },
          {
            exerciseId: 67,
            alternates: [66],
            setCountMin: 1,
            setCountMax: 2,
            repCountMin: 10,
            repCountMax: 15
          },
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Advanced General Conditioning",
    frequency: "4 Days Per Week (M-T-TH-F)",
    time: "About 35-45 Minutes",
    description: "When you are proficient in performing the exercise techniques of the above routine and are no longer realizing results, or have become just plain bored, it is time to change your program. You can increase your training with this “split system” routine that works opposing muscle groups on different days. To do this, you’ll increase your resistance when you can perform 12 reps perfectly, and you’ll increase your volume by performing more sets and more exercises. Move slowly on each rep. Use a pace that would allow you to stop the movement instantly at any point in the rep. Count three seconds up and three seconds down and work to fatigue during each set.",
    isCircuit: false,
    sessions: [
      {
        name: "Day 1 & 3",
        sets: [
          {
            exerciseId: 1,
            alternates: [3, 4],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 14,
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 41,
            alternates: [42, 43],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 52,
            alternates: [53, 54, 55, 57, 59],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 68,
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
        ]
      },
      {
        name: "Day 2 & 4",
        sets: [
          {
            exerciseId: 31,
            alternates: [32],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 39,
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 9,
            alternates: [10],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 52,
            alternates: [53, 54, 55, 57, 59],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 56,
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 24,
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
          {
            exerciseId: 67,
            alternates: [66],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 12
          },
        ]
      }
    ],
  },
  {
    id: 3,
    name: "20 Minute Upper/Lower Body",
    frequency: "4 Days Per Week (M-T-TH-F)",
    time: "About 20 Minutes",
    description: "This program provides you with a quick and effective workout that combines muscle conditioning with some cardiovascular benefits. Do this routine when you are limited in time or just want a variation to your normal routine. Perform this program training 2 days, resting 1 to 2. Perform all exercises to near failure, stopping at the point that your technique starts to deteriorate. Rest only 20-30 seconds between sets. As you get stronger, increase the number of sets you perform. Move slowly on each rep. Use a pace that would allow you to stop the movement instantly at any point in the rep. Count three seconds up and three seconds down.",
    isCircuit: false,
    sessions: [
      {
        name: "Day 1 & 3",
        sets: [

          {
            exerciseId: 1,
            alternates: [3, 4],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 12,
            repCountMax: 15
          },
          {
            exerciseId: 31,
            alternates: [32],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 12,
            repCountMax: 15
          },
          {
            exerciseId: 9,
            alternates: [10],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 12,
            repCountMax: 15
          },
          {
            exerciseId: 52,
            alternates: [53, 54, 55, 57, 59],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 12,
            repCountMax: 15
          },
          {
            exerciseId: 45,
            alternates: [46, 47],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 12,
            repCountMax: 15
          },
        ]
      },
      {
        name: "Day 2 & 4",
        sets: [

          {
            exerciseId: 68,
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 12,
            repCountMax: 15
          },
          {
            exerciseId: 70,
            alternates: [71],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 12,
            repCountMax: 15
          },
          {
            exerciseId: 77,
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 12,
            repCountMax: 15
          },
          {
            exerciseId: 24,
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 15
          },
          {
            exerciseId: 67,
            alternates: [66],
            setCountMin: 1,
            setCountMax: 3,
            repCountMin: 10,
            repCountMax: 15
          },
        ]
      }
    ],
  },
  {
    id: 4,
    name: "Body Building",
    frequency: "3 Days On, 1 Day Off",
    time: "About 45-60 Minutes",
    description: "Body building requires focused concentration and dedication to training, as well as proper eating habits. Train each muscle group to failure before moving on to the next exercise. Do not neglect any muscle group. If needed, include an aerobic activity to increase your caloric expenditure and help to reduce your body fat levels to achieve a defined muscular look. Rest 30-60 seconds between each set and exercise. Focus on proper form. Tighten the muscle before you move, squeeze the muscle as you move, cramp the muscle at the point of full contraction, and resist the movement as you lower the weight. Move slowly on each rep. Use a pace that would allow you to stop the movement instantly at any point in the rep. Count three seconds up and three seconds down and work to fatigue during each set.",
    isCircuit: false,
    sessions: [
      {
        name: "Day 1",
        sets: [
          {
            exerciseId: 1,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 2,
            alternates: [5, 6],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 14,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 9,
            alternates: [10],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 11,
            alternates: [12],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 18,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
        ]
      },
      {
        name: "Day 2",
        sets: [
          {
            exerciseId: 31,
            alternates: [32],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 39,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 52,
            alternates: [53, 54, 55, 57, 59],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 56,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 41,
            alternates: [42, 43],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 45,
            alternates: [46, 47],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
        ]
      },
      {
        name: "Day 3",
        sets: [
          {
            exerciseId: 69,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 68,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 70,
            alternates: [71],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 24,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 67,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 66,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
        ]
      }
    ],
  },
  {
    id: 5,
    name: "Circuit Training – Anaerobic/Cardiovascular",
    frequency: "2-3 Times Per Week",
    time: "About 20-45 Minutes",
    description: "Circuit training is a great way to achieve the benefits of strength training and cardiovascular training in one quick, challenging routine. The idea is to move quickly from exercise to exercise, taking only as much rest between sets as it takes to set up the next exercise (less than 20 seconds). One circuit equals one set of each exercise. Initially, start with completing one round of Circuit 1. Then add an additional round of the same circuit. Once you reach three rounds of Circuit 1, add one round of Circuit 2. Add additional rounds of Circuit 2 as your fitness level increases. Repeat process with Circuit 3. Do not let your heart rate exceed 220 minus your resting heart rate. Perform each rep of each exercise slowly and with perfect technique. Count three seconds up and three seconds down.",
    isCircuit: true,
    sessions: [],
  },
  {
    id: 6,
    name: "True Aerobic Circuit Training",
    frequency: "2-3 Times Per Week",
    time: "About 20-60 Minutes",
    description: "Circuit training is a great way to achieve the benefits of strength training and cardiovascular training in one quick, challenging routine. By returning to an aerobic exercise between each set you are increasing your aerobic capacity, endurance and burning fat as energy. The idea is to move quickly from exercise to exercise, taking only as much rest between sets as it takes to set up the next exercise (less than 20 seconds). One circuit equals one set of each exercise. Initially, start with completing one round of Circuit 1. Then add an additional round of the same circuit. Once you reach three rounds of Circuit 1, add one round of Circuit 2. Add additional rounds of Circuit 2 as your fitness level increases. Do not let your heart rate exceed 220 minus your resting heart rate. Perform each rep of each exercise slowly and with perfect technique. Count three seconds up and three seconds down.<br /><br />Any type of aerobic exercise can be used for this routine. Some examples are: jumping jacks, jogging in place or stair climbing.",
    isCircuit: true,
    sessions: [],
  },
  {
    id: 7,
    name: "Strength Training",
    frequency: "3 Days Per Week (M-W-F)",
    time: "About 45-60 Minutes",
    description: "This program is designed to emphasize overall strength development. This is an advanced routine to be used only after you have progressed from the advanced general conditioning routine and only after you have perfected your exercise techniques. Work each set to near exhaustion. If you can perform more than 5 to 8 reps, you should increase your resistance 5 pounds and decrease your reps to 5. Rest 60 – 120 seconds between each set and exercise. Focus on proper form. Tighten the muscle before you move, squeeze the muscle as you move, cramp the muscle at the point of full contraction, and resist the movement as you lower the weight. Move slowly on each rep. Use a pace that would allow you to stop the movement instantly at any point in the rep. Count two seconds up and four seconds down and work to fatigue during each set.",
    isCircuit: false,
    sessions: [
      {
        name: "Day 1",
        sets: [
          {
            exerciseId: 1,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 2,
            alternates: [5, 6],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 14,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 9,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 18,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
        ]
      },
      {
        name: "Day 2",
        sets: [
          {
            exerciseId: 31,
            alternates: [32],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 39,
            alternates: [40],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 52,
            alternates: [53, 54, 55, 57, 59],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 56,
            alternates: [58],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 41,
            alternates: [43],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 45,
            alternates: [46, 47],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
        ]
      },
      {
        name: "Day 3",
        sets: [
          {
            exerciseId: 69,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 68,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },
          {
            exerciseId: 24,
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 8,
            repCountMax: 12
          },
          {
            exerciseId: 67,
            alternates: [66],
            setCountMin: 2,
            setCountMax: 4,
            repCountMin: 5,
            repCountMax: 8
          },

        ]
      },
    ],
  }
]