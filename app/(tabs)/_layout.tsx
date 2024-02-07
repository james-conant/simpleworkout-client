import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Home", title: "Home" }}
      />
      <Tabs.Screen name="plans/index" options={{ href: null }} />
      <Tabs.Screen
        name="plans/[id]"
        options={{ headerTitle: "Workout Weeks", title: "Workout Week" }}
      />
      {/* <Tabs.Screen
        name="weeks/workout-weeks"
        options={{ headerTitle: "Workout Weeks", title: "Workout Weeks" }}
      /> */}
      {/* <Tabs.Screen
        name="workouts/[id]"
        options={{ headerTitle: "Exercises", title: "Exercises" }}
      /> */}
    </Tabs>
  );
};

export default TabsLayout;
